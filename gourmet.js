
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  const shops = data.results.shop; // 店舗の配列を取得

  for (let shop of shops) {
    console.log("店名: ", shop.name);
    console.log("住所: ", shop.address);
    console.log("キャッチコピー: ", shop.catch)
    console.log("アクセス: ", shop.access);
    console.log("予算: ", shop.budget.average);
    console.log("ジャンル: ", shop.genre.name);
    console.log("サブジャンル: ", shop.sub_genre.name);
    console.log("URL: ", shop.urls.pc);
    console.log("------");
  }
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let shops = data.results.shop;
  let old = document.querySelector("#result");
    if (old) {
      old.remove();
    }
    let div = document.createElement("div");
  div.id = "result";
  document.body.insertAdjacentElement("beforeend", div);

  for (let shop of shops) {
    let ul = document.createElement("ul");

    
    let Name = document.createElement("li");
    Name.textContent = "店名: " + shop.name;
    ul.insertAdjacentElement("beforeend", Name);

    let Address = document.createElement("li");
    Address.textContent = "住所: " + shop.address;
    ul.insertAdjacentElement("beforeend", Address);

    let Catch = document.createElement("li");
    Catch.textContent = "キャッチコピー: " + shop.catch;
    ul.insertAdjacentElement("beforeend", Catch);

    let Access = document.createElement("li");
    Access.textContent = "アクセス: " + shop.access;
    ul.insertAdjacentElement("beforeend", Access);

    let Budget = document.createElement("li");
    Budget.textContent = "予算: " + shop.budget.name;
    ul.insertAdjacentElement("beforeend", Budget);

    let Genre = document.createElement("li");
    Genre.textContent = "ジャンル: " + shop.genre.name;
    ul.insertAdjacentElement("beforeend", Genre);

    let Subgenre = document.createElement("li");
    Subgenre.textContent = "サブジャンル: " + shop.sub_genre.name;
    ul.insertAdjacentElement("beforeend", Subgenre);

    let Open = document.createElement("li");
    Open.textContent = "営業時間: " + shop.open;
    ul.insertAdjacentElement("beforeend", Open);

    let Station = document.createElement("li");
    Station.textContent = "最寄駅: " + shop.station_name;
    ul.insertAdjacentElement("beforeend", Station);

    div.insertAdjacentElement("beforeend", ul);
  }
}


// 課題6-1 のイベントハンドラ登録処理は以下に記述

let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let input = document.querySelector('#keyword');
  let keyword = input.value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+ keyword +'.json';

  // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    print(data);
    printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
