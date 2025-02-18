const fs = require('fs');
const puppeteer = require('puppeteer');
const birds = require('./src/common/birds.js');
const BASE_URL = "https://www.british-birdsongs.uk/";
const DELAY = 1500; // 1.5 seconds per request to avoid rate-limiting
const results = {};

function transformBirdName(birdName) {
    return birdName.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
}

async function fetchBirdAudio(birdName) {
    const transformedName = transformBirdName(birdName);
    const url = `${BASE_URL}${encodeURIComponent(transformedName)}`;
    console.log(`Fetching: ${url}`);

    const browser = await puppeteer.launch({ headless: false }); // Set to false to see what's happening
    const page = await browser.newPage();

    let audioFile = null;

    // Listen for the media request and capture the blob URL
    page.on('request', (request) => {
        if (request.resourceType() === 'media') {
            audioFile = request.url();
            console.log(`Captured audio URL: ${audioFile}`);
        }
    });

    try {
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Allow some time for the media request to be triggered
        await new Promise(resolve => setTimeout(resolve, 2500));

        if (audioFile) {
            results[birdName] = audioFile;
            console.log(`Found audio for ${birdName}: ${audioFile}`);
        } else {
            results[birdName] = 'NOT_FOUND';
            console.log(`No audio found for ${birdName}`);
        }
    } catch (error) {
        console.error(`Error fetching ${birdName}:`, error.message);
    }

    await browser.close();
}



async function processBirds() {
    const birdList = birds.listOfBirds();
    for (let i = 0; i < birdList.length; i++) {
        await new Promise(resolve => setTimeout(resolve, DELAY)); // Stagger requests
        await fetchBirdAudio(birdList[i]);
    }

    // Write results to a file
    fs.writeFileSync('bird_audio.json', JSON.stringify(results, null, 2));
    console.log('Results saved to bird_audio.json');
}

processBirds();