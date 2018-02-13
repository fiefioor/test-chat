module.exports = (sequelize, DataTypes) => {
  const ConversationUser = sequelize.define('conversation_users', {
    role: DataTypes.INTEGER
  })

  return ConversationUser
}
