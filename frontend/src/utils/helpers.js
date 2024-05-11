export function validateObject(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === "") {
      return key;
    }
  }
  return null;
}
