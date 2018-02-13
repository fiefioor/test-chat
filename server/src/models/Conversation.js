module.exports = (sequelize, DataTypes) => {
  const Conversation = sequelize.define('conversations', {
    title: DataTypes.STRING
  })

  return Conversation
}
