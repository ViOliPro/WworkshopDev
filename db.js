const sqLite3 = require('sqlite3').verbose();
const db = new sqLite3.Database('./ws.db');

db.serialize(function () {
    //Criar a tabela
    db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
    )
    `)
});


module.exports = db;

/*
//Deletar um dado do meu banco de dados
db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err){
    if(err) return console.log(err)
    console.log("DELETEI", this)
})
*/

