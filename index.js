const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');
const chalk = require('chalk');

const pageToVisit = 'http://www.dailymail.co.uk/home/index.html';

console.log(chalk.green('Visiting page:'), pageToVisit);

request(pageToVisit, (error, response, body) => {
  if (error) {
    console.log(chalk.red('Error:', error));
  }
  if (response.statusCode === !200) {
    console.log(chalk.red('Status code:'), response.statusCode);
  }
  if (response.statusCode === 200) {
    console.log(chalk.green('Status code:'), response.statusCode);
    const $ = cheerio.load(body);
    console.log(chalk.blue('Page Title:'), $('title').text());
    // console.log('Response Header:', response.headers)
    console.log('Other Header:', response.request.header);
    if (response.headers['set-cookie']) {
      console.log(chalk.green('Contains cookie'));
    } else {
      console.log(chalk.red('No cookie'));
    }
  }
});

//http://as.casalemedia.com/cygnus
