// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if(block>42){
        return block -42;
    }else{
        return 42-block;
    }
}
function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet)*264
}
function distanceTravelledInFeet(start,destination){
    return Math.abs ((destination-start)*264);
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination)<= 400){
        return 0;
    }
    else if(distanceTravelledInFeet(start, destination) < 2000){
        return(distanceTravelledInFeet(start, destination) - 400)* 0.02;
    }
    else if(distanceTravelledInFeet(start, destination)> 2500){

    }
    else {
        return 25;
    }
}