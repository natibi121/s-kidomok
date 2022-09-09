/*Terület = a * b
Kerület = 2*(a+b)*/

function szamol(){
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    parseInt(document.getElementById('k_tegla').value = 2*(a+b) )
    parseInt(document.getElementById('t_tegla').value = a*b )
}
function k_szamol(mibol){
    if (mibol == "r"){
    let r = parseInt(document.getElementById('r').value);
    document.getElementById('k_kor').value = Math.round(2 * r * Math.PI); 
    document.getElementById('t_kor').value = r*r*Math.PI;
    }
    else if (mibol == "k"){
        let k = parseInt(document.getElementById('k_kor').value);
        let r = k / 2 / Math.PI;
        document.getElementById('r').value = r;
        document.getElementById('t_kor').value = r * r * Math.PI
    }
    else{
        let t = parseInt(document.getElementById('t_kor').value);
        let r = Math.sqrt(t / Math.PI);
        document.getElementById('r').value = r;
        document.getElementById('k_kor').value = 2 * r * Math.PI
    }
}
function haromszog_szamol(){
    let a = parseInt(document.getElementById('h_a').value);
    let b = parseInt(document.getElementById('h_b').value);
    let c = parseInt(document.getElementById('h_c').value);
    let k = a + b + c;
    let s = k / 2;
    let t = Math.round(Math.sqrt((s* (s -a) * (s -b) * (s -c))));
    document.getElementById('k_haromszog').value = k;
    document.getElementById('t_haromszog').value = t;
}

function valt(mire){
    document.getElementById('teglalap').style.display = "none";
    document.getElementById('kor').style.display = "none";
    document.getElementById('haromszog').style.display = "none";
    // document.getElementById('negyzet').style.display = "none";
    // document.getElementById('hatszog').style.display = "none";
    let formak = document.getElementsByTagName('form');
    for (i=0; i < formak.length;i++){
        formak[i].style.display = "none";
    }
    switch (mire){
        case 'kor':
            document.getElementById('kor').style.display = "block";
            break;
        case 'teglalap':
            document.getElementById('teglalap').style.display = "block";
            break;
        case 'haromszog':
            document.getElementById('haromszog').style.display = "block";
            break;
        case 'negyzet':
            document.getElementById('negyzet').style.display = "block";
            break;
        case 'hatszog':
            document.getElementById('hatszog').style.display = "block";
            break;
    }
}

function torol(){
    document.getElementById('k_kor').value = "";
    document.getElementById('t_kor').value = "";
    document.getElementById('r').value = "";
}