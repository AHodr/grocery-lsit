let grocery =[];
function groceryList(){
    document.getElementById("main").innerHTML=
    `<ul>${grocery.map(item => `<li>${item}</li>`).join('')}</ul>`;
}
function listADD(){
    grocery.push(prompt("Add to your grocery list"));
    groceryList();
}
function listADD5(){
    for (i=0;i<5;i++){
    grocery.push(prompt("Add to your grocery list"));
    }
    groceryList();
}
 function end(){
    grocery.pop(confirm("Delete an item from the end of the list?"));
    groceryList();
} 