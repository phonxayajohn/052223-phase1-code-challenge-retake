const api = 'http://localhost:3000/characters'

fetch(api)
    .then(res => res.json())
    .then(renderCharacters)

function renderCharacters(characters) {
    characters.forEach(renderNames)
}

function renderNames(character) {
    const characterNames = document.createElement('span')
    characterNames.innerText = character.name

    document.getElementById('character-bar').append(characterNames)

    characterNames.addEventListener('click', () => characterDetails(character))
}

function characterDetails(character) {
    const name = document.getElementById('name')
    const image = document.getElementById('image')
    const totalVotes = document.getElementById('vote-count')
    
    name.textContent = character.name
    image.src = character.image
    image.alt = character.name
    totalVotes.textContent = character.votes
    
    const formElement = document.getElementById('votes-form')
    formElement.addEventListener('submit', (event) => {
        event.preventDefault()
        character.votes++;
        totalVotes.textContent = character.votes
    })
}



