const buttons=document.getElementsByTagName('button');
let value=0;
buttons[0].addEventListener('click',function(){
    value=value-1;
    if(value==0){
        alert('value is 0')
    }
    else{
        document.getElementById('Value').innerHTML=value;
    }
})
buttons[2].addEventListener('click',function(){
    value=value+1;
        document.getElementById('Value').innerHTML=value;

})
buttons[1].addEventListener('click',function(){
    value=0;
        document.getElementById('Value').innerHTML=value;
})