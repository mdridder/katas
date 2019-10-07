var fs = require('fs')
var path = require('path')

class WeatherData {
  constructor(fileName) {
    this.file = path.resolve(__dirname, fileName)

    this.readFile()
    this.parseData()
  }

  readFile() {
    this.text = fs.readFileSync(this.file).toString()
  }

  parseDay(text) {
    const columnData = text.split(' ').filter(column => column.length > 0)
    return {
      dy: parseFloat(columnData[0]),
      mxt: parseFloat(columnData[1]),
      mnt: parseFloat(columnData[2]),
      avt: parseFloat(columnData[3])
    }
  }

  getSpreadOfDay(data) {
    return data.mxt - data.mnt
  }

  getDayOfMinimumSpread() {
    const sortedData = this.data.sort(function(a, b) {
      return a.spread - b.spread
    })
    return sortedData[0].dy
  }

  parseData() {
    this.lines = this.text.split('\n').filter(line => line.length > 0)
    this.rawData = this.lines.slice(1, this.lines.length - 1)
    this.data = this.rawData.map(row => {
      const item = this.parseDay(row)
      item.spread = this.getSpreadOfDay(item)
      return item
    })
  }
}

module.exports = WeatherData
