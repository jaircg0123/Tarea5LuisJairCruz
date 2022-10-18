

let dato1, dato2, num1, num2, dato3, num3;

dato1 = window.prompt("Introduce Primer calificación ?", "0");
num1 = parseFloat(dato1);

dato2 = window.prompt("Introduce Segunda calificación ?", "0");
num2 = parseFloat(dato2);

dato3 = window.prompt("Introduce Tercera calificación ?", "0");
num3= parseFloat(dato3);


let media = ((num1 + num2 +num3)/3);
document.write(`<br/> <br/> La media del alumno es ${media} ` );



if(media<=5){
    document.write(`<br/> <br/> El alumno esta suspendido ` );

}else{
    document.write(`<br/> <br/> El alumno esta aprobado ` );

}



    



