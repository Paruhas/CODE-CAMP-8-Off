module.exports = ( sequelize, DataTypes ) => {
    const Product = sequelize.define('Product', {
            name: {
                type: DataTypes.STRING,
                allowNull:false
            },
            imgUrl: {
                type: DataTypes.STRING
            }
        },{
            underscored: true
        }
    );

    return Product;
};