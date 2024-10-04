const express = require('express');
const { exec } = require('child_process');
const app = express();
const PORT = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Endpoint to launch the emulator
app.get('/launch-emulator', (req, res) => {
    exec('emulator -avd Your_AVD_Name', (error, stdout, stderr) => {
        if (error) {
            return res.send(`Error: ${error.message}`);
        }
        if (stderr) {
            return res.send(`Stderr: ${stderr}`);
        }
        res.send(stdout);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});