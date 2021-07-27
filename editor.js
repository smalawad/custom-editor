function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;

  document.body.onkeyup = function() {
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
  };
}

compile();

// const first = document.querySelector(".first");
// const iframe = document.querySelector("iframe");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   var html = first.textContent;
//   iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
// });


// first.addEventListener('keyup',()=>{
//   var html = first.textContent;
//   iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
// })

// first.addEventListener("paste", function(e) {
//         e.preventDefault();
//         var text = e.clipboardData.getData("text/plain");
//         document.execCommand("insertText", false, text);
//     });