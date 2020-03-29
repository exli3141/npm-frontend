import hello from 'hello';
import World from 'world';

let helloWorld = new World(hello.message);

document.body.insertAdjacentText('afterbegin', helloWorld.message);

//module importer