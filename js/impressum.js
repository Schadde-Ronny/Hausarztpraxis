document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("toggle-switchone");

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
