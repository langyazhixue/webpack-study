// 设计模式之工厂模式
//
class Product {
  constructor(name) {
    this.name = name;
  }

  init() {
    alert('init');
  }

  fun1() {
    alert('fun1');
  }

  fun2() {
    alert('fun2');
  }
}


class Creator {
  create(name) {
    return new Product(name);
  }
}

const creator = new Creator();

const p = creator.create('p1');

p.init();


class jQuery {
  constructor(selector) {
    const { slice } = Array.prototype;
    const dom = slice.call(document.querySelectorAll(selector));
    const len = dom ? dom.length : 0;
    for (let i = 0; i < len; i++) {
      this[i] = dom[i];
    }
    this.length = len;
    this.selector = selector || '';
  }

  append(node) {

  }

  addClass(name) {

  }

  html(data) {

  }
}
// 工厂模式
window.$ = function (selector) {
  return new jQuery(selector);
};
