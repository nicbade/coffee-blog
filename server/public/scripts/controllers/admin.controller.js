myApp.controller('AdminController', function (AdminService, NgMap) {
  // console.log('AdminController created');
  
  var self = this;
  self.AdminService = AdminService;
  self.newReview = AdminService.review;

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
  };

  // INITIATES GET ROUTE FOR REVIEWS
  AdminService.getReview();



});