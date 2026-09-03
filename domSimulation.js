const {EventEmitter} = require('events');
class Button extends EventEmitter {}
const button = new Button();

// Register an event listener for the 'click' event
button.on('click', () => {
  console.log('Button was clicked!');
});
button.on('mouseover', () => {
  console.log('Mouse is over the button!');
});
// Emit the 'click' event
button.emit('click');
// Emit the 'mouseover' event
button.emit('mouseover');