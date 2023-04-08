var byteSize = 64; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i32View = new Int32Array(buffer);
console.log(buffer.byteLength); 
console.log(i32View.byteLength); 
console.log(i32View); 