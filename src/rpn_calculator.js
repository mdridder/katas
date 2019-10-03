function rpn_calculator(input) {
  const result = new Array()
  const data = input.split(' ')
  const operators = {
    '+': function(stack) {
      return stack.pop() + stack.pop()
    },
    '/': function(stack) {
      const value = stack.pop()
      return stack.pop() / value
    },
    '-': function(stack) {
      const value = stack.pop()
      return stack.pop() - value
    },
    '*': function(stack) {
      return stack.pop() * stack.pop()
    },
    SQRT: function(stack) {
      return Math.sqrt(stack.pop())
    },
    MAX: function(stack) {
      const items = []
      while (stack.length > 0) {
        items.push(stack.pop())
      }
      return Math.max(...items)
    }
  }

  data.forEach(item => {
    if (Object.keys(operators).includes(item)) {
      result.push(operators[item](result))
    } else {
      const number = parseInt(item)
      result.push(number)
    }
  })

  return result[0]
}

module.exports = rpn_calculator
