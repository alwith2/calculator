var model = {
    counter:null,
    c:null,
    rawData:[],
    evaluateData:"",

    init: function (controlr) {
        this.c = contolr;
        this.counter = 0;
    },

    setState: function (s){
        if(s == "plus"){
            s = "+"
        }
        this.rawData.push(s).
        this.evaluateRawData();
        this.rawData = [70000]
        this.evaluateData = this.rawData.toString();
        this.onSetState();
    },
    
    evaluateRawData: function (){

    },
    addition: function(a,b){
        return a + b;
    }
}