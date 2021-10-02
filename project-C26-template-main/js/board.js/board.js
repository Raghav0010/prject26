class Board {
    constructor(x, y, width, height, boardPos) {
    
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      this.boardPosition = boardPos;
      this.image = loadImage("./assets/board.png");
  
      World.add(world, this.body);
    }
  