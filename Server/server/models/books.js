module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    category: DataTypes.STRING,
    // allowNull: false,
  },
  {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Books.hasMany(models.books, {
          foreignKey: 'usersId',
          as: 'books',
        });
      },
    },
  });
  return Books;
};
