function cb(item) {
  console.log(item)
}

function tampil(cb) {
  let greet = 'halo'
  cb(greet)
}

tampil(cb)
