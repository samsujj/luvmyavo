'use strict';



/* App Module */

var luvmyavomodule = angular.module('luvmyavoApp', ['ui.router','angularValidator','ui.bootstrap','ngCookies','angularLazyImg']);





luvmyavomodule.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

    $urlRouterProvider

        .otherwise("/index");





    $stateProvider

        .state('index',{

            url:"/index",

            views: {



                'content': {

                    controller: 'index'

                },



            }

        }

    )



        .state('home',{

            url:"/home",

            views: {



                'header': {

                    templateUrl: 'partials/header.html' ,
                    controller: 'header'

                },

                'footer': {

                    templateUrl: 'partials/footer.html' ,

                },

                'content': {

                    templateUrl: 'partials/home.html' ,

                    controller: 'home'

                },



            }

        }

    )



        .state('aboutus',{

            url:"/about-us",

            views: {



                'header': {

                    templateUrl: 'partials/header.html' ,
                    controller: 'header'

                },

                'footer': {

                    templateUrl: 'partials/footer.html' ,

                },

                'content': {

                    templateUrl: 'partials/aboutus.html' ,

                    controller: 'home'

                },



            }

        }

    )



        .state('products',{

            url:"/all-products",

            views: {



                'header': {

                    templateUrl: 'partials/header.html' ,
                    controller: 'header'

                },

                'footer': {

                    templateUrl: 'partials/footer.html' ,

                },

                'content': {

                    templateUrl: 'partials/allproducts.html' ,

                    controller: 'home'

                },



            }

        }

    )



        .state('product',{

            url:"/product/:id",

            views: {



                'header': {

                    templateUrl: 'partials/header.html' ,
                    controller: 'header'

                },

                'footer': {

                    templateUrl: 'partials/footer.html' ,

                },

                'content': {

                    templateUrl: 'partials/product.html' ,

                    controller: 'product'

                },



            }

        }

    )



        .state('blog',{

            url:"/blog",

            views: {



                'header': {

                    templateUrl: 'partials/header.html' ,
                    controller: 'header'

                },

                'footer': {

                    templateUrl: 'partials/footer.html' ,

                },

                'content': {

                    templateUrl: 'partials/blog.html' ,

                    controller: 'home'

                },



            }

        }

    )



        .state('contactus',{

            url:"/contact-us",

            views: {



                'header': {

                    templateUrl: 'partials/header.html' ,
                    controller: 'header'

                },

                'footer': {

                    templateUrl: 'partials/footer.html' ,

                },

                'content': {

                    templateUrl: 'partials/contactus.html' ,

                    controller: 'contactus'

                },



            }

        }

    )



        .state('privacypolicy',{

                url:"/privacy-policy",

                views: {



                    'header': {

                        templateUrl: 'partials/header.html' ,
                        controller: 'header'

                    },

                    'footer': {

                        templateUrl: 'partials/footer.html' ,

                    },

                    'content': {

                        templateUrl: 'partials/privacypolicy.html' ,

                        controller: 'home'

                    },



                }

            }

        )



        .state('nutritioninformation',{

                url:"/nutrition-information",

                views: {



                    'header': {

                        templateUrl: 'partials/header.html' ,
                        controller: 'header'

                    },

                    'footer': {

                        templateUrl: 'partials/footer.html' ,

                    },

                    'content': {

                        templateUrl: 'partials/nutritioninformation.html' ,

                        controller: 'home'

                    },



                }

            }

        )



    $locationProvider.html5Mode({

        enabled: true,

        requireBase: false,

        hashPrefix:'!'

    });

});





luvmyavomodule.controller('index', function($scope,$state,$cookieStore,$rootScope) {

    $state.go('home');

    return

});



luvmyavomodule.controller('header', function($scope,$state,$cookieStore,$rootScope) {

    $scope.currentpage=$state.current.name;

    console.log($scope.currentpage);

    $scope.gotolink = function(rpage){
        $scope.currentpage = rpage;
        $state.go(rpage);
        return;
    }

});


luvmyavomodule.controller('home', function($scope,$state,$cookieStore,$rootScope) {

    $scope.myInterval = 5000;

    $scope.noWrapSlides = false;

    $scope.active = 0;



    $scope.slides = ['images/luvmyavoslider1.png','images/luvmyavoslider2.png','images/luvmyavoslider3.png']

});





luvmyavomodule.controller('product', function($scope,$state,$cookieStore,$rootScope,$stateParams) {

    $scope.id= $stateParams.id;

});





luvmyavomodule.controller('contactus', function($scope,$state,$cookieStore,$rootScope,$stateParams,$http) {

    $scope.mailsents = 0;

    $scope.sentmail = function(){

        $http({

            method: 'POST',

            async:   false,

            url: 'sentmail.php',

            data    : $.param($scope.form),

            headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }

        }).success(function (result) {

            $scope.mailsents = 1;

           // $scope.contactsiteform.reset();



        });

    }

});