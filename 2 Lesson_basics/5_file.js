// shahadat hossain
// id: 201-15-13593
const fs = require('fs');


// reading files

fs.readFile('./docs/blog1.txt', (err, data) =>{
    if (err){
        console.log(arr);

    }
   console.log(data.toString());
});


console.log('last line');

// writing files


fs.writeFile('./docs/blog1.txt', 'I am a student of Daffodil  International University. id: 201-15-13593', () => {
    console.log('The file is written.')
});

fs.writeFile('./docs/blog2.txt', 'I am a student of Daffodil  International University.id: 201-15-13593', () => {
    console.log('The file is written.')
});

// directores

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder created');
    });
}else{
    fs.rmdir('./assets', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('Folder Deleted');
    })
}
    



// deleting files

if (fs.existsSync("./docs/deletme.txt")){

    fs.unlink('./docs/deletme.txt', () => {
       if (err){
           console.log(err)
       } 
       console.log('file deleted');
    } );

}

