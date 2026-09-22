const fs= require('fs').promises;

//write
async function writeFile() {
    try {
        await fs.writeFile('promises.txt', 'This is a sample text file created using fs module in Node.js.  [promises]', 'utf8');
        console.log('File written successfully!');
    } catch (err) {
        console.error('Error writing file:', err);
    }
}

writeFile();

//read file
async function readFile() {
    try {
        const data = await fs.readFile('promises.txt', 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

readFile();

//update file
async function updateFile() {
    try {
        await fs.appendFile('promises.txt', '\nThis line is appended to the existing file.', 'utf8');
        console.log('File updated successfully!');
    } catch (err) {
        console.error('Error updating file:', err);
    }
}

updateFile();

//rename file
async function renameFile() {
    try {
        await fs.rename('promises_new.txt', 'renamedPromises.txt');
        console.log('File renamed successfully!');
    } catch (err) {
        console.error('Error renaming file:', err);
    }
}

renameFile();

//delete file
async function deleteFile() {
    try {
        await fs.unlink('example.txt');
        console.log('File deleted successfully!');
    } catch (err) {
        console.error('Error deleting file:', err);
    }
}

deleteFile();