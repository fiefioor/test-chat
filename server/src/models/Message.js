module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('messages', {
    content: DataTypes.TEXT
  })

  Message.associate = function (models) {
    Message.belongsTo(models.User)
    Message.belongsTo(models.Conversation)
  }

  return Message
}
