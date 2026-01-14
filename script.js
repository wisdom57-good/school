document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for header shapes
    const header = document.querySelector('header');
    const shapes = document.querySelectorAll('.shape');

    header.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
            const yOffset = (window.innerHeight / 2 - e.clientY) / speed;
            
            shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // Add click ripple effect to cards (optional fun touch)
    const cards = document.querySelectorAll('.menu-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.zIndex = '5';
        });
        card.addEventListener('mouseleave', () => {
             setTimeout(() => { card.style.zIndex = '1'; }, 300);
        });
    });
});
