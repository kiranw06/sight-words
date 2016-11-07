"use strict";angular.module("sightWordsApp",["ngAnimate","ngAria","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/projects",{templateUrl:"views/projects.html",controller:"ProjectsCtrl",controllerAs:"projects"}).when("/starter",{templateUrl:"views/starter.html",controller:"StarterCtrl",controllerAs:"starter"}).when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl",controllerAs:"login"}).otherwise({redirectTo:"/"})}]),angular.module("sightWordsApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("sightWordsApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("sightWordsApp").controller("ProjectsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("sightWordsApp").controller("StarterCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("sightWordsApp").controller("LoginCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("sightWordsApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/login.html",'<!-- Tabs --> <div role="tabpanel"> <ul class="nav nav-tabs" role="tablist"> <li role="presentation"><a data-toggle="tab" ng-href="#sign-up">Sign Up</a></li> <li role="presentation" class="active"><a data-toggle="tab" href="#sign-in">Sign In</a></li> </ul> </div> <div class="tab-content"> <!-- Sign Up Body --> <div role="tabpanel" id="sign-up" class="tab-pane fade"> <h3>Sign Up</h3> <p>Some content.</p> </div> <!-- End Sign Up Body --> <!-- Sign In Body--> <div role="tabpanel" id="sign-in" class="tab-pane fade in active"> <h3>Sign In</h3> <div class="panel panel-default"> <div class="panel-body"> <!-- Form --> <form class="form-horizontal"> <div class="form-group"> <label for="inputEmail3" class="col-sm-2 control-label">Email</label> <div class="col-sm-10"> <input type="email" class="form-control" id="inputEmail3" placeholder="Email"> </div> </div> <div class="form-group"> <label for="inputPassword3" class="col-sm-2 control-label">Password</label> <div class="col-sm-10"> <input type="password" class="form-control" id="inputPassword3" placeholder="Password"> </div> </div> <div class="form-group"> <div class="col-sm-offset-2 col-sm-10"> <div class="checkbox"> <label> <input type="checkbox"> Remember me </label> </div> </div> </div> <div class="form-group"> <div class="col-sm-offset-2 col-sm-10"> <a ng-href="#/projects"> <button type="submit" class="btn btn-default">Sign in</button> </a> </div> </div> </form> <!-- End Form --> </div> </div> </div> <!-- End Sign In --> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/projects.html","<p>This is the projects view.</p>"),a.put("views/starter.html","<p>This is the starter view.</p>")}]);