// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)
// MODEL
class Stage_Events extends Model{}
Stage_Events.init({
    stage_events_id: { 
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
}, {
    sequelize,                           
    modelName: 'Stage_Events',
    tableName: 'stage_events',
    timestamps: false,
}) 
// EXPORT
module.exports = Stage_Events