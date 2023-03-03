window.addEventListener("load", init);
function init() {
    const list = [
        { szemszin: "barna", kor: 20, tesok: 2, nev: "Peti", mondat: "A kedd!" },
        { szemszin: "barna", kor: 23, tesok: 2, nev: "Gergo", mondat: "A kedd masodszor!"},
        { szemszin: "barna", kor: 20, tesok: 2, nev: "Niki", mondat: "Délelőtt kint játszottam a kutyussal" },
        { szemszin: "kék", kor: 20, tesok: 2, nev: "Asztrik", mondat: "Kedden, mert ott nem történt semmi." },
        { szemszin: "barna", kor: 20, tesok: 3, nev: "GergőT", mondat: "Kedd a legjóbb nap." },
        { szemszin: "barna", kor: 20, tesok: 2, nev: "Sanyi", mondat: "Tegnap sikerült időben megoldani a java feladatot."},
        { szemszin: "zöld", kor: 20, tesok: 2, nev: "Márton", mondat: "Nem volt angol hétfőn" },
        { szemszin: "barna", kor: 20, tesok: 2, nev: "Dominik", mondat: "Kedd, mert a szölőben a kistraktorral tevékenykedtem."},
        { szemszin: "barna", kor: 21, tesok: 2, nev: "Marci", mondat: "Ha gyenge vagy akkor legalább ne sírj" },
        { szemszin: "kék", kor: 20, tesok: 4, nev: "Bence", mondat: "Pillanat türelmet kérek javítom a mikrofont." }];
  
  megjelTab(list);
}

function megjelenitList(list) {
    const MAIN = document.querySelector("main");
    let htmlkod = "";
    for (let i = 0; i < list.length; i++) {
      htmlkod += `<div> <h2>${list[i].nev}</h2> <p>${list[i].mondat}</p> <div>`;
    }
    MAIN.innerHTML += htmlkod;
  }

function megjelenit() {
  const MAIN = document.querySelector("main");
  let htmlkod = "";
  for (let i = 0; i < list.length; i++) {
    htmlkod += `<div> <h2>${list[i].nev}</h2> <p>${list[i].mondat}</p> <div>`;
  }
  MAIN.innerHTML += htmlkod;
}

function megjelTab(list) {
    const art = document.querySelector("article");
    const atlagkor = atlag(list);
    let tab = `<table>
    <tbody>`;
    for (let i = 0; i < list.length; i++) {
      tab += `<tr>
      <td>${list[i].nev}</td>
      <td>${list[i].mondat}</td>
      <td>${list[i].kor}</td>
        </tr>`;
    }

    tab += `<p>Az atlagos kor: ${atlagkor}</p>
        </tbody>
        </table>`

    art.innerHTML += tab;
}

function atlag(list){
    let ossz = 0
    for (let i = 0; i < list.length; i++) {
        element += list[i].kor
    }
    const eredmeny = ossz / i
}

