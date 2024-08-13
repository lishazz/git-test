const q1Num=document.getElementById('q1-num');
const q1Out=document.getElementById("q1-out");
function oddoreven(){
    let value=parseInt(q1Num.value);
   
     q1Out.innerText=`${value} is ${value%2===0?"even":"odd"}`;
}

const q2Num=document.getElementById('q2-num');
const q2Out=document.getElementById('q2-out');
function primeOrNot(){
    let value=parseInt(q2Num.value);
    let flag=0
    for(let i=2;i<value;i++){
        if(value%i===0){
           flag=1;
           break; 
        }
    }
    q2Out.innerText=`${value} is ${flag===1?"not prime":" prime"}`;
}


const q5Num=document.getElementById("q5-num");
const q5Submit1=document.getElementById("q5-submit1");
const q5Input=document.getElementById("q5-input");
const q5Result=document.getElementById("q5-result");
function createNInput(){
    let number=q5Num.value;
    q5Input.innerHTML="";
    for(let i = 1;i <= number;i++){
        q5Input.innerHTML += `<input type="number" id="q5-input-${i}" placeholder="enter number ${i}">`;
    }
    q5Input.innerHTML += `<button onclick="findmax()">find max</button>`;
}
function findmax() {
    let ar=[];
    let number=q5Num.value;
    for(let i = 1; i <= number; i++){
        ar.push(parseInt(document.getElementById(`q5-input-${i}`).value));
    }
    let large=ar[1];
    for(let i = 0; i <= number-1; i++){
        if( large < ar[i]){
            large=ar[i];
        }
    }
    q5Result.innerText=`largest is ${large}`;
}



const q3Text=document.getElementById("q3-text");
const q3Out=document.getElementById("q3-out");
function pallindrome(){
    let text=q3Text.value;
    let rev="";
    
    for(let i=text.length-1;i>=0;i--){
        rev+=text[i];
    }
   
    q3Out.innerText=`${text} is ${ text===rev?"palindrome":"not palindrome"}`;
 }
 
 const q4Out=document.getElementById("q4-out");
 const q4Submit=document.getElementById("q4-submit");
 function printNum(){
     for(let i=1;i<=10;i++){
         if(i===6|| i===8){
             continue;
         }
         q4Out.innerText += ` ${i}`;
     }
 }

 const q6Num=document.getElementById("q6-num");
 const q6Submit=document.getElementById("q6-submit");
 const q6Result=document.getElementById("q6-result");

 function power(num,pow){
    let result = 1;
    for(let i = 0;i < pow;i++){
        result = result * num;
    }
    return result;
 }

 function isArmstrong(){
    let number= q6Num.value;
    let temp=number;
    let original=number;
    let count=0;
    let sum=0;
    while(temp !== 0){
        temp = Math.floor(temp / 10);
        count++;
    }
    while(number !== 0){
        let num = number % 10;
        sum += power(num,count);
        number = Math.floor(number / 10);  
    }
   q6Result.innerText += `${original} is ${original==sum?"armstrong":"not armstrong"}`;
}

const q7String=document.getElementById("q7-string");
const q7Submit=document.getElementById("q7-submit");
const q7Result=document.getElementById("q7-result");
function noString(){
    let string1= q7String.value;
    let count=0;
    for(let j=0;j<string1.length;j++){
        if(string1[j] === "a" || string1[j] === "e" || string1[j] === "i" || string1[j] === "o" || string1[j] === "u" || string1[j] === "A" || string1[j] === "E" || string1[j] === "I" || string1[j] === "O" || string1[j] === "U"){
            count = count+1;
        }
    }
    q7Result.innerText += `number of vowels in the string is ${count}`;
}

const q8Result=document.getElementById("q8-result");
const q8Submit=document.getElementById("q8-submit");
function printA(){
    let string2 = "*";
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            q8Result.innerText += `${string2}`;
        }
        q8Result.innerText += `\n`;
    }
}

const q9Result=document.getElementById("q9-result");
const q9Submit=document.getElementById("q9-submit");
function printB(){
    let string = "#";
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            q9Result.innerText += `${string}`;
        }
        q9Result.innerText += `\n`;
    }
}

const q10Result=document.getElementById("q10-result");
const q10Submit=document.getElementById("q10-submit");
function printC(){
    let string = "*";
    for(let i = 1; i <= 6; i++){
        for(let j = 1; j < i; j++){
            q10Result.innerText += `${string}`;
        }
        q10Result.innerText += `\n`;
    }
}


const q11Result=document.getElementById("q11-result");
const q11Submit=document.getElementById("q11-submit");
function printD(){
    for(let i = 1; i <= 6; i++){
        for(let j = 1; j < i; j++){
            q11Result.innerText += `${j}`;
        }
        q11Result.innerText += `\n`;
    }
}


const q12Result=document.getElementById("q12-result");
const q12Submit=document.getElementById("q12-submit");
function printE(){
    for(let i = 0; i <= 5; i++){
        for(let j = 1; j <= i; j++){
            q12Result.innerText += `${i}`;
        }
        q12Result.innerText += `\n`;
    }
}


const q13Result=document.getElementById("q13-result");
const q13Submit=document.getElementById("q13-submit");
function printF(){
    let str=" ";
    let n = 9/2;
    for(let i = 0; i < 10; i=i+2){
        for(let k = n; k > 0; k--){
            q13Result.innerHTML += `&nbsp;&nbsp;`;
        }
        n--;

        for(let j = 1; j <= i+1; j++){
            q13Result.innerText += `*`;
        }
        q13Result.innerText += `\n`;
    }
}

const q14Result=document.getElementById("q14-result");
const q14Submit=document.getElementById("q14-submit");
function printG(){
    let n=4
    for(let i = 1; i <= 6; i++){
        for(let j = 1; j < i; j++){
            q14Result.innerText += `*`;
        }
        q14Result.innerText += `\n`;
    }
    for(let k=0;k< 4;k++){
        for(let j=n;j>0;j--){
            q14Result.innerText +=`*`;
        }
        n--
        q14Result.innerText +=`\n`;
    }
}

const a1Num=document.getElementById("a1-num");
const a1Submit1=document.getElementById("a1-submit1");
const a1Input=document.getElementById("a1-input");
const a1Result=document.getElementById("a1-result");
function createInputs(){
    let number=a1NumNum.value;
    a1Input.innerHTML="";
    for(let i = 1;i <= number;i++){
        a1Input.innerHTML += `<input type="number" id="a1-input-${i}" placeholder="enter number ${i}">`;
    }
    a1Input.innerHTML += `<button onclick="findmaxmin()">find max & min</button>`;
}
function findmax() {
    let ar=[];
    let number=a1Num.value;
    for(let i = 1; i <= number; i++){
        ar.push(parseInt(document.getElementById(`a1-input-${i}`).value));
    }
    let large=ar[1];
    let small=ar[1];
    for(let i = 0; i <= number-1; i++){
        if( large < ar[i]){
            large=ar[i];
        }
    }
    for(let j = 0; j <= number-1; i++){
        if(small > ar[i]){
            small = ar[i];
        }
    }
    q5Result.innerText=`largest is ${large} and smallest is ${small}.`;
}
