const express = require('express')
const apiRouter = require('./routes')
const app = express()


app.use(express.json())

app.use('/api/chirps', apiRouter);

// app.get('/', (req, res) => {
//      res.json({message:'hello'});
// });


app.listen(8080, () => {
    console.log(`Server started on port 8080`);
});

