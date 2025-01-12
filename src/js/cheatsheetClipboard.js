const $cheatStatementBtn = document.querySelectorAll(".cheatsheet-clipboard-btn");

function toast() {
  const $csToastClipBoard = document.querySelector("#toastClipBoard");

  $csToastClipBoard.classList.contains("reveal") ?
      (clearTimeout(removeToast), removeToast = setTimeout(function () {
        $csToastClipBoard.classList.remove("reveal")
      }, 1000)) :
      removeToast = setTimeout(function () {
        $csToastClipBoard.classList.remove("reveal")
      }, 1000)
      $csToastClipBoard.classList.add("reveal")
}

$cheatStatementBtn.forEach(button => {
  button.addEventListener("click", () => {
    if(button.nextElementSibling.classList.contains("cheatsheet-sql")){
      window.navigator.clipboard
      .writeText(button.nextElementSibling.innerText)
      .then(() => {
        toast();
      });
    };
  });
});

