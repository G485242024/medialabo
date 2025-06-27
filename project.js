function searchAction() {
  let keyword = document.querySelector("#search-word").value;
  let resultBox = document.querySelector("#search-result");
  resultBox.textContent = "「" + keyword + "」で検索しました";
}

// 別の行でイベントを登録（文が切れてる！）
document.querySelector("#search-button").addEventListener("click", searchAction);
