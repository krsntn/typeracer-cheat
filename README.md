# typeracer-cheat

A simple script that allows you to prank your friends with fast typing speed.


### Steps

- Goes to <https://play.typeracer.com/>
- Open up browser console
- Paste the following into console right before the race starts
- Enjoy!


### Script
```javascript
var n=document.querySelectorAll('[unselectable="on"]');var t="";n.forEach(function(n){t+=n.innerHTML});var e=0;document.getElementsByClassName("txtInput")[0].addEventListener("keypress",function(n){n.preventDefault();this.value+=t[e++]});
```
