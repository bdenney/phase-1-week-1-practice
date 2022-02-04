# Directions

A list of additional practices with challenges that vary greatly in difficulty. Most important in all of these is attempt to get the right answer without worrying as much about _how_ you get the right answer. The focus should be to be able to solve these problems in code, despite what functions or methods you use.

Core concepts:
* Conditionals
* Callback functions
* Iteration, Loops
* Map, Filter, Find

Write your code in `index.js`. You can see the `console.log()` output by using `node index.js` in the terminal from this directory.

---
## UFO Sighting Object

The dataset for this practice can be found in `nyc-ufo-sightings.json`. It is an array of UFO sightings in the state of New York. Each object has three properties: shape, duration, and comments.

```
{
    "shape": "light",
    "duration": 60,
    "comments": "((POSSIBLE HOAX??)) 2 balls of light in sky no sound military chasing it."
}
```
> * `shape`: The shape of the UFO
> * `duration`: How long the UFO could be seen for **in seconds**.
> * `comments`: A comment from the person who recorded the sighting.

---
## Challenges

* Write a function called `calculateMinutes` that takes in an argument called `seconds` and coverts returns how many minutes it is equal to, rounding down.

* Write a function called `getRandomSighting` that returns a **random** ufo sighting object from the `UFO_SIGHTINGS` dataset. If you need help or a hint, [click here](https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array).

* Write a function called `getRandomSightings` that takes a number as an argument and returns an array with that many random sightings.

* Write a function called `getLongestSighting` that takes in an array of ufo sightings and returns the longest one.

* Write a function called `getComment` that takes in a ufo sighting object as an argument and returns the comment as a string.

* Write a function called `getFirstWordInComment` that takes a ufo sighting object as an argument and returns the first word in the commnent.

* Write a function called `shapeTypes` that returns an array of all the different shapes that are present in the `UFO_SIGHTINGS`. There should only be one copy of each shape in the returned array (no duplicates). 

* Write a function called `calculateViewDuration` that takes in a ufo sighting object and returns the string `"Short"` if the object's duration is under 120, `"Average"` if the time is between 120 and 240, and `"Long"` if the time is greater than 240.

* Write a function that calculates the average duration of all sighting objects in `UFO_SIGHTINGS`.

* Write a function that returns the first ufo sighting in `UFO_SIGHTINGS` that's over 10 minutes long.

* Write a function that returns an array of all the comments from ufo sightings that were less than one minute.