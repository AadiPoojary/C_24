class Log{
    constructor(x,y,height,angle){

        var options = {
            restitution:0.8,
            density:1,
            friction:2
        }
        this.body = Bodies.rectangle(x,y,15,height,options)
        this.width = 15;
        this.height = height;
        //to set angle to log from the Body class
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        //pushes in changes from this point
        push();
        //to switch/traslate the x and y position to created turned/twisted rect 
        translate(pos.x,pos.y);
        //to rotate the rect at some angle
        rotate(angle);
        //to color the object
        fill("brown");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        //pops out changes from this point
        pop();
    }
}