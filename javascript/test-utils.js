module.exports = {
  assert(expression, expected, message) {
    if (expression !== expected) throw new Error(`
      expected: ${expected},
      received: ${expression}.
    `);
    else console.log(`Test passed! [${message}]`)
  }
}
