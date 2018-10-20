function dataArray(){

    this.arrdict = {};
    
    var costarr = [];
    var i = 0;
    while (i <= 1000) {
        if (i%10 === 0) {
                costarr.push(i);
            }
            i++;
    }
    

    this.arrdict.cost = costarr;

    var usagearr = [];
    i = 0;
    while (i <= 500) {
        if (i%5 === 0) {
                usagearr.push(i);
            }
            i++;
    }
    this.arrdict.usage = usagearr;
    
    var catag = ["shopping", "entertainment", "communication", "entertainment", 
                   "entertainment", "fitness", "entertainment", "entertainment", "professional", "home"];
    var names = ["Amazon", "Hulu", "Verizon", "Apple Music", 
                   "Apple Care", "Gym", "New Yorker Subscription", "Netflix", "Adobe", "Blue Apron"];
    var namearr = [];
    var catarr = [];
    i = 0;
    while (i <= 10) {
        for (var j = 0; j <= 10;j++){
            namearr.push(names[j]);
            catarr.push(catag[j]);
        }
        i++;
    }
    this.arrdict.name = namearr;
    this.arrdict.catagory = catarr;
    
    this.addEntry = function(nam, catag, cos, usag){
        this.arrdict.name.push(nam);
        this.arrdict.catagory.push(catag);
        this.arrdict.cost.push(cos);
        this.arrdict.usage.push(usag);
  }
}