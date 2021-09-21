let mygraph;
function setup(){
    createCanvas(1000, 800);
    background(40);

    // new Graph(array, x scale, y scale, x value, y value, x unit, y unit);
    mygraph = new Graph(arr, 40, 40, 1, 10, 'days', 'temp c');
}


function draw(){
    mygraph.drawGraph(20, 10);
    mygraph.plotData();
    //mygraph.plotDataMult();
}