export function validateObject(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === "") {
      return key;
    }
  }
  return null;
}


export const convertTime = (time24hr) => {
    const [hour, minute, second] = time24hr.split(":").map(Number);
    let suffix = hour >= 12 ? "PM" : "AM";
    let hour12 = hour % 12 || 12;
    let time12hr = `${hour12}:${minute}:${second} ${suffix}`;
    return time12hr;
  };