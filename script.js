document.addEventListener('DOMContentLoaded', function() {
    const clickButton = document.getElementById('clickButton');
    const revealImage = document.getElementById('revealImage');
    
    function handleClick() {
        clickButton.style.animation = 'none';
        clickButton.classList.remove('show');
        clickButton.classList.add('hide');
        
        setTimeout(() => {
            revealImage.classList.add('show');
        }, 300);
        
        document.title = "Image Revealed!";
    }
    
    clickButton.addEventListener('click', handleClick);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && revealImage.classList.contains('show')) {
            revealImage.classList.remove('show');
            clickButton.classList.remove('hide');
            clickButton.classList.add('show');
            document.title = "Image Reveal App";
        }
    });
});