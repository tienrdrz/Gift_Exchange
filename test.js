const getMetaData = require('metadata-scraper');

const url = 'https://www.amazon.ca/dp/B00F2C31AM/';

getMetaData(url).then((data) => {
	console.log(data)
})