myApp.controller('ShopsController', function(UserService) {
  console.log('ShopsController created');
  var vm = this;
  vm.userService = UserService;
});
