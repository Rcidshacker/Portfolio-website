// script.js

// The base URL for your backend API.
// When you deploy your backend, you will replace this with your live backend URL.
const API_BASE_URL = 'http://127.0.0.1:8000';

/**
 * Smooth scrolling for navigation links.
 * This function adds a click event listener to all anchor tags with an href starting with '#'.
 * When clicked, it smoothly scrolls to the corresponding element.
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/**
 * Handles the contact form submission.
 * It validates the form, sends the data to the backend, and displays a confirmation message.
 */
const contactForm = document.querySelector('.needs-validation');
if (contactForm) {
    contactForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (contactForm.checkValidity()) {
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch(`${API_BASE_URL}/api/contact`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const confirmationPopup = document.getElementById('confirmation-popup');
                if (response.ok) {
                    if (confirmationPopup) {
                        confirmationPopup.textContent = 'Message sent successfully!';
                        confirmationPopup.classList.add('show', 'success');
                    }
                    contactForm.reset();
                    contactForm.classList.remove('was-validated');
                } else {
                    if (confirmationPopup) {
                        confirmationPopup.textContent = 'Failed to send message.';
                        confirmationPopup.classList.add('show', 'error');
                    }
                }
                if (confirmationPopup) {
                    setTimeout(() => {
                        confirmationPopup.classList.remove('show', 'success', 'error');
                    }, 3000);
                }
            } catch (error) {
                console.error('Error sending message:', error);
                const confirmationPopup = document.getElementById('confirmation-popup');
                if (confirmationPopup) {
                    confirmationPopup.textContent = 'An error occurred.';
                    confirmationPopup.classList.add('show', 'error');
                    setTimeout(() => {
                        confirmationPopup.classList.remove('show', 'error');
                    }, 3000);
                }
            }
        }

        contactForm.classList.add('was-validated');
    });
}

/**
 * Adds a scroll-to-top button to the page.
 * The button appears when the user scrolls down and smoothly scrolls to the top when clicked.
 */
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '&uarr;';
scrollTopBtn.id = 'scrollTopBtn';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/**
 * Creates and animates a dot grid background effect.
 * The dots react to the mouse movement, creating a glowing effect.
 */
const dotGridContainer = document.getElementById('dot-grid-container');
if (dotGridContainer) {
    const dotSize = 4;
    const gap = 20;
    let dots = [];
    let mouse = { x: -1000, y: -1000 };

    function createDotGrid() {
        dotGridContainer.innerHTML = '';
        dots = [];
        const containerWidth = window.innerWidth;
        const containerHeight = document.body.scrollHeight;
        const columns = Math.floor(containerWidth / (dotSize + gap));
        const rows = Math.floor(containerHeight / (dotSize + gap));

        dotGridContainer.style.setProperty('--columns', columns);
        dotGridContainer.style.setProperty('--rows', rows);

        for (let i = 0; i < columns * rows; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dotGridContainer.appendChild(dot);
            dots.push(dot);
        }
    }

    window.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function animateDots() {
        dots.forEach(dot => {
            const dotRect = dot.getBoundingClientRect();
            const dotX = dotRect.left + dotRect.width / 2;
            const dotY = dotRect.top + dotRect.height / 2;
            const distance = Math.sqrt(Math.pow(mouse.x - dotX, 2) + Math.pow(mouse.y - dotY, 2));

            const maxDistance = 250;
            const opacity = Math.pow(Math.max(0, 1 - distance / maxDistance), 2);
            
            dot.style.backgroundColor = `rgba(110, 68, 255, ${opacity})`;
            dot.style.boxShadow = `0 0 ${opacity * 15}px rgba(110, 68, 255, ${opacity * 0.7})`;
        });
        requestAnimationFrame(animateDots);
    }

    window.addEventListener('resize', createDotGrid);
    createDotGrid();
    animateDots();
}

/**
 * Creates a typewriter effect for the main heading.
 */
const typewriterHeading = document.getElementById('typewriter-heading');
if (typewriterHeading) {
    const text = "Hi, I'm Ruchit Das";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typewriterHeading.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            typewriterHeading.classList.add('typing-done');
        }
    }
    typeWriter();
}

/**
 * Adds a glowing border effect to skill cards on mousemove.
 */
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

/**
 * Fetches and displays GitHub projects from the backend API.
 */
async function fetchProjects() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/projects`);
        const projects = await response.json();
        const projectsContainer = document.querySelector('.project-cards');
        if (projectsContainer) {
            projectsContainer.innerHTML = '';

            projects.forEach((project, index) => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('col');
                projectCard.innerHTML = `
                    <div class="card h-100 project-card project-card-${index + 1}">
                        <span class="project-letter">${String.fromCharCode(65 + index)}</span>
                        <div class="card-content">
                            <h3 class="card-title mb-2">${project.name}</h3>
                            <p class="card-text mb-3 flex-grow-1">${project.description || ''}</p>
                            <div class="d-flex flex-wrap gap-2 mb-3">
                                ${Object.keys(project.languages).map(lang => `<span class="badge bg-primary">${lang}</span>`).join('')}
                            </div>
                            <div class="d-flex justify-content-between mt-auto">
                                <a href="${project.html_url}" target="_blank" class="card-link text-primary fw-medium">GitHub &rarr;</a>
                            </div>
                        </div>
                    </div>
                `;
                projectsContainer.appendChild(projectCard);
            });
        }
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

fetchProjects();

/**
 * Animates the floating dock navigation menu.
 * Items in the dock scale up when the mouse hovers over them.
 */
const dock = document.querySelector('.floating-dock');
const dockItems = document.querySelectorAll('.dock-item');

if (dock && dockItems.length > 0) {
    dockItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    dock.addEventListener('mousemove', e => {
        const dockRect = dock.getBoundingClientRect();
        const mouseX = e.clientX - dockRect.left;

        dockItems.forEach(item => {
            const itemRect = item.getBoundingClientRect();
            const itemX = itemRect.left + itemRect.width / 2 - dockRect.left;
            const distance = Math.abs(mouseX - itemX);

            const maxDistance = 100;
            const scale = Math.max(1, (1.5 - distance / maxDistance * 0.5));

            item.style.transform = `scale(${scale}) translateY(${(scale - 1) * -10}px)`;
        });
    });

    dock.addEventListener('mouseleave', () => {
        dockItems.forEach(item => {
            item.style.transform = 'scale(1) translateY(0)';
        });
    });
}
