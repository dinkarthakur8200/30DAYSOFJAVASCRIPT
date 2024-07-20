// 30days of JS Basic coding challenge;
// Day 1...
// Ques. 1
// Write a function .It should return a new function that always
// return "Hello World "
function createHelloWorld () {
    function innerfn (){
        return "Hello World";
    }
    return innerfn ;
}
const f = createHelloWorld() ;
console.log(f(12));

// Ques.2
// Given an integer 'n' ,return a counter function.This counter initially return n and then 1 more than the previous value every sunsequent time is called (n,n+1,n+2 etc).
function createCounter(n) {
    let count = n; // Initialize count with n

    // Define the counter function (closure)
    function counterFn(increment = true) {
        const currentValue = count;
        count += increment ? 1 : -1; // Increment or decrement based on context
        return currentValue;
    }

    return counterFn; // Return the counter function
}

// Usage examples:
const incrementCounter = createCounter(10);
console.log(incrementCounter()); // Output: 10 (initial value)
console.log(incrementCounter()); // Output: 11 (incremented)
console.log(incrementCounter()); // Output: 12 (incremented)

const decrementCounter = createCounter(5);
console.log(decrementCounter(false)); // Output: 5 (initial value)
console.log(decrementCounter(false)); // Output: 4 (decremented)
console.log(decrementCounter(false)); // Output: 3 (decremented)

// Day3 
// Question 3 = To Be or Not to Be !!
function expect(val1){
    return{
        toBe(val2){
            if(val2 !== val2){
                throw new Error("Not Equal");
            }
            return true ;
        },
        NotToBe(val2){
            if(val1 === val2){
                throw new Error("Equal");
            }
            return true;
        },
    };
};
// Example usage ;;;;
const result = expect(21);
result.toBe(21);
result.NotToBe(23);
result.toBe(23);

// Day4 question 4;;;
// Counter function 2;
function createCounter(init){

    let currentvalue = init ;
    // initilize the function 
    return{
        increment(){
            currentvalue += 1
            return currentvalue ;
        },
        decrement(){
            currentvalue -= 1
            return currentvalue ;
        },
        reset(){
            currentvalue = init
            return currentvalue ;
        },
    }
}
// Example usage 
const counter1 = createCounter(5);
console.log(counter1.increment());
console.log(counter1.decrement());
console.log(counter1.reset());

const counter2 = createCounter(0);
console.log(counter2.increment()); // 1
console.log(counter2.increment()); // 2
console.log(counter2.decrement()); // 1
console.log(counter2.reset()); // 0
console.log(counter2.reset()); // 0


// day17
// jscodingchallenge
var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration){
    var found = this.cache.has(key) ;
    if(found){
        clearTimeout(this.cache.get(key)[1])
    };
    const timer = setTimeout(()=>this.cache.delete(key),duration) ;
    this.cache.set(key,[value,timer]);
    return found ;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.cache.has(key)){
        return this.cache.get(key)[0];
    }
    return -1 ;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size ;
};

/**
 * 
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

// Debounce function 
// Basic debounce 
const expensiveOperation = () => {
    console.log('Performing expensive operation...');
  };
  
  const debouncedOperation = _.debounce(expensiveOperation, 300);
  
  // This will only log once, 300ms after the last call
  debouncedOperation();
  debouncedOperation();
  debouncedOperation();

//   Execute Asynchronous Functions in Parallel
//   day18
var promiseAll = function(functions){
    return new Promise((resolve,reject)=>{
        let result = []
        let pending = functions.length;
        functions.forEach((fn,i)=>{
            fn().then((value)=>{
                result[i]=value
                pending--;

                if(pending==0){
                    resolve(result);
                }
            }).catch(err=>{
                reject(err);
            })
        })
    })
};

// Compact array from original array !!

var compactObject = function(obj) {
    if(typeof obj==='object'){
      if(Array.isArray(obj)){
          let temp=[]
          for(let i=0;i<obj.length;i++){
              if(Boolean(obj[i])) temp.push(compactObject(obj[i]))
          }
          return temp
      }
      else{
          let temp={}
          for(let i in obj){

              if(Boolean(obj[i])) temp[i]=compactObject((obj[i]))
          }
          return temp
      }
  }
  return obj
};
