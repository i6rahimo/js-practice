const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


const gravity = 1.5

class Player {
    constructor() {
        this.position = {
            y: 100,
            x: 100
        }
        this.velocity = {
            x: 0,
            y: 0 
        }
        this.width = 100
        this.height = 100
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.position.y += this.velocity.y
        this.draw();

        if(this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity
        } else this.velocity.y = 0

    }

}


const player = new Player();
player.update()


function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.update()
}
animate()



addEventListener('keydown', ({keyCode})=> {
    console.log(keyCode );
    switch(keyCode) {
        case 65:
            break
        case 83:
            break
        case 68:
            break
        case 87:
            player.velocity.y -= 20
            break
    }
})











