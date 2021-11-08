const somar = (number1, number2) => {
  const resultado = number1 + number2
  const promise = new Promise((res, rej) => {
    if (resultado % 2 === 0) {
      res(
        `O valor da soma entre ${number1} e ${number2} é igual a ${resultado}, portanto é um número par!`
      )
    } else {
      rej(
        `O valor da soma entre ${number1} e ${number2} é igual a ${resultado}, portanto é um número ímpar!`
      )
    }
  })

  promise.then(data => console.log(data)).catch(error => console.log(error))
}
