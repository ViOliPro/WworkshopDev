// Usei o express para criar e configurar o servidor
const express = require("express");
const server = express();
const db = require("./db.js");

//Configurar arquivos estaticos
server.use(express.static("public"))

//Habilitar uso do body
server.use(express.urlencoded({ extended: true }))

//Configuração do nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

//Criei uma rota /
// e capturo o pedido do cliente para responder
server.get("/", function (req, res) {

    //Consultar dados na tabela
    db.all(`SELECT * FROM ideas`, function (err, rows) {
        if (err) {
            console.log(err);
            return res.send("Erro no banco de dados")
        }

        const reversedIdeas = [...rows].reverse()

        let lastIdeas = []
        for (let idea of reversedIdeas) {
            if (lastIdeas.length < 2) {
                lastIdeas.push(idea);
            }
        }

        return res.render("index.html", { ideas: lastIdeas });
    })

})

server.get("/ideias", function (req, res) {

    //Consultar dados na tabela
    db.all(`SELECT * FROM ideas`, function (err, rows) {
        if (err) {
            console.log(err);
            return res.send("Erro no banco de dados")
        }
        const reversedIdeas = [...rows].reverse()

        return res.render("ideias.html", { ideas: reversedIdeas });
    })
})

server.post("/", function (req, res) {


    db.run(query, values, function (err) {
        if (err) {
            console.log(err);
            return res.send("Erro no banco de dados");
        }

        return res.redirect("/ideias")

    });
})
    //Liguei meu servidor na porta 3000P
    server.listen(3000)
