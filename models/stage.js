// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)
// MODEL
class Stage extends Model {
    static associate({ Event, StageEvent, SetTime }) {
      // EVENTS
      Stage.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "events",
        through: StageEvent
      })

      // SET TIMES
      Stage.hasMany(SetTime, {
        foreignKey: "stage_id",
        as: "set_times"
      })
    }
  }
  
Stage.init({
    stage_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true,  
        autoIncrement: true 
    },
    stage_name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
}, {
    sequelize,                           
    modelName: 'Stage',
    tableName: 'stage',
    timestamps: false
}) 
// EXPORT
module.exports = Stage