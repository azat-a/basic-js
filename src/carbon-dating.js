const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LOG_OF_TWO = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string") return false;

  sampleActivity = parseFloat(sampleActivity);
  if (sampleActivity > 15 ||
      sampleActivity <= 0 ||
      Number.isNaN(sampleActivity)) return false;

  const age = Math.abs(Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / LOG_OF_TWO);

  return Math.ceil(age);
};
