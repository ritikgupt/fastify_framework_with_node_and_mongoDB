async function routes(fastify,options){
    fastify.get("/ritik",async(request,reply)=>{
        return {hello: "Ritik"}
    })
    const collection=fastify.mongo.db.collection('test_collection')
fastify.post('/insert',async(request,reply)=>{
    const res=await collection.insert(
        request.body
    )
    return res
})

const sc={
    schema:{
        response:{
            200:fastify.getSchema("findSchema")
        }
    }

}

fastify.get('/all_Data',async(request,reply)=>{
    const res = await collection.find().toArray();
    return res
})

}

module.exports=routes