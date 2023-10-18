const express = require('express');

// Creating an Express application
const app = express();

// Defining a route for the root URL
app.get('/myfiles/', (req, res) => {
  res.send('This is about page');
});

app.get('/myfiles/',(req,res)=>{
  res.send('This is home page');
})

app.get('/myfiles/', (req, res) => {
  res.send('This is contact page');
})

// Starting the server on port 3000
app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
