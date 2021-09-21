class Graph {
    constructor(arr, xsc, ysc, xval, yval, xunit, yunit) {
        this.arr = arr;
        this.xsc = xsc;
        this.ysc = ysc;
        this.xval = xval;
        this.yval = yval;
        this.xunit = xunit;
        this.yunit = yunit;

        this.marginLeft = 100;
        this.marginBottom = 60;
    }

    xAxes(xnum) {
        let scaleX = this.xsc;
        stroke(255);
        strokeWeight(1);
        line(this.marginLeft, height - this.marginBottom, width - 10 , height - this.marginBottom);

        strokeWeight(0);
        textSize(20);
        text(this.xunit, width - 150, (height - this.marginBottom) + 50);
        textSize(0);

        noStroke();
        for (let i = 1; i <= xnum; i++) {
            fill(255);
            strokeWeight(5);
            text('|', scaleX + this.marginLeft, height - this.marginBottom);
            text(i * this.xval, scaleX + this.marginLeft, (height - this.marginBottom) + 30);
            scaleX += this.xsc;
        }
    }

    yAxes(ynum) {
        let scaleY = this.ysc;
        stroke(255);
        strokeWeight(1);
        line(this.marginLeft, height - this.marginBottom, this.marginLeft, 10);

        strokeWeight(0);
        textSize(20);
        text(this.yunit, this.marginLeft - 80, 30);
        textSize(0);

        noStroke();
        for (let i = 1; i <= ynum; i++) {
            let m = map(scaleY, 0, height - this.marginBottom, height - this.marginBottom, 0);
            fill(255);
            strokeWeight(5);
            text('--', this.marginLeft, m);
            text(i * this.yval, this.marginLeft - 80, m);
            scaleY += this.ysc;
        }
    }

    drawGraph(xnum, ynum){
        this.xAxes(xnum);
        this.yAxes(ynum);
    }

    plotData(){
        let scaleX = this.xsc;
        let scaleY = this.ysc;
        let stx;
        let sty;
        
        for (let i = 0; i < this.arr.length; i++) {
            strokeWeight(1);
            let x = this.arr[i].x * scaleX + this.marginLeft;
            let y = map(this.arr[i].y * scaleY, 0, height - this.marginBottom, height - this.marginBottom, 0);

            stroke(255, 0, 255);
            line(stx, sty, x, y);
            stroke(255, 0, 0);
            strokeWeight(6);
            point(x, y)
            stx = x;
            sty = y;
        }
    }

    plotDataMult() {
        let scaleX = this.xsc;
        let scaleY = this.ysc;
        let stx;
        let sty;

        let r = 70;
        let g = 0;
        let b = 0;
        for (let j = 0; j < this.arr.length; j++) {
            for (let i = 0; i < this.arr[j].length; i++) {
                strokeWeight(1);
                let array = this.arr[j][i];
                let x = array.x * scaleX + this.marginLeft;
                let y = map(array.y * scaleY, 0, height - this.marginBottom, height - this.marginBottom, 0);

                stroke(r, g, b);
                line(stx, sty, x, y);
                // stroke(255, 0, 0);
                // strokeWeight(6);
                // point(x, y);
                stx = x;
                sty = y;
            }
            stx = undefined;
            sty = undefined;
            r += 10;
            g += 70;
            b += 70;
        }
    }
}