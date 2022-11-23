let distance;
const blocks = 42;

function distanceFromHqInBlocks (pickup) {
    distance =  Math.abs(pickup - blocks)
    return distance 
}

function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264
}

function distanceTravelledInFeet(start, destination) {
    distance = Math.abs(start - destination) * 264
    return distance;
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return ((distance - 400) * 0.02);
    } else if (distance >= 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}