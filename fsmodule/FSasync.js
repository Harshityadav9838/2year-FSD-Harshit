const fs= require('fs');

//write 
fs.writeFileSync('seca_student.txt', 'This is a sample text file created using fs module in Node.js.   [async]', (err) => {
    if (err) {
        console.log('Error creating file:', err);
        return;
    }
    console.log('File created successfully!');
}

)


//read

const data = fs.readFile('seca_student.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

//append

 fs.appendFile('seca_student.txt', '\nThis line is appended to the existing file.', 'utf8', (err) => {
    if (err) {
        console.log('Error appending to file:', err);
        return;
    }
    console.log('Data appended successfully!');
});

//update read 
fs.readFile('seca_student.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file:', err);
        return;
    }
    console.log('Current file content:', data);

});

//delete 

//   fs.unlink('example.txt', (err) => {
//      if (err) {
//          console.log('Error deleting file:', err);
//          return;
//      }
//      console.log('File deleted successfully!');
// });