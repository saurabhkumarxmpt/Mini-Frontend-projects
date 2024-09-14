const Value=document.getElementById('Value');
const buttons=document.getElementsByTagName('button');

let value=0

Value.innerHTML=value;

buttons[0].addEventListener('click',function(){
    value==value-1
})