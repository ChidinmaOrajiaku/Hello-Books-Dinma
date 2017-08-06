
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    userName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Users.hasMany(models.Books, {
          foreignKey: 'usersId',
          as: 'books',
        });
      },
    },
  });
  return Users;
};
