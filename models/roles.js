"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.hasMany(User, { foreignKey: "roleId", as: "User" });
    }
  }
  Roles.init(
    {
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Roles",
    }
  );
  return Roles;
};
