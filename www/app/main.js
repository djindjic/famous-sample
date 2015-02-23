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
	var t = new Transitionable(0);

	function reset(){
		t.set(0);
		t.set(Math.PI * 2.0, {duration: 1750, curve: 'linear'}, function(){
			$timeout(reset);
		})
	}

	reset();

	$scope.getRotateY = function(){
		return t.get();
	}
}])
