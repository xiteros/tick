/* eslint-disable no-console */
const { colours } = require('leeks.js');
const figlet = require('figlet');
const link = require('terminal-link');

module.exports = version => {
	figlet
		.textSync('Discord', { font: 'Banner3' })
		.split('\n')
		.forEach(line => console.log(colours.cyan(line)));
	console.log('');
	figlet
		.textSync('Tickets', { font: 'Banner3' })
		.split('\n')
		.forEach(line => console.log(colours.cyan(line)));
	console.log('');
	console.log(colours.cyanBright(`${link('CJ Tickets')} bot v${version}`));
	console.log('\n');
};
