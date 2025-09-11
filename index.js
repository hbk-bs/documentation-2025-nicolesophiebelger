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
            <h3>Projekt: Teachable Machine: Welche Clubmate bist du?</h3>
            <p>Bei diesem Projekt war es Aufgabe eine KI zu trainieren. Ich habe mich dabei für einein spielerischen Gag entschieden, der dir anhand deines Outfits und Aussehens sagt, welche der vorgegeben Clubmate-Geschmackssorten man wäre.</p>
            <p>Das ist ein Beispielinhalt.</p>
            <a href="https://hbk-bs.github.io/teachable-machine-nicolesophiebelger/" target="_blank">zum Projekt</a>
            <br><br>
        `
    },
    'nature-of-code': {
        title: 'Nature of Code',
        content: `
            <h3>Projekt: Nature of Code</h3>
            <p>Beschreibung des Nature of Code Projekts.</p>
            <p>Hier können Links zu Code-Beispielen oder GIFs stehen.</p>
            <a href="https://hbk-bs.io/nature-of-code-nicolesophiebelger/" target="_blank">zum Projekt</a>
            <br><br>
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
        `
    },
    'general-reflection': {
        title: 'General Reflection',
        content: `
            <h3>General Reflection</h3>
            <p>Wie die zwei Semester des Grundkurses "Digitale Kommunikation" liefen und was ich dabei lernte.</p>
            <p>Vor einem Jahr hätte ich niemals gedacht, dass ich sagen kann, dass ich einen eigenen Flirt Simulator RPG coden oder eine KI trainieren kann. Durch die vergangenen zwei Semester habe ich eine Menge über das Programmieren gelernt. Wir haben nicht nur an digitalen Projekten gearbeitet und unter anderem mit KI gewerkelt, sondern auch physische und analoge Objekte mit Technik und Elektrik zum Leben erweckt. Ich kann definitiv mit erhobenem Blick zurücksehen und sagen, dass es am Ende sehr Spaß gemacht hat.
            Natürlich war es etwas frustrierend, wenn mal etwas nicht geklappt hat, aber man geht ja bekanntlich durch jedes Abenteuer mit Höhen und Tiefen. Ich möchte mich vor allem bei Fabian Morón Diaz für seine Geduld und Aufopferung bedanken. Durch seine Ambition und Motivation fürs Coden hat er uns ein Stück seiner Passion viel näher gebracht. Ich könnte jetzt eine Liste nennen der Dinge die ich gelernt habe, aber das lässt sich auch einfach anhand der Dinge demonstrieren, die ich in den 2 Semestern erschuf und die persönliche Entwicklung der Projekte.</p>
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

// Start-Menü Logik
const startButton = document.querySelector('.start-btn');
const startMenu = document.getElementById('start-menu');

startButton.addEventListener('click', () => {
    startMenu.classList.toggle('hidden');
});

// Funktion zum Erstellen eines Fensters
function createWindow(projectName) {
    const projectData = projects[projectName];
    const windowArea = document.getElementById('window-area');

    if (document.getElementById(`window-${projectName}`)) {
        return;
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

    // Schließen-Funktionalität
    windowDiv.querySelector('.close-btn').addEventListener('click', () => {
        windowDiv.remove();
    });

    // Drag & Drop Funktionalität für Fenster
    const header = windowDiv.querySelector('.window-header');
    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - windowDiv.getBoundingClientRect().left;
        offsetY = e.clientY - windowDiv.getBoundingClientRect().top;
        windowDiv.style.cursor = 'move';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        windowDiv.style.left = (e.clientX - offsetX) + 'px';
        windowDiv.style.top = (e.clientY - offsetY) + 'px';
        windowDiv.style.transform = 'translate(0, 0)';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        windowDiv.style.cursor = 'default';
    });
}

// Uhrzeit beim Laden der Seite initialisieren
updateClock();
// Uhrzeit alle 60 Sekunden aktualisieren
setInterval(updateClock, 60000);