function orbitalPeriod(arr) {
  	var outArr = arr.map(getOrbitalPeriod);//map creates a for loop and iterates through  each element in the array, calls the function and maps the returned value from the function to the outArr.
	return outArr;

}
function getOrbitalPeriod(obj)
{
	var name = obj.name;
	var avgAlt = obj.avgAlt;
	var GM = 398600.4418;
	var earthRadius = 6367.4447;
    var radPlusAlt = earthRadius + avgAlt;
 	var aCube = (radPlusAlt ** 3)/GM;
	var sqrt = Math.sqrt(aCube);
	var T = Math.round((2 * Math.PI) *sqrt);
	var newObj = {};
	newObj.name = name;
	newObj.orbitalPeriod = T;
	return newObj;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);