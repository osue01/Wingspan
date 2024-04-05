const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const db = require ('../db/index.js');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comment',
  }
);

module.exports = Post;
