myApp.controller('ShopController', function (AdminService, NgMap) {
    
    NgMap.getMap().then(function(map) {
        console.log('getCenter:' , map.getCenter());
        console.log('markers: ', map.markers);
        console.log('shapes: ', map.shapes);
    })


});