// const { sequelize } = require(".");

module.exports = ( sequelize, DataTypes ) => {
    const Friend = sequelize.define('Friend', {
                status: {
                    type: DataTypes.ENUM,
                    values: ['PENDING', 'FRIEND', 'BLOCK'],
                    allowNull:false
            },
        },{
            underscored: true
        }
    );

    Friend.associate = models => {
        Friend.belongsTo(models.User, {
            as: "RequestTo",
            foreignKey: {
                name: "requestTo",
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });

        Friend.belongsTo(models.User, {
            as: "RequestFrom",
            foreignKey: {
                name: "requestFrom",
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });
    }

    return Friend;
};