module.exports = (sequelize, Sequelize) => {
	const Libros = sequelize.define('libros', {	
	  id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	  nombrelibro: {
			type: Sequelize.STRING
	  },
	  
	  editorial: {
			type: Sequelize.STRING
	  },
	  autor: {
			type: Sequelize.STRING
    },
	genero: {
			type: Sequelize.STRING
    },
	paisautor: {
		type: Sequelize.STRING
	},
	numeropaginas: {
		type: Sequelize.INTEGER
	},
	anoedicion: {
		type: Sequelize.INTEGER
	},
	preciolibro: {
		type: Sequelize.INTEGER
	},

    copyrightby: {
      type: Sequelize.STRING,
      defaultValue: 'Todos los derechos reservados'
    }
	});
	
	return Libros;
}