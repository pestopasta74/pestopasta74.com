// Menu System
function toggleMenu() {
    const menu = document.getElementById('menu');
    const backdrop = document.querySelector('.menu-backdrop');
    const isMobile = window.innerWidth < 768;

    menu.classList.toggle('show');
    backdrop.classList.toggle('show');

    if (isMobile) {
        document.body.classList.toggle('no-scroll');
    }
}

// Dynamic Cursor Effects
function initCursorEffects() {
    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'cursor-trail';
    document.body.appendChild(cursorTrail);

    document.addEventListener('mousemove', (e) => {
        cursorTrail.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
}

// Project Modal System
function initProjectModals() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'project-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <h3>${card.querySelector('h3').textContent}</h3>
                    ${card.querySelector('p').outerHTML}
                    <button class="modal-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
                </div>
            `;
            document.body.appendChild(modal);
        });
    });
}

// Responsive Helper
function checkScreenSize() {
    const menu = document.getElementById('menu');
    if (window.innerWidth >= 768) {
        menu.style.display = 'flex';
        document.body.classList.remove('no-scroll');
    } else {
        menu.style.display = 'none';
    }
}

// Initialize Everything
window.addEventListener('DOMContentLoaded', () => {
    checkScreenSize();
    initCursorEffects();
    initProjectModals();
});

window.addEventListener('resize', checkScreenSize);