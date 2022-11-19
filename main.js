const canvas = document.querySelector("canvas");
    canvas.width = 300;
    canvas.height = 300;

const ctx = canvas.getContext("2d");

//OBJETOS
const getPaddle = ({x=0,color="orange"}) => ({
    x,
    y:0,
    w:10,
    h:30,
    color,

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
})
    
const getBall = () => ({
    x:150,
    y:0,
    w:10,
    h:10,
    color:"blue",
    direction:1,

    step() {
        this.x += this.direction;

        if (this.x >= canvas.width-20 || this.x < 10) { this.direction *= -1; }
    },
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
})

//INSTANCIAS
const paddleLeft = getPaddle({});
const paddleRight = getPaddle({x:canvas.width-10,color:"red"});
const ball = getBall();

const update = () => { //60 fps defauls
    ctx.clearRect(0,0,canvas.width,canvas.height);

    //STEPS
    ball.step();

    //DRAWS
    paddleLeft.draw();
    paddleRight.draw();
    ball.draw();
    

    requestAnimationFrame(update);
}

requestAnimationFrame(update); //Usar para dejar al navegador que pueda pausar recursos que no hacen falta