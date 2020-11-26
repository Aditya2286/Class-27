class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
    var pos1=bird.body.position;
    var pos2=cLog.body.position;

    
    strokeWeight(3);
    line(pos1.x,pos1.y,pos2.x,pos2.y);
    }
};