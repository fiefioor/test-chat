module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    content: DataTypes.TEXT
  })

  Message.associate = function (models) {
    Message.belongsTo(models.User)
    Message.belongsTo(models.Conversation)
  }

  return Message
}
