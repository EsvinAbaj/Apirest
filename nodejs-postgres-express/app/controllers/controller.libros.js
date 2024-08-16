const db = require('../config/db.config.js');
const Libros = db.Libross;

exports.create = (req, res) => {
    let libros = {};

    try{
        // Building Customer object from upoading request's body
        libros.nombrelibro = req.body.nombrelibro; 
        libros.editorial = req.body.editorial;
        libros.autor = req.body.autor;
        libros.genero = req.body.genero;
        libros.paisautor = req.body.paisautor;
        libros.numeropaginas = req.body.numeropaginas;
        libros.anoedicion = req.body.anoedicion;
        libros.preciolibro = req.body.preciolibro;
    
        // Save to MySQL database
        Libros.create(libros).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Libro Registrado with id = " + result.id,
                libros: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

