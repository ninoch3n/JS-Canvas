const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const pixels = [
[1,0,0,0,0,0,0,0,1],
[0,1,0,0,0,0,0,1,0],
[0,0,1,0,0,0,1,0,0],
[0,0,0,1,0,1,0,0,0],
[0,0,0,0,1,0,0,0,0],
[0,0,0,1,0,1,0,0,0],
[0,0,1,0,0,0,1,0,0],
[0,1,0,0,0,0,0,1,0],
[1,0,0,0,0,0,0,0,1]
];

const size = canvas.clientHeight / pixels.length;

for(let x = 0; x < pixels.length; x++){
    for(let y = 0; y < pixels[x].length; y++){
        if(pixels[y][x] == 0){
            ctx.fillStyle = 'white';
        }else{
            ctx.fillStyle = 'black';
        }
        ctx.fillRect(x * size, y * size, size, size);
    }
}
