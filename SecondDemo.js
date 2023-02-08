var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].textContent = '3rd elemennt';
items[2].style.backgroundColor = 'Green'; 
for(var i =0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}