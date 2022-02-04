// This is just allowing us to use the dataset from the other file. You can ignore this line.
const UFO_SIGHTINGS = require("./nyc-ufo-sightings.json");

function calculateMinutes(seconds) {
    return Math.floor(seconds / 60);
}

function getRandomSighting() {
    return UFO_SIGHTINGS[Math.floor(Math.random() * UFO_SIGHTINGS.length)];
}

function getRandomSightings(number) {
    let randomSightings = [];
    for (let i = 0; i < number; i++) {
        randomSightings.push(getRandomSighting());
    }
    return randomSightings;
}

let random = getRandomSightings(4);
console.log(random)

function getLongestSighting(sightings) {
    return sightings.reduce((previous, current) => {
        return current.duration > previous.duration ? current : previous;
    });
}

function getComment(sighting) {
    return sighting.comments;
}

function getFirstWordInComment(sighting) {
    return getComment(sighting).split(' ')[0];
}

function shapeTypes() {
    return UFO_SIGHTINGS.reduce((result, sighting) => {
        if (!result.includes(sighting.shape)) {
            result.push(sighting.shape);
        }
        return result;
    }, []);
}

function calculateViewDuration(ufoSighting) {
    let duration = ufoSighting.duration;
    if (duration < 120) {
        return "Short";
    } else if (duration < 240) {
        return "Average";
    } else {
        return "Long"
    }
}

function averageSightingDuration() {
    let sum = UFO_SIGHTINGS.reduce((total, sighting) => {
        return total + sighting.duration;
    }, 0);

    return sum / UFO_SIGHTINGS.length;
}

function findFirstLongSighting() {
    return UFO_SIGHTINGS.find(sighting => {
        return sighting.duration > (10 * 60);
    });
}

function findShortComments() {
    const shortSightings = UFO_SIGHTINGS.filter(sighting => {
        return sighting.duration < 60;
    });

    return shortSightings.map(sighting => sighting.comments)
}