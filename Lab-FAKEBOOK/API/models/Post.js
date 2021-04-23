// const { sequelize } = require(".");

module.exports = ( sequelize, DataTypes ) => {
    const Post = sequelize.define('Post', {
            text: {
                type: DataTypes.TEXT,
                allowNull:false
            },
        },{
            underscored: true
        }
    );

    Post.associate = models => {
        Post.belongsTo(models.User, {
            foreignKey: {
                name: "userId",
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });
    };
    
    return Post;
};