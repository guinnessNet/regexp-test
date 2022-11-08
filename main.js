let str = `
010-1234-5678.
thesecon@gmail.com
https://www.omdbapi.com/?apikey=351354s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
동해물과 백두산이 마르고 닳도록
`

console.log(
  str.match(/(?<=@).{1,}/g)
)