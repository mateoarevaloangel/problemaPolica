
var lib = require('readline');
var readline = require('readline');
function input(){
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('ingrese la entrada:', function (respuesta) {
  entrada=respuesta;
  clave(respuesta)

  rl.close();
});
}

function clave(x){

    console.log("Escribe la entrada");
    var answer=[];
    answer.push(4);//cero
    answer.push(3);//uno
    answer.push(3);//dos
    answer.push(4);//tres
    answer.push(6);//cuatro
    answer.push(5);//cinco
    answer.push(4);//seis
    answer.push(5);//siete
    answer.push(4);//ocho
    answer.push(5);//nueve
    answer.push(4);//diez
    answer.push(4);//once
    answer.push(4);//doce
    answer.push(5);//trece
    answer.push(7);//catorce
    answer.push(6);//quince
    answer.push(9);//dieciséis
    answer.push(10);//diecisiete
    answer.push(9);//dieciocho
    answer.push(10);//diecinueve
    answer.push(6)//veinte
    console.log("la clave es: "+answer[x]);
    //return answer[x];

}
input();

