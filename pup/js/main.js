// skapa en enkel klass för att registera person namn och skriva ut den till skärmen
var Person = /** @class */ (function () {
    //classen tar två argument name och kurs
    function Person(name, kurs) {
        this.name = name;
        this.kurs = kurs;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getKursname = function () {
        return this.kurs;
    };
    return Person;
}());
//lägger in ny person i klassen
var person = new Person("Najah Hawa", "Webbutveckling III");
// skriver den till webbsida
var Myname = document.getElementById("myname");
Myname.innerHTML = "Jag heter " + person.getName() + ". " + "Jag läser kursen " + person.getKursname() + " i Mittuniversitet . ";
// skapa en klass för att registera car info
//klassen tar två argument modell och antal dörrar
//modell är string och antal dörrar av typen number
var carinfo = document.getElementById("carinfo");
var Car = /** @class */ (function () {
    function Car(theModel) {
        this.modell = theModel;
    }
    Car.prototype.cardorr = function (antaldorr) {
        //skriv ut information till webbsidan
        carinfo.innerHTML = ("bilen har modell " + this.modell + " och den har " + antaldorr + " dorr.");
    };
    return Car;
}());
//skapa ny instans av kladden
var nyCar = new Car("Escape");
nyCar.cardorr(4);
//skapa ny instans
var person1 = {
    id: 10,
    name: "Ahmad",
    age: 25
};
// skriva ut det till webbsidan
var interface = document.getElementById("interface");
interface.innerHTML = person1.id + "." + " Personen heter : " + person1.name + ".  " + person1.name + " är : " + person1.age + " år gammal.";
//enum
var Clothes;
(function (Clothes) {
    Clothes["Wommen"] = "dress";
    Clothes["Men"] = "t_shirt";
    Clothes["Chiled"] = "short";
})(Clothes || (Clothes = {}));
var wommenCloth = Clothes.Wommen;
var menCloth = Clothes.Men;
var chiledcloth = Clothes.Chiled;
//skriva ut det till webbsidan 
var WomwnCloth = document.getElementById("womwncloth");
WomwnCloth.innerHTML = "Kvinnan söker efter en " + wommenCloth + " . ";
var MenCloth = document.getElementById("mencloth");
MenCloth.innerHTML = "Mannen vill köpa en  " + menCloth + " . ";
var Chiledcloth = document.getElementById("childcloth");
Chiledcloth.innerHTML = "Pojekn vill ha en " + chiledcloth + " . ";
//funktion som tar typ string
function Colors(redcolor, bluecolor) {
    var Colorfunction = document.getElementById("colorfunction");
    Colorfunction.innerHTML = "Röd färg Hexadecimal kod : " + redcolor + " . " + " Blå färg Hexadecimal kod : " + bluecolor + " . ";
}
Colors("#f00", "#00f");
//tupler 
var chidinfo;
chidinfo = ["Maya Eriksson", "Kistahöjden", 4];
var ChidInfo = document.getElementById("tupler");
ChidInfo.innerHTML = "Barnets namn är : " + chidinfo[0] + " . " + "Barnets förskola heter  : " + chidinfo[1] + " . " + "Barnets ålder är : " + chidinfo[2] + " . ";
// funktion för menu i mobil läge
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
