const foo = () => {
  let a = 0;
  return () => {
    a++;
    return a
  };
};

const bar = foo()
// const a = bar()
// console.log(`a: `, a);
console.log(`bar: `, bar());
console.log(`bar: `, bar());
