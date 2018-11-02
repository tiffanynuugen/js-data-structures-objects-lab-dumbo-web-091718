const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  // const newDriver = { ...driver };
  // newDriver[key] = value;
  // return newDriver;
  let newDriver = Object.assign({}, driver, { [key]: value });
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let newDriver = Object.assign({}, driver);
  // delete driver[key];
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
// driver.address = 'value';
// updateDriverWithKeyAndValue(driver, 'address', '11 Broadway');
// Write your solution in this file!
