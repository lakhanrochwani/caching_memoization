function addN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.log('Inside', sum);
  return sum;
}
console.time('time0');
addN(50);
console.timeEnd('time0');

function mem_fn(fn) {
  let cache = [];
  return function (n) {
    let idx = n.toString();
    if (cache[idx] === undefined) {
      console.log('index', idx, cache);
      cache[idx] = fn(n);
    }
    console.log('Cached', cache[idx], cache);
    return cache[idx];
  };
}
let mem = mem_fn(addN);
console.time('time1');
mem(50);
console.timeEnd('time1');

console.time('time2');
mem(50);
console.timeEnd('time2');
