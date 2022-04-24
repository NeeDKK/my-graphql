const express = require('express');
const {buildSchema} = require('graphql');
const graphqlHTTP = require('express-graphql').graphqlHTTP;

const schema = buildSchema(`
    type Query{
        getClassMates(classNo:Int!):[String]
    }
`)

const root = {
    getClassMates({classNo}) {
        const obj = {
            31: ['张三','李四','王五'],
            61: ['张da三','李da四','王da五'],
        }
        return obj[classNo]
    }
}

const app = express();

app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue:root,
    graphiql:true
}))


app.listen(3000)