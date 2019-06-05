// let textarea = document.querySelector("#textarea");
// let button = (document.querySelector("#button").onclick = function() {
//   console.log(textarea.value.split("\n"));
// });

function openAndPush(url) {
    var win = window.open(url);
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.innerText = "var button = document.querySelector('.dCJp8');button.click();window.close()";
    setTimeout(function() {
        win.document.body.appendChild(script);

        console.log('script');
    }, 4000);
}
