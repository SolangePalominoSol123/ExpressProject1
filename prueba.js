
/*

var Bicicleta= function(id, color, modelo, ubicacion){
    this.id=id;
    this.color=color;
    this.modelo=modelo;
    this.ubicacion=ubicacion;
}

Bicicleta.prototype.toString=function(){
    return 'id:' + this.id + ' | color:' + this.color; 
}

Bicicleta.allBicis=[];

console.log(Bicicleta);

----rpta
$ node prueba.js
[Function: Bicicleta] { allBicis: [] }

*/

/*
var Bicicleta=function(modelo, color, costo){
    this.modelo=modelo;
    this.color=color;
    this.costo=costo;
}

Bicicleta.prototype.imprime=function(){
    console.log(this);
}

var bici1=new Bicicleta("montañera", "azul",20);

bici1.imprime();

----rpta
$ node prueba.js
Bicicleta { modelo: 'montañera', color: 'azul', costo: 20 }

*/

var Bicicleta=function(id,modelo, color, costo){
    this.id=id;
    this.modelo=modelo;
    this.color=color;
    this.costo=costo;
}

Bicicleta.prototype.toString=function(){
    console.log("Id: "+ this.id + " Modelo: "+ this.modelo + " Color: "+this.color+ " Costo:"+ this.costo);
}

Bicicleta.prototype.imprime=function(){
    console.log(this);
}

//parametros globales de la clase
Bicicleta.allBicis=[];
Bicicleta.cantidad=0;
Bicicleta.update = function(aBici){
    //color es un parametro de la instancia de la clase
    aBici.color="verde";
}

Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
    this.cantidad=this.cantidad+1;
    console.log(this);
}

Bicicleta.imprimeTodo=function(){
    console.log(this);
}

Bicicleta.suma=function(num){
    this.cantidad=this.cantidad+num;
    console.log(this);
}

Bicicleta.findById = function(aBiciId){
    var aBici = Bicicleta.allBicis.find(x=> x.id==aBiciId);
    if (aBici)
        //return aBici;
        aBici.color="gris";
    else
        throw new Error(`No existe una bicicleta con el id ${aBiciId}`)
}

var bici1=new Bicicleta(1,"montañera", "azul",20);
var bici2=new Bicicleta(2,"clasica", "magenta",5);

//Bicicleta.imprime();
bici1.imprime();
Bicicleta.update(bici1);
bici1.imprime();

Bicicleta.suma(20);
Bicicleta.add(bici1);
Bicicleta.add(bici2);

console.log("----------------------------------------------");
Bicicleta.findById(2);
Bicicleta.imprimeTodo();

console.log("----------------------------------------------");
var bici3=new Bicicleta(undefined,NaN, "rosado");
bici3.imprime();