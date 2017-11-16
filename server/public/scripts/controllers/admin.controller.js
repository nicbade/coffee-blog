myApp.controller('AdminController', function (AdminService, NgMap, $mdDialog) {
  // console.log('AdminController created');

  var self = this;
  self.AdminService = AdminService;
  self.newReview = AdminService.review;
  console.log('self.newReview: ', self.newReview)
  self.clickedReview = [];

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

  // MARKER CLICK DISPLAYS SPECIFIC REVIEW
  self.showDetail = function (e, review) {
    // console.log("button clicked", review)
    self.newReview.review = review;
    self.map.showInfoWindow('reviewWindow', this);
  };

  self.deleteReview = function (ev, reviewId) {
    var confirm = $mdDialog.confirm()
      .parent(angular.element(document.querySelector('#popupContainer')))
      .clickOutsideToClose(true)
      .title('Delete Review?')
      .textContent('You must be an Admin to delete, are you sure?')
      .ariaLabel('Delete Dialog')
      .ok('Delete Training')
      .cancel('Cancel')
      .targetEvent(ev)
    $mdDialog.show(confirm).then(function () {
      // console.log("delete was clicked", reviewId);
      AdminService.deleteReview(reviewId);
      AdminService.getReview();
    }, function() {
      console.log('delete cancelled')
    });
  };
});