// Implement the bind function

Function.prototype.myBind = function (context, ...args) {
  return (...rest) => {
    return this.call(context, ...args.concat(rest));
  };
};

function log(...props) {
  console.log(this.name, this.age, ...props);
}

const obj = { name: "Elena", age: 28 };
const bound = log.myBind(obj, 33);
bound(24, 25, 21);
