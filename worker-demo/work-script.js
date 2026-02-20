
function doWork() {
  for (let i = 0; i < 10000; i++){
    for (let j = 0; j < 4000; j++) 
        for (let k = 0; k < 1000; k++) {}
    if (i % 100 === 0){
        let percentCompleted = (i/10000)*100
        self.postMessage({type : 'PROGRESS', percentCompleted : percentCompleted})
    }
   }

}

self.addEventListener("message", (evt) => {
  if (evt.data.type === "START") {
    doWork();
    self.postMessage({ type: "COMPLETE"});
  }
});
