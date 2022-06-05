// Express is a minimal and flexible Node.js web application framework that provides a 
// robust set of features to develop web and mobile applications. It facilitates the rapid
//  development of Node based Web applications.

// Allows to Define a routing table which is used to perform different actions based on 
// HTTP Method and URL.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors()) 


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