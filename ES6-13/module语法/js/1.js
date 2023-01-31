const odiv = document.querySelector("div");
console.log(odiv);

function A1() {
  _a1();
  console.log("A1");
}

function _a1() {
  console.log("a1");
}

function A2() {
  console.log("A2");
}

// 导出方法
export default { A1, A2 };
