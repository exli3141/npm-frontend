'use strict';

//nodeのassertionテスト。
const assert = require('assert');
const hello = require('../src/hello');
const World = require('../src/world');

describe('App', () => {
  describe('Hello world', () => {
    it('Helloクラスはh,e,l,l,oという5つの配列です。また、あえてNewせずとも自動でインスタンスが作られます。', () => {
      assert(equal(['H', 'e', 'l', 'l', 'o'], hello.message));
    });
    it('Worldクラスは投げ込まれた配列を結合して返すメソッドのみを持っています。', () => {
      assert(equal('World'), new World(['W', 'o', 'r', 'l', 'd']));
    });
  });
});
