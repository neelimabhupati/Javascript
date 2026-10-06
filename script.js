let pokemonList = []; // Global variable
const dialog = document.getElementById('pokemonDialog');
let currentIndex = 0;

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
    // let typesHtml = getTypesHtml(char.types);
    if (!container) return;

    container.innerHTML = ''; // Clear container

    characters.forEach((char, index) => {
        let typesHtml = getTypesHtml(char.types);
        let primaryType = char.types[0].type.name;
        let name = char.name;
        let id = char.id;
        let imageUrl = char.sprites.other['official-artwork'].front_default;

        container.innerHTML += `
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
    });
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

function closePokemonDialog() {
    const dialog = document.getElementById('pokemonDialog');
    if (dialog) {
        dialog.close();
    }
}

// 👈 3. Next Button కోసం ఫంక్షన్
function showNextPokemon() {
    if (currentIndex < pokemonList.length - 1) {
        openPokemonDialog(currentIndex + 1);
    } else {
        openPokemonDialog(0); // చివరి పోకీమాన్ దాటితే మళ్లీ మొదటి దానికి వస్తుంది
    }
}

// 👈 4. Previous Button కోసం ఫంక్షన్
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

}

// 3. Initialise the task
async function init() {
    pokemonList = await fetchCharacters();
    renderCharacters(pokemonList);

    clickBackgroundClose();
}

