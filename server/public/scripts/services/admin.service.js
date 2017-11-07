myApp.service('AdminService', function ($http, $location) {
    console.log('AdminService Loaded');

    var self = this;

    // REVIEW POST ROUTE
    self.addReview = function(newReview) {
        // console.log(newReview);
        self.newReview = newReview;
        $http.post('/review', newReview).then(function(response) {
            console.log('service post response: ', response.data);
        });
    };

});