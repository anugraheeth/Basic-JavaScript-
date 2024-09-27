const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');
const starsContainer = document.getElementById('stars');

const colors = {
    1: '#ff4545',  // Red
    2: '#ffa534',  // Orange
    3: '#ffe234',  // Yellow
    4: '#b7dd29',  // Light green
    5: '#57e32c'   // Green
};

let selectedRating = 0;

function updateStars(rating, hover = false) {
    stars.forEach((star, index) => {
        if (stars.length - index <= rating) {
            star.style.color = hover ? colors[rating] : (selectedRating > 0 ? colors[selectedRating] : '#ffffff');
        } else {
            star.style.color = '#ffffff';
        }
    });
}

stars.forEach((star) => {
    star.addEventListener('click', () => {
        selectedRating = parseInt(star.getAttribute('data-value'));
        ratingValue.textContent = `You rated: ${selectedRating} star${selectedRating > 1 ? 's' : ''}`;
        updateStars(selectedRating);
    });

    star.addEventListener('mouseover', () => {
        const value = parseInt(star.getAttribute('data-value'));
        updateStars(value, true);
    });

    star.addEventListener('mouseout', () => {
        updateStars(selectedRating);
    });
});