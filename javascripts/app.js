const rover1 = {
  direction: 'N',
  x: 1,
  y: 1,
  travelLog:[],
  name: 'R1'
};

const rover2 ={
  direction:"S",
  x: 1,
  y: 2,
  travelLog: [],
  name: 'R2',
}

var grid =[
  ['.','X','.','.','.','.','.','.','.','.'],
  ['.','R1','.','.','.','.','.','.','.','.'],
  ['.','R2','X','.','.','.','.','.','.','.'],
  ['.','X','.','.','.','.','.','.','.','.'],
  ['.','.','.','.','.','.','.','.','.','.'],
  ['.','.','.','.','.','.','.','.','.','.'],
  ['.','.','.','.','.','.','.','.','.','.'],
  ['.','.','.','.','.','.','.','.','.','.'],
  ['.','.','.','.','.','.','.','.','.','.'],
  ['.','.','.','.','.','.','.','.','.','.']
]


function turnLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    default:
      break;
  }
  console.log('turnLeft was called!');
  console.log(rover.direction);
}

function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
    default:
      break;
  }
  console.log('turnRight was called!');
  console.log(rover.direction);
}

function moveForward(rover, grid) {
  switch (rover.direction) {
    case 'N':
      if (rover.y !== 0) {
        if (grid[rover.y - 1][rover.x] !== 'X') {
          if (grid[rover.y - 1][rover.x] === '.') {
            grid[rover.y][rover.x] = '.';
            rover.y -= 1;
            rover.travelLog.push([rover.x, rover.y]);
            grid[rover.y][rover.x] = rover.name;
          } else {
            console.log("There is another rover! Let's be friends, not destroy each other")
          }
        } else {
          console.log('You have an obstacle, please choose another direction');
        }
      } else {
        console.log('You can not go North, please choose another direction');
      }
      break;
    case 'E':
      if (rover.x !== 10) {
        if (grid[rover.y][rover.x + 1] !== 'X') {
          if (grid[rover][rover.x + 1] === '.') {
            grid[rover.y][rover.x] = '.'
            rover.x += 1;
            rover.travelLog.push([rover.x, rover.y]);
            grid[rover.y][rover.x] = rover.name
          } else{
            console.log("There is another rover! Let's be friends, not destroy each other")
          }
        } else {
          console.log('You have an obstacle, please choose another direction');
        }
      } else {
        console.log('You can not go East, please choose another direction');
      }
      break;
    case 'S':
      if (rover.y !== 10) {
        if (grid[rover.y + 1][rover.x] !== 'X') {
          if (grid[rover.y + 1][rover.x] === '.') {
            grid[rover.y][rover.x] = '.'
            rover.y += 1;
            rover.travelLog.push([rover.x, rover.y]);
            grid[rover.y][rover.x] = rover.name
          } else{
            console.log("There is another rover! Let's be friends, not destroy each other")
          }
        } else {
          console.log('You have an obstacle, please choose another direction');
        }
      } else {
        console.log('You can not go East, please choose another direction');
      }
      break;
    case 'W':
      if (rover.x !== 0) {
        if (grid[rover.y][rover.x - 1] !== 'X') {
          if (grid[rover.y][rover.x - 1] === '.') {
            grid[rover.y][rover.x] = '.'
            rover.x -= 1;
            rover.travelLog.push([rover.x, rover.y]);
            grid[rover.y][rover.x] = rover.name
          }else{
            console.log("There is another rover! Let's be friends, not destroy each other")
          }
        } else {
          console.log('You have an obstacle, please choose another direction');
        }
      } else {
        console.log('You can not go East, please choose another direction');
      }
      break;
    default:
      break;
  }
  console.log('moveForward was called');
 
}
function moveBackwards(rover) {
  switch (rover.direction) {
    case 'N':
      if (rover.y !== 10) {
        if (grid[rover.y + 1][rover.x] !== 'X') {
          if (grid[rover.y + 1][rover.x] === '.') {
            grid[rover.y][rover.x] = '.'
            rover.y += 1;
            rover.travelLog.push([rover.x, rover.y]);
            grid[rover.y][rover.x] = rover.name
          }else{
            console.log("There is another rover! Let's be friends, not destroy each other")
          } 
        }else {
          console.log('You have an obstacle, please choose another direction');
        }
      } else {
        console.log('You can not go East, please choose another direction');
      }
      break;
    case 'E':
      if (rover.x !== 0) {
        if (grid[rover.y][rover.x - 1] !== 'X') {
          if (grid[rover.y][rover.x - 1] === '.') {
            grid[rover.y][rover.x] = '.'
            rover.x -= 1;
            rover.travelLog.push([rover.x, rover.y]);
            grid[rover.y][rover.x] = rover.name
          }else{
            console.log("There is another rover! Let's be friends, not destroy each other")
          }
        } else {
          console.log('You have an obstacle, please choose another direction');
        }
      } else {
        console.log('You can not go East, please choose another direction');
      }
      break;
    case 'S':
      if (rover.y !== 0) {
        if (grid[rover.y - 1][rover.x] !== 'X') {
          if (grid[rover.y - 1][rover.x] === '.') {
            grid[rover.y][rover.x] = '.'
            rover.y -= 1;
            rover.travelLog.push([rover.x, rover.y]);
            grid[rover.y][rover.x] = rover.name
          }else{
            console.log("There is another rover! Let's be friends, not destroy each other")
          }
        } else {
          console.log('You have an obstacle, please choose another direction');
        }
      } else {
        console.log('You can not go North, please choose another direction');
      }
      break;   
    
    case 'W':
      if (rover.x !== 10) {
        if (grid[rover.y][rover.x + 1] !== 'X') {
          if (grid[rover.y][rover.x  + 1] === '.') {
            grid[rover.y][rover.x] = '.'
            rover.x += 1;
            rover.travelLog.push([rover.x, rover.y]);
            grid[rover.y][rover.x] = rover.name
          }else{
            console.log("There is another rover! Let's be friends, not destroy each other")
          }
        } else {
          console.log('You have an obstacle, please choose another direction');
        }
      } else {
        console.log('You can not go East, please choose another direction');
      }
      break; 
    default:
      break;
  }
  console.log('moveBackwards was called');
}

function player(command, rover, grid) {
  for (let i = 0; i < command.length; i += 1) {
    switch (command[i]) {
      case 'f':
        moveForward(rover, grid);
        console.log(rover.travelLog);
        break;
      case 'r':
        turnRight(rover);
        console.log(rover.travelLog);
        break;
      case 'l':
        turnLeft(rover);
        console.log(rover.travelLog);
        break;
      case 'b':
        moveBackwards(rover);
        console.log(rover.travelLog);
        break;
      default:
        console.log('Dude, you do not know how to play');
        break;
    }
  }
}
