void ((window) => {
  window.foo = 'bar'
  console.log(`window.foo: ${window.foo}`)
})(window)
