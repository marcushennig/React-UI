class MyClass {

  xyz;

  /**
   * Build new instance
   * @param {number} xyz Some random number
   */
  constructor(xyz) {
    this.xyz = xyz;
  }
  /**
   * Some random function for testing
   * @returns {number} Some arbitrary result
   */
  getResult() {
    let x = [2, 3, 9, 5, 6];
    x.map(p => p * p)
      .filter(p => p > 10)
      .forEach(p => {
        console.info(p)
      }
    );
    for(let i of [2, 3, 4]) {
      console.info(`Hello number ${i+2}`);
    }
    return Math.PI * this.xyz;
  }
}
export default MyClass;