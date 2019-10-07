const WeatherData = require('./weather')

const weatherData = new WeatherData('./data/weather.dat')

test('Load weather data file', () => {
  expect(weatherData.text.length > 0).toBe(true)
})

test('Have all raw data available', () => {
  expect(weatherData.rawData.length).toBe(30)
})

test('Parse weather data for a day', () => {
  expect(
    weatherData.parseDay(
      '   1  88    59    74          53.8       0.00 F       280  9.6 270  17  1.6  93 23 1004.5'
    )
  ).toStrictEqual({ dy: 1, mxt: 88, mnt: 59, avt: 74 })
  expect(
    weatherData.parseDay(
      '   9  86    32*   59       6  61.5       0.00         240  7.6 220  12  6.0  78 46 1018.6'
    )
  ).toStrictEqual({ dy: 9, mxt: 86, mnt: 32, avt: 59 })
})

test('Parse all data', () => {
  expect(weatherData.data.length).toBe(30)
})

test('Get temperatue spread for a day', () => {
  expect(weatherData.getSpreadOfDay({ dy: 1, mxt: 88, mnt: 59, avt: 74 })).toBe(
    29
  )
  expect(weatherData.getSpreadOfDay({ dy: 9, mxt: 86, mnt: 32, avt: 59 })).toBe(
    54
  )
})

test('Get minimum spread', () => {
  expect(weatherData.getDayOfMinimumSpread()).toBe(14)
})
