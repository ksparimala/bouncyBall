class Box{
    constructor(x,y,width,height){
        //properties
        var options={
            restitution:0.2
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    //functions
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();  //new setting
        translate(pos.x,pos.y);     //chaning the position  
        rotate(angle);       //giving angle to the body of the rectangle
        rectMode(CENTER);
        fill(200);
        rect(0,0,this.width,this.height);
        pop();   //revert old setting
    }
}



