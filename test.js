import getMetaData from 'metadata-scraper';
//const getMetaData = require('metadata-scraper');

const url = 'https://facebook.com';

async function displayStuff() {
    let finalUrl = document.getElementById('url').value;

    const data = await getMetaData(finalUrl)
    console.log(data)
}

document.querySelector('#button').addEventListener('click', displayStuff);

