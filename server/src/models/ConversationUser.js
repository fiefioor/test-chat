module.exports = (sequelize, DataTypes) => {
  const ConversationUser = sequelize.define('ConversationUser', {
    role: DataTypes.INTEGER
  })

  ConversationUser.associate = function (models) {
    ConversationUser.belongsTo(models.User)
    ConversationUser.belongsTo(models.Conversation)
  }

  return ConversationUser
}
