function checkPassword(password) {
  return new Promise((resolve, reject) => {
    console.log('Password :', password)

    if (password != '12345') {
      return reject('wrong password')
    } else {
      return resolve('password is correct')
    }
  })
}

checkPassword('12345')
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject))

checkPassword('1987')
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject))
