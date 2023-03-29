//1 (3 BODA)
//Napisi funkciju koja ispisuje neparne brojeve od 0 do 100
function neParni(){
    for(let i = 0; i<101; i++){
        if(i%2 !== 0){
            console.log(i)
        }
    }
    
}
neParni()


//2 (3 BODA)
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u godisnje u doba. Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Jesen";
//INPUT: 3; OUTPUT: "Ljeto"; 
function Pretvaranje(unesi){
    switch (unesi) {
        case 1: console.log("Jesen")
            
            break;
        case 2: console.log("Proljeće")
        break;
        break;
        case 3: console.log("Ljeto")
        break;
        case 4: console.log("Zima")
        break;
        case 5: console.log("Unos nije ispravan")
        break;
        default:
            break;
    }  

}
Pretvaranje(3)


//3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao"
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 39)
function okreniString(string){
    let noviString = ""
    for(let i = string.length -1; i >= 0; i--){
        noviString += string[i]
    }
    console.log(noviString,",", noviString.length)
    
}
okreniString("Pisanje zadataka nije jednostavan posao")

//4 (4 BODA)
//Napisi funkciju koja odreduje najdulju vrijednostu u danom objektu
const peopleYouShouldKnow = {
    Donald: "Knuth",
    Bjarne: "Stroustrup",
    Ada: "Lovelace",
    Kent: "Beck",
    Martin: "Fowler",
    Erich: "Gamma"
}
//INPUT: somePeople
//OUTPUT: "Stroustrup"
function najduljaVrijednost(unesi){
    

}





//5 (4 BODA)
//Napisi funkciju u obliku function expressiona koja vraca neproste brojeve
//INPUT: [3, 4, 5, 8, 11]
//OUTPUT: [4, 5, 8]



//ZAMJENA ZA 5 (4 BODA)
//Napisi funkciju u obliku arrow functiona koja pretvara mala slova danih inputa u velika slova
//INPUT: ["aa", "b1", "", null, "AAA"]
//OUTPUT: ["AA","B1", "", null, "AAA"]
function pretvoriSlova(unesiString){
    let String = []
    for(let i = 0; i<unesiString.length; i++){
        String += unesiString[i]
    }
    return String.toUpperCase()
    
}
console.log(pretvoriSlova(["aa", "b1", "", null, "AAA"]))

    

//6 (4 BODA)
//Napisi funkciju koja vraca sve drzave koji su imali manju temperaturu od one iz ulaznog parametra
const someEvents = [
    {
        stateName: "SAD",
        measuredTemperature: 56.7,
    },
    {
        stateName: "Tunis",
        measuredTemperature: 55,
    },
    {
        stateName: "Irak",
        measuredTemperature: 53.9,
    },
    {
        stateName: "Argentina",
        measuredTemperature: 48.9,
    },
    {
        stateName: "Grcka",
        measuredTemperature: 48.0,
    },
];
//INPUT: (someStates, 48.5)
//OUTPUT: [{stateName: "Grcka", measuredTemperature: 48.0}]
function manjaTemperatura(drzava, temp){
    let drzave = []
    for(let drzava of someEvents){
        if(drzava.measuredTemperature < temp){
            temp = drzava.measuredTemperature
            drzave.push({
                stateName: drzava.stateName,
                measuredTemperature: drzava.measuredTemperature
            })
        }
    }
    console.log(drzave)
}

manjaTemperatura("someStates", 48.5)

