function doDL(s){
    function dataUrl(data) {return "data:x-application/text," + escape(data);}
    window.open(dataUrl(s));
    
}