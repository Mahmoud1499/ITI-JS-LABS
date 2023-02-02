console.log("//////////////Part 1/////////");

class Shape {
  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    console.log(
      `The Perimeter of ${this.name} is equal ${
        this.sides * this.sideLength
      } cm `
    );
    // return this.sides * this.sideLength;
  }
}
////////////////////////////////////////////////
const square = new Shape("square", 4, 5);
// console.log(square.sideLength, square.sides);
square.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();

console.log("//////////////Part 2/////////");

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }
  calcArea() {
    console.log(
      `The Area of ${this.name} is eqaul ${
        this.sideLength * this.sideLength
      } cm2`
    );
  }
}

const square2 = new Square(4);

square2.calcPerimeter();
square2.calcArea();

console.log("//////////////Part 3/////////");
class Triple {
  static customName = "Tripler";
  static description = "I triple any number you provide";
  static calculate(n = 1) {
    return n * 3;
  }
}
class SquaredTriple extends Triple {
  static longDescription;
  static description = "I square the triple of any number you provide";
  static calculate(n) {
    return super.calculate(n) * super.calculate(n);
  }
}
console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); // tripler
