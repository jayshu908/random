import express from 'express';


const app = express();


// app.get('/', (req, res) =>{
//     res.send('Server is ready.');
// });

//get a list of 7 jokes 
app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'jas',
            content :'a b c d'
        },
        {
            id: 2,
            title: 'another joke',
            content :'a b c d'
        },
        {
            id: 3,
            title: '3rd joke',
            content :'a b c d'
        },
        {
            id: 4,
            title: '4th joke',
            content :'a b c d'
        },
        {
            id: 5,
            title: '5th joke',
            content :'a b c d'
        },
        {
            id: 6,
            title: '6th joke',
            content :'a b c d'
        },
        {
            id: 7,
            title: '7th joke',
            content :'x y s d'
        }  
    ];
    res.send(jokes);
});


const port = process.env.PORT || 3000;

app.listen(port ,  () => {
    console.log(`Server at http://localhost:${port}`);
    }
);