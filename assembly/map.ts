interface RGBInterface = {
  r: u32;
  g: u32;
  b: u32;
}

interface TileInterface = {
  [name: string]: RGBInterface;
}

var tiles: TileInterface = {
  grass: { r: 125, g: 196, b: 143 },
  water: { r: 86, g: 75, b: 100 },
  rock: { r: 188, g: 167, b: 82 },
  lava: { r: 209, g: 105, b: 42 }
};

interface MapDataInterface {
  tile: RGBInterface;
  sprite: u16;
}

type MapSlotInterface = u16 | MapDataInterface;

export type MapInterface = MapSlotInterface[][];

var map: MapInterface = [
  //////////////////////
  // Row 1 (top left) //
  //////////////////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  ///////////
  // Row 2 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  ///////////
  // Row 3 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  ///////////
  // Row 4 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.lava,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.grass,
      sprite: 0
    },
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    {
      tile: tiles.grass,
      sprite: 0
    }
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    {
      tile: tiles.grass,
      sprite: 0
    }
  ],

  ///////////
  // Row 5 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.lava,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.lava,
      sprite: 0
    },
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.grass,
      sprite: 0
    },
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    {
      tile: tiles.grass,
      sprite: 0
    }
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    {
      tile: tiles.grass,
      sprite: 0
    }
  ],

  ///////////
  // Row 6 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.lava,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.grass,
      sprite: 0
    },
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    {
      tile: tiles.grass,
      sprite: 0
    }
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    {
      tile: tiles.grass,
      sprite: 0
    }
  ],

  ///////////
  // Row 7 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  ///////////
  // Row 8 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.rock,
      sprite: 0
    },
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  ///////////
  // Row 9 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  ///////////
  // Row 10 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ]
];

export default map;
