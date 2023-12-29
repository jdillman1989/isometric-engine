import map from "./map";

var gameExport = [];

for (var i = 0; i <= 40000; ++i) {
  gameExport.push(0);
}

// Static Globals
var tileW = 20,
    tileH = tileW / 2,
    mapW = 10,
    mapH = 10,
    originX = 0.5,
    originY = 72.5,
    layerDepth = 5;

var tileIndex = 0;

var r = '#F00';
var d = '#B00';
var b = '#0B1';

var playerSprite = {
  originX: 5,
  originY: 14,
  render: [
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,r,r,0,0,0,0,
    0,0,r,r,r,r,r,r,0,0,
    0,r,r,r,r,r,r,r,r,0,
    0,d,r,r,r,r,r,r,d,0,
    0,d,d,d,r,r,d,d,d,0,
    0,d,d,d,d,d,d,d,d,0,
    0,d,d,d,d,d,d,d,d,0,
    0,d,d,d,d,d,d,d,d,0,
    0,d,d,d,d,d,d,d,d,0,
    0,d,d,d,d,d,d,d,d,0,
    0,d,d,d,d,d,d,d,d,0,
    0,d,d,d,d,d,d,d,d,0,
    0,d,d,d,d,d,d,d,d,0,
    0,d,d,d,d,d,d,d,d,0,
    0,0,d,d,d,d,d,d,0,0,
    0,0,0,0,d,d,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0
  ]
};
var player = {x:90, y:53, width: 10, height: 18, sprite: playerSprite};

var speedX = 0,
    speedY = 0;

var selectedTileX = 0,
    selectedTileY = 0;

function drawGame(map){
  tileIndex = 0;

  var layer = originY;

  maxHeight = map[0].length;

  for(var i = 0; i < maxHeight; ++i){

    for(var x = (mapW - 1); x >= 0; x--) {
      for(var y = 0; y < mapH; y++) {

        var currentPos = ((y*mapW)+x);
        var color = {base:'',warm:'',cool:''};

        if(map[currentPos][i]){

          color.base = map[currentPos][i].tile.base;
          color.warm = map[currentPos][i].tile.warm;
          color.cool = map[currentPos][i].tile.cool;

          if(x == selectedTileX && y == selectedTileY && top){
            color.base = 'rgb(255,255,0)';
          }

          drawTile(x, y, color, layer);
          tileIndex++;

          // When to draw player in tile order? How to make sure player is on top tile layer?
          var top = true;
          for(var k = i + 1; k < maxHeight; ++k){
            if(map[currentPos][k]){
              top = false;
            }
          }

          if(x == selectedTileX && y == selectedTileY && top){
            drawPlayer(player.x, player.y, i, player.sprite.render, player.width, player.height);
          }

          if(map[currentPos][i].sprite){
            drawSprite(x, y, map[currentPos][i].sprite, 10, 20);
          }
        }
      }
    }

    layer = layer - layerDepth;

  }
}

var T = "base",
    L = "warm",
    R = "cool";

var tileSprite = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, T, T, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, T, T, T, T, T, T, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, T, T, T, T, T, T, T, T, T, T, 0, 0, 0, 0, 0,
  0, 0, 0, T, T, T, T, T, T, T, T, T, T, T, T, T, T, 0, 0, 0,
  0, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, 0,
  L, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, R,
  L, L, L, T, T, T, T, T, T, T, T, T, T, T, T, T, T, R, R, R,
  L, L, L, L, L, T, T, T, T, T, T, T, T, T, T, R, R, R, R, R,
  L, L, L, L, L, L, L, T, T, T, T, T, T, R, R, R, R, R, R, R,
  L, L, L, L, L, L, L, L, L, T, T, R, R, R, R, R, R, R, R, R,
  0, L, L, L, L, L, L, L, L, L, R, R, R, R, R, R, R, R, R, 0,
  0, 0, 0, L, L, L, L, L, L, L, R, R, R, R, R, R, R, 0, 0, 0,
  0, 0, 0, 0, 0, L, L, L, L, L, R, R, R, R, R, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, L, L, L, R, R, R, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, L, R, 0, 0, 0, 0, 0, 0, 0, 0, 0,
]

function drawTile(x, y, color, layer){
  var offX = ((x * tileW) / 2) + ((y * tileW) / 2) + originX;
  var offY = ((y * tileH) / 2) - ((x * tileH) / 2) + layer;

  var k = 0;
  for(var y = offY; y < offY + tileH; ++y){
    for(var x = offX; x < offX + tileW; ++x){

      if(tileSprite[k]){
        writeToExport(x, y, color[tileSprite[k]]);
      }
      k++;
    }
  }
}

function drawSprite(posX, posY, thisSprite, sizeX, sizeY){
  var offX = (((posX * tileW) / 2) + ((posY * tileW) / 2) + originX) + (tileW / 2) - (sizeX / 2);
  var offY = (((posY * tileH) / 2) - ((posX * tileH) / 2) + originY) - (sizeY) + (tileH / 2);

  var k = 0;
  for(var y = offY; y < offY + sizeY; ++y){
    for(var x = offX; x < offX + sizeX; ++x){

      if(thisSprite[k]){
        writeToExport(x, y, thisSprite[k]);
      }
      k++;
    }
  }
}

function drawPlayer(posX, posY, layerCoord, thisSprite, sizeX, sizeY){

  // NO DELETE. Need this to convert tile coords to pixel coords
  // var offX = (((posX * tileW) / 2) + ((posY * tileW) / 2) + originX) + (tileW / 2) - (sizeX / 2) + speedX;
  // var offY = (((posY * tileH) / 2) - ((posX * tileH) / 2) + originY) - (sizeY) + (tileH / 2) + speedY;

  posY = posY - (layerCoord * layerDepth);

  var offX = posX + speedX;
  var offY = posY + speedY;

  writeToExport(offX, offY, '#FFF');

  var k = 0;
  for(var y = offY; y < offY + sizeY; ++y){
    for(var x = offX; x < offX + sizeX; ++x){

      if(thisSprite[k]){
        writeToExport(x, y, thisSprite[k]);
      }
      k++;
    }
  }

  player.x = offX;
  player.y = offY;
}

function startGame(){
  var selectedTiles = coordsToTile(player.x + player.sprite.originX, player.y + player.sprite.originY);

  selectedTileX = selectedTiles.x;
  selectedTileY = selectedTiles.y;

  // Pre-render colors
  for(var i = 0; i < map.length; ++i){
    for(var j = 0; j < map[i].length; ++j){
      if(map[i][j]){
        var tileColorSet = colorSet(map[i][j].tile);
        map[i][j].tile = {
          base: toColor(tileColorSet.layers[j]),
          warm: toColor(tileColorSet.warm),
          cool: toColor(tileColorSet.cool)
        };

        // Check for shadows
        for(var k = j + 1; k < maxHeight; ++k){
          if(map[i][k]){
            map[i][j].tile.base = toColor(tileColorSet.cool);
            break;
          }
        }

      }
    }
  }

  drawGame(map);
};

function animateMove(){

  if(keys.up){
    speedY = -1;
  }
  else if(keys.down){
    speedY = 1;
  }
  else{
    speedY = 0;
  }

  if(keys.left){
    speedX = -2;
  }
  else if(keys.right){
    speedX = 2;
  }
  else{
    speedX = 0;
  }

  var tileXY = coordsToTile(player.x + player.sprite.originX, player.y + player.sprite.originY);
  selectedTileX = tileXY.x;
  selectedTileY = tileXY.y;

  drawGame(map);
}

function toColor(colorObj){
  return 'rgb(' + colorValLimit(colorObj.r) + ',' + colorValLimit(colorObj.g) + ',' + colorValLimit(colorObj.b) + ')';
}

function colorValLimit(color){
  if(color >= 255){
    color = 255;
  }

  if(color <= 0){
    color = 0;
  }

  return Math.round(color);
}

function colorSet(color){
  var colorCool = {
    r:color.r - 90,
    g:color.g - 20,
    b:color.b - 10,
  };

  var colorWarm = {
    r:color.r - 10,
    g:color.g - 20,
    b:color.b - 90,
  };

  maxHeight = map[0].length;
  var layerColors = [];

  for(var i = 0; i < maxHeight; ++i){
    layerColors.push({
      r:color.r + (15 * i),
      g:color.g + (15 * i),
      b:color.b + (12 * i),
    });
  }

  var colorObj = {
    base: color,
    layers: layerColors,
    cool: colorCool,
    warm: colorWarm
  };

  return colorObj;
}

function coordsToTile(x, y){
  var xCoord = (x - (tileW / 2) - originX);
  var yCoord = (y - (tileH / 2) - originY);
  var tileX = Math.round((xCoord / tileW) - (yCoord / tileH));
  var tileY = Math.round((xCoord / tileW) + (yCoord / tileH));

  return {x: tileX, y: tileY};
}

function tileToCoords(x, y){
  var offX = (((x * tileW) / 2) + ((y * tileW) / 2) + originX) + (tileW / 2);
  var offY = (((y * tileH) / 2) - ((x * tileH) / 2) + originY) + (tileH / 2);

  return {x: offX, y: offY};
}

function writeToExport(x, y, color){
  const gamePixelWidth = 200;
  gameExport[(y * gamePixelWidth) + x] = color;
}