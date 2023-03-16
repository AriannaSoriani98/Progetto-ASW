var conn = new Mongo();
var db = conn.getDB('dbsa');

// crea la collection 'alignments' e la lascia come e' se gia' esiste
db.createCollection('bookingalbatros', function(err, collection) {});
db.createCollection('bookingfaros', function(err, collection) {});
db.createCollection('bookingfloridabeaches', function(err, collection) {});
db.createCollection('bookinggranchios', function(err, collection) {});
db.createCollection('bookinghakunamatatas', function(err, collection) {});
db.createCollection('bookingmarrakeches', function(err, collection) {});
db.createCollection('bookingmexicos', function(err, collection) {});
db.createCollection('bookingoasis', function(err, collection) {});

// elimina gli eventuali documenti della collection 'alignments'
try {
   db.alignments.deleteMany( { } );
} catch (e) {
   print (e);
}

// inserisce un documento
db.bookingalbatros.insert({"dataInizio": "2023-02-20", "dataFine": "2023-02-24", "fila": 2, "postazione": 6})


// visualizza documenti esistenti
var cursor = db.alignments.find();
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}

// visualizza documenti esistenti
var cursor = db.alignments.find();
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}

