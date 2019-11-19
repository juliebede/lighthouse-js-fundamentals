const blocksAway = function(directions) {
  // Put your solution here
  let output = {east: 0, north: 0};
  let direction = 'north';    // direction the taxicab is facing
  if (directions[0] === 'left') {
    output.north += directions[1];
  }
  if (directions[0] === 'right') {
    output.east += directions[1];
    direction = 'east';
  }
  for (let i = 2; i < directions.length; i++) {
    let turn = directions[i];
    i++;
    let blocks = directions[i];

    if (direction === 'north') {
      if (turn === 'right') {
        direction = 'east';
        output.east += blocks;
      } else if (turn == 'left') {
        direction = 'west';
        output.east -= blocks;
      }
    }

    else if (direction === 'east') {
      if (turn === 'right') {
        direction = 'south';
        output.north -= blocks;
      } else if (turn === 'left') {
        direction = 'north';
        output.north += blocks;
      }
    }

    else if (direction === 'south') {
      if (turn === 'right') {
        direction = 'west';
        output.east -= blocks;
      } else if (turn === 'left') {
        direction = 'east';
        output.east += blocks;
      }
    }

    else if (direction === 'west') {
      if (turn === 'right') {
        direction = 'north';
        output.north += blocks;
      } else if (turn === 'left') {
        direction = 'south';
        output.north -= blocks;
      }
    }
  }
  return output; 
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));