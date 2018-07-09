const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let size;
  let startPoints;
  let points;

  //hillsize
  if (hillSize >= 75 && hillSize < 110) {
  	size = 'normal';
  } else if (hillSize >=110 && hillSize < 185) {
  	size = 'big';
  } else if (hillSize >= 185) {
  	size = 'mamut';
  }

  if (hillSize >= 185) {
  	startPoints = 120;
  } else {
  	startPoints = 60;
  }

  //distance
  let distancePoints = distance - kPoint;

  //points
  switch(size) {
  	case 'normal':
  		points = startPoints + (distancePoints *2)
  		break;
  	case 'big':
  		points = startPoints + (distancePoints * 1.8)
  		break;
  	case 'mamut':
  		points = startPoints + (distancePoints * 1.2)
  }

return points;

};

module.exports = calculateDistancePoints;