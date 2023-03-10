export default function handleBurger() {
    let hamburger = document.querySelector('.hamburger');
    let navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            if(navLinks) { navLinks.classList.toggle('expanded'); }
        });
    }
}
