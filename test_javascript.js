"use strict";
//create objects
/*const students={
    firstname:"Manolis",
    lastname: "Soiles",
    //property object
    teacher:{
        firstname: "Vasilis",
        lastname: "Dalakas",
        courses: ["maths","net"]
    },
    //property function
    fullname:function(){
        return `${this.firstname} ${this.lastname}`;
    }

};*/
//testing 
/*
let h3=document.getElementById("name");
h3.innerHTML="What's your name";
//let h4=document.getElementById("answer").innerHTML;
let h4=document.querySelector("#answer1");
h4.innerHTML="Give your name!"
function person(){ 
        document.getElementById("input").innerHTML=`<input type="text" id="anwser"/> <button>Click me!</button>`
        
        document.querySelector("button").addEventListener('click', function(){
            document.getElementById("con").innerHTML=`My name is ${document.querySelector('input').value}`;
        }
        
        ) 

}
person();
*/
//this-context
//Το this παίρνει τη τιμή του αντικειμένου που έγινε το event
//this το αντικείμενο στο οποιο αναφερόμαστε
//console.log(this);
/*function myFunc(){
    //this.name="Giannis";
    console.log(this.name);
}

let object = {name:"Manolis"}
let bound = myFunc.bind(object);//το this αναφέρετε στο αντικείμενο object με τη λέξη bind
//myFunc(); error  αν αφαιρέσουμε τη παραπάνω γραμμή, το this δεν έχει οριστεί
*/
/*
function myFunct(){
    return this;
}
//console.log(myFunct()); //undefined
let object1={
    method: myFunct
};
console.log(object1.method()==object1);
console.log(object1.method()==window); 
*/
//document.querySelector("#button-one").addEventListener("click",print_text)
//document.querySelector("#button-one").addEventListener("click",function(){
    //console.log("You clicked me!");
 //   console.log(this.innerText);
//})

//document.querySelector("#button-two").addEventListener("click",print_text)
//document.querySelector("#button-two").addEventListener("click",function(){
    //console.log("you clicked me");
  //  console.log(this.innerText);

//})

//setTimeout
/*setTimeout(function(){
    console.log("end")
},3000);
*/
/*
function time(){
    //let that,_this,self;
    let self=this; //εξωτερικό  button this
    //console.log(this); // εξωτερικό this button
    let text =this.innerText; //value one
    //console.log(this.innerText); //this button value one
    let text1="Hello world";
    this.innerText=text1;
    //this.innerText="Hello world";
    //console.log(this);  //this button
    setTimeout(function(){
        self.innerText=text;
       // console.log(this); //this parent(window)
    },3000)
} 
*/
//or    
/*
function time(){
    let text =this.innerText;
    this.innerText="Hello world";
    setTimeout(function(){
        this.innerText=text;     
        console.log(this );
    }.bind(this),3000)   //bind πάρε το this του function και κάν το this του αντικειμένου που έγινε το event 
}   
*/
//document.querySelector("#button-one").addEventListener("click",time);  


//οι fat arrow συναρτήσεις είναι σαν να έχουν κολλημένο ένα bind, παίρνουν το this του parent
/*let name1=()=>{
    console.log(this);
}
name1(); //this parent (window)
//console.log(this);
//classic function
function test(){
    console.log(this);
}
test(); // this undefined
*/

//methods array

//const array1=[1,2,3,"manolis",3.5];

//for(let i of array1)  //of show array content while in display array indexes
  //  console.log(i);
//console.log(array1);
//console.log(array1.push("Giannis")); //method push προσθετουμε στοιχεία σ ένα πίνακα
//console.log(array1.pop()); //method pop διαγράφουμε το τελευταίο στοιχείο του πίνακα
//console.log(array1.shift()); //method shift διαγράφουμε το πρώτο στοιχείο του πίνακα
//array1.splice(3,2); //αφαιρεί ενδιαμεσα στοιχεία του πίνακα με παράμετρους 1) από ποιο στοιχειο(δείκτη) να ξεκινησει και 2) πόσα στοιχεια να διαγράψει
//array1.slice(2,4); //method slice παίρνει σαν παραμέτρους 1)από ποιο στοιχείο(δείκτη) να ξεκινησει και 2) μέχρι ποιο δείκτη να σταμαήσει χωρίς να περιλαμάνεται μέσα
//console.log(array1.slice(2,4)); //Μας φέρνει τα στοιχεία αλλά δεν τ αφαιρεί από το πίνακα

//array1.forEach(function(element){ //method forEach  δείχνουμε τα περιεχόμενα του πινακα
  //  console.log(element);

//})
//while(array1.length!=0)   //διαγράφει όλα τα περιέχομενα του πίνακα
  //  array1.pop();
//console.log(array1);
/*const array2=[1,2,8,23,123,122334];
console.log(array2);
let newArray=array2.filter(function(element){   //method filter φιλτράρουμε σ ένα καινούργιο πίνακα τα στοιχεία του πίνακα ανάλογα τη συνθήκη που θα δωσουμε 
    return element<10; //Βάζουμε στο καινούργιο πίνακα τα στοιχεία που είναι μικρότερα από το 10
})
//fat arrow function
let new_array= array2.filter(element=>element< 10) 
console.log(new_array);
*/
/*let table=[23,45,3,222,11111,455];
let table1=table.filter(x=>x!=45);
console.log(table1);
//filter από πίνακα αντικειμένων
//create object
let student=[{
    name:"Manolis Soiles",
    age:27,
    grade:6,
    lessons:11
},
{
    name:"Giwrgos Papadhmhtriou",
    age:25,
    grade:9,
    lessons:12
},
{
    name:"Antwnhs Krhtikos",
    age:22,
    grade:10,
    lessons:15
},
{
    name:"Vasileia Papaioanou",
    age:21,
    grade:8,
    lessons:8
}
]
let arrStudent=student.filter(x=>x.grade>8);
console.log(arrStudent);
//map method
//let array3=array2.map(element=>element**2)  //βάλε σ ένα άλλο πινακα τα τετράγωνα των περιεχομένων του αρχικού πίνακα
//console.log(array3);

//συνδιασμός map και filter
let table2=student.filter(x=>x.grade>8).map(x=>x.name);
console.log(table2);

//reduce method κάνει δουλεία με ζευγάρια 

//const array4=[12,45,34,23];
//let v=array4.reduce((trexonSynolo,trexon)=>trexonSynolo+trexon,0); //return value παράμετροι συναρτηση και default value
 //console.log(v);

//συνδιασμός map & reduce
//βρες το μέσο όρο των βαθμών των φοιτητών

let aver=(student.map(element=>element.grade).reduce((pr,cur)=>(pr+cur),0)/student.length).toFixed(2);
console.log(aver);
//toFixed(αριθμός ψηφίων μετά την υποδιαστολή) στρογγυλοποίηση float

*/
//sort method

/*let x=array4.sort(function(a,b){
    if(a>b)
        return 1;
    else 
        return -1;
})*/
//console.log(array4.sort((a,b)=>a<b? 1 : -1));  //ταξινομεί από το μεγαλύτερο προς το μικρότερο 

//συνδιασμός filter & map & sort
/*
let array12 = student.filter(element=>element.lessons>10).map(element=>element.grade).sort((a,b)=>a<b?1:-1);
console.log(array12);


//συνδιασμός map & sort φερε τους βαθμούς των φοιτητών και ταξινομησε τους από το μεγαλύτερο στο μικρότερο
let aver=student.map(g=>g.grade).sort((a,b)=>a<b ? 1 :-1);
console.log(aver);
*/

//asynchronous javascript

//let a= function(){return 1};
//console.log(a());
//let a12= (function(){return 1})(); //IIFE
//console.log(a12);
//a12++;
//console.log(a12);
//setTimeout(function(){a12+1},1);
//console.log(a12); //display a12=1  δε περιμένει τη γραμμή 235 και εκτελεί τη γραμμή 231
//ajax request
/*
let weatherResponse="Παρακαλώ περιμένετε...";
let weatherDiv = document.querySelector("#weather");
document.querySelector("#weather").innerHTML = weatherResponse;
//weatherDiv.innerText = weatherResponse;
function getWeather(){
    setTimeout(()=>{
        weatherResponse="Σήμερα έχει λιακάδα!";
    },2000);    
}

getWeather(); //Εμφανίζει το παρακαλώ περιμένετε

//weatherResponse=getWeather();
//weatherDiv.innerText = weatherResponse; //δεν εμφανίζει καθόλου το "Παρακαλώ περιμένετε"

//getWeather();
//weatherDiv.innerText = weatherResponse; //Δεν εκτυπώνει καν το σήμερα έχει λιακάδα Δεν περιμένει
//setTimeout((()=>weatherDiv.innerText = weatherResponse),2);
 //weatherDiv.innerText = weatherResponse; //δεν περίμενε τη παραπάνω setTimeout και πρόβαλε το Παρακαλώ περιμένετε...  
 //setTimeout(()=>weatherResponse=getWeather(),30000);
 //weatherDiv.innerText = getWeather();
*/

//callbacks τα βάζουμε σαν παράμερο σε άλλες συναρτήσεις 
/*
let weatherResponse="Παρακαλώ περιμένετε...";
let weatherDiv = document.querySelector("#weather");

weatherDiv.innerText=weatherResponse;
function getWeather(callback){
    setTimeout(()=>{
        weatherResponse="Βροχή"; 
        callback(); 
    },1000);    
}

function setWeather(){
    weatherDiv.innerText=weatherResponse;
}

function moreText(){
    if(weatherResponse=="Βροχή")
    weatherResponse+= " ,πάρε ομπρέλα!"
    weatherDiv.innerText=weatherResponse;
}

//getWeather(setWeather); //εμφανίζει πρώτα το παρακαλώ περιμένετε και μετά το Σήμερα έχει λιακάδα
getWeather(moreText); //Αν ειναι βροχή εμφανίζει το Βροχη, πάρε ομπρέλα
*/
/*
//promises πιο σύγχρονη μέθοδος από τα callbacks
let weatherResponse="Παρακαλώ περιμένετε...";
let weatherDiv = document.querySelector("#weather");
weatherDiv.innerText=weatherResponse;

function getWeather(){     //επιστρέφει ένα promise
    let control=200;
    return new Promise((resolve,reject)=>{         //παίρνει σαν παράμετρο μία συνάρτηση η οποία έχει δύο παραμέτρους(resolve,reject)
        setTimeout(()=>{
            weatherResponse="Βροχή";
            if(control===200){
                resolve();
            }
            else{
                reject("ERROR. This page not loading");
            }
              
        },3000);
            
    })
}

function setWeather(){
    weatherDiv.innerText=weatherResponse;
}

function moreText(){
    if(weatherResponse=="Βροχή")
    weatherResponse+= " ,πάρε ομπρέλα!"
    weatherDiv.innerText=weatherResponse;
}

getWeather()
.then(moreText) //αν όλα έχουν πάει καλά   εμφανίζει πρώτα το παρακαλώ περιμένετε και μετά το Σήμερα έχει λιακάδα
.catch((err=>weatherDiv.innerText=err)); //αν υπάρχει πρόβλημα εμφγανίζει το μήνυμα λάθους που έχουμε δώσει στο reject
 //getWeather(moreText); //Αν ειναι βροχή εμφανίζει το Βροχη, πάρε ομπρέλα
*/
//ajax με fetch
let firstName= "Manolis";
let lastName= "Soiles";
console.log(firstName + " " + lastName);





 /*

//testing program
let tries=0;
let sucess=0;
const numbers=[2,3,4,5,6,7,8,9];

let choice=prompt('Για ποιον αριθμό θέλεις να δοκιμάσεις;');

let h3=document.querySelector('h3');
let h4=document.querySelector('h4');
//h3.innerHTML = `2 * ${choice} = <input type="text"/>`  

let i=0;
function ask(){
    h3.innerHTML=`
    ${numbers[i]} x ${choice}=
    <input type="text" id="answer" size="3"/>
    <button>OK</button>    
    `
    //querySelector('#answer')
    document.querySelector('button').addEventListener('click', 
    function(){
        if (numbers[i] * choice == document.querySelector('input').value){
            h4.innerText="Congratulation!";
            sucess++;
            i++;
        }   
        else{
            alert("Try again..");
            //h4.innerText="Try again...";
        } 
        tries++;
        document.querySelector('center').innerText = `Σκορ ${sucess} στις ${tries} προσπάθειες`;
        if(i<numbers.length)
            ask();
        else{
            choice=prompt('Για ποιον αριθμό θέλεις να δοκιμάσεις;');
            i=0;
            ask();
        }
        
    })   
       
}
ask();
*/

//scope and context
/*let a=2;

function test(){
    a="DYO";
    console.log(a);
    function test1(){
        a="1";
            console.log(a);
    }
    test1();
    console.log(a);
}
test();
console.log(a);     
*/
//var vs let

//scope let only for loop
//scope var only for function not only for loop

//console.log(numbers.length);
//επιλογή στοιχείου από browser, δίνει ένα στοιχείο querySelector()
//console.log(document.querySelector('h1').innerHTML);
//console.log(document.querySelector('h1').innerText);
//console.log(document.querySelectorAll('h1'));
//let a =document.querySelector('h1');
//a.addEventListener('click',function(){alert("This is life!")})

//alert("test");
/*
//create functions
function people (name,age,height){
    let n = name ? `My name is ${name}` : "My name is not exist!";
    let a = age ? `My age is ${age}` : "My name is not exist!";
    let h = height ? `My height is ${height}` : "My height is not exist";
    //console.log(`${n}\n${a}\n${h}`);
    console.log(n + "\n" + a + "\n" + h);
}
people("manolis",20,1.7);

function hello(name){
    if (name)
        return `My name is : ${name}`;
    else 
        return `the name is not exist!`;    
}
console.log(hello("Giannis"));

//anonymous function
let x =function(name){
  return `My name is ${name}`;  
}
console.log(x("Manolis"));

//fatarrow functions

let y =(name)=> {
    return `My name is ${name}`; 
}
console.log(y("Paulos"));
//when is one line not need return
let l =(name)=> `My name is ${name}`;
console.log(l("Thanos"));
*/
//with 3= compare variable value and type  while 2= check only the variable value  
/*let a=5,b=8;
let x=true;
console.log(!(a===1 || b===0));
let g=5;
while(g<10){
    
    console.log(g);
    g++;
    
}

do{
    console.log(g);
    g++;
}while(g<10)
*/
//if condition
//let c=5;
/*if(c<18)
    console.log("Eisai anhlikows"); 
else
    console.log("Eisai enhlikas");  
console.log(typeof c);
//if elseif condition
if(c<6){
    console.log("Phgaineis nhpeio!");
}
    
else if(c<12){
    console.log("Phgaineis dhmotiko!");
}
    
else if(c<15){
    console.log("Phgaineis gymnasio!");
}
    
else if(c<18){
    console.log("Phagineis lykeio!");
}
    
else{
    console.log("Exeis teleiwsei to sxoleio! Youpiiiiii");
}
  */    
//switch condition

/*switch(c){
    case 1:   console.log("Phgaineis nhpeio!");
              break;
    case 2:  console.log("Phgaineis Gymansio!");
             break;
    default:
            console.log("Efyges");
             break;
}   
*/
//destructing operator αντιστοιχία τιμών στις τιμές του πίνακα
/*
let array=[1,2,"Manolis",3.17];

let[d,e,f,g]=array;
//spread operation ...
//let[d,...r]=array;
console.log(g);

//αντιστοιχία τιμών στις τιμές ενός αντικειμένου
const child={
    name:"Giannis",
    age:18,
    friends:["Manolis","Giwrgos","Vasilhs"],
    family:{
        fathername:"Stefanos",
        mothername:"Sophia",
        childernsnames:["Giannis","Manolis","Florios"]
    }

}
const{name,age, ...etc}=child;
console.log(etc);

//αν υπάρχει ένα κλειδί σ ένα object;
console.log('name' in child);
//διαγραφή ενός κλειδιού
delete child.age;
console.log('age' in child);
*/
//διαγραφή από πίνακα
/*let array1=[1,2,3,4,5];
console.log(array[1]);
delete array1[2];
console.log(array1);
*/
/*
//condition operator or ternary
let name1;
if(name1)
    console.log(`Hello ${name1}`);
else
    console.log("Hello world");


let line=name1 ? `Hello ${name1}` : "Hello world";
console.log(line); 
//or 
console.log(name1 ? `Hello ${name1}` : "Hello world";)
*/
//jump operator
/*for(let n=0;n<10; n++){
    
    if(n===5)
        break;
    console.log(n); 
    if(n===3)
        continue;
    console.log(n);    
}*/
//with the word idx take the object indexes 
/*for(let idx in students)
//show the indexes stydents's object 
    console.log(idx);
let arr=[];
//transformation the object data in the arr table
for(let idx in students)
    arr.push(students[idx]);
    //show the content the arr table
for(let element of arr)
    console.log(element);
*/
    //console.log(students.fullname());

//convert object to string 
//console.log(JSON.stringify(students));

/*
for(let i=0; i<10; i++){
    let s=i*i;
    //εμφωλευμένο loop
    for(let n=0; n<5; n++){
        console.log(`i=${i} and n=${n}`);
    }
    //2 ways for show alpharethmetic
    console.log(`Το τετράγωνο του: ${i} είναι: ${s}`);
    //console.log("Το τετράγωνο " + i + " είναι: "+ s ); 
}*/

/*for (let i=0, n=5; i<10; i++ , n++){
    console.log(`${i},${n}`);
}*/
