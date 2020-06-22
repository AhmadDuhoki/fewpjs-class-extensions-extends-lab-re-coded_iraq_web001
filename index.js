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
    }, 0);
    return sum;
  }
}

class Triangle extends Polygon{
  get isValid(){
    let side1 = this.sides[0];
    let side2 = this.sides[1];
    let side3 = this.sides[2];
    
    if(side1 + side2 > side3 && side3 + side2 > side1 && side1 + side3 > side2){
      return true;
    }
  }
}