// // //// 01
// const http = require('http')
// const url = require('url')
// const fs = require('fs')
// const { json } = require('stream/consumers')


// const port = 5000
// const server = http.createServer((req, res)=>{
//     const objeto =
//         {id1:1, nome1:'lucas',
//         id2:2, nome2:'luan',,
//         id3:3, nome3:'karine'}
    
//     if(req.url === '/info'){
//         res.writeHead(200, {'Content-Type':'application/json', })
//         res.write(` id: ${objeto.id1}  nome: ${objeto.nome1} `)
//         res.write(` id: ${objeto.id2}  nome: ${objeto.nome2} `)
//         res.write(` id: ${objeto.id3}  nome: ${objeto.nome3} `)
//         res.end()
//     }

// })


// server.listen(port,()=>{
//     console.log('Servidor rodando')
// })





///////// 02
// const url = require('url')
// const path = require('path')
// const address = 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf'
// const newUrl = new url.URL(address)

// const objeto = {
//     root: '',
//     dir: path.dirname(address),
//     base: path.basename(address),
//     ext: path.extname(address),
//     nome: path.basename(address, path.extname(address))

// }
// console.log(objeto)




/////// 03
// const url = require('url')

// const address = 'https://nodejs.org/api/url.html#url_new_url_input_base'
// const newUrl = new url.URL(address)

// const objeto = {
//     protocol: newUrl.protocol,
//     slashes: true,
//     host: newUrl.host,
//     port: null,
//     hostname: newUrl.hostname,
//     hash: newUrl.hash,
//     search: null,
//     query: newUrl.query,
//     pathname: newUrl.pathname,
//     path: newUrl.path,
//     href: newUrl.href

// }
// console.log(objeto)


/////// 04
/*
const fs = require('fs')
fs.rename('Antigo.txt', 'newName.txt', function(err, data){
    if(err){

    }
    console.log('Renomeado')
})

 */


////// 05
// const os = require('os')
// console.log(os.cpus())