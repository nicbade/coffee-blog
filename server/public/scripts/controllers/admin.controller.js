myApp.controller('AdminController', function (AdminService, NgMap) {
  console.log('AdminController created');
  var self = this;
  self.AdminService = AdminService;
  self.review = AdminService.review;
  // REVIEW POST ROUTE
  self.addReview = function() {
    console.log(self.review)
    AdminService.addReview(self.review);
    self.review = {};
  };

  // INITIATES GET ROUTE FOR REVIEWS
  AdminService.getReview();
});