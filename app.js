// Express server
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.get('/getCurrentDAte', (req, res) => {
    const date = new Date();
    res.json({'currentDate':date});
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});



