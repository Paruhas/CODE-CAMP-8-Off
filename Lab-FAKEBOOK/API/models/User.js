// const { sequelize } = require(".");

module.exports = ( sequelize, DataTypes ) => {
    const User = sequelize.define('User', {
            email: {
                type: DataTypes.STRING,
                allowNull:false,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            profileImg: {
                type: DataTypes.STRING
            },
            status: {
                type: DataTypes.STRING
            },
            location: {
                type: DataTypes.STRING
            },
        },{
            underscored: true
        }
    );

    User.associate = models => {
        User.hasMany(models.Post, {
            foreignKey: {
                name: "userId",
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });

        User.hasMany(models.Friend, {
            as: "RequestTo",
            foreignKey: {
                name: "requestTo",
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });

        User.hasMany(models.Friend, {
            as: "RequestFrom",
            foreignKey: {
                name: "requestFrom",
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });

    }

    return User;
};