// Import dependencies
require('dotenv').config();
var app  = require('express')();
var http = require('http').createServer(app);
var io   = require('socket.io')(http);
var Blockchain = require('./engine/index');

// Define port
const PORT = 3000;

// Define client entry point
app.get('/', function(req, res) {
    res.sendFile( __dirname + '/public/index.html')
}); 

// listen to port
http.listen(PORT, function() {
    console.log('listening on *:' + PORT);
});

// Detect socket new connection 
io.on('connection', function(socket) {
    console.log('a user has connected!');
    
    // Detect socket disconnections
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    // Detect start process
    socket.on('process-event', function() {
        
        // Once user click start, start proccessing
        process.env.ENV_START ='true';

        // Import environment variables
        const terminate = process.env.ENV_STOP;
        const pivot = process.env.ENV_PIVOT;
        const fulcrum = process.env.ENV_FULCRUM;
        const state = process.env.ENV_START;

        // New process alerter
        var f_str =0;

        // Run blockchain engine if user clicks 'start'
        if(state=='true') {

        // Fetch process fragments and execute blockchain
        // on each process

        const getFragment = async function(offset=pivot){

            // Set fragment for process transition
            const setFragment =fulcrum;

            const blockchain = new Blockchain(offset,offset+setFragment);

            // Return results of fragment
            return {
                processor:  blockchain.chain(),
                nextFragment: (offset+setFragment)<terminate?(offset+setFragment):undefined
            };

        };

        // Fetch next process
        const getProcess = async function(offset=0){

            // call fragment
            const fragment = await getFragment(offset);

            // If next fragment exists, execute recursively
            if(fragment.nextFragment){

                // Alert on new process to be executed
                f_str = fragment.nextFragment;

                // Call getProcess
                return await getProcess(fragment.nextFragment);
            } else {}
        }

        // Run processor
        getProcess()
        .then((done) =>
        console.log(done));

        // Update client on progress of process
        io.emit('update-process', f_str);        

        }
    });
});
