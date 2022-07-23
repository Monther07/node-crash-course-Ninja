const fs = require('fs');

// // reading files
// fs.readFile('./doc/blog12.txt' , (err, data) => {
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString())
// });

// console.log('last line');


// // Writing files
// fs.writeFile('./doc/blog4.text', "Monther is here 2", () => {
//     console.log('File was Written')
// });

// // Direction 
// if( !fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if (err){
//             console.log(err);
//         }
//             console.log('folder created');
//         });
// }else {
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted')
//     })
// }


// deleting files
if (fs.existsSync('./doc/deleteme.txt')){
    fs.unlink('./doc/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('File Deleted')
    })
}