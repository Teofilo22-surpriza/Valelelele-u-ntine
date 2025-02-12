function createExplosion() {
    const explosionContainer = document.createElement('div');
    explosionContainer.classList.add('explosion');
    document.body.appendChild(explosionContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.left = Math.random() * 100 + 'px';
        particle.style.top = Math.random() * 100 + 'px';
        explosionContainer.appendChild(particle);
    }

    setTimeout(() => {
        document.body.removeChild(explosionContainer);
    }, 1000);
}

function accept() {
    const content = document.querySelector('.content');
    content.innerHTML = '<p class="heart">❤️❤️❤️</p><p>HIHI NU O SĂ O REGREȚI, MULTUMESC MULT DE TOT!</p>';
    document.body.style.backgroundColor = "#ffcccc";
    const heart = document.querySelector('.heart');
    heart.style.animation = 'heart-float 1s infinite';
    createExplosion();
}

function moveButton() {
    const button = document.getElementById('runAway');
    const x = Math.random() * (window.innerWidth - button.clientWidth);
    const y = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.position = 'absolute';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

document.addEventListener("DOMContentLoaded", function() {
    const heartContainer = document.getElementById('fallingHearts');
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement('div');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = 3 + Math.random() * 2 + 's';
        heartContainer.appendChild(heart);
    }
});
