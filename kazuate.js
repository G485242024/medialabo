// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;


// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#Button');
b.addEventListener('clik',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {

  let input = document.querySelector('#textBox').value;
  let yoso = parseInt(input,10);
  
  let kaisuSpan = document.querySelector("#kaisu");
  let answerSpan = document.querySelector("#answer");
  let result = document.querySelector("#result");

  kaisuSpan.textContent = kaisu;
  answerSpan.textContent = yoso;
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  console.log(kaisu + "回目の予想: " + yoso);
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