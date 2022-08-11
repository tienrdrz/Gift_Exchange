import getMetaData from 'metadata-scraper';
// const getMetaData = require('metadata-scraper');

const url = 'https://facebook.com';

async function displayStuff() {
    let finalUrl = document.getElementById('url').value;
    console.log('hii')

    const data = await getMetaData(url)
    console.log(data)
}

displayStuff();

document.querySelector('#button').addEventListener('click', displayStuff);

