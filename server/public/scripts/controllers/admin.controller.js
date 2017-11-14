myApp.controller('AdminController', function (AdminService, NgMap) {
  // console.log('AdminController created');

  var self = this;
  self.AdminService = AdminService;
  self.newReview = AdminService.review;
  console.log('self.newReview: ', self.newReview)

  NgMap.getMap().then(function (map) {
    self.map = map;
  });

  self.placeAdded = function () {
    self.newReview.place = this.getPlace();
    self.newReview.place.latitude = self.newReview.place.geometry.location.lat();
    self.newReview.place.longitude = self.newReview.place.geometry.location.lng();
  };

  // REVIEW POST ROUTE
  self.addReview = function () {
    console.log('addReview post route: ', self.newReview)
    AdminService.addReview(self.newReview);
    self.newReview = {};
    console.log('I\'m watching')
  };

  // INITIATES GET ROUTE FOR REVIEWS
  AdminService.getReview();

  self.showDetail = function (e, review) {
    self.newReview.list.name = name;
    self.map.showInfoWindow('reviewWindow', this);
  };

});