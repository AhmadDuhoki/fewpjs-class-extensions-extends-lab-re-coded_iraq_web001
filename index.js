class Polygon{
  constructor(arrayOfInt){
    this.sides = arrayOfInt;
  }
  
  get countSides(){
    return this.sides.length;
  }
  
  get perimeter(){
    let sum = this.sides.reduce((acc, curr) => {
      return acc += curr;
    })
    return this.sides
  }
}