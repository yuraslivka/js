var fs = require('fs');
fs.readFile('..css/style.css', function(err, data){
  if (err) throw err;
  console.log(data);
})