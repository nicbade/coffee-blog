myApp.service('AdminService', function ($http, $location) {
    console.log('AdminService Loaded');

    var self = this;
    self.review = {
        list: []
    };


    // REVIEW POST ROUTE
    self.addReview = function (newReview) {
        // console.log(newReview);
        self.newReview = newReview;
        $http.post('/review', newReview).then(function (response) {
            console.log('service post response: ', response.data);
        });
    };

    // REVIEW GET ROUTE
    self.getReview = function () {
        $http.get('/review').then(function (response) {
            // console.log('getReviews: ', response.data);
            self.review.list = response.data;
        });
    };

    // REVIEW DELETE ROUTE
    self.deleteReview = function (reviewId) {
        console.log('deleteReview hit', reviewId);
        $http.delete('/review/' + reviewId).then(function(response) {
            console.log('response: ', response);
            self.getReview();
        });
    };
});