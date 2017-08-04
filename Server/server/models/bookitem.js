
module.exports = (sequelize, DataTypes) => {
  const BookItem = sequelize.define('BookItem', {
    content: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        BookItem.belongsTo(models.Books, {
           foreignKey: 'booksId'
        });
      }
    }
  });
  return BookItem;
};
