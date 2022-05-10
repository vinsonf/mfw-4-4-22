cards = document.querySelectorAll('.projects li');
pTag = document.querySelector('p');

console.log(cards);

cards.forEach(function(card) {
    card.addEventListener('click', function() {
        card.classList.add('active');
        pTag.innerHTML = card.dataset.project;

        fetch('http://pokeapi.co/api/v2/pokemon/pikachu')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const img = document.createElement('img');
            img.src = data.sprites.front_default;
            img.style.width = '200px';
            card.append(img);
            document.querySelector('.modal').classList.remove('hidden');
        })
    });
    card.addEventListener('mouseleave', function() {
        card.classList.remove('active');
    })
});