const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const sound = new Audio(key.dataset.sound); 
        sound.play(); 
    });
});

