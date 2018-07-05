// Code your solution in this file!
function distanceFromHqInBlocks(distanceBlocks) {
  return Math.abs(42 - distanceBlocks)
}

function distanceFromHqInFeet(distanceBlocks) {
  return distanceFromHqInBlocks(distanceBlocks) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * 264
}