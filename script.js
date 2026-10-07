let pokemonList = []; // Global variable
const dialog = document.getElementById('pokemonDialog');
let currentIndex = 0;
// Sequence ni track cheయడానికి global variable
let currentOffset = 0;

// 1. Fetching only 5 Pokemon details
async function fetchCharacters() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=11');
    let characters = await response.json();

    console.log("Full Object:", characters);
    // Fetch details for all 5 pokemons
    let details = await Promise.all(
        characters.results.map(p => fetch(p.url).then(res => res.json()))
    );

    return details;
}

// Types list నుండి HTML badges తయారు చేసే హెల్పర్ ఫంక్షన్
function getTypesHtml(types) {
    return types.map(t => {
        let typeName = t.type.name;
        return `<span class="type-badge bg-${typeName}"></span>`;
    }).join('');
}


// 2. Display the 5 Pokemon cards on HTML
function renderCharacters(characters) {
    let container = document.getElementById('character-container');
    if (!container)
        return;
    container.innerHTML = ''; // Clear container
    characters.forEach((char, index) => {
        container.innerHTML += createCharacterCardHTML(char, index);
    });
}

function createCharacterCardHTML(char, index) {

    let typesHtml = getTypesHtml(char.types);
    let primaryType = char.types[0].type.name;
    let name = char.name;
    let id = char.id;
    let imageUrl = char.sprites.other['official-artwork'].front_default;

    return `
                <div class="character-card" data-id="${id}" 
                    aria-label="Open ${name} details" onclick="openPokemonDialog(${index})">
                    <div class="card-header">
                        <span> ID: ${id}</span>
                        <h3 style="text-transform: capitalize;">${name}</h3>
                    </div>
                    <div class="card-img-wrapper bg-${primaryType}" >
                        <img data-id="card-image" src="${imageUrl}" alt="${name}">
                    </div>

                    <div class="card-types">
                    ${typesHtml}
                    </div>
                </div>
            `;
}

function openPokemonDialog(index) {
    currentIndex = index;
    let pokemon = pokemonList[index];

    // getElementById తో Name & Image మార్చడం
    document.getElementById('dialogName').textContent = pokemon.name;
    document.getElementById('dialogImage').src = pokemon.sprites.other['official-artwork'].front_default;

    renderPokemonDetails(pokemon);

    // 4. ప్రతీసారి మోడల్ ఓపెన్ చేసినప్పుడు మొదట 'main' ట్యాబ్ యాక్టివ్‌గా ఉండటానికి
    switchTab('tab-main', 'btn-main');

    if (dialog) {
        dialog.showModal();
    } else {
        console.error("not found pokomon id in html!");
    }
}

// Evolution Chain ని Fetch చేసి స్క్రీన్ మీద రెంత్ చేసే ఫంక్షన్
async function renderEvolutionChain(pokemon) {
    const evoContainer = document.getElementById('evoContainer');
    evoContainer.innerHTML = 'Loading evolution...';

    try {
        // 1. Pokémon Species API ద్వారా evolution_chain URL ని తెచ్చుకుంటున్నాం
        let speciesResponse = await fetch(pokemon.species.url);
        let speciesData = await speciesResponse.json();

        // 2. Evolution Chain API ని Fetch చేస్తున్నాం
        let evoResponse = await fetch(speciesData.evolution_chain.url);
        let evoData = await evoResponse.json();
        let evoChainNames = extractEvoNames(evoData.chain);

        let evoHtmlArray = await Promise.all(
            evoChainNames.map((name, i) => createEvoItemHTML(name, i === evoChainNames.length - 1))
        );

        evoContainer.innerHTML = evoHtmlArray.join('');

    } catch (error) {
        console.error("Evolution data error", error);
        evoContainer.innerHTML = 'Evolution details unavailable';
    }
}

function extractEvoNames(chain) {
    let evoChainNames = [];
    let currentChain = chain;
    while (currentChain) {
        evoChainNames.push(currentChain.species.name);
        currentChain = currentChain.evolves_to[0];
    }
    return evoChainNames;
}

async function createEvoItemHTML(pokeName, isLast) {
    let pokeDetails = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    let pokeResonse = await pokeDetails.json();
    let imgUrl = pokeResonse.sprites.other['official-artwork'].front_default;

    let arrow = isLast ? '' : `<div class="evo-arrow">≫</div>`;

    return `
        <div class="evo-item">
            <img src="${imgUrl}" alt="${pokeName}">
            <p style="text-transform: capitalize;">${pokeName}</p>
        </div>
        ${arrow}
    `;
}

function closePokemonDialog() {
    const dialog = document.getElementById('pokemonDialog');
    if (dialog) {
        dialog.close();
    }
}

// 3. Next Button కోసం ఫంక్షన్
function showNextPokemon() {
    if (currentIndex < pokemonList.length - 1) {
        openPokemonDialog(currentIndex + 1);
    } else {
        openPokemonDialog(0); // చివరి పోకీమాన్ దాటితే మళ్లీ మొదటి దానికి వస్తుంది
    }
}

//  4. Previous Button కోసం ఫంక్షన్
function showPrevPokemon() {
    if (currentIndex > 0) {
        openPokemonDialog(currentIndex - 1);
    } else {
        openPokemonDialog(pokemonList.length - 1); // మొదటి దాంట్లో ఉన్నప్పుడు నొక్కితే చివరి దానికి వెళ్తుంది
    }
}

function clickBackgroundClose() {
    const dialogElement = document.getElementById('pokemonDialog');

    if (dialogElement) {
        dialogElement.addEventListener('click', function (event) {
            // Click chesindi exact ga dialog background paina aithe close chestham
            if (event.target === dialogElement) {
                dialogElement.close();
            }
        });
    }
}

function switchTab(activeTabId, activeBtnId) {
    const allContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < allContents.length; i++) {
        allContents[i].style.display = 'none';
    }

    // 2. Anni buttons nunchi 'active' highlight class teeseyadam
    const allButtons = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('active');
    }

    // 3. Click chesina tab ni matrame show cheyadam
    document.getElementById(activeTabId).style.display = 'block';

    // 4. Click chesina button ki 'active' class add cheyadam
    document.getElementById(activeBtnId).classList.add('active');
}

function renderPokemonDetails(pokemon) {

    if (!pokemon) {
        console.error("Pokemon data is undefined!");
        return;
    }

    // 1. Main Tab Inner Text Data fill cheyadam
    document.getElementById('pokeHeight').textContent = (pokemon.height / 10) + " m";
    document.getElementById('pokeWeight').textContent = (pokemon.weight / 10) + " kg";
    document.getElementById('pokeExp').textContent = pokemon.base_experience;

    // Abilities list ni comma separated string ga marchadam
    let abilityNames = pokemon.abilities.map(a => a.ability.name).join(', ');
    document.getElementById('pokeAbilities').textContent = abilityNames;


    // 2. Stats Tab Dynamic Content Build cheyadam
    let statsHtml = '';
    for (let i = 0; i < pokemon.stats.length; i++) {
        let stat = pokemon.stats[i];
        statsHtml += `
            <div class="stat-row">
                <span class="stat-title">${stat.stat.name}</span>
                <div class="stat-bar-bg">
                    <div class="stat-bar-fill" style="width: ${Math.min(stat.base_stat, 100)}%;"></div>
                </div>
            </div>
        `;
    }
    document.getElementById('statsContainer').innerHTML = statsHtml;

    // 3.  Evolution Chain ని ఇక్కడ కాల్ చేయాలి
    renderEvolutionChain(pokemon);
}



// Line ga (Sequence lo) Pokemon fetch chese function
async function fetchSequentialPokemon(count) {
    try {
        // Line ga next batch ni fetch చేయడం (limit = count, offset = currentOffset)
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}&offset=${currentOffset}`);
        let data = await response.json();

        // ప్రతీ Pokémon వివరాలను తెచ్చుకుని pokemonList లోకి పంపడం
        for (let i = 0; i < data.results.length; i++) {
            let detailRes = await fetch(data.results[i].url);
            let detailData = await detailRes.json();
            pokemonList.push(detailData);
        }

        // తదుపరి batch కోసం offset ని పెంచడం
        currentOffset += count;

        // UI లో cards ని render చేయడం
        renderCharacters(pokemonList);

    } catch (error) {
        console.error("Error fetching sequential pokemon:", error);
    }
}

// Button click handler
async function loadMorePokemon() {
    let amountInput = document.getElementById('loadAmountInput');
    let amount = parseInt(amountInput.value);

    console.log("Before Fetch - Offset:", currentOffset, "List Length:", pokemonList.length);

    if (amount > 0) {
        await fetchSequentialPokemon(amount);
    }

    console.log("After Fetch - Offset:", currentOffset, "List Length:", pokemonList.length);
}

async function searchPokemon() {
    let searchInput = document.getElementById('searchInput');
    let query = searchInput.value.trim().toLowerCase();

    // 1. Query khaleega unna leda 3 letters kante thakkuva unna, complete list ni chupistham
    if (query.length < 3) {
        renderCharacters(pokemonList);
        return;
    }

    // Elements ni mundhe get-element-by-id dwara techukovali
    let loadMoreBtn = document.getElementById('loadMoreBtn');
    let loadAmountInput = document.getElementById('loadAmountInput');
    let homeBtn = document.getElementById('homeBtn');


    // Helper function: Search State lo loadMoreBtn/Input hide chesi Home Page button chupistham
    function showSearchUI() {
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        if (loadAmountInput) loadAmountInput.style.display = 'none';
        if (homeBtn) homeBtn.style.display = 'inline-block';
    }

    // 2. Minimum 3 letters unte match ayye Pokemon ni filter chestham
    let filteredList = pokemonList.filter(pokemon => {
        let nameMatch = pokemon.name.toLowerCase().includes(query);
        let idMatch = pokemon.id.toString() === query;
        return nameMatch || idMatch;
    });

    // 3. Local list lo matches unte rendering
    if (filteredList.length > 0) {
        showSearchUI();
        renderCharacters(filteredList);
    } else {
        // 4. Local list lo lekapothe direct API nunchi fetch cheyadam
        try {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
            if (!response.ok)
                throw new Error("Data Not found");

            let pokemonData = await response.json();

            renderCharacters([pokemonData]);
            showSearchUI(); // API dwara card dhorikina Home button chupistham
        } catch (error) {
            let container = document.getElementById('character-container');
            container.innerHTML = `<p class="no-results">No Pokémon found for "${query}"</p>`;

            // Result దొరకనప్పుడు: Input field & Load More దాచి, Home Page Button ని చూపించడం
            showSearchUI();
        }
    }
}

function resetHome() {
    let searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }

    let loadMoreBtn = document.getElementById('loadMoreBtn');
    let loadAmountInput = document.getElementById('loadAmountInput');
    let homeBtn = document.getElementById('homeBtn');

    // UI Input / Load More లని మళ్లీ చూపించి Home Button ని దాచడం
    if (loadMoreBtn) loadMoreBtn.style.display = 'inline-block';
    if (loadAmountInput) loadAmountInput.style.display = 'inline-block';
    if (homeBtn) homeBtn.style.display = 'none';

    // Original pokemonList ని రెంత్ చేయడం
    renderCharacters(pokemonList);

}


// 3. Initialise the task
async function init() {
    pokemonList = [];  // Clean start
    currentOffset = 0; // Reset offset to 0

    // Input box లో ఎంత నంబర్ ఉంటే (ఉదాహరణకు 11 లేదా 5) అన్ని కార్డ్స్ వరుసగా లోడ్ అవుతాయి
    let initialCount = parseInt(document.getElementById('loadAmountInput').value) || 11;

    await fetchSequentialPokemon(initialCount);

    clickBackgroundClose();
}
