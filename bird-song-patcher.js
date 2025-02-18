const fs = require('fs');
const path = require('path');

// Import birds.js (since it exports the data)
const birds = require('./src/common/birds.js');
const patchFilePath = path.join(__dirname, 'bird_audio.json');

if (!fs.existsSync(patchFilePath)) {
    console.error("❌ Error: bird_audio.json not found in", __dirname);
    process.exit(1);
}
// Import bird-audio.json
const patchData = JSON.parse(fs.readFileSync(patchFilePath, 'utf8'));

// Apply the patch
Object.keys(birds.data).forEach(birdName => {
    if (patchData[birdName] && patchData[birdName] !== "NOT_FOUND") {
        birds.data[birdName].audio = patchData[birdName]; // Update audio URL
    }
});

// Save the modified file in the same directory
const outputFilePath = path.join(__dirname, 'birds-2.js');
const newBirdsJsContent = `const birds = ${JSON.stringify(birds, null, 4)};\n\nmodule.exports = birds;`;

fs.writeFileSync(outputFilePath, newBirdsJsContent, 'utf8');

console.log("✅ birds-2.js has been updated with new audio URLs in the current directory!");
