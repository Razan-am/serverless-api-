'use strict';

const peopleSchema = require('./schema');

exports.handler= async(event)=>{

    try{
        const id =  event.pathParameters ? event.pathParameters.id : null;
        let result = null;

        if(id){
            result = await peopleSchema.query('id').eq(id).exec();
            result = result[0];
        }else{
            result = await peopleSchema.scan().exec();
        }
        return{
            statusCode: 200,
            body : JSON.stringify(result)
        }
    }catch(error){
        return{
            statusCode: 500,
            message: error.message
        }
    }
}