import angular from 'angular';
import 'angular-material';
import './style.css!'
import 'famous-angular';

export let mainModule = angular.module('famous-sample', [
	'ngMaterial',
	'famous.angular'
]);

mainModule.controller('MainCtrl', ['$scope', '$famous', '$timeout', function($scope, $famous, $timeout){
	var Transitionable = $famous['famous/transitions/Transitionable'];
	var Easing = $famous['famous/transitions/Easing'];
	var t = new Transitionable(0);


	$scope.myTransitionable = new Transitionable([0, 0, 0]);
	//$scope.myTransitionable.set([100, 0, 0], {duration: 1000, curve: 'easeInOut'})

	function reset(){
		t.set(0);
		t.set(Math.PI * 2.0, {duration: 3000, curve: 'linear'}, function(){
			//$timeout(reset);
		});
		$scope.myTransitionable.set([300, 0, 0], {duration: 3000, curve: Easing.outBounce}, function(){
			//$timeout(reset);
		});
	}

	reset();

	$scope.getRotateY = function(){
		return t.get();
	}
}]).config(['$mdThemingProvider', function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('amber')
    .accentPalette('light-green');
}]);
