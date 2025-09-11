// Funktion zur Aktualisierung der Uhrzeit
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('current-time').textContent = timeString;
}

// Projekte-Daten: Hier fügst du die Links und Inhalte ein
const projects = {
    'teachable-machine': {
        title: 'Teachable Machine',
        content: `
            <h3>Projekt: Teachable Machine</h3>
            <p>Hier beschreibe ich mein Projekt Teachable Machine und zeige Bilder oder Links dazu.</p>
            <p>Das ist ein Beispielinhalt.</p>
            <a href="https://hbk-bs.github.io/teachable-machine-nicolesophiebelger/" target="_blank">zum Projekt</a>
            <br><br>
            <img src="./assets/project-images/teachable-machine-screenshot.jpg" alt="Screenshot Teachable Machine">
        `
    },
    'nature-of-code': {
        title: 'Nature of Code',
        content: `
            <h3>Projekt: Nature of Code</h3>
            <p>Beschreibung des Nature of Code Projekts.</p>
            <p>Hier können Links zu Code-Beispielen oder GIFs stehen.</p>
            <a href="https://hbk-bs.github.io/nature-of-code-nicolesophiebelger/" target="_blank">zum Projekt</a>
            <br><br>
            <img src="./assets/project-images/nature-of-code-screenshot.jpg" alt="Screenshot Nature of Code">
        `
    },
    'large-language-model': {
        title: 'LMM',
        content: `
            <h3>Projekt: Large Language Model</h3>
            <p>Details zu meinem Large Language Model Projekt.</p>
            <p>Ich erkläre, was ich gemacht habe und was die Ergebnisse sind.</p>
            <a href="https://hbk-bs.github.io/text-the-universal-interface-nicolesophiebelger/" target="_blank">zum Projekt</a>
            <br><br>
            <img src="./assets/project-images/llm-screenshot.jpg" alt="Screenshot Large Language Model">
        `
    },
    'graphic-ai-novel': {
        title: 'Graphic AI Novel',
        content: `
            <h3>Projekt: Graphic AI Novel</h3>
            <p>Inhalt über die Graphic AI Novel.</p>
            <p>Hier präsentiere ich die visuelle Arbeit und den kreativen Prozess.</p>
            <a href="https://hbk-bs.github.io/a-generative-graphic-novel-finima/" target="_blank">zum Projekt</a>
            <br><br>
            <img src="./assets/project-images/ai-novel-screenshot.jpg" alt="Screenshot Graphic AI Novel">
        `
    }
};

// Event-Listener für das Öffnen der Fenster
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const projectName = icon.dataset.project;
        if (projects[projectName]) {
            createWindow(projectName);
        }
    });
});

// Funktion zum Erstellen eines Fensters
function createWindow(projectName) {
    const projectData = projects[projectName];
    const windowArea = document.getElementById('window-area');

    // Überprüfen, ob das Fenster bereits offen ist
    if (document.getElementById(`window-${projectName}`)) {
        return; // Fenster ist schon offen, nichts tun
    }

    const windowDiv = document.createElement('div');
    windowDiv.className = 'window-container'; // Nutzt unsere eigenen Klassen
    windowDiv.id = `window-${projectName}`;
    windowDiv.innerHTML = `
        <div class="window-header">
            <span class="window-title">${projectData.title}</span>
            <div class="window-controls">
                <button class="minimize-btn"></button>
                <button class="maximize-btn"></button>
                <button class="close-btn"></button>
            </div>
        </div>
        <div class="window-content">
            ${projectData.content}
        </div>
    `;

    windowArea.appendChild(windowDiv);

    // Schließen-Funktionalität hinzufügen
    windowDiv.querySelector('.close-btn').addEventListener('click', () => {
        windowDiv.remove();
    });

    // Drag & Drop Funktionalität (einfache Implementierung)
    let isDragging = false;
    let offsetX, offsetY;

    const header = windowDiv.querySelector('.window-header');
    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - windowDiv.getBoundingClientRect().left;
        offsetY = e.clientY - windowDiv.getBoundingClientRect().top;
        windowDiv.style.cursor = 'move'; // Mauszeiger auf 'move' ändern
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        windowDiv.style.left = (e.clientX - offsetX) + 'px';
        windowDiv.style.top = (e.clientY - offsetY) + 'px';
        // Verhindern, dass das Fenster aus dem Sichtbereich verschwindet (optional)
        windowDiv.style.transform = 'translate(0, 0)'; // Transform zurücksetzen für absolute Positionierung
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        windowDiv.style.cursor = 'default'; // Mauszeiger zurücksetzen
    });
}

// Uhrzeit beim Laden der Seite initialisieren
updateClock();
// Uhrzeit alle 60 Sekunden aktualisieren
setInterval(updateClock, 60000);