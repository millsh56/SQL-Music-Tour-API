// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)
// MODEL
class MeetGreet extends Model {
    static associate({ Band, Event }) {
      // BAND
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // EVENT
      MeetGreet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
    }
  }
Meet_Greet.init({
    meet_greet_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true,  
        autoIncrement: true 
    },
    event_id: { 
        type: DataTypes.SMALLINT, 
        foreignKey: true,
        allowNull: false 
    },
    band_id: { 
        type: DataTypes.SMALLINT, 
        foreignKey: true,
        allowNull: false 
    },
   meet_start_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    meet_end_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
}, {
    sequelize,                           
    modelName: 'Meet_Greet',
    tableName: 'meet_greet',
    timestamps: false
}) 
// EXPORT
module.exports = Meet_Greet