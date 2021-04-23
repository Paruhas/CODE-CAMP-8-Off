const { CardProduct , CardCode , sequelize } = require("../models");
const AppError = require("../utils/AppError")

const isNumbers = /^\d*$/;

exports.getAllAvailableCardProducts = async (req, res, next) => {
  try {
    const availableCardProducts = await CardProduct.findAll(
      {
        include: [
          {
            model: CardCode,
            where: {
              codeStatus: "AVAILABLE"
            }
          }
        ],
        where: {
          isDeleted: "NOT"
        }
      });
    res.status(200).json({ availableCardProducts });
  } catch(err) {
    next(err);
  }
};

exports.getAvailableCardProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const availableCardProduct = await CardProduct.findOne(
      { 
        where : {
          id: id,
          isDeleted: "NOT"
        }
      });

    if (!availableCardProduct) return res.status(400).json({ message: "can't get this cardProduct"});

    res.status(200).json({ availableCardProduct });
  } catch(err) {
    next(err);
  }
};

exports.createCardProduct = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    const { img , name, price } = req.body;

    const { user } = req.user;

    if ( !user || user.roleAdmin !== "ADMIN" ) {
      throw new AppError(400, "access denied, you are not allow to access this page")
    }
    
    if (!img || !img.trim()) {
      throw new AppError(400, "productImg is required");
    };
    if (!name || !name.trim()) {
      throw new AppError(400, "productName is required");
    };
    if (!price || !price.trim()) {
      throw new AppError(400, "productPrice is required");
    };
    if (!(isNumbers.test(price.split(" ")[0]))) {
      throw new AppError(400, "price must be numeric");
    };
    
    const newCardProduct = await CardProduct.create(
      {
        img: img,
        name: name.trim(),
        price: price.trim(),
        isDeleted:"NOT"
      },{
        transaction:transaction
      });
    await transaction.commit();
    res.status(201).json({ newCardProduct });
  } catch(err) {
    await transaction.rollback();
    next(err);
  }
};

exports.editStatusCardProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { isDeleted } = req.body;

    const { user } = req.user;

    if ( !user || user.roleAdmin !== "ADMIN" ) {
      throw new AppError(400, "access denied, you are not allow to access this page")
    };

    const cardProduct = await CardProduct.findOne(
      { 
        where : {
          id: id,
          isDeleted: "NOT"
        }
      });
    
    if (!cardProduct) return res.status(400).json({ message: "can't edit or change isDeleted status this id"});
    if (!isDeleted || !isDeleted.trim()) return res.status(400).json({ message: 'isDeleted is required'});

    const editCardProduct = await CardProduct.update(
      {
        isDeleted: isDeleted.trim()
      },{
        where: {
          id: id
        }
      }
      );
    res.status(200).json({
      message: editCardProduct == 1 ? {
        NOW_isDeleted: isDeleted,
        AT_id: id
      } : "no updated CardProduct; isDeleted: " + isDeleted
    });
  } catch(err) {
    next(err);
  }
};