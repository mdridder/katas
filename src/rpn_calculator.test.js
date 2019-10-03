const rpn = require('./rpn_calculator')

test('1', () => {
  const input = '1'
  expect(rpn(input)).toBe(1)
})

test('1 2 +', () => {
  const input = '1 2 +'
  expect(rpn(input)).toBe(3)
})

test('20 5 /', () => {
  const input = '20 5 /'
  expect(rpn(input)).toBe(4)
})

test('4 2 + 3 -', () => {
  const input = '4 2 + 3 -'
  expect(rpn(input)).toBe(3)
})

test('3 5 8 * 7 + *', () => {
  const input = '3 5 8 * 7 + *'
  expect(rpn(input)).toBe(141)
})

test('15 7 1 1 + - / 3 * 2 1 1 + + -', () => {
  const input = '15 7 1 1 + - / 3 * 2 1 1 + + -'
  expect(rpn(input)).toBe(5)
})

test('15 7 1 1 + - / 3 * 2 1 1 + + -', () => {
  const input = '15 7 1 1 + - / 3 * 2 1 1 + + -'
  expect(rpn(input)).toBe(5)
})

test('9 SQRT', () => {
  const input = '9 SQRT'
  expect(rpn(input)).toBe(3)
})

test('5 8 1 4 2 MAX', () => {
  const input = '5 8 1 4 2 MAX'
  expect(rpn(input)).toBe(8)
})
