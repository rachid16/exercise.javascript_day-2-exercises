var entry =-1;
var entryStrage = new Array();
entry = prompt("Please enter an integer");

while(!(entry>0 && entry < 100)){
    entry = prompt("Please re-enter");
    entryStrage.push(entry);
}
document.write("your entry"+ entry * entry);

