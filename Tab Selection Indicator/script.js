const options = document.querySelectorAll('.option');
const slider = document.querySelector('.slider');

options.forEach(option => {
    option.addEventListener('click', () => {
        options.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        const optionNumber = option.getAttribute('data-option');
        slider.style.left = `${(optionNumber - 1) * 33.33}%`;
    });
});
