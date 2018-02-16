module.exports = {
  logData (message) {
    let now = new Date()
    let time = '[' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + '] '

    console.log(time + message)
  }
}
