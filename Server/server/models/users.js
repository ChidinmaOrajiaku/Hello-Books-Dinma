
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    // allowNull: false,
  },
  {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        // Users.hasMany(models.books, {
        //   foreignKey: 'usersId',
        //   as: 'books',
        // });
      },
    },
  });
  return Users;
};
