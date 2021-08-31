'use strict';

const peopleSchema = require('./schema');

exports.handler = async(event)=>{

    try{
        const id =  event.pathParameters ? event.pathParameters.id : null;
        
        if(id){
            await peopleSchema.delete({id:id});
        }

        return{
            statusCode: 200,
            body: JSON.stringify({message:'deleted'})
        }

    }catch(error){
        return{
            statusCode: 500,
            message: error.message
        }
    }
}