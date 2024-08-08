//-------------- 30days of JS Basic coding challenge;-----------------------
// ------------------------      Day 1     ----------------------------
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

// DAY 5
// 2635  :Apply Transform Over Each Element in Array 
var map = function(arr,fn){
    n = arr.length;
    var res = new Array(n);
    for(let i = 0;i<n;i++){
        res[i]=fn(arr[i],i);
    }
    return res ;
};

// DAY 6 ;
// Filter Elements from Array ;
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
 var filter = function(arr, fn) {
    n = arr.length;
    var filteredArr = new Array();
    for(let i=0;i<n;i++){
        if(fn(arr[i],i)){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
  };


  
//   DAY 7 ;
//   Array Reduce Transformation ;
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    n = nums.length;
    val = init;
    for(let i = 0; i<n; i++){
        val=fn(val,nums[i]);
    }
    return val ;
}; 

// DAY 8 ;
// Function composition ...

var compose = function(functions) {
    n = functions.length;
    return function(x) {
        if(n==0){
            return x ;
        }
        else{
            res = x ;
            for(let i=n-1;i>=0;i--){
                res = functions[i](res);
            }
            return res ;
        }
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// DAY 9 ;;;
// 2703...
// Return length of arguments passed ...
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    // Use the rest parameter "..." to capture all arguments into an array
    return args.length;  // Access the length property of the arguments array
  };
  
  /**
   * argumentsLength(1, 2, 3); // 3
   */

//   DAY 10...
// 2666
// Allow one funtion call ...
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    c = 0;
    return function(...args){
        if(c==0){
            c++;
            return fn(...args);
        }
        else{
            return undefined ;
        }
    }
};


/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */


// DAY 11
// 2623 
// Memoize ....
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    map = {};
    return function(...args) {
        if(args in map){
            return map[args]; 
        };
        map [args] = fn(...args) ;
        return  map[args];
    }
}


// Day12 
// Add two promises ...
// 2723...
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1,promise2]).then((values)=>{
        return values[0]+values[1];
    })
};



// DAY 13
/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */


//  DAY 15
// 2725 Interval cancellation 
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args);
    const interval = setInterval(()=>fn(...args),t);
    return ()=> clearInterval(interval)
};

// Day 16 
// 2637 
// Promise Time Limit ...
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        const promises = [
            new Promise(resolve=> resolve(fn(...args))),
            new Promise((res,reject)=> setTimeout(()=> reject('Time Limit Exceeded'),t))
        ]
        return Promise.race(promises) ;
    }
};



/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */



// Day17
// jscodingchallenge
// #2622 Cache with Time limit ...

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


// Day18 
//  #2627
// Debounce function 
// Basic debounce 
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
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */



const expensiveOperation = () => {
    console.log('Performing expensive operation...');
  };
  
  const debouncedOperation = _.debounce(expensiveOperation, 300);
  
  // This will only log once, 300ms after the last call
  debouncedOperation();
  debouncedOperation();
  debouncedOperation();


//   Day19 
//   2721
//   Execute Asynchronous Functions in Parallel
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


// Day 20
// 2727
// Is OBject Empty 
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(Array.isArray(obj)){
        return obj.length===0 ;
    }
    else{
        let arr = Object.keys(obj);
        return arr.length===0
    }
};


// Day21
// 2627
// Chunk Array 
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunkedArr = [];
    
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  }


//   Day22
// 2619 
// Array Prototype last 
/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    n = this.length ;
    if(n==0){
      return -1
    } 
    return this[n-1] ;
  };
  
  /**
   * const arr = [1, 2, 3];
   * arr.last(); // 3
   */


//   Day23
//   2631
//   Group By
Array.prototype.groupBy = function(fn) {
    let obj ={}
    for (let i =0;i<this.length;i++){
        let key = fn(this[i])
        if(obj.hasOwnProperty(key))
        obj[key].push(this[i])
        else
        obj[key] = [this[i]]
     }
     return obj ;
};


// Day24
// 2724-Sort By 
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a,b)=>fn(a)-fn(b));
};


// Day25
// 2722-Join Arrays By IDs ..
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let obj = {}
    for(let i of arr1){
        obj[i.id] = i
    }
    for(let i of arr2){
         obj[i.id] = obj[i.id]?{...obj[i.id],...i}:i
    }
    return Object.values(obj);
};



// Day26
// 2625-Flatten deeply nested ... 
var flat = function (arr, n, res=[],curr=0) {
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])&&curr<n){
            flat(arr[i],n,res,curr+1)
        }
        else{
            res.push(arr[i])
        }
    }
    return res
};


// Day27
// 2705-Compact Object ...
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


// ---------------------------Day 28----------------------------
// -------------------------2694-Event Emitter------------------
class EventEmitter {
    constructor() {
        this.mp = new Map();
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(event, callback) {
        if(!this.mp.get(event)) {
            this.mp.set(event, []);
        }
        let arr = this.mp.get(event);
        arr.push(callback);
        return {
            unsubscribe: () => {
                this.mp.set(event, this.mp.get(event).filter(item => callback !==item));
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(event, args = []) {
        const arr = this.mp.get(event);
        const result = [] ;
        arr?.forEach(  callback=> {
            const temp = callback(...args);
            result.push(temp);
        })
        return result ;
    }
}



// --------------------------Day29--------------------------------------
// ------------------2695-Array wrapper------------------------------
var ArrayWrapper = function(nums) {
    this.nums = nums 
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
     return this.nums.reduce((a,b)=>a+b,0)
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return "["+String(this.nums)+"]"
}




// ------------------------Day30----------------------
// --------2726 -- Calculator with Method Chaining ----------------
class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.res = value
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.res+=value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.res-=value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
         this.res*=value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(value===0){
            throw new Error('Division by zero is not allowed')
        }
        else{
             this.res/=value
        return this
        }
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
          this.res **=value
        return this
    }
    
    /** 
     * @return {number}
     */
    getResult() {
         return this.res
    }
}
