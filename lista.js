window.addEventListener('load', init)
function init(){
    const list = [
      { nev: "Peti", mondat: "A kedd!" },
      { nev: "Gergo", mondat: "A kedd masodszor!", szemszin: "Kek/Zold", kor: 23 },
      { nev: "Niki", mondat: "Délelőtt kint játszottam a kutyussal" },
      { nev: "Asztrik", mondat: "Kedden, mert ott nem történt semmi." },
      { nev: "GergőT", mondat: "Kedd a legjóbb nap." },
      { név: "Sanyi", mondat: "Tegnap sikerült időben megoldani a java feladatot.",},
      { nev: "Márton", mondat: "Nem volt angol hétfőn" },
      { nev: "Dominik", mondat: "Kedd, mert a szölőben a kistraktorral tevékenykedtem.",},
      { nev: "Marci", mondat: "Ha gyenge vagy akkor legalább ne sírj" },
      { nev: "Bence", mondat: "Pillanat türelmet kérek javítom a mikrofont." },
    ];
    megjelenit(list)
}

function megjelenit(list){
    for ( let i = 0; i < list.length; i++){
        const div = document.createElement('div');
        const cim = document.createElement('cim');
        const szov = document.createElement('szov');
        document.body.appendChild(div);
        document.body.appendChild(cim);
        document.body.appendChild(szov);
        const text = document.createTextNode(list[i].nev);
        szov.appendChild(document.createTextNode(list[i].mondat));
        cim.appendChild(text);
    }
}