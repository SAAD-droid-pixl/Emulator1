document.getElementById('launchEmulator').addEventListener('click', function() {
    fetch('/launch-emulator')
        .then(response => response.text())
        .then(output => {
            document.getElementById('output').innerText = output;
        })
        .catch(error => {
            document.getElementById('output').innerText = 'Error launching emulator: ' + error;
        });
});