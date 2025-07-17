//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

function show() {
  
  let addr = campus.address; 
  let p = document.createElement("p");
  p.textContent = addr;
  let addr2 = document.querySelector("h2#addr");
  addr2.insertAdjacentElement("afterend", p);

  let ul = document.createElement("ul");

  let li1 = document.createElement("li");
  let label1 = gakka[0].name;
  li1.textContent = label1;
  ul.insertAdjacentElement("beforeend", li1);

  let li2 = document.createElement("li");
  let label2 = gakka[1].name;
  li2.textContent = label2;
  ul.insertAdjacentElement("beforeend", li2);

  let li3 = document.createElement("li");
  let label3 = gakka[2].name;
  li3.textContent = label3;
  ul.insertAdjacentElement("beforeend", li3);

  let li4 = document.createElement("li");
  let label4 = gakka[3].name;
  li4.textContent = label4;
  ul.insertAdjacentElement("beforeend", li4);

  let dept2 = document.querySelector("h2#dept");
  dept2.insertAdjacentElement("afterend", ul);
}

let b = document.getElementById("show");
b.addEventListener("click", show);