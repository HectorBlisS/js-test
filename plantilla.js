const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");


//SPRITES
const spr_example = "./sprites/example.png";


//OBJETOS SIMPLES
// const obj_example = ({x=0,col="orange"}) => ({
//     x,
//     y:0,
//     w:10,
//     h:30,
//     col,

//     draw() {
//         ctx.fillStyle = this.col;
//         ctx.fillRect(this.x,this.y,this.w,this.h);
//     }
// })
    
// const obj_example2 = () => ({
//     x:150,
//     y:0,
//     w:10,
//     h:10,
//     col:"blue",
//     dir:1,

//     step() {
//         this.x += this.dir;

//         if (this.x >= canvas.w-20 || this.x < 10) { this.dir *= -1; }
//     },
//     draw() {
//         ctx.fillStyle = this.col;
//         ctx.fillRect(this.x,this.y,this.w,this.h);
//     },
// })

//OBJETOS CONSTRUCTORES (CLASSES)
class con_cat {
    constructor() {
        this.position = {
            x:canvas.width/2,
            y:canvas.height/2,
        }
        this.w = 50
        this.h = 50


        this.image = new Image()
        this.image.src = spr_example
        this.image.onload = this.draw
    }

    draw() {
        if (!this.image) { return }
        ctx.drawImage(this.image,this.position.x,this.position.y,this.w,this.h);
    }
}


//PREFABS
const pref_draw_stars = (number=1) => {
    ctx.fillStyle = "white";

    for (let i = 0; i < number; ++i) {
        let x = Math.floor( Math.random()*canvas.width );
        let y = Math.floor( Math.random()*canvas.height );
        
        ctx.fillRect(x,y,1,3);
        ctx.fillRect(--x,++y,3,1);
    }
}

const pref_draw_bg = (_color) => {
    ctx.fillStyle = _color;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    pref_draw_stars(20);
}


//INSTANCIAS
// const paddleLeft = obj_example({});
// const paddleRight = obj_example({x:canvas.w-10,col:"red"});
// const ball = obj_example2();

const cat = new con_cat();

const update = () => { //60 fps default
    ctx.clearRect(0,0,canvas.width,canvas.height);

    //STEPS
    // ball.step();

    //DRAWS
    pref_draw_bg("black");


    // paddleLeft.draw();
    // paddleRight.draw();
    // ball.draw();

    cat.draw();

    requestAnimationFrame(update);
}

 requestAnimationFrame(update); //Usar para dejar al navegador que pueda pausar recursos que no hacen falta