(() => {
    /*
        resolve -> must be invocate when the operation was successful.
        reject -> must be invocate when the operation was failed.
    */

    const aPromise = new Promise((resolve, reject) => {
        const aNumber = 42
        // resolve(aNumber)
        reject(aNumber)
    })

    // then() -> responsible for receiving the successful awnser
    // aPromise.then(value => {
    //     console.log(value)
    // })

    // chained promisse
    // the then() method aways returns a new promisse, that's why you can chain this process.
    aPromise
        .then(value => value)
        .then(value => {
            console.log(value)
        })
        .catch((rejectValue) => {
            // the chatch() method is only invocate when an error is triggered by then() or resolve() methods.
            console.log({ rejectValue })
        })

})() // IIFE arrow function