var Bicicleta = require('../../models/bicicleta');

beforeEach(()=>{
    Bicicleta.allBicis=[];
});

describe('Bicicleta all_bicis', ()=>{
    it('comienza vacía', ()=>{
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});

describe('Bicicletas add_bici',()=>{
    it('añade una bicicleta', ()=>{
        expect(Bicicleta.allBicis.length).toBe(0);
        var aBici=new Bicicleta(3,'morado', 'petfriendly', []);
        Bicicleta.add(aBici);
        expect(Bicicleta.allBicis.length).toBe(1);
    });
});

describe('Bicicleta findById', ()=>{
    it('encuentra la bicicleta correcta con id:2', ()=>{
        expect(Bicicleta.allBicis.length).toBe(0);

        var aBici1=new Bicicleta(1,'azul', 'clasica', []);
        var aBici2=new Bicicleta(2,'verde', 'montañera', []);

        Bicicleta.add(aBici1);
        Bicicleta.add(aBici2);

        expect(Bicicleta.allBicis.length).toBe(2);

        var biciAux=Bicicleta.findById(2);

        expect(biciAux.id).toBe(2);
        expect(biciAux.color).toBe(aBici2.color);
        expect(biciAux.modelo).toBe(aBici2.modelo);
    });
});

describe('Bicicleta removeById', ()=>{
    it('elimina la bicicleta con id:2', ()=>{

        let id=2;

        expect(Bicicleta.allBicis.length).toBe(0);

        var aBici1=new Bicicleta(1,'azul', 'clasica', []);
        var aBici2=new Bicicleta(2,'verde', 'montañera', []);

        Bicicleta.add(aBici1);
        Bicicleta.add(aBici2);

        expect(Bicicleta.allBicis.length).toBe(2);

        Bicicleta.removeById(id);
        
        expect(Bicicleta.allBicis.length).toBe(1);

        expect(()=>{
            Bicicleta.findById(id);
        }).toThrow(new Error(`No existe una bicicleta con el id ${id}`));
        
    });
});