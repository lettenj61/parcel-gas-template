(async () => {
  await hello()
})()

async function hello() {
  window.alert('Hello!')

  return await {}
}