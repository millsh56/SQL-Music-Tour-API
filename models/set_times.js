// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)
// MODEL
class SetTimes extends Model {
    static associate({ Band, Event, Stage }) {
      // BANDS
      SetTime.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // EVENT
      SetTime.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })

      // STAGE
      SetTime.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  };

Set_Times.init({
    set_time_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true,  
        autoIncrement: true 
    },
    event_id: { 
        type: DataTypes.SMALLINT, 
        foreignKey: true,
        allowNull: false 
    },
    stage_id: { 
        type: DataTypes.SMALLINT, 
        foreignKey: true,
        allowNull: false 
    },
   start_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    end_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
}, {
    sequelize,                           
    modelName: 'Set_Times',
    tableName: 'set_times',
    timestamps: false
}) 
// EXPORT
module.exports = Set_Times