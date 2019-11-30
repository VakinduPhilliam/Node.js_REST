// Blockchain Processor
class Blockchain {
    //Initialize constructor
    constructor(start, stop){
        this.start = start;
        this.stop  = stop;
    }

    // Create chain engine
    chain (){
        const {start,stop} = this;
        for(var i=start; i<stop+1;i++){
            console.log("Hello World"+(i));
        }
    }
}

// Export Blockchain
module.exports =Blockchain;