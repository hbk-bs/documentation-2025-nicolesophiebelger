// Funktion zur Aktualisierung der Uhrzeit
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('current-time').textContent = timeString;
}

// Projekte-Daten: HTML-Inhalt für jedes Fenster
const projects = {
    'teachable-machine': {
        title: 'Teachable Machine',
        content: `
            <h3>Projekt: Teachable Machine</h3>
            <p>Hier beschreibe ich mein Projekt Teachable Machine und zeige Bilder oder Links dazu.</p>
            <p>Das ist ein Beispielinhalt.</p>
            <img src="./assets/project-images/teachable-machine-screenshot.jpg" alt="Screenshot Teachable Machine">
        `
    },
    'nature-of-code': {
        title: 'Nature of Code',
        content: `
            <h3>Projekt: Nature of Code</h3>
            <p>Beschreibung des Nature of Code Projekts.</p>
            <p>Hier können Links zu Code-Beispielen oder GIFs stehen.</p>
        `
    },
    'large-language-model': {
        title: 'Large Language Model',
        content: `
            <h3>Projekt: Large Language Model</h3>
            <p>Details zu meinem Large Language Model Projekt.</p>
            <p>Ich erkläre, was ich gemacht habe und was die Ergebnisse sind.</p>
        `
    },
    'graphic-ai-novel': {
        title: 'Graphic AI Novel',
        content: `
            <h3>Projekt: Graphic AI Novel</h3>
            <p>Inhalt über die Graphic AI Novel.</p>
            <p>Hier präsentiere ich die visuelle Arbeit und den kreativen Prozess.</p>
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
    windowDiv.className = 'window-container';
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
}

// Uhrzeit beim Laden der Seite initialisieren
updateClock();
// Uhrzeit alle 60 Sekunden aktualisieren
setInterval(updateClock, 60000);