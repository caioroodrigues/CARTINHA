document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const heartsContainer = document.getElementById('hearts-container');
    const emojiBackground = document.querySelector('.emoji-background');
    let isOpen = false;
    
    const loveEmojis = ['❤️', '💕', '💖', '💗', '💘', '💙', '💚', '💛', '💜', '💝', '💞', '💟', '❣️', '💌', '🥰', '😍', '😘', '💋'];
    
    function createEmojiBackground() {
        let emojis = '';
        const emojiCount = 200;
        
        for (let i = 0; i < emojiCount; i++) {
            const randomEmoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
            const randomSize = Math.random() * 20 + 10;
            const randomTop = Math.random() * 100;
            const randomLeft = Math.random() * 100;
            const randomRotation = Math.random() * 360;
            const randomOpacity = Math.random() * 0.5 + 0.1;
            
            emojis += `<span style="
                position: absolute;
                top: ${randomTop}%;
                left: ${randomLeft}%;
                font-size: ${randomSize}px;
                transform: rotate(${randomRotation}deg);
                opacity: ${randomOpacity};
                animation: float ${Math.random() * 20 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            ">${randomEmoji}</span>`;
        }
        
        emojiBackground.innerHTML = emojis;
    }
    
    envelope.addEventListener('click', function() {
        isOpen = !isOpen;
        envelope.classList.toggle('open', isOpen);
        
        if (isOpen) {
            createHearts();
        }
    });    
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            e.preventDefault();
            envelope.click();
        }
    });
    
    createEmojiBackground();
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) rotate(0deg);
            }
            50% {
                transform: translateY(-20px) rotate(10deg);
            }
        }
    `;
    document.head.appendChild(style);
});

// Cria muitos corações de fundo
function createHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    const heartCount = 100; // Quantidade de corações
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        
        // Posição aleatória e atraso na animação
        heart.style.setProperty('--random-x', Math.random());
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        
        heartsContainer.appendChild(heart);
    }
}

// Abrir envelope com muitos corações
document.getElementById('envelope').addEventListener('click', function() {
    this.classList.toggle('open');
    
    // Cria os corações só quando abre
    if (this.classList.contains('open')) {
        createHearts();
    }
});