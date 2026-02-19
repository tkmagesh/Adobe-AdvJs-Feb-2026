(function(){
    // sync
    // service
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        let result = x + y
        console.log(`   [@service] returning result`);
        return result
    }

    // consumer
    function addSyncClient(x,y){
        console.log(`[@consumer] triggering the operation`)
        let result = addSync(x,y)
        console.log(`[@consumer] result = ${result}`);
    }

    window['addSyncClient'] = addSyncClient;

    // async (callback)
    // service
    function addAsyncCallback(x,y, cbFn){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(() => {
            // will execute after 4000 ms
            let result = x + y;
            console.log(`   [@service] returning result`);
            cbFn(result);
        }, 4000);
        // control returns immediately
    }

    // consumer
    function addAsyncCallbackClient(x,y){
        console.log(`[@consumer] triggering the operation`)
        addAsyncCallback(x, y, function (result) {
          console.log(`[@consumer] result = ${result}`);
        });
    }

    window['addAsyncCallbackClient'] = addAsyncCallbackClient;

    // async (promise)
    // service
    function addAsyncPromise(x, y) {
      console.log(`   [@service] processing ${x} and ${y}`);
      let p = new Promise(function(resolve, reject){
        setTimeout(() => {
          let result = x + y;
          console.log(`   [@service] returning result`);
          resolve(result); // communicating the result to the 'promise'
        }, 4000);
      })
      return p;
    }


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
      let result = await p
      console.log(`[@consumer] result = ${result}`);
    }

    window["addAsyncPromiseClient"] = addAsyncPromiseClient;
})()