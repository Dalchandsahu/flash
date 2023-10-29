var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].textContent = '3rd elemennt';
items[2].style.backgroundColor = 'Green'; 
for(var i =0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}
// GETELEMENTSBYTAGNAME //
var li = document.getElementsByTagName('li');
console.log (li);
console.log(li[1]);
li[2].textContent = '3rd elemennt';
li[2].style.backgroundColor = 'Green'; 
for(var i =0; i<li.length; i++){
    li[i].style.fontWeight = 'bold';
}

// QuerySelector//
var SecondItems =document.QuerySelector('list-group-item : nth-child(2)');
SecondItems.style.backgroundColor = 'Green';

// QUERYSELECTORALL //
var titles = document.querySelectorAll('title');
console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i =0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}
