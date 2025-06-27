// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;


// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector("#button");
b.addEventListener("click",hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {

  let k = document.querySelector("#kaisu");
  k.textContent = kaisu;

  let input = document.querySelector("#kaito").value;
  let yoso = parseInt(input, 10);
  
  let ans = document.querySelector("#answer");
  ans.textContent = yoso;

  let result = document.querySelector("#result");

  if (kaisu >= 4) {
    result.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
  } else if (yoso === kotae) {
    result.textContent = "正解です．おめでとう!";
    kaisu = 4; // ゲーム終了のため強制的に4に
  } else if (kaisu === 3) {
    result.textContent = "まちがい．残念でした答えは " + kotae + " です．";
  } else if (yoso < kotae) {
    result.textContent = "まちがい．答えはもっと大きいですよ";
  } else if (yoso > kotae) {
    result.textContent = "まちがい．答えはもっと小さいですよ";
  }
  kaisu++;
}