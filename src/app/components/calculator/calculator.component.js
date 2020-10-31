import componentTpl from './calculator.component.html';

let calculatorComponent = {
  templateUrl: componentTpl,
  controller: CalculatorController,
  controllerAs: 'calc',
  bindings: {}
};

function CalculatorController($scope, $log) {
  'ngInject';

  //$log.debug('Hello from' + 'Calculator' + 'Controller (component)!');

	var vm = this;

	// defining variables
	vm.weightType = 'gallons';
	vm.unitsType = 'feet';
	vm.currencyType = 'colones';
	vm.length;
	vm.width;
	vm.height;
	vm.surface = 'smooth';
	var surfaceOptions = {
		'siding': 1.8,
		'textured': 1.2,
		'smooth': 1
	};

	vm.ceiling = false;
	vm.doors = 1;
	vm.windows = 0;
	vm.coats = 2;
	vm.quality = 'economy';
	var qualityOptions = {
		'luxury': 1.8,
		'premium': 1.2,
		'economy': 0.8
	};

	vm.calculate = function() {
		vm.area = calculateAREA(vm.length, vm.width, vm.height, vm.coats, surfaceOptions[vm.surface], vm.doors, vm.windows, vm.ceiling, vm.unitsType);
		vm.paint = calculatePAINT(vm.area, qualityOptions[vm.quality], surfaceOptions[vm.surface], vm.weightType, vm.unitsType);
		vm.cost = calculateCOST(vm.area, qualityOptions[vm.quality], surfaceOptions[vm.surface], vm.currencyType, vm.unitsType);
	};

	// calculate total area
	function calculateAREA(length, width, height, coats, surface, doors, windows, ceiling, unitsType) {
		if (doors >= 0) {
			if (unitsType == 'meters') {
				var doors_area = toMETERS(doorsAREA(doors));
			} else {
				var doors_area = doorsAREA(doors);
			}
		}
		if (windows >= 0) {
			if (unitsType == 'meters') {
				var windows_area = toMETERS(windowsAREA(windows));
			} else {
				var windows_area = windowsAREA(windows);
			}
		}
		if (ceiling) {
			var ceiling_area = length * width;
		} else {
			var ceiling_area = 0;
		}

		// combine area of doors and windows
		var doors_windows = doors_area + windows_area;
		// combine surface area
		var surface_area = height * ( parseInt(length) + parseInt(width) );
		// combine ceiling with surface minus doors and windows
		var total_surface_area = (ceiling_area + surface_area) - doors_windows;
		// combine total area with surface type and coats amount
		var total = total_surface_area * coats * surface;

		return total;
	}


	// calculate paint required
	function calculatePAINT(area, quality, surface, weightType, unitsType) {
		// declare paint coverage per gallon in feet
		if (unitsType == 'meters') {
			var paint_coverage = 35;
		} else {
			paint_coverage = 350;
		}
		
		// combine area with paint surface
		var area_surface = area * surface;
		// calculate paint required in gallons
		var paint_required_gallons =  area_surface / paint_coverage;

		if (weightType == 'liters') {
			var paint_required_liters = toLITERS(paint_required_gallons);
		}

		return weightType == 'liters' ? paint_required_liters : paint_required_gallons;
	}

	// calculate cost
	function calculateCOST(area, quality, surface, currencyType, unitsType) {
		// declare paint coverage per gallon in feet
		if (unitsType == 'meters') {
			var price = 3681.54;
		} else {
			price = 1512.81;
		}

		var price_colones = area * quality * surface * price;

		if (currencyType == 'dollars') {
			var price_dollars = toDOLLARS(price_colones);
		}

		return currencyType == 'dollars' ? price_dollars : price_colones;
	}


	// convert feet to meters
	function toMETERS(feet) {
		return feet * 0.3048;
	}

	// convert gallons to liters
	function toLITERS(gallons) {
		return gallons * 3.785411784;
	}

	// convert colones to dollars
	function toDOLLARS(colones) {
		return colones * 0.0018;
	}

	// convert doors to sq/ft
	function doorsAREA(doors) {
		return doors * 21;
	}

	// convert windows to sq/ft
	function windowsAREA(windows) {
		return windows * 15;
	}

}

export default calculatorComponent;
