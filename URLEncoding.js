const urlDecode = function(text) {
  let object = {};
  let isValue = false;
  let key = '';
  let value = '';
  for (let i = 0; i <= text.length; i++) {
    if (i === text.length) {
      object[key] = value; 
    } else if (text[i] === '&') { //if a new key/value pair 
      object[key] = value;
      isValue = false;
      key = '';
      value = '';
    } else if (text[i] === '=') { //if transitioning to value
      isValue = true;
    } else if (isValue === false) { //if a key 
      key += text[i];
    } else if (isValue === true && text[i] === '%') {
      // if a value and found a space
      value += ' ';
      i += 2;
    } else {
      value += text[i];
    }
  }
  return object;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
