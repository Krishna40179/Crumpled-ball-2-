class Box2{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width=width;
        this.height=height;
        this.image=loadImage("Dustbin.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
      fill ("white");
      imageMode(CENTER);
       image(this.image,pos.x,pos.y-80,this.width+40,180);
    }
    }