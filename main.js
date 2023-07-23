//variables for the welcome message
var greeting = 'Hello ';
var name = 'Customer';
var message = ', please check your order';
//concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;
//create variables to hold details about the sign
var sign = '';
var tiles = 0;
var subTotal = tiles * 5 ;
var shipping = 7;
var grandTotal = subTotal + shipping;



//get element that has a id of greeting
var el = document.getElementById('greeting');
//replace the content of that element with the the personalized welcome message 
el.textContent = welcome;

//get a element that has an id of userSign then update its content 
var elSign = document.getElementById('totalTiles');
elSign.textContent = sign;

//get a element that has a id of tiles then update its content 
var elTiles = document.getElementById('customSignTiles');
elTiles.textContent = tiles;

//get a element that has a id of subTotal then update its content 
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '£' + subTotal;

//get a element that has a id of shipping then update its content 
var elShipping = document.getElementById('shipping');
elShipping.textContent = '£' + shipping;

//get a element that has a id of grandTotal then update its content 
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '£' + grandTotal;


function updateSign() {
    sign = document.getElementById('customSign').value;
    tiles = sign.length;
    subTotal = tiles * 5;
    grandTotal = subTotal + shipping;
  
    elSign.textContent = sign;
    elTiles.textContent = tiles;
    elSubTotal.textContent = '£' + subTotal;
    elGrandTotal.textContent = '£' + grandTotal;
  }