module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Books.belongsTo(models.Users, {
          foreignKey: 'usersId',
          as: 'books',
        });
      },
    },
  });
  return Books;
};
