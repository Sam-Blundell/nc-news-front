const { expect } = require('chai')
const timeStampFormatter = require('../utils')


describe('timeStampFormatter', () => {
  it('should return a string when passed a string', () => {
    expect(timeStampFormatter('2018-05-30T15:59:13.341Z')).to.be.a('string')
  });
  it('should correctly format the timestamp string to a string containing a date and time', () => {
    expect(timeStampFormatter('2018-05-30T15:59:13.341Z')).to.equal('2018-05-30 at 15:59')
  })
});