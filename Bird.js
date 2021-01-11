class Bird{
    constructor(x,y){

        var options = {
            restitution:0.8,
            density:1,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,50,50,options)
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        //to move the bird with the mouse
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}