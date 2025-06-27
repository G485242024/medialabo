// ボタンを取得
let b = document.querySelector('button#print');

// イベントハンドラを登録
b.addEventListener('click', greeting);

// 関数 greeting の定義
function greeting() {
  // 入力された氏名を取得
  let i = document.querySelector('input[name="shimei"]');
  let shimei = i.value;

  // 挨拶文を作成
  let aisatsu = "こんにちは，" + shimei + "さん";

  // ページ上の p 要素に表示
  let p = document.querySelector('p#message');
  p.textContent = aisatsu;
}
