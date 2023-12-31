document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("toggle-switch");

    toggleSwitch.addEventListener("change", function () {
        if (toggleSwitch.checked) {
            // Aktiviert: Dark Mode einschalten
            enableDarkMode();
        } else {
            // Deaktiviert: Dark Mode ausschalten
            disableDarkMode();
        }
    });

    // Überprüfen, ob der Dark Mode gespeichert ist
    if (localStorage.getItem("darkModeEnabled") === "true") {
        enableDarkMode();
        toggleSwitch.checked = true;
    }
});

function enableDarkMode() {
    // Dark Mode aktivieren
    document.body.classList.add("dark-mode");
    // Den Dark-Modus-Status speichern
    localStorage.setItem("darkModeEnabled", "true");
}

function disableDarkMode() {
    // Dark Mode deaktivieren
    document.body.classList.remove("dark-mode");
    // Den Dark-Modus-Status speichern
    localStorage.setItem("darkModeEnabled", "false");
}

// Funktion zum automatischen Öffnen des Tors nach einer Verzögerung
function openDoors() {
    const leftDoor = document.querySelector('.left-door');
    const rightDoor = document.querySelector('.right-door');
    const overlay = document.querySelector('.overlay-container');
  
    leftDoor.style.transform = 'translateX(-100%)'; // Linkes Tor öffnet sich
    rightDoor.style.transform = 'translateX(100%)'; // Rechtes Tor öffnet sich
  
    // Nach dem Öffnen der Tore das Overlay ausblenden
    setTimeout(function () {
      overlay.style.display = 'none';
    }, 2000); // Ändere die Zeit in Millisekunden nach Bedarf
  }
  
  // Nach einer Verzögerung die Tore öffnen
  setTimeout(openDoors, 2000); // Ändere die Zeit in Millisekunden nach Bedarf
  

  
  
  
  
  
  
  