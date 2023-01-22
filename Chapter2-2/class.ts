class Point{
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0){
        this.x = x
        this.y = y
    }

    moveX(n: number): void{
        this.x += n
    }

    moveY(n: number): void{
        this.y += n
    }
}

class Point3D extends Point{
    z: number;

    constructor(x: number=0, y:number=0, z: number=0){
        super(x, y)
        this.z = z
    }

    moveZ(n: number): void{
        this.z += n
    }
}

const point = new Point()
point.moveX(10)
console.log('${point.x}, ${point.y}')