## React Roulette Game

React Roulette Game is a plugin for whom want to have roulette game in project
[DEMO](https://event.hearst.com.tw/uiuxstoredemo/roulettegame/)

## How to install

1. go to your terminal and type the following:

```bash
yarn add react-roulette-game
```

## How to use:

```js
import Roulette from "react-roulette-game";

const DemoComp = () => (
  <div className="game-box">
      //  STEP1. draw the width of your roulette and adjust its position
    <Roulette {...roulette_props} /> //  STEP2. add Roulette component and give the
    props you want
  </div>
);

const weightedArray = [10, 5, 40, 3, 20, 30];

const rouletteArray = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
];
//roulettes based on the weighted
const getTargetIndex = (items, weights) => {
  // execute weighted item picker algorithm

  var i;

  for (i = 1; i < weights.length; i++) weights[i] += weights[i - 1];

  var random = Math.random() * weights[weights.length - 1];

  for (i = 0; i < weights.length; i++) if (weights[i] > random) break;
  return i;
};

const roulette_props = {
  roulette_img_under_highlight,
  roulette_img_on_highlight,
  highlight_img,
  pointer_img,
  prize_arr: rouletteArray,
  targetIndex: getTargetIndex(rouletteArray, weightedArray),
  on_complete,
  has_reset: true,
  start_text: "Start",
};

import highlight_img from "./images/hightlight.png";
import pointer_img from "./images/pointer.png";
import roulette_img_under_highlight from "./images/rou_under_high.png";
import roulette_img_on_highlight from "./images/rou_on_high.png";
```

## Common Props

### highlight_img

type: string  
default: ''  
usage: when roulette rotate over, hightlight will bling bling, its purpose is to highlight the winning-prize;  
HIGHLY RECOMMENDED: the ratio of this image should be square

### roulette_img_under_highlight

type: string  
default: ''  
usage: roulette's body image, its zIndex is smaller than highlight;  
HIGHLY RECOMMENDED: the ratio of this image should be square

### roulette_img_on_highlight

type: string  
default: ''  
usage: roulette's body image, its zIndex is bigger than highlight;  
HIGHLY RECOMMENDED: the ratio of this image should be square

#### PS1: you can put your roulette's body image on one of them or both; just due to different design, something will be under the highlight and something will be on the highlight, so let you have more option to combine your roulette

#### PS2: your roulette should put like this: ![alt text](https://event.hearst.com.tw/uiuxstoredemo/roulettegame/images/correct_rou.jpg) not like this: ![alt text](https://event.hearst.com.tw/uiuxstoredemo/roulettegame/images/wrong_rou.jpg)

### pointer_img

type: string  
default: ''  
usage: roulette's pointer, to point the winning-prize;  
HIGHLY RECOMMENDED: the ratio of this image should be square

#### PS: the prize you win always on top, like this:![alt text](https://event.hearst.com.tw/uiuxstoredemo/roulettegame/images/winning.jpg), so your pointer should always poit toward that one

### prize_arr

type: array  
required  
usage: how many prize in your roulette, then there should be how many prize-name in this array; the order is counter-clockwise to your roulette

### start_text

type: string  
default: Start  
usage: text in start button

### reset_text

type: string  
default: Reset  
usage: text in reset button

## Advanced Props

### has_reset

type: boolean  
default: true  
usage: if true, there will be reset button

### reset_callback

type: function  
default: () => {}  
parameter: none  
usage: when you click reset button, reset_callback will be triggered

### start_callback

type: function  
default: () => {}  
parameter: none  
usage: when you click start button, start_callback will be triggered

### on_complete

type: function  
default: () => {}  
parameter: (prize) => {}  
usage: it will be triggered when roulette rotate over, and it will return a winning-prize at this round

## Thank You for Your Use

It's welcome to report me any issue or bug, thanks a lot!

## Author

[WreewanMorhee](https://github.com/WreewanMorhee)
