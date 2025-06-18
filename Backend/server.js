import express from 'express';


const app = express();


// app.get('/', (req, res) =>{
//     res.send('Server is ready.');
// });

//get a list of 7 jokes 
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'jas',
            content :'Why do programmers prefer dark mode? Because light attracts bugs'
        },
        {
            id: 2,
            title: 'another joke',
            content :'What is the unit of power?Student: Watt?Teacher: I said, what is the unit of power?!Student: WATT!!'
        },
        {
            id: 3,
            title: '3rd joke',
            content :'Why don’t skeletons fight each other? They don’t have the guts'
        },
        {
            id: 4,
            title: '4th joke',
            content :'Me after 5 minutes of studying: "I need a break."Me after the break: "I need a nap."'
        },
        {
            id: 5,
            title: '5th joke',
            content :'Why did the computer go to therapy? It had too many bytes from past relationships'
        },
        {
            id: 6,
            title: '6th joke',
            content :'Why did the student eat their homework? Because the teacher said it was a piece of cake.'
        },
        {
            id: 7,
            title: '7th joke',
            content :'What do you call an AI that tells jokes? ChatGPT.'
        }  
    ];
    res.send(jokes);
});


const port = process.env.PORT || 3000;

app.listen(port ,  () => {
    console.log(`Server at http://localhost:${port}`);
    }
);