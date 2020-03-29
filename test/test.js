'use strict';

//nodeのassertionテスト。
const assert = require('assert');
import hello from '../src/hello';
import World from '../src/world';

describe('App', () => {
  describe('Hello world', () => {
    it('Helloクラスはh,e,l,l,oという5つの配列です。また、あえてNewせずとも自動でインスタンスが作られます。', () => {
      assert.deepEqual(['H', 'e', 'l', 'l', 'o'], hello.message);
    });
    it('Worldクラスは投げ込まれた配列を結合して返すメソッドのみを持っています。', () => {
      assert.deepEqual('World', new World(['W', 'o', 'r', 'l', 'd']).message);
    });
  });
});
