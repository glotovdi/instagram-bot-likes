// let textarea = document.querySelector("#textarea");
// let button = (document.querySelector("#button").onclick = function() {
//   console.log(textarea.value.split("\n"));
// });

function openAndPush(url, id) {
  var win = window.open("https://www.google.com");
  setTimeout(function() {
    win.document.body.appendChild(element);
    console.log("New script appended!");
  }, 10000);
}
