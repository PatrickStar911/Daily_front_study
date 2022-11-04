// function myPromise(executor) {
//   this.status = "pengding";
//   this.result = undefined;
//   var _this = this;

//   function resolve(res) {
//     if (_this.status !== "pending") return;
//     _this.status = "fulfilled";
//     _this.result = res;
//   }

//   function reject(res) {
//     if (_this.status !== "pending") return;
//     console.log("reject");
//     _this.status = "rejected";
//     _this.result = res;
//   }
//   executor(resolve, reject);
// }

// myPromise.prototype.then = function (success, failed) {
//   if (this.status === "fulfilled") {
//     success && success(this.result);
//   }
//   if (this.status === "rejected") {
//     failed && failed(this.result);
//   }
// };
function myPromise(executor) {
  this.status = "pedding";
  this.result = undefined;
  this.cb = [];
  var _this = this;
  function resolve(res) {
    if (_this.status !== "pedding") return;
    _this.status = "fulfilled";
    _this.result = res;
    _this.cb.forEach((item) => {
      item && item.success(_this.result);
    });
  }
  function reject(res) {
    if (_this.status !== "pedding") return;
    _this.status = "rejected";
    _this.result = res;
    _this.cb.forEach((item) => {
      item && item.failed(_this.result);
    });
  }
  executor(resolve, reject);
}

function deal(result, resolve, reject) {
  if (result instanceof myPromise) {
    result.then(
      (res) => {
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  } else {
    resolve(result);
  }
}

myPromise.prototype.then = function (success, failed) {
  return new myPromise((resolve, reject) => {
    if (this.status === "fulfilled") {
      var result = success && success(this.result);
      deal(result, resolve, reject);
    }
    if (this.status === "rejected") {
      failed && failed(this.result);
    }
    if (this.status === "pedding") {
      this.cb.push({ success, failed });
    }
  });
};
