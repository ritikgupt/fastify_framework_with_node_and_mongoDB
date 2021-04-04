const fastifyPlugin = require('fastify-plugin')

async function dbConnect(fastify,options){
    fastify.register(require('fastify-mongodb'),{
        url:'mongodb://'+fastify.db_conf.host+':'+fastify.db_conf.port+'/'+fastify.db_conf.db
    })
}

module.exports=fastifyPlugin(dbConnect)