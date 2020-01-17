const timeStampFormatter = (timeStamp) => {
  const date = timeStamp.slice(0, 10)
  const time = timeStamp.slice(11, 16)
  return `${date} at ${time}`

}

module.exports = timeStampFormatter