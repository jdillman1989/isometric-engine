// Style: SMRPG, FF Tactics/Advance, Fae Tactics, Tactics Ogre,
// Gameplay: Underrail, Farmville, Death Trash, Bastion, FO2, Baldurs Gate 2, Shadowflare, NightStone, Harbinger, 

const WIDTH = 200, HEIGHT = 200, SIZE = WIDTH * HEIGHT;

const canvas = document.querySelector('#canvas');

const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
var keys = {
  up: false,
  down: false,
  left: false,
  right: false
};

window.onload = async () => {
  window.onkeydown = function(e) {
    switch(e.which) {
  
      case 87: // W
        keys.up = true;
        break;
  
      case 65: // A
        keys.left = true;
        break;
  
      case 83: // S
        keys.down = true;
        break;
  
      case 68: // D
        keys.right = true;
        break;
    };
  };
  
  window.onkeyup = function(e) {
    switch(e.which) {
  
      case 87: // W
        keys.up = false;
        break;
  
      case 65: // A
        keys.left = false;
        break;
  
      case 83: // S
        keys.down = false;
        break;
  
      case 68: // D
        keys.right = false;
        break;
    };
  };

  const rawWasm = await WebAssembly
    .instantiateStreaming(fetch('../build/debug.wasm'), {
      env: {
        abort: (_msg, _file, line, column) => console.error(`${_file}: Abort at ${line}:${column} -- ${_msg}`),
        seed: Date.now
      }
    });

  const wasm = rawWasm.instance.exports;
  wasm.start();

  const mem = wasm.memory.buffer;
  
  window.requestAnimationFrame(() => {
    wasm.update(wasm[control]);
    drawGame(mem);
  
    window.requestAnimationFrame(() => {
      wasm.update(wasm[control]);
      drawGame(mem);
    });
  });
}

function drawGame(map) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < canvas.height; ++y) {
    for (let x = 0; x < canvas.width; ++x) {
      const currentPos = y * canvas.width + x;
      ctx.fillStyle = map[currentPos];
      ctx.fillRect(x, y, 1, 1);
    }
  }
}