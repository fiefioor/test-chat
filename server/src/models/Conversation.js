module.exports = (sequelize, DataTypes) => {
  const Conversation = sequelize.define('Conversation', {
    title: DataTypes.STRING
  })

  Conversation.associate = function (models) {
  }

  return Conversation
}
