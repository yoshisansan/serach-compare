chrome.runtime.onMessage.addListener(function(searchKey) {
  window.getKeyword = (callback) => {
    console.log('hello');
    const duckResults = duckduckGo(searchKey)
    callback(duckResults)
  }
});

const duckduckGo = (keyword) => {
  const client = require('cheerio-httpcli');
  const targetURL = 'http://duckduckgo.com/html';

  client.fetch(targetURL, { q: keyword })
    .then((result) => {
        result.$('#links').each(function (idx, elm) {
　　　　　　　console.log( result.$(this).find('h2').text() );
        });
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('done');
    });
}