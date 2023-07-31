function firstFunc (i, k) {
  console.log(i + k)
}
firstFunc(1, 3)
for (let i = 1; i < 10; i++) {
  let result = ''
  for (let j = 1; j <= i; j++) {
    result += `${j}*${i}=${j * i} \t`
  }
  console.log(result)
}
const flag = prompt('hello')
alert(flag)
