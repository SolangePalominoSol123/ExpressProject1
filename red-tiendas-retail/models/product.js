var Product=function(id, nombre, precio, localId, cantidad){
    this.id=id;
    this.nombre=nombre;
    this.precio=precio;
    this.localId=localId;
    this.cantidad=cantidad;
}

Product.prototype.toString=function(){
    console.log("Id: " + this.id + " , Nombre: " + this.nombre + ", Precio: " + this.precio + ", LocalId: " + this.localId + ", Cantidad: " + this.cantidad);
}

Product.productos_lista=[];
Product.add=function(aProducto){
    this.productos_lista.push(aProducto);
}

Product.getNewId=function(){
    var cant=this.productos_lista.length;
    var lastId=this.productos_lista[cant-1].id;
    return lastId+1;
}

Product.update=function(aProducto){
    for(var i=0;i<this.productos_lista.length;i++){
        if(aProducto.id==this.productos_lista[i].id){
            this.productos_lista.splice(i,1,aProducto);
            break;
        }
    }
}

Product.getById=function(idSearch){
    var prod=Product.productos_lista.find(x=> x.id==idSearch);
    if(prod){
        return prod;
    }else{
        throw new Error(`No se ha encontrado ningún producto con id ${idSearch}`);
    }
}

Product.removeById=function(idSearch){
    var i=0;
    for(i=0;i<this.productos_lista.length;i++){
        if(idSearch==this.productos_lista[i].id){
            this.productos_lista.splice(i,1);
            break;
        }
    }
}

var prod1=new Product(1,"Taza", 20, 1, 23);
var prod2=new Product(2,"Biberon", 7.5, 1, 50);

Product.add(prod1);
Product.add(prod2);

module.exports=Product;