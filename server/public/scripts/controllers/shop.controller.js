myApp.controller('ShopController', function (AdminService, NgMap) {
    var self = this;
    self.message = "You can not hide. :)";

    NgMap.getMap().then(function(map) {
        self.map = map;
    });

    self.callbackFunc = function(param) {
        console.log('I know where ' + param + ' are. ' + self.message);
        console.log('You are at ' + self.map.getCenter());
    }

});