const express = require('express');
const app = express();

const bodyParser = require('body-parser');


//connect Database

//Middleware

app.use(express.json({ extended: false }));

// all routes 
app.get('/', (req, res) => res.send('API Running'));
app.use('/api/user', require('./Routes/API/User'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

//PORT 

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));