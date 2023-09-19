// Code your solution in this file!
function distanceFromHqInBlocks(blocks){ 
    const hqblocks = 42;
    return Math.abs(blocks - hqblocks);
}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(blocks){
    const hq = 42;
    const hqFeet = 264;
    return Math.abs(hq - blocks)*hqFeet;
}
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(block1,block2){
    const hqFeet = 264;
    return Math.abs(block2-block1)*hqFeet
}
console.log(distanceTravelledInFeet(43,48));
console.log(distanceTravelledInFeet(50,60));
console.log(distanceTravelledInFeet(34,28));


function calculatesFarePrice(start,destination){
    const hqFeet = 264 ;
    const freeDistance = 400;
    const distance = Math.abs(destination - start)*hqFeet;
    if (distance<= 400){
        return 0;
    }else if (distance>freeDistance && distance<2000){
    const distanceBeyondFree = distance - freeDistance;
    const fare = (distanceBeyondFree ) * 0.02;
    return fare;
    }else if (distance > 2000 && distance <= 2500) {
        return 25; 
    }else {
        return 'cannot travel that far';
    }
    
}
console.log (calculatesFarePrice(43,44));
console.log (calculatesFarePrice(34,32));
console.log (calculatesFarePrice(50,58));
console.log (calculatesFarePrice(34,24));