const searchKey = document.querySelector("#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input").value;

if(searchKey && searchKey !== 'null') {
  chrome.runtime.sendMessage(
  { testData : searchKey }
  );
}


// const url = `https://www.google.com/search?q=これはテストです`;
// const response = await request(url);
// if (response.status != 200) {
//   break;
// }
// console.log(response);
