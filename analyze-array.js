export class AnalyzeArray {
  getAverage(array) {
    const sum = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum / array.length;
  }

  getMax(array) {
    return Math.max(...array);
  }

  getMin(array) {
    return Math.min(...array);
  }

  getLength(array) {
    return array.length;
  }

  analyze(array) {
    return {
      average: this.getAverage(array),
      max: this.getMax(array),
      min: this.getMin(array),
      length: this.getLength(array),
    };
  }
}
