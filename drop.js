class rainDrop{
    constructor(x, y){
        var options = {
            'restitution':0,
            'density':1.0,
            'friction':1.0
        }
        this.body = Bodies.circle(x, y, 5, options)
        this.x = x
        this.y = y
        World.add(world, this.body)
    }
    display(){
        push()
        ellipse(this.x, this.y, 10, 5);
        fill("blue")
        pop()
    }
}