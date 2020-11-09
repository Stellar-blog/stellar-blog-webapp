/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_STELLARDICTIONARY_ARN
	STORAGE_STELLARDICTIONARY_NAME
Amplify Params - DO NOT EDIT */

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
// var cors = require('cors')

// declare a new express app
var app = express()
// app.use(cors())
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});

const AWS = require("aws-sdk")
const { v4: uuidv4 } = require('uuid');
const dynamodb = new AWS.DynamoDB.DocumentClient()

app.post('/dict/addDictionary', async (req, res) => {
    const { term } = req.body
    const result = await addDictionary(term)
    res.json({
        result
    })
});

app.post('/dict/search', async (req, res) => {
    const { term } = req.body
    const result = await searchDictionary(term)
    res.json({
        result
    })
});

async function getFromDDB(id = '0') {
    const params = {
        Key: {
            id,
        },
        TableName: process.env.STORAGE_STELLARDICTIONARY_NAME
    };
    const r = await dynamodb.get(params).promise();

    if (Object.keys(r).length !== 0) return r.Item

    putToDDB({
        id: "0",
        char: "\0"
    })

    return {
        id: "0",
        char: "\0",
        words: [],
        hashMap: {}
    }
}

async function putToDDB({ id, char }) {
    const params = {
        Item: {
            id,
            char,
            words: [],
            hashMap: {}
        },
        TableName: process.env.STORAGE_STELLARDICTIONARY_NAME
    };
    await dynamodb.put(params).promise();
}

async function updateToDDB({id, words, hashMap}) {
    const updateParams = {
        Key: {
            id,
        },
        UpdateExpression: "set words = :w, hashMap = :m",
        ExpressionAttributeValues: {
            ":w" : words,
            ":m" : hashMap
        },
        TableName: process.env.STORAGE_STELLARDICTIONARY_NAME
    }
    
    await dynamodb.update(updateParams).promise();
}

async function addDictionary(input){
    async function add(string, index, root){
        if (string.length === index) {
            if (!root.words.includes(string)) {
                root.words.push(string)
                await updateToDDB(root)
            }
            return null
        }

        let child;
        if (!root.hashMap[string[index]]) {
            child = {
                id: uuidv4(),
                char: string[index],
                words: [],
                hashMap: {}
            }
            await putToDDB(child)
            root.hashMap[string[index]] = child.id
        } else {
            child = await getFromDDB(root.hashMap[string[index]])
        }

        if (!root.words.includes(string)) {
            root.words.push(string)
            await updateToDDB(root)
        }
        await add(string, index + 1, child)
    }
    const root = await getFromDDB()
    await add(input.toLowerCase(), 0, root)
}

async function searchDictionary(input) {
    const search = async (term, index, root)  => {
        const rootItem = await getFromDDB(root)

        if (term.length === index) return rootItem.words
    
        if (!rootItem.hashMap[term[index]]) return []

        return await search(term, index + 1, rootItem.hashMap[term[index]])
    }

    return await search(input.toLowerCase(), 0, "0")
}

app.listen(3000, () => {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
