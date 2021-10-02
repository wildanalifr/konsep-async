let punyaBuku = false

//function beli buku
const beliBuku = () => {
  new Promise((resolve) => {
    setTimeout(() => {
      punyaBuku = true
      resolve()
    }, 1000)
  })
}

//function gambar
const gambar = (judul) => {
  if (!punyaBuku) return Promise.reject('gak punya buku')
  return Promise.resolve({
    id: Date.now(),
    title: judul,
    createdAt: Date(),
  })
}

//fungsi utama
async function main() {
  if (!punyaBuku) await beliBuku()
  const hasilGambar = await gambar('Doraemon')
  console.log(hasilGambar)
}

main()
