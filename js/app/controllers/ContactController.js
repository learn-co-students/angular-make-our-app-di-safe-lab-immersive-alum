function ContactController(bung, buung) {
	bung.name = 'Bill Gates';

	buung(function () {
		bung.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);