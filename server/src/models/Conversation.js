module.exports = (sequelize, DataTypes) => {
  const Conversation = sequelize.define('Conversation', {
    name: DataTypes.STRING,
    topic: DataTypes.STRING
  })

  Conversation.associate = function (models) {
    Conversation.hasMany(models.ConversationUser)
    Conversation.hasMany(models.Message)
  }

  return Conversation
}
