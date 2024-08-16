module.exports = (sequelize, Sequelize) => {
	const Spotify = sequelize.define('spotify', {	
	  id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	  nombrecancion: {
			type: Sequelize.STRING
	  },
	  
	  descripcion: {
			type: Sequelize.STRING
	  },
	  artista: {
			type: Sequelize.STRING
    },
	artista: {
			type: Sequelize.STRING
    },
	duracion: {
		type: Sequelize.INTEGER
	},
	extencion: {
		type: Sequelize.STRING
	},
	album: {
		type: Sequelize.STRING
	},
	año: {
		type: Sequelize.INTEGER
	},

    copyrightby: {
      type: Sequelize.STRING,
      defaultValue: 'Todos los derechos reservados'
    }
	});
	
	return Spotify;
}