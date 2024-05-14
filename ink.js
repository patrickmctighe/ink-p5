const circleDetail = 100;

class Drop{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;

        this.vertices = [];
        for(let i = 0; i<circleDetail;i++){
            let angle = map(i,0 ,circleDetail, 0 , TWO_PI)
            let v = createVector(cos(angle), sin(angle));
            v.mult(this.r);
            v.add(this.x, this.y);
            this.vertices[i]=v;
        }
    }

    show(){
        fill(0);
     beginShape();
        for(let v of this.vertices){
            vertex(v.x, v.y);
        }
        endShape(CLOSE);
    }
}