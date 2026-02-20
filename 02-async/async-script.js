(function () {
  // sync
  // service
  function addSync(x, y) {
    console.log(`   [@service] processing ${x} and ${y}`);
    let result = x + y;
    console.log(`   [@service] returning result`);
    return result;
  }

  // consumer
  function addSyncClient(x, y) {
    console.log(`[@consumer] triggering the operation`);
    let result = addSync(x, y);
    console.log(`[@consumer] result = ${result}`);
  }

  window["addSyncClient"] = addSyncClient;

  // async (callback)
  // service
  function addAsyncCallback(x, y, cbFn) {
    console.log(`   [@service] processing ${x} and ${y}`);
    setTimeout(() => {
      // will execute after 4000 ms
      let result = x + y;
      console.log(`   [@service] returning result`);
      cbFn(result);
    }, 4000);
    // control returns immediately
  }

  // consumer
  function addAsyncCallbackClient(x, y) {
    console.log(`[@consumer] triggering the operation`);
    addAsyncCallback(x, y, function (result) {
      console.log(`[@consumer] result = ${result}`);
    });
  }

  window["addAsyncCallbackClient"] = addAsyncCallbackClient;

  // async (promise)
  // service
  function addAsyncPromise(x, y) {
    console.log(`   [@service] processing ${x} and ${y}`);
    let p = new Promise(function (resolve, reject) {
      setTimeout(() => {
        let result = x + y;
        console.log(`   [@service] returning result`);
        resolve(result); // communicating the result to the 'promise'
      }, 4000);
    });
    return p;
  }

  window["addAsyncPromise"] = addAsyncPromise;

  // consumer
  /* 
    function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the operation`);
        let p = addAsyncPromise(x,y);
        p.then(function (result) {
          console.log(`[@client] result = ${result}`);
        });
    } 
    */

  // using 'async await'
  async function addAsyncPromiseClient(x, y) {
    console.log(`[@consumer] triggering the operation`);
    let p = addAsyncPromise(x, y);
    let result = await p;
    console.log(`[@consumer] result = ${result}`);
  }

  window["addAsyncPromiseClient"] = addAsyncPromiseClient;

  // For promise chaining
  // service
  function divideAsyncPromise(x, y) {
    console.log(`   [@service] processing ${x} and ${y}`);
    let p = new Promise(function (resolve, reject) {
      setTimeout(() => {
        let result = x / y;
        console.log(`   [@service] returning result`);
        resolve(result); // communicating the result to the 'promise'
      }, 4000);
    });
    return p;
  }

  window["divideAsyncPromise"] = divideAsyncPromise;
})();

// async chaining
// Follow up 'async' operation
/* 
let p2 = p.then(function (result) {
  console.log(`add result = ${result}`);
  // async
  let p2 = new Promise((resolveFn, rejectFn) => {
    setTimeout(() => {
      let divideResult = result / 5;
      resolveFn(divideResult);
    }, 4000);
  });
  return p2;
}); 
*/

// Follow up with 'sync' operation
/* 
let p2 = p.then(function (result) {
  console.log(`add result = ${result}`);
  // sync
  let divideResult = result / 5;
  let p2 = Promise.resolve(divideResult);
  return p2;
}); 

// simplified version of the above
let p2 = p.then(function(result){
    console.log(`add result = ${result}`);
    let divideResult = result / 5;
    return divideResult; // this will be wrapped in a promise and returned
})
*/

// Consuming
// Option-1
/* 
let p = addAsyncPromise(100, 200);
let p2 = p.then(function (addResult) {
  console.log(`addResult : ${addResult}`);
  let p2 = divideAsyncPromise(addResult, 5);
  return p2;
});
let p3 = p2.then(function (divideResult) {
  console.log(`divideResult : ${divideResult}`);
}); 
*/

// Option-2
/* 
addAsyncPromise(100, 200)
  .then(function (addResult) {
    console.log(`addResult : ${addResult}`);
    let p2 = divideAsyncPromise(addResult, 5);
    return p2;
  })
  .then(function (divideResult) {
    console.log(`divideResult : ${divideResult}`);
  }); 
*/

// Option-3
/* 
let addResult = await addAsyncPromise(100, 200);
console.log(`addResult : ${addResult}`);
let divideResult = await divideAsyncPromise(addResult, 5);
console.log(`divideResult : ${divideResult}`); 
*/

