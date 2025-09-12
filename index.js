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
            <p>Natürlich dient dieser Test zur reinen Unterhaltung und bietet darüber hinaus keinen wissenschaftlichen oder technischen Mehrwert. Aber ich glaube das muss es auch nicht. Manchmal muss man als Designstudent einfach wissen, welche Geschmackssorte man von seinem Lieblings-koffeinhaltigen-Getränk wäre.</p>
            <a href="https://github.com/hbk-bs/teachable-machine-nicolesophiebelger" target="_blank">Github Repository</a>
            <br>
            <div class="project-screenshots">
                <img src="assets/images/project images/Welche Clubmate bist du.png" alt="Screenshot 1">
                <img src="assets/images/project images/ICE TEA!.png" alt="Screenshot 2">
            </div>
            <br>
        `
    },
    'nature-of-code': {
        title: 'Nature of Code',
        content: `
            <h3>Projekt: Nature of Code</h3>
            <p>Bei diesem Projekt sollten wir uns an von Phänomenen aus der Natur orientieren un basierend darauf ein Bewegbild erzeugen..</p>
            <p>Mein Bewegbild handelt von dem Prozess, bei dem Regentropfen auf eine Fensterscheibe fallen und letztendlich aufgrund der Dichte und Gravitionskraft die Scheibe runterprasseln. Zugunsten meines gewählten Layouts für die Dokumentation habe ich das ganze Bewegbild in einem Pixel-Style bearbeitet. <br>
            Während der Bearbeitung traf ich auf viele Momente in denen ich nicht wusste wie ich meine Visionen umsetzen kann. Dabei hat mir vorallem Gemini geholfen und mich unterstützt, sowie die vorgegeben Wegweiser meines Dozenten. Die wichtigste Erkenntnis, die ich aus diesem Projekt mitgenommen habe, ist die Wichtigkeit eines soliden Grundverständnis der physikalischen und mathematischen Prinzipien. Letztendlich zeigte mir das Projekt die Kraft, Beobachtung, grundlegendes Wissen und kollaborative Werkzeuge zu kombinieren, um ein komplexes kreatives Ergebnis zu erzielen, selbst wenn man vor Herausforderungen steht, die man nicht vollständig allein lösen kann.</p>
            <a href="https://github.com/hbk-bs/nature-of-code-nicolesophiebelger" target="_blank">Github Repository</a>
            <br><br>
            <div class="project-screenshots">
                <img src="assets/images/project images/Screenshot 2025-09-11 193323.png" alt="Screenshot 1">
                
            </div>
            <br<
        `
    },
    'large-language-model': {
        title: 'LMM',
        content: `
            <h3>Projekt: Large Language Model</h3>
            <p>Hier war es Aufgabe mithilfe von künstlicher Intelligenz, Valtown und AGI's ein Large Language Model zu kreieren. Im Vordergrund steht also eine API, die auf Kommando etwas generiert.</p>
            <p>Das Projekt war ziemlich frei und grenzenlos. Einzige Vorgabe war, keinen weiteren ChatBot zu kreieren. Ich habe mich daher (wie auch andere Kommilitonen) an das Storytelling gewagt. Allerdings mit einem kleinen Twist. Ich habe ein Fable für RPG's und kombiniere gerne Leidenschaften mit meiner Arbeit. Daher kam ich zu dem Entschluss ein Storytelling-Spielsimulator im Retrostil zu programmieren. Um es noch ein wenig spannender zu machen, entschied ich mich für das Setting eines ersten Dates. Das soll die Geschichte alltagstauglicher, nachvollziehbarer und gleichzeitig ungewöhnlicher machen.</p>
            <a href="https://github.com/hbk-bs/text-the-universal-interface-nicolesophiebelger" target="_blank">Github Repository</a>
            <br><br>
            <div class="project-screenshots">
                <img src="assets/images/project images/First Date.png" alt="Screenshot 1">
                <img src="assets/images/project images/How it works.png" alt="Screenshot 2">
            </div>
            <br>
        `
    },
    'graphic-ai-novel': {
        title: 'Graphic AI Novel',
        content: `
            <h3>Projekt: Graphic AI Novel</h3>
            <p>Bei dem letzten großen Projekt war es unsere Aufgabe ein digitales Bilderbuch mit Text zu gestalten. Dafür sollten wir allerdings die Bilder vollkommen von einem uns frei zu wählenden KI-Bildgenerierungsprogramm erstellen lassen. Meine Gruppe (bestehend aus Fine, Nastie und Maddy) hatte sich ziemlich schnell für das Programm Midjourney entschieden, welches zwar kostspielig war, jedoch trotzdem vielversprechende Tools und Möglichkeiten bot. </p>
            <p>Bei unserer Geschichte geht es um das Wahrzeichen Braunschweigs, dem Löwen. Zu Beginn waren wir uns nämlich alle einig: Wir würden gerne einen Bezug zu Braunschweig schaffen. In der Geschichte geht es im übrigen darum, dass die Löwenstatue am Burgplatz zum Leben erweckt wird und durch das gegenwärtige Braunschweig schlendert. Die Geschichte ist selbstständig erarbeitet worden und dann über einen ChatBot zu einem Gedicht umgeneriert worden. Der Stil der Sprache und des Layouts ist gewollt altertümlich gewählt, um die Langjährigkeit der Geschichte des Braunschweiger Löwen zu untermauern.
            <br>
            Selbstverständlich sind wir bei der Bildgenerierung auf Schwierigkeiten gestoßen, da die KI nicht wirklich immer verstanden hat was wir genau brauchen. Oft sahen Bilder daher nicht durchgängig gleich aus oder konnten so durchgesetzt werden wie in unseren Visionen, aber letztendlich hat es dennoch unserer Meinung nach gut funktioniert. Gleichzeitig hat es mich auch ein wenig gefreut, dass die Technik trotz der Innovationen doch noch viele Dinge missversteht, welche ein Designer oder Künstler vermutlich besser machen würde. Dadurch habe ich das Gefühl, dass am Ende die KI den Designer oder Künstler vielleicht doch nicht so gut ersetzen kann wie man immer sagt.</p>
            <a href="https://github.com/hbk-bs/a-generative-graphic-novel-finima" target="_blank">Github Repository</a>
            <br><br>
            <div class="project-screenshots">
                <img src="assets/images/project images/LION.png">
            </div>
            <br>
        `
    },
    'general-reflection': {
        title: 'General Reflection',
        content: `
            <h3>General Reflection</h3>
            <p>Wie die zwei Semester des Grundkurses "Digitale Kommunikation" liefen und was ich dabei lernte.</p>
            <p>Vor einem Jahr hätte ich niemals gedacht, dass ich sagen kann, dass ich einen eigenen Flirt Simulator RPG coden oder eine KI trainieren kann. Durch die vergangenen zwei Semester habe ich eine Menge über das Programmieren gelernt. Wir haben nicht nur an digitalen Projekten gearbeitet und unter anderem mit KI gewerkelt, sondern auch physische und analoge Objekte mit Technik und Elektrik zum Leben erweckt. Ich kann definitiv mit erhobenem Blick zurücksehen und sagen, dass es am Ende sehr Spaß gemacht hat.
            Natürlich war es etwas frustrierend, wenn mal etwas nicht geklappt hat, aber man geht ja bekanntlich durch jedes Abenteuer mit Höhen und Tiefen. Ich möchte mich vor allem bei Fabian Morón Zirfas für seine Geduld und Aufopferung bedanken. Durch seine Ambition und Motivation fürs Coden hat er uns ein Stück seiner Passion viel näher gebracht. Ich könnte jetzt eine Liste nennen der Dinge die ich gelernt habe, aber das lässt sich auch einfach anhand der Dinge demonstrieren, die ich in den 2 Semestern erschuf und die persönliche Entwicklung der Projekte. <br>
            Während sich das erste Semester auf grundlegende Konzepte konzentrierte, ging es in diesem Semester darum, neue und komplexe Technologien zu integrieren, insbesondere verschiedene Formen der künstlichen Intelligenz. Die Projekte – darunter ein generative Novel, ein Storytelling-First Date Simulator und eine mit KI trainierte Teachable Machine-Anwendung – waren weitaus anspruchsvoller, aber die Möglichkeit, mit diesen Tools zu arbeiten, ermöglichte es mir, in einem viel schnelleren Tempo zu lernen und zu arbeiten.

<br> Ein Teil meines Lernprozesses bestand darin, das Prompting von Large Language Models (LLMs) zu lernen. Anfangs war ich mir unsicher, wie spezifisch meine Anweisungen sein mussten, was oft zu generischen oder wenig hilfreichen Ergebnissen führte. Ich lernte schnell, Prompts präzise zu formulieren und den LLMs ein klares Verständnis des gewünschten Ergebnisses zu vermitteln. Ich erkannte, dass eine KI ist nur so effektiv ist, wie die Anweisungen die sie bekommt.

<br>
Insgesamt fand ich die Projekte persönlich viel ansprechender und faszinierender und genoss die Arbeit daran sehr. Selbstverständlich waren sie anspruchsvoller, doch durch die Möglichkeit der Nutzung von Künstlicher Intelligenz als Unterstützung, hatte ich das Gefühl, dass ich dadurch mit dem Ergebnis der Projekte zufriedener war und mich nicht so begrenzt gefühlt.</p>
        `
    },

'debate-club': {
        title: 'Debate Club',
        content: `
            <h3>Debate Club</h3>
            <p>Als Mitglied des AGI-Debattierclubs hatte unser Team die Aufgabe, eine starke Argumentation gegen die Entwicklung von Künstlicher Allgemeiner Intelligenz (AGI) aufzubauen. Unser Hauptziel war es, zu zeigen, dass die Risiken von AGI weit über die bloße Technologie hinausgehen und eine ernste Bedrohung für unsere Gesellschaft und unsere ethischen Grundprinzipien darstellen.</p>
            <p>Unsere Argumentation basierte auf drei Grundelemente. Das wirtschaftliche Risiko: AGI könnte viele menschliche Arbeitsplätze überflüssig machen, was zu weit verbreiteter Arbeitslosigkeit und einer instabilen Wirtschaft führen würde. Das ethische Risiko: AGI hat keinen moralischen Kompass. Ihre Fähigkeit, logische, aber völlig amoralische Entscheidungen zu treffen, könnte verheerende Folgen für das menschliche Wohl haben. Und das Missbrauchsrisiko: AGI könnte von böswilligen Personen missbraucht werden oder durch einfache Fahrlässigkeit eine Gefahr darstellen. Wir haben auch das größere Problem der schnellen Entwicklung von AGI und den enormen Energie- und Ressourcenverbrauch angesprochen.

<br> Die Realität zeigt, dass wir diese Probleme bereits bei den heutigen großen Sprachmodellen (LLMs) sehen – von der Verbreitung von Fehlinformationen bis hin zur Förderung kognitiver Faulheit. Die größte Herausforderung ist daher, dass diese frühen Warnungen oft ignoriert werden, was uns daran hindert, jetzt zu handeln.
<br>
Am Ende gab es in der Debatte keinen klaren Gewinner, was wirklich zeigt, wie komplex dieses Thema ist. Die Tatsache, dass es kein eindeutiges Fazit gab, beweist, dass die Diskussion über die Zukunft von AGI noch lange nicht abgeschlossen ist.</p>
  <a href="https://github.com/hbk-bs/documentation-2025-nicolesophiebelger/blob/main/assets/AGI-komprimiert.pdf" target="_blank">Keynote</a>
            <br><br>      `
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