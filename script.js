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

    characters.forEach((char) => {
        let typesHtml = getTypesHtml(char.types);
        let primaryType = char.types[0].type.name;
        let name = char.name;
        let id = char.id;
        let imageUrl = char.sprites.other['official-artwork'].front_default;

        container.innerHTML += `
            <button class="character-card" data-id="${id}"
                aria-label="Open ${name} details">
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
            </button>
        `;
    });
}

// 3. Initialise the task
async function init() {
    let characters = await fetchCharacters();
    renderCharacters(characters);
}

// App execution
init();