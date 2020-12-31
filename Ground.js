class Ground{
    constructor(x,y,width,height){
    var prop={
        isStatic:true
 }  
 this.body=Bodies.rectangle(x,y,width,height,prop)  
 World.add(myWorld,this.body)
 this.w=width
 this.h=height


    }
    show(){
      fill('cyan')
      rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }

}