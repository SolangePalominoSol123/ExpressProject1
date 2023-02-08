var Bicicleta = require('../../../models/bicicleta');
var request = require ('request');
var server = require ('../../../bin/www');

describe('Bicicleta APIS',()=>{

    beforeEach(()=>{
        Bicicleta.allBicis=[];
    });

    beforeEach(()=>{
        console.log('testeando...');
    });

    describe('Bicicleta GET /', ()=>{

        it('get status 200', (done)=>{
            expect(Bicicleta.allBicis.length).toBe(0);
            
            request.get('http://localhost:3000/api/bicicletas',function(error, response, body){
                expect(response.statusCode).toBe(200);
                expect(JSON.parse(body).bicicletas.length).toBe(0);
                done();
            });
        });

    });

    describe('Bicicleta POST /create', ()=>{

        it('get status 200', (done)=>{

            expect(Bicicleta.allBicis.length).toBe(0);
            
            headers={'Content-type':'application/json'};
            var aBici=`
            {
                "id":6,
                "color":"dorado",
                "modelo":"clásico",
                "lat":-12.0690041,
                "lng":-77.0756643
            }
            `;

            request.post({
                headers:headers,
                url:'http://localhost:3000/api/bicicletas/create',
                body: aBici
            },
                function(error, response, body){
                    expect(response.statusCode).toBe(200);
                    expect(Bicicleta.findById(6).color).toBe("dorado");
                    done();
            });
        });

    });

    describe('Bicicleta DELETE /delete', ()=>{

        it('get status 204', (done)=>{

            expect(Bicicleta.allBicis.length).toBe(0);
            
            headers={'Content-type':'application/json'};
            var aBici=`
            {
                "id":6,
                "color":"dorado",
                "modelo":"clásico",
                "lat":-12.0690041,
                "lng":-77.0756643
            }
            `;

            var deleteBici='{"id":6}';

            request.post({
                headers:headers,
                url:'http://localhost:3000/api/bicicletas/create',
                body: aBici
            },
                function(error, response, body){
                    expect(response.statusCode).toBe(200);
                    expect(Bicicleta.findById(6).color).toBe("dorado");


                    request.delete({
                        headers:headers,
                        url:'http://localhost:3000/api/bicicletas/delete',
                        body: deleteBici
                    },function(error, response, body){
                        expect(response.statusCode).toBe(204);
                        expect(()=>{Bicicleta.findById(6)}).toThrow(new Error('No existe una bicicleta con el id 6'));
                        done();
                    });

                  
            });
        });

    });


});