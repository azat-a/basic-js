module.exports = class DepthCalculator {
  calculateDepth(array) {
    let depth = 1;
    let depthBuffer = 0;
    let depthCurrent = 0;
    for (let item of array) {
      if (item instanceof Array) {
        depthCurrent = this.calculateDepth(item);
        if (depthCurrent > depthBuffer) {
          depthBuffer = depthCurrent;
        }
      }
    }

    return depth + depthBuffer;
  }
};