//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá faazer operações no banco de dados 
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//db.serialize(() => {
   /*  //criar tabela com comandos SQL
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        ); 
    `)


//inserir dados na tabela
const query = `INSERT INTO places (
    image,
    name,
    address,
    address2,
    state,
    city,
    items
) VALUES (?,?,?,?,?,?,?);`

const values = [
    "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "Colectoria",
    "Guilherme Gemalla, Jardim América",
    "N° 260",
    "Santa Catarina",
    "Rio do Sul",
    "Resíduos Eletrônicos, Lâmpadas"
]

function afterInsertData(err){
    if(err) {
        return console.log(err)
    }

    console.log("Cadastrado com sucesso")
    console.log(this)
}

db.run(query, values, afterInsertData)

//consultar dados na tabela
 db.all(`SELECT * FROM places`, function(err, rows) {
    if(err) {
        return console.log(err)
    }

    console.log("Aqui estao seus registros: ")
    console.log(rows)
})  */ 

//deletar dados na tabela
/* db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
   if(err) {
        return console.log(err)
    }

    console.log("Registro deletado com sucesso!")
}) */
//}) 

