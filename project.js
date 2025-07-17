function searchAction() {
  let keyword = document.querySelector("#kyeword").value;
  let resultBox = document.querySelector("#result");
  resultBox.textContent = "「" + keyword + "」で検索しました";
}
let b = document.querySelector("button");
b.addEventListener("click", searchAction);