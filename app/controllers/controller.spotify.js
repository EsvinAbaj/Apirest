const db = require('../config/db.config.js');
const Spotify = db.Spotify;

exports.create = (req, res) => {
    let spotify = {};

    try{
        // Building Customer object from upoading request's body
        spotify.nombrecancion = req.body.nombrecancion; 
        spotify.descripcion = req.body.descripcion;
        spotify.artista = req.body.artista;
        spotify.duracion = req.body.duracion;
        spotify.extencion = req.body.extencion;
        spotify.album = req.body.album;
        spotify.año = req.body.año;
    
        // Save to MySQL database
        Spotify.create(spotify).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Cancion Resgistrada with id = " + result.id,
                spotify: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.retrieveAllSpotifys = (req, res) => {
    // find all Customer information from 
    Spotify.findAll()
        .then(spotifyInfos => {
            res.status(200).json({
                message: "Get all Songs' Infos Successfully!",
                spotify: spotifyInfos
            });
        })
        . catch(error => {
          // log on console
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
}

exports.deleteById = async (req, res) => {
    try{
        let spotifyId = req.params.id;
        let spotify = await Spotify.findByPk(spotifyId);

        if(!spotify){
            res.status(404).json({
                message: "Does Not exist a Customer with id = " + spotifyId,
                error: "404",
            });
        } else {
            await spotify.destroy();
            res.status(200).json({
                message: "Delete Successfully a Customer with id = " + spotifyId,
                spotify: spotify,
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Can NOT delete a customer with id = " + req.params.id,
            error: error.message,
        });
    }
}