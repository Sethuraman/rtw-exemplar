expect.extend({
    objectEquals(received, expected) {
      if (received.equals(expected)) {
        return {
          message: () => `Actual ${received} was ${expected}`,
          pass: true
        }
      } else {
        return {
          message: () => `Actual ${received} was not ${expected}`,
          pass: false
        }
      }
    }
  });