function dataArray(){

    //this.arrdict = {};
    this.data = {};

    var costarr = [];
    var i = 0;
    while (i <= 1000) {
        if (i%10 === 0) {
                costarr.push(i);
            }
            i++;
    }


    var usagearr = [];
    i = 0;
    while (i <= 500) {
        if (i%5 === 0) {
                usagearr.push(i);
            }
            i++;
    }

    var catag = ["shopping", "entertainment", "communication", "entertainment",
                   "entertainment", "fitness", "entertainment", "entertainment", "professional", "home"];
    var names = ["Amazon", "Hulu", "Verizon", "Apple Music",
                   "Apple Care", "Gym", "New Yorker Subscription", "Netflix", "Adobe", "Blue Apron"];
    var namearr = [];
    var catarr = [];
    i = 0;
    while (i <= 10) {
        for (var j = 0; j < 10;j++){
            namearr.push(names[j]);
            catarr.push(catag[j]);
        }
        i++;
    }

    for (var k = 0; k < 100; k++){
        if (!(namearr[k] in this.data)){
            this.data[namearr[k]] = [catarr[k], costarr[k], usagearr[k]];      
        }
        
        else {
            this.data[namearr[k]][1] = costarr[k];
            this.data[namearr[k]][2] = usagearr[k];
        }
    }
    
    this.addEntry = function(nam, cos, usag){
        this.data[nam][1] = catag;
        this.data[nam][2] = usag;
        
        return this.data;
  }
   
    
  return this.data;
}

function graph(){
  var data = {
    // A labels array that can contain any sort of values

    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [5, 2, 4, 2, 0]
    ]
  };

  // As options we currently only set a static size of 300x200 px. We can also omit this and use aspect ratio containers
  // as you saw in the previous example
  var options = {
    width: 300,
    height: 200
  };

  // Create a new line chart object where as first parameter we pass in a selector
  // that is resolving to our chart container element. The Second parameter
  // is the actual data object. As a third parameter we pass in our custom options.
  new Chartist.Line('.ct-chart', data, options);
}

function main(){
  var arr = []
  arr = dataArray()
  console.log(arr)
  graph()
}

main()
