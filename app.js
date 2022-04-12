
const colors= ['red','yellow','blue','purple','green','orange','gray','pink','cyan','brown','turquoise','mint']
const finalAnswer=['redrojo','yellowamarillo','blueazul','purplemorado','greenverde','orangenaranja','graygris','pinkrosado','cyancian','brownmarron','turquoiseturqueza','mintmenta'];

//FUNCION COLOR RANDOM//
const randomColor= ()=>
{
const newColor= Math.round(Math.random()*colors.length);
    let finalcolor= colors[newColor];
    return finalcolor;
}
 //^FUNCION COLOR RANDOM ^//
 //AGREGANDO COLOR AL BOTON//
const boton= document.querySelector('button');

function colorize(){
    this.style.backgroundColor=randomColor();
}
//^AGREGANDO COLOR AL BOTON^//
boton.addEventListener('click',colorize);
//CAMPOS DE INPUT//
const ingles= document.querySelector('.ingles')

let field= document.createElement('input');
field.type='text';
field.className='fieldClass';
ingles.appendChild(field);

const espanol= document.querySelector('.espanol');
let field2= document.createElement('input');
field2.type='text';
field2.className='field2Class';
espanol.appendChild(field2);
//^CAMPOS DE INPUT^//

function returnText(){
    let input= field.value;
    let input2= field2.value;
    let finalInput= input+input2;
    return finalInput;

}

function resultado(){
if(finalAnswer.includes(returnText())){alert('CONGRATS YOU WIN!!')}
else{alert ('fail')}
}

