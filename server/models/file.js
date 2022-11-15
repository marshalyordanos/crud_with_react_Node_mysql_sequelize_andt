"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  File.init(
    {
      image: DataTypes.STRING,
      video: DataTypes.STRING,
      audio: DataTypes.STRING,
      file: DataTypes.STRING,
      orginalName: DataTypes.STRING,
      size: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "File",
    }
  );
  return File;
};
