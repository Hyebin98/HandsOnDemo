function f() {
  console.log('aaa');
  return '123'
}

let [x = f()] = [];

console.log(x)

const [a,...c] = [1,2,3]

console.log(a,c)

console.log(Number.isInteger(3.0000000000000002) )

console.log(typeof 123n)