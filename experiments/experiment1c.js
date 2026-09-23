// visualize the event loop using setTimeout ,setImmediate, and process.nextTick in Node.js.


process.nextTick(() => {
    console.log("Next tick");
});

setImmediate(() => {
    console.log("Set immediate");
});

setTimeout(() => {
    console.log("Set timeout");
}, 0);
