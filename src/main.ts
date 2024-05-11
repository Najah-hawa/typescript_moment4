// skapa en enkel klass för att registera person namn och skriva ut den till skärmen

class Person {
//classen tar två argument name och kurs
  public constructor(private name: string, private kurs: string) {}

  public getName(): string {
    return this.name;
  }
  public getKursname(): string {
    return this.kurs;
  }
}
//lägger in ny person i klassen
const person = new Person("Najah Hawa", "Webbutveckling III");
// skriver den till webbsida
const Myname= document.getElementById("myname") as HTMLOutputElement
Myname .innerHTML = "Jag heter " + person.getName() + ". " + "Jag läser kursen " + person.getKursname() + " i Mittuniversitet . ";




// skapa en klass för att registera car info
//klassen tar två argument modell och antal dörrar
//modell är string och antal dörrar av typen number
const carinfo= document.getElementById("carinfo") as HTMLOutputElement

class Car{
  modell: string;
  constructor(theModel:string){
    this.modell = theModel;
  }
cardorr(antaldorr: number){
  //skriv ut information till webbsidan
  carinfo .innerHTML = ("bilen har modell " + this.modell +" och den har "+ antaldorr + " dorr." );
}
}
//skapa ny instans av kladden
let nyCar = new Car("Escape");
nyCar.cardorr(4);



// interface som tar tre argument 
//markulera vilken typ ska varje element ska ha

interface personinfo{
 id: number;     
 name: string;     
 age: number;
}

//skapa ny instans
const person1: personinfo ={
id: 10,
name: "Ahmad", 
age: 25,

}; 
// skriva ut det till webbsidan
const interface= document.getElementById("interface") as HTMLOutputElement
interface.innerHTML = person1.id + "." + " Personen heter : " + person1.name+ ".  " + person1.name+ " är : " +person1.age + " år gammal." ;



//enum
enum Clothes { Wommen ="dress", Men = "t_shirt",  Chiled = "short"} 
let wommenCloth : Clothes= Clothes.Wommen;
let menCloth : Clothes = Clothes.Men;
let chiledcloth : Clothes = Clothes.Chiled;


//skriva ut det till webbsidan 
const WomwnCloth= document.getElementById("womwncloth") as HTMLOutputElement
WomwnCloth.innerHTML = "Kvinnan söker efter en " + wommenCloth + " . "; 
const MenCloth= document.getElementById("mencloth") as HTMLOutputElement
MenCloth.innerHTML = "Mannen vill köpa en  " + menCloth + " . ";
const Chiledcloth= document.getElementById("childcloth") as HTMLOutputElement
Chiledcloth.innerHTML = "Pojekn vill ha en " + chiledcloth + " . ";



//funktion som tar typ string
function Colors (redcolor: string, bluecolor: string): void {
const Colorfunction= document.getElementById("colorfunction") as HTMLOutputElement
Colorfunction.innerHTML = "Röd färg Hexadecimal kod : " + redcolor + " . " +" Blå färg Hexadecimal kod : " + bluecolor + " . " ;
}
Colors("#f00", "#00f" );


//tupler 
let chidinfo : [string, string, number ];
chidinfo = ["Maya Eriksson", "Kistahöjden", 4 ];
const ChidInfo= document.getElementById("tupler") as HTMLOutputElement
ChidInfo.innerHTML = "Barnets namn är : " + chidinfo[0] + " . " + "Barnets förskola heter  : " + chidinfo[1] + " . " + "Barnets ålder är : " + chidinfo[2] + " . ";


// funktion för menu i mobil läge
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

