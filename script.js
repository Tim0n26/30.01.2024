//Задача 1: 
//Создайте кнопку с id btn1, которая при нажатии вызывает функцию func1. 
//Функция func1 должна создать новый элемент div с текстом “Это div1” и добавить его в div1.  
function func1() { 
  const div1 = document.createElement("div"); 
  div1.appendChild(document.createTextNode("Это div1")); 
  document.getElementById("div1").appendChild(div1); 
} 
document.getElementById("btn1").addEventListener("click", func1); 
//Задача 2: 
//Создайте кнопку с id btn2, которая при нажатии вызывает функцию func2. 
//Функция func2 должна создать новый элемент p с текстом “Это p2” и добавить его в div2.  
function func2(){ 
const p2 = document.createElement("p"); 
p2.appendChild(document.createTextNode("Это p2")); 
document.getElementById("div2").appendChild(p2); 
} 
document.getElementById("btn2").addEventListener("click", func2); 
//Задача 3: 
//Создайте кнопку с id btn3, которая при нажатии вызывает функцию func3. 
//Функция func3 должна создать новый элемент img с альтернативным текстом “Это img3” и добавить его в div3. 
function func3(){ 
  const img3 = document.createElement("img"); 
  img3.alt = "Это img3";
  document.getElementById("div3").appendChild(img3); 
 } 
 document.getElementById("btn3").addEventListener("click", func3);
//Задача 4:
//Создайте кнопку с id btn4, которая при нажатии вызывает функцию func4.
//Функция func4 должна создать новый элемент ul с текстом “Это ul4” и добавить его в div4.
function func4() { 
  const ul4 = document.createElement("ul"); 
  ul4.appendChild(document.createTextNode("Это ul4")); 
  document.getElementById("div4").appendChild(ul4); 
} 
document.getElementById("btn4").addEventListener("click", func4);
//Задача 5:
//Создайте кнопку с id btn5, которая при нажатии вызывает функцию func5.
//Функция func5 должна создать новый элемент li с текстом “Это li5” и добавить его в div5.
function func5(){
  const li5 = document.createElement("li");
  li5.appendChild(document.createTextNode("Это li5"));
  document.getElementById("div5").appendChild(li5);
}
document.getElementById("btn5").addEventListener("click",func5);
//Задача 6:
//Создайте кнопку с id btn6, которая при нажатии вызывает функцию func6.
//Функция func6 должна создать новый элемент table с текстом “Это table6” и добавить его в div6.
function func6() {
  let table = document.createElement("table");
  table.innerHTML = "Это table6";
  document.getElementById("div6").appendChild(table);
}
document.getElementById("btn6").addEventListener("click",func6);
//Задача 7:
//Создайте кнопку с id btn7, которая при нажатии вызывает функцию func7.
//Функция func7 должна создать новый элемент tr с текстом “Это tr7” и добавить его в div7.
function func7(){
  const tr7 = document.createElement("tr");
  tr7.appendChild(document.createTextNode("Это tr7"));
  document.getElementById("div7").appendChild(tr7);
}
document.getElementById("btn7").addEventListener("click",func7);
//Задача 8: Создайте кнопку с id btn8, которая при нажатии вызывает функцию func8.
//Функция func8 должна создать новый элемент td с текстом “Это td8” и добавить его в div8.
function func8() {
  let td8 = document.createElement("td");
  td8.appendChild(document.createTextNode("Это td8"));
  document.getElementById("div8").appendChild(td8);
}
document.getElementById("btn8").addEventListener("click",func8);
//Задача 9: Создайте кнопку с id btn9, которая при нажатии вызывает функцию func9.
//Функция func9 должна создать новый элемент h1 с текстом “Это h19” и добавить его в div9.
function func9() {
  let h19 = document.createElement("h1");
  h19.appendChild(document.createTextNode("Это h19"));
  document.getElementById("div9").appendChild(h19);
}
document.getElementById("btn9").addEventListener("click",func9);
//Задача 10: Создайте кнопку с id btn10, которая при нажатии вызывает функцию func10.
//Функция func10 должна создать новый элемент span с текстом “Это span10” и добавить его в div10.
function func10() {
  const span10 = document.createElement("span");
  span10.appendChild(document.createTextNode("Это span10"));
  document.getElementById("div10").appendChild(span10);
}
document.getElementById("btn10").addEventListener("click",func10);
//Результат залить на github