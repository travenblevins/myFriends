// Express server
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
const friends =[]

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.get('/getCurrentDate', (req, res) => {
    const date = new Date();
    res.json({ 'currentDate': date });
})

app.get('/search', (req, res) => {
    const name = req.query.name;
    res.json({ 'name': name });
})

app.post('/addFriend', (req, res) => {
    const { name, email, phone, age } = req.body;
    const friend = {
        name,
        email,
        phone,
        age
    };
    friends.push(friend);
    res.json({ friend });
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});



