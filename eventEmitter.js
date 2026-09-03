const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Register an event listener for the 'greet' event
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}! Welcome to the Node.js event emitter example.`);
});
myEmitter.on('exit', (name) => {
  console.log(`Goodbye, ${name}!`);
});

// Emit the 'greet' event with a name
myEmitter.emit('greet', 'harshit');
// Emit the 'exit' event
myEmitter.emit('exit', 'harshit');