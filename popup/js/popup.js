chrome.runtime.getBackgroundPage(function(bg) {
  bg.getKeyword(resultData => {
    console.log(resultData);
    // getDuckDuck(resultData);
  });
});

// function getMessage(data){
//   document.body.innerHTML = data;
// }