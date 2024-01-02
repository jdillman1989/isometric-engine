import map, { MapInterface } from "./map";

type Pixel = u8 | string;
var gameExport: Pixel[] = [];

for (var i = 0; i <= 40000; ++i) {
  gameExport.push(0);
}

// Static Globals
var tileW: u32 = 20,
    tileH: u32 = tileW / 2,
    mapW: u32 = 10,
    mapH: u32 = 10,
    originX: f32 = 0.5,
    originY: f32 = 72.5,
    layerDepth: u32 = 5;

var tileIndex: u32 = 0;

var r: string = '#F00';
var d: string = '#B00';
var b: string = '#0B1';

interface PlayerSpriteInterface {
  originX: f32;
  originY: f32;
  render: Pixel[];
}

var playerSprite: PlayerSpriteInterface = {
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

interface PlayerInterface {
  x: u32;
  y: u32;
  width: u32;
  height: u32;
  sprite: PlayerSpriteInterface;
}

var player: PlayerInterface = {x:90, y:53, width: 10, height: 18, sprite: playerSprite};

var speedX: u32 = 0,
    speedY: u32 = 0;

var selectedTileX: u32 = 0,
    selectedTileY: u32 = 0;

interface ColorInterface {
  base: string;
  warm: string;
  cool: string;
}

function drawGame(map: MapInterface) {
  tileIndex = 0;

  var layer: f32 = originY;

  var maxHeight: u32 = map[0].length;

  for (var i: u32 = 0; i < maxHeight; ++i) {

    for (var x: u32 = (mapW - 1); x >= 0; x--) {
      for (var y: u32 = 0; y < mapH; y++) {

        var currentPos: u32 = ((y*mapW)+x);
        var color: ColorInterface = { base:'', warm:'', cool:'' };

        if (map[currentPos][i]) {

          color.base = map[currentPos][i].tile.base;
          color.warm = map[currentPos][i].tile.warm;
          color.cool = map[currentPos][i].tile.cool;

          if(x == selectedTileX && y == selectedTileY && top){
            color.base = 'rgb(255,255,0)';
          }

          drawTile(x, y, color, layer);
          tileIndex++;

          // When to draw player in tile order? How to make sure player is on top tile layer?
          var top: bool = true;
          for(var k: u32 = i + 1; k < maxHeight; ++k){
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

var T: string = "base",
    L: string = "warm",
    R: string = "cool";

var tileSprite: Pixel[] = [
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

function drawTile(x: f32, y: f32, color: string, layer: u32) {
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

function drawSprite(
  posX: f32,
  posY: f32,
  thisSprite: Pixel[],
  sizeX: u32,
  sizeY: u32
) {
  var offX: u32 = (((posX * tileW) / 2) + ((posY * tileW) / 2) + originX) + (tileW / 2) - (sizeX / 2);
  var offY: u32 = (((posY * tileH) / 2) - ((posX * tileH) / 2) + originY) - (sizeY) + (tileH / 2);

  var k: u32 = 0;
  for(var y: u32 = offY; y < offY + sizeY; ++y){
    for(var x: u32 = offX; x < offX + sizeX; ++x){

      if(thisSprite[k]){
        writeToExport(x, y, thisSprite[k]);
      }
      k++;
    }
  }
}

function drawPlayer(
  posX: f32,
  posY: f32,
  layerCoord: u32,
  thisSprite: Pixel[],
  sizeX: u32,
  sizeY: u3
) {
  // NO DELETE. Need this to convert tile coords to pixel coords
  // var offX = (((posX * tileW) / 2) + ((posY * tileW) / 2) + originX) + (tileW / 2) - (sizeX / 2) + speedX;
  // var offY = (((posY * tileH) / 2) - ((posX * tileH) / 2) + originY) - (sizeY) + (tileH / 2) + speedY;

  posY = posY - (layerCoord * layerDepth);

  var offX: f32 = posX + speedX;
  var offY: f32 = posY + speedY;

  writeToExport(offX, offY, '#FFF');

  var k: u32 = 0;
  for (var y = offY; y < offY + sizeY; ++y) {
    for (var x = offX; x < offX + sizeX; ++x) {

      if (thisSprite[k]) {
        writeToExport(x, y, thisSprite[k]);
      }
      k++;
    }
  }

  player.x = offX;
  player.y = offY;
}

interface TileCoordsInterface {
  x: f32;
  y: f32;
}

interface RGBInterface {
  r: u32;
  g: u32;
  b: u32;
}

interface RGBCalcInterface {
  r: f32;
  g: f32;
  b: f32;
}

interface ColorSetInterface {
  base: RGBInterface;
  layers: RGBInterface[];
  cool: RGBInterface;
  warm: RGBInterface;
}

interface ColorSetCalcInterface {
  base: RGBCalcInterface;
  layers: RGBCalcInterface[];
  cool: RGBCalcInterface;
  warm: RGBCalcInterface;
}

export function startGame() {
  var selectedTiles: TileCoordsInterface = coordsToTile(player.x + player.sprite.originX, player.y + player.sprite.originY);

  selectedTileX = selectedTiles.x;
  selectedTileY = selectedTiles.y;

  // Pre-render colors
  for (var i: u32 = 0; i < map.length; ++i) {
    for (var j: u32 = 0; j < map[i].length; ++j) {
      if (map[i][j]) {
        var tileColorSet: ColorSetInterface = colorSet(map[i][j].tile);
        map[i][j].tile = {
          base: toColor(tileColorSet.layers[j]),
          warm: toColor(tileColorSet.warm),
          cool: toColor(tileColorSet.cool)
        };

        // Check for shadows
        for (var k = j + 1; k < maxHeight; ++k) {
          if (map[i][k]) {
            map[i][j].tile.base = toColor(tileColorSet.cool);
            break;
          }
        }
      }
    }
  }

  drawGame(map);

  // send game export to JS side
  store<Pixel[]>(gameExport);
};

function animateMove() {

  if (keys.up) {
    speedY = -1;
  } else if (keys.down) {
    speedY = 1;
  } else {
    speedY = 0;
  }

  if (keys.left) {
    speedX = -2;
  } else if (keys.right) {
    speedX = 2;
  } else {
    speedX = 0;
  }

  var tileXY: TileCoordsInterface = coordsToTile(player.x + player.sprite.originX, player.y + player.sprite.originY);
  selectedTileX = tileXY.x;
  selectedTileY = tileXY.y;

  drawGame(map);
}

function toColor(colorObj: RGBInterface): string {
  return 'rgb(' + colorValLimit(colorObj.r) + ',' + colorValLimit(colorObj.g) + ',' + colorValLimit(colorObj.b) + ')';
}

function colorValLimit(color: i32): u32 {
  if (color >= 255) {
    color = 255;
  }

  if (color <= 0) {
    color = 0;
  }

  return Math.round(color);
}

function colorSet(color: RGBInterface): ColorSetInterface {
  var colorCool: RGBCalcInterface = {
    r:color.r - 90,
    g:color.g - 20,
    b:color.b - 10,
  };

  var colorWarm: RGBCalcInterface = {
    r:color.r - 10,
    g:color.g - 20,
    b:color.b - 90,
  };

  maxHeight = map[0].length;
  var layerColors: RGBCalcInterface[] = [];

  for(var i: u32 = 0; i < maxHeight; ++i){
    layerColors.push({
      r:color.r + (15 * i),
      g:color.g + (15 * i),
      b:color.b + (12 * i),
    });
  }

  var colorObj: ColorSetCalcInterface = {
    base: color,
    layers: layerColors,
    cool: colorCool,
    warm: colorWarm
  };

  return colorObj;
}

function coordsToTile(x: u32, y: u32): TileCoordsInterface {
  var xCoord = (x - (tileW / 2) - originX);
  var yCoord = (y - (tileH / 2) - originY);
  var tileX = Math.round((xCoord / tileW) - (yCoord / tileH));
  var tileY = Math.round((xCoord / tileW) + (yCoord / tileH));

  return {x: tileX, y: tileY};
}

function tileToCoords(x: u32, y: u32): TileCoordsInterface {
  var offX = (((x * tileW) / 2) + ((y * tileW) / 2) + originX) + (tileW / 2);
  var offY = (((y * tileH) / 2) - ((x * tileH) / 2) + originY) + (tileH / 2);

  return {x: offX, y: offY};
}

function writeToExport(x: u32, y: u32, color: string) {
  const gamePixelWidth = 200;
  gameExport[(y * gamePixelWidth) + x] = color;
}