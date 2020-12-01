import express from 'express';
import schema from './schema';
import {graphqlHTTP} from 'express-graphql';

const app =express();

app.get('/',(req,res) =>{
    res.send("working");
})

const root = {
    hello : () =>"Hi,I'm omer"

};

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}));

app.listen(8080 ,() => "running on port 8080");