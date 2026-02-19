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

    // async
    // service
    function addAsync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(() => {
            let result = x + y;
            console.log(`   [@service] returning result`);
            return result;
        }, 4000);
        
    }

    // consumer
    function addAsyncClient(x,y){
        console.log(`[@consumer] triggering the operation`)
        let result = addAsync(x,y)
        console.log(`[@consumer] result = ${result}`);
    }

    window['addAsyncClient'] = addAsyncClient;
})()