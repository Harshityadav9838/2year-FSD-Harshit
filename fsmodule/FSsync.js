const fs= require('fs');
fs.writeFileSync('secastudent.txt', 'This is a sample text file created using fs module in Node.js.', 'utf8');
console.log('File created successfully!');

//read
 const data = fs.readFileSync('secastudent.txt', 'utf8');
 console.log('File content:', data);

//append

 fs.appendFileSync('secastudent.txt', '\nThis line is appended to the existing file.   [sync]', 'utf8');
 console.log('Data appended successfully!');

//delete 

//  fs.unlinkSync('example.txt');
//  console.log('File deleted successfully!');

//folder create 

 fs.mkdirSync('myFolder');
 console.log('Folder created successfully!');

//remove folder

  fs.rmdirSync('myFolder');
 console.log('Folder removed successfully!');

if(fs.existsSync('myFolder')){
    console.log('Folder exists.');
}else{
    console.log('Folder does not exist.');
}

