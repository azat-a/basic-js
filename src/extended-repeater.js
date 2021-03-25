module.exports = function repeater(str, options) {
  const string = String(str);

  let prepOptions = {};
  if (arguments.length > 1) {
    prepOptions = Object.assign({}, options);
  }

  if (!("repeatTimes" in prepOptions)) {
    prepOptions.repeatTimes = 1;
  }
  if(!("separator" in prepOptions)) {
    prepOptions.separator = "+";
  }
  if(!("addition" in prepOptions)) {
    prepOptions.addition = "";
  } else {
    prepOptions.addition = String(prepOptions.addition);
  }
  if(!("additionRepeatTimes" in prepOptions)) {
    prepOptions.additionRepeatTimes = 1;
  }
  if(!("additionSeparator" in prepOptions)) {
    prepOptions.additionSeparator = "|";
  }

  let additionStr = [];
  for (let i = 0; i < prepOptions.additionRepeatTimes; i += 1) {
    additionStr.push(prepOptions.addition);
  }
  additionStr = additionStr.join(prepOptions.additionSeparator);

  let outputStr = [];
  for (let i = 0; i < prepOptions.repeatTimes; i += 1) {
    outputStr.push(string + additionStr);
  }
  outputStr = outputStr.join(prepOptions.separator);

  return outputStr;
};
  