function orbitalPeriod(arr) {
	var avgAlt;
	var outputArr = [];
	var aCube;
	for (var i = 0; i < arr.length; i++)
	{
		avgAlt = arr[i].avgAlt;
		var currObject = {};
		currObject.name = arr[i].name;
		currObject.orbitalPeriod = getOrbitalPeriod(avgAlt);
		outputArr.push(currObject);
	}
	return outputArr;
}

function getOrbitalPeriod(avgAlt)
{
	var GM = 398600.4418;
	var earthRadius = 6367.4447;
    var radPlusAlt = earthRadius + avgAlt;
  
	var aCube = (radPlusAlt ** 3)/GM;
	var sqrt = Math.sqrt(aCube);
	var T = Math.round((2 * Math.PI) *sqrt);

	return T;
}