var myData = new Array(10);
for(let i=0; i<myData.length; i++){
    myData[i]= 1;
}
let indexEntry = 0;
let valueEntry = "";
let output = "";
 do{
    for(let x of myData){
        output = x + " ";
    }
    console.log(output);

    indexEntry = parseInt(prompt("Enter an index"));
    levalueEntry = prompt("Enter a value");

    if (indexEntry >= 0 && indexEntry < 10){
        myData[indexEntry] = valueEntry;
        console.log("ok");
    }
}
while(!(indexEntry >= 0 && indexEntry < 10));
for(let x of myData){
        output = x + " ";
    }
console.log(output);