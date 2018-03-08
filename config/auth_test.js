var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./service-account-creds.json');
var doc = new GoogleSpreadsheet('16NGxNu_3v-EzwzeVdRx3oeWEB6doylTIt4Gwp-DAQ7c');

function getNoticias(callback){
    doc.useServiceAccountAuth(creds, function (err) {// Authenticate with the Google Spreadsheets API.
        doc.getRows(1, function (err, rows) {// Get all of the rows from the spreadsheet.                         
            callback(rows);    
        });
    });   
}

function salvarNoticia(){
    doc.useServiceAccountAuth(creds, function (err) {
        doc.addRow(1, { titulo: 'Ronaldo', noticia: 'Teste' }, function(err) {
            if(err) {
                console.log(err);
            }
        });
    });
} 
//salvarNoticia();

var connGoogleSheet = function(callback){    
    console.log('Conexão com GoogleSpreadsheet foi estabelecida.');
    getNoticias(function(resultado){
        callback(resultado);
    });
}
 
module.exports = function(){
    console.log('O autoload carregou o módulo de GoogleSpreadsheet com bd.');
    return connGoogleSheet;
}