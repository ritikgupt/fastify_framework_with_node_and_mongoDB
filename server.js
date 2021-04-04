// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

fastify.register(require('./db-connect'))
fastify.register(require('./routes'))
// Declare a route
fastify.get('/', function (req, res) {
  res.send({ hello: 'w' })
})

//decorator

fastify.decorate('db_conf',{
    db:'test_db',
    host: '127.0.0.1',
    port:'27017'
})

fastify.addSchema({
    id: "findSchema",
    type:"object",
    properties:{
                    name:{type:'string'},
                    type:{type:'string'},
                    place:{type:'string'}
                }
})  


// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})

//hooks
fastify.addHook('onRequest',(req,res,done)=>{
    console.log('On Request executed');
    done();
})















