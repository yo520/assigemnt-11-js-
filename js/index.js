var quoteArr = [
  `"Do not take life too seriously. You will not get out alive."`,
  `"It's not what happens to you, but how you react to it that matters."`,
  `"The best revenge is massive success."`,
  `"Resentment is like drinking poison and waiting for your enemies to die."`
];

var previousnum = -1;

function getQuote()
{

  let randNum;

  do{ 
    randNum=Math.floor(Math.random()*quoteArr.length);
  }while (randNum===previousnum);

  var quot=quoteArr[randNum];

  document.getElementById("quote").innerHTML=quot;

  previousnum= randNum;
}