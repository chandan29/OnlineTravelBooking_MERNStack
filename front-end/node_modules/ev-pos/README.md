# ev-pos

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

> relative position of mouse/touch events to element

## Usage

`npm i ev-pos`

[![NPM](https://nodei.co/npm/ev-pos.png?downloads=true)](https://www.npmjs.com/package/ev-pos)

```
var evPos = require('ev-pos');

document.querySelector('.some-element').addEventListener('click', function(ev){
    //position relative to ev.currentTarget
    var p1 = evPos(ev);
    //position relative to document.body
    var p2 = evPos(ev, document.body);
});
```

## API

**evPos(event, [toElement])**

*toElement* defaults to `ev.currentTarget`

## Example

```sh
npm i && npm run test-visual
```

*(expects [beefy](https://github.com/chrisdickinson/beefy) to be installed globally)*

## Licence

MIT, see [LICENSE.md](http://github.com/stbaer/ev-pos/blob/master/LICENSE.md) for details.
