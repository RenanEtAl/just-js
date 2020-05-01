// new features

// globalThis

console.log(frames);
console.log(window);
console.log(this);

console.log(globalThis); // <-----------

// promise

Promise.allSettled();
// find if all the promises you want to execute are settled aka resolved/rejected

const p1 = new Promise((resolve, reject) => setTimeout(resolve, 200));
// this promise is guaranteed to be resolved
const p2 = new Promise((resolve, reject) => setTimeout(reject, 300));
const p3 = new Promise((resolve, reject) => setTimeout(resolve, 4000));

Promise.allSettled([p1, p2, p3]).then((results) =>
  results.forEach((result) => console.log(result))
);

// nullish coalescing operator
let x = {
  profile: {
    name: 'john',
    age: 21
  }
};

// print the name of the object (??)
// what if name dne

console.log(x.profile.name) // prints john if name: 'john' is deleted, it becomes undefined

console.log(x.profile.name ?? 'john') // it will only execute if it's undefined or null

// optional chaining operator (?.)
let x = {
  profile: {
    name: 'john',

  }
};

console.log(x.profile.age); // output is undefined
console.log(x && x.profile && x.profile.name); // output is undefined without profile and name
// new way to write it
console.log(x?.profile?.name) // if it doesn't exist then don't run it (optional)

//BigInt

const max = Number.MAX_SAFE_INTEGER; // 16 len

console.log(max + 1)
console.log(max + 2)
// may give you the same value... unstable

const bigOne = 1n

console.log(bigOne + 1n) // 1n
console.log(bigOne + 2n) // 3n

// convert from another data type to BigInt

const BigTwo = BigInt('1')

console.log(BigTwo) // convert it too BigInt:  1n




