

let operaciones = "";

function menu(){
    operaciones = prompt (`\ncalculadora basica
        1 - suma 
        2 - resta
        3 - multiplicaion
        4 - division
        0 - salir 
        
        elija una opcion:`);

    if(operaciones === "1" || operaciones ==="2" || operaciones === "3" || operaciones ==="4"){
        capturardatos();
        menu ();
    }
    else if(operaciones === "0" || operaciones === null){
        alert(`fin de la operaciones`);
    }else  {
        alert (`opcion no valida`);
        menu();
    }
}


function capturardatos (){
    let num1,num2;
    while (isNaN (num1)){
        num1 = prompt (`ingrese primer numero`);
    }
    while (isNaN (num2)){
        num2 = prompt (`ingrese segundo numero`);
    }
    realizarOperaciones(Number(num1),Number(num2), operaciones);
}
function realizarOperaciones (num1,num2,operaciones){
    if (operaciones === '1')
        alert(`el resultado de la SUMA es: ${num1 + num2}`);
     else if (operaciones === '2')
        alert(`el resultado de la RESTA es: ${num1 - num2}`);
     else if (operaciones === '3')
        alert(`el resultado de la MULTIPLICACION es: ${num1 * num2}`);
     else if (operaciones === '4'){
        if ( num2 !== 0 )
        alert(`el resultado de la DIVISION es: ${num1 / num2}`);
    else
    alert(`no se admite division  x 0`);
}
}
menu ();
