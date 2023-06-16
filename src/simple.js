const fs = require('fs')
const readline = require('readline')



//prep
fs.writeFileSync("simpletempholders.txt", "")






    
const readInterface = readline.createInterface({ 
    input: fs.createReadStream('temprawlist.txt'), 
    // output: process.stdout, 
    }); 



    readInterface.on('line', function(line) {

        doParse(line)
  



    }); 
    

       
const doParse = async (line) => {
  
    const address = line
    fs.appendFileSync("simpletempholders.txt",  `,"${address}"`)


    
   }

  