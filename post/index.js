'use strict';

const uuid = require('uuid').v4;
const peopleSchema = require('./schema');

exports.handler = async(event)=>{

    try{
        const {name,hobby,major} = JSON.parse(event.body);
        const id = uuid();
        let people = new peopleSchema({id,name,hobby,major});
        let result = await people.save();

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