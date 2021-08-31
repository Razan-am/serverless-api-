'use strict';

const peopleSchema = require('./schema');

exports.handler = async(event)=>{

    try{
        const id = event.pathParameters ? event.pathParameters.id : null;
        const {name,hobby,major} = JSON.parse(event.body);
        let result = await peopleSchema.update({id:id},{name,hobby,major});

        return{
            statusCode: 200,
            body: JSON.stringify(result)
        }
    }catch(error){
        return{
            statusCode: 500,
            message: error.message
        }
    }
}