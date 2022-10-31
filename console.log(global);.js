const timer = () =>
new Promise ((resolve, reject) =>
setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
    console.log('Timer starts')
    const startTime = performance.now ()
    await timer ()
    const endTime = performance.now ()
    console.log('Timer ended',endTime-startTime);
}

asyncFn ()