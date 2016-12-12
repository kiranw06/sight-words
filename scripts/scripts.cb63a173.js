"use strict";angular.module("sightWordsApp",["ngAnimate","ngAria","ngCookies","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/projects",{templateUrl:"views/projects.html",controller:"ProjectsCtrl",controllerAs:"projects"}).when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl",controllerAs:"login"}).when("/searchview",{templateUrl:"views/searchview.html",controller:"SearchviewCtrl",controllerAs:"searchview"}).when("/print/:slug",{templateUrl:"views/print.html",controller:"PrintCtrl",controllerAs:"print"}).when("/current-list/:slug",{templateUrl:"views/current-list.html",controller:"CurrentListCtrl",controllerAs:"currentList"}).otherwise({redirectTo:"/"})}]),angular.module("sightWordsApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("sightWordsApp").controller("ProjectsCtrl",["$scope","$localStorage",function(a,b){a.storage=b,a.savedLists=a.storage.savedLists,a.savedLists?console.log("loaded saved word lists"):(b.savedLists={},a.savedLists=b.savedLists,console.log("initalized saved word lists"))}]),angular.module("sightWordsApp").controller("LoginCtrl",function(){}),angular.module("sightWordsApp").factory("search",["$resource",function(a){return a("https://api.datamuse.com/sug?s=:s&max=:max",{},{query:{method:"GET",params:{s:"",max:"12"},isArray:!0}})}]),angular.module("sightWordsApp").factory("authService",["lock","authManager",function(a,b){function c(){a.show()}function d(){a.on("authenticated",function(a){localStorage.setItem("id_token",a.idToken),b.authenticate()})}return{login:c,registerAuthenticationListener:d}}]),angular.module("sightWordsApp").factory("wordsendpoint",function(){}),angular.module("sightWordsApp").controller("SearchviewCtrl",["$scope","search","$localStorage",function(a,b,c){function d(a){return a.toString().toLowerCase().replace(/\s+/g,"").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}a.refreshsearch=function(c){a.suggestedWords=b.query({s:c})},a.isHidden=!0,a.showHide=function(){a.isHidden=a.isHidden?!1:!0,a.isVisible=a.isVisible?!0:!1},a.savedLists=c.savedLists,a.displayText="",a.selectedWords=[],a.savedLists?console.log("loaded saved word lists"):(c.savedLists={},a.savedLists=c.savedLists,console.log("initalized saved word lists")),a.saveList=function(b){var e=d(b),f={name:b,slug:e,words:a.selectedWords};a.savedLists?console.log("list data saved"):(c.savedLists={},a.savedLists=c.savedLists,console.log("savedLists added to localStorage, list data saved.")),a.savedLists[e]=f},a.selectWord=function(b){a.selectedWords.indexOf(b)<0?a.selectedWords.push(b):console.log("word already saved")},a.deselectWord=function(b){console.log(b);var c=a.selectedWords.indexOf(b);console.log(c),a.selectedWords.splice(c,1)}}]),angular.module("sightWordsApp").controller("PrintCtrl",["$scope","$localStorage","$routeParams",function(a,b,c){a.storage=b,a.slug=c.slug,console.log(a.slug),a.savedLists=a.storage.savedLists,console.log(a.savedLists),a.currentList=a.savedLists[a.slug],console.log(a.currentList),a.currentWords=a.currentList.words,a.savedLists?console.log("loaded saved word lists"):(b.savedLists={},a.savedLists=b.savedLists,console.log("initalized saved word lists")),a.printDiv=function(){var a=document.getElementById("printable").innerHTML,b=window.open("Print Me","_blank");b.document.open(),b.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">'+a+"</body></html>"),b.document.close()}}]),angular.module("sightWordsApp").controller("CurrentListCtrl",["$scope","search","$localStorage","$routeParams",function(a,b,c,d){function e(a){return a.toString().toLowerCase().replace(/\s+/g,"").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}a.refreshsearch=function(c){a.suggestedWords=b.query({s:c})},a.storage=c,a.savedLists=a.storage.savedLists,a.slug=d.slug,console.log(a.slug),a.savedLists=a.storage.savedLists,console.log(a.savedLists),a.currentList=a.savedLists[a.slug],console.log(a.currentList),a.selectedWords=a.currentList.words,a.savedLists?console.log("loaded saved word lists"):(a.storage.savedLists={},a.savedLists=a.storage.savedLists,console.log("initalized saved word lists")),a.saveList=function(b){var c=e(b),d={name:b,slug:c,words:a.selectedWords};a.savedLists?console.log("list data saved"):(a.storage.savedLists={},a.savedLists=a.storage.savedLists,console.log("savedLists added to localStorage, list data saved.")),a.savedLists[c]=d},a.selectWord=function(b){a.selectedWords.indexOf(b)<0?a.selectedWords.push(b):console.log("word already saved")},a.deselectWord=function(b){console.log(b);var c=a.selectedWords.indexOf(b);console.log(c),a.selectedWords.splice(c,1)}}]),angular.module("sightWordsApp").run(["$templateCache",function(a){a.put("views/current-list.html",'<div ng-app="sight-words" ng-controller="CurrentListCtrl" class="container"> <div ng-init="s=\'\'"> <div id="listData"> <div class="row project-controlls"> <div class="col-xs-12"> <h1><small class="text-muted">Edit Project: </small><span type="text" name="listName" id="list-name" ng-model="displayText">{{currentList.name}}</span></h1> <hr> </div> <div class="col-sm-6"> <p> <button type="button" class="btn btn-primary" ng-click="saveList()">Save</button> </p> </div> <div class="col-sm-6"> <!-- TODO <a ng-href="#/print/{{slug}}" type="button" class="btn btn-primary">Preview</a> --> <a ng-href="#/projects" type="button" class="btn btn-primary">View Project</a> </div> </div> <hr> <div id="selected-words" class="row"> <div class="col-xs-12"> <h2>Selected Words</h2> <ul class="selected-words-list list-inline"> <li ng-repeat="word in selectedWords"> <div class="panel panel-default"> <div class="panel-body text-center"> <p class="lead">{{word}} </p> <buttton class="btn btn-danger" type="button" ng-click="deselectWord(word)"> <span class="glyphicon glyphicon-remove"></span> </buttton> </div> </div></li> </ul> </div> </div> <div class="row jumbotron"> <div class="col-xs-12"> <h1>Find Sight Words</h1> <p> <label for="s">Search: <input type="text" name="searchTerm" ng-model="searchTerm"> </label> <button class="btn btn-lg btn-primary" ng-click="refreshsearch(searchTerm)"> <span class="glyphicon glyphicon-search"></span> </button> </p> </div> </div> </div> <div class="row results"> <div class="col-xs-12"> <ul class="result-word list-inline" ng-repeat="word in suggestedWords"> <!-- word.word used to define search results array named "word" & object named "word" --> <div class="col-xs-6 col-md-4"> <li type="text" name="selectedWord"> <div class="panel panel-default"> <div class="panel-body"> <!-- add ng-click="selectWord()" --> <a class="btn btn-success pull-right" ng-click="selectWord(word.word)"> <span class="glyphicon glyphicon-ok"></span> </a> <!-- add ng-hide --> <!-- <a class="btn btn-danger" type="button" class="btn btn-primary btn-lg" ng-click="deselectWord(word.word)">\n                      <span class="glyphicon glyphicon-remove"></span>\n                    </a> --> <p class="lead text-center">{{word.word}}</p> </div> </div> </li> </div> </ul> </div> </div> </div> </div>'),a.put("views/login.html",'<!-- Tabs --> <div role="tabpanel"> <ul class="nav nav-tabs" role="tablist"> <li role="presentation"><a data-toggle="tab" ng-href="#sign-up">Sign Up</a></li> <li role="presentation" class="active"><a data-toggle="tab" href="#sign-in">Sign In</a></li> </ul> </div> <div class="tab-content"> <!-- Sign Up Body --> <div role="tabpanel" id="sign-up" class="tab-pane fade"> <h3>Sign Up</h3> <p>Some content.</p> </div> <!-- End Sign Up Body --> <!-- Sign In Body--> <div role="tabpanel" id="sign-in" class="tab-pane fade in active"> <h3>Sign In</h3> <div class="panel panel-default"> <div class="panel-body"> <!-- Form --> <form class="form-horizontal"> <div class="form-group"> <label for="inputEmail3" class="col-sm-2 control-label">Email</label> <div class="col-sm-10"> <input type="email" class="form-control" id="inputEmail3" placeholder="Email"> </div> </div> <div class="form-group"> <label for="inputPassword3" class="col-sm-2 control-label">Password</label> <div class="col-sm-10"> <input type="password" class="form-control" id="inputPassword3" placeholder="Password"> </div> </div> <div class="form-group"> <div class="col-sm-offset-2 col-sm-10"> <div class="checkbox"> <label> <input type="checkbox"> Remember me </label> </div> </div> </div> <div class="form-group"> <div class="col-sm-offset-2 col-sm-10"> <a ng-href="#/projects" ng-click="signin()"> <button type="submit" class="btn btn-default">Sign in</button> </a> </div> </div> </form> <!-- End Form --> </div> </div> </div> <!-- End Sign In --> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>Sight Words</h1> <p class="lead"> An app for early readers! Help quiz a student, family member or friend with a set of customized printable flashcards. </p> <p><a class="btn btn-lg btn-success" ng-href="#/searchview">Start <span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <div class="col-xs-12"> <h2>Search</h2> <p> Users can start by searching and selecting words for thier deck of sight-words printable quiz cards. </p> <div class="row"> <div class="col-xs-12 col-sm-6 center-block"> <h3>Baic Search</h3> <p>Find and add words to your deck with our basic suggested words search. Use some key words/letters and we\'ll take care of the rest.</p> </div> <div class="col-xs-12 col-sm-6 center-block"> <h3>Advanced Search</h3> <p>Use our advanced search for super customized sight-word card options. Search by topic, starting letter, word length, and more!</p> </div> </div> </div> <div class="col-xs-12 col-md-6"> <h2>Print</h2> <p> So you\'ve found all of your sight words... now you\'re ready to print! Use your custom list of sightwords to make your printable sight words card deck! Just save, print, and you\'re ready to start quizing! </p> </div> <div class="col-xs-12 col-md-6"> <h2>Download</h2> <p> Want to do more with your projects? Download your docs so you can share, print again, or save the printing for later. </p> </div> <small> <div class="col-xs-12"> <h2>Coming Soon</h2> <div class="row"> <div class="col-xs-10 col-sm-5 center-block"> <h3>Quiz Game</h3> <p>Go paperless with our customizable in app video game. Keep an eye out for Sight-Words Quizables!</p> </div> <div class="col-xs-10 col-sm-7 center-block"> <h3>Login with Sight-Words</h3> <p>Get ready for sight-words user accounts! Soon users can register and stay organized with in app project storage. Get social with sight-words and browse users pubic projects, and share your own work.</p> </div> </div> </div> </small> </div>'),a.put("views/print.html",'<div ng-model="PrintCtrl"> <div ng-if="storage.savedLists"> <!-- Invisible in Print Mode --> <div class="container"> <div class="row"> <div class="col-xs-12"> <div class="panel panel-default text-center"> <div class="panel-heading"> <h1><small class="text-muted">Preview Project:</small> {{currentList.name}}</h1> </div> <div class="panel-body"> <p class="lead"> Looking Good? </p> <div class="col-xs-12 col-sm-6 bg-warning"> <h2>Meh...</h2> <p>Go back and edit.</p> <p> <a class="btn btn-lg btn-warning" type="button" class="btn btn-primary btn-lg pull-right" ng-href="#/current-list/{{slug}}"> <span class="glyphicon glyphicon-pencil"></span> </a> </p> </div> <div class="col-xs-12 col-sm-6 bg-success"> <h2>Yep!</h2> <p>Happy Quizzing</p> <p> <button class="btn btn-lg btn-success" type="button" class="btn btn-primary btn-lg pull-right" ng-click="printDiv(\'printableArea\');"> <span class="glyphicon glyphicon-print"></span> </button> <!-- TODO download btn\n		    	   		<a class="btn btn-lg btn-success" type="button" class="btn btn-primary btn-lg pull-right">\n		    	   		  <span class="glyphicon glyphicon-download-alt"></span>\n		    	   		</a> --> </p> </div> </div> </div> </div> </div> </div> <!-- Previewed Printable --> <div id="printable"> <div class="container"> <div class="row printable"> <div class="col-xs-12 text-center"> <h1>{{currentList.name}}</h1> <p class="text-muted"> <b>Made with Sight Words</b><br> kiranw.com/sight-words </p> <hr> <ul class="printable-card-list list-inline" ng-repeat="word in currentWords"> <div class="panel panel-default printable-card"> <div class="panel-body"> <li><h1>{{word}}</h1></li> </div> </div> </ul> </div> </div> </div> </div> </div> </div>'),a.put("views/projects.html",'<div class="container" ng-model="ProjectsCtrl"> <div class="row"> <h1>My Projects</h1> <hr> <div ng-if="storage.savedLists"> <ul class="new-projects-list list-unstyled"> <li> <div class="col-xs-12 col-sm-5 panel panel-success"> <div class="panel-heading"> <h2 class="text-center">New Project</h2> </div> <div class="panel-body"> <p> <a class="btn btn-md btn-success center-block" type="button" class="btn btn-primary btn-md" ng-href="#/searchview"> <span class="glyphicon glyphicon-plus"></span> </a> </p> </div> </div> </li> </ul> <ul class="saved-projects-list list-unstyled"> <li ng-repeat="name in storage.savedLists"> <div class="col-xs-12 col-sm-5 panel panel-primary"> <div class="panel-heading"> <h2 class="text-center">{{name.name}}</h2> </div> <div class="panel-body"> <p> <div class="pull-left"> <a type="button" class="btn btn-primary btn-md" ng-href="#/print/{{name.slug}}"> Preview </a> </div> <div class="btn-group pull-right"> <a type="button" class="btn btn-success btn-md" ng-href="#/print/{{name.slug}}"> <span class="glyphicon glyphicon-print"></span> </a> <a type="button" class="btn btn-warning btn-md" ng-href="#/current-list/{{name.slug}}"> <span class="glyphicon glyphicon-pencil"></span> </a> </div> </p> </div> </div> </li> </ul> </div> </div> </div>'),a.put("views/searchview.html",'<div ng-app="sight-words" ng-controller="SearchviewCtrl" class="container"> <div ng-init="s=\'\'"> <div id="listData"> <div class="row project-controlls"> <div class="col-xs-12"> <h1><small class="text-muted">New Project: </small>{{displayText}}</h1> <hr> </div> <div class="col-sm-6"> <p> Name: <input type="text" name="listName" id="list-name" ng-model="displayText"> <button type="button" class="btn btn-primary" ng-click="saveList(displayText)">Save</button> </p> </div> <div class="col-sm-6"> <!-- TODO <a ng-href="#/print/{{name.slug}}" type="button" class="btn btn-primary">Preview</a> --> <a ng-href="#/projects" type="button" class="btn btn-primary">View Project</a> </div> </div> <hr> <div id="selected-words" class="row"> <div class="col-xs-12"> <h2>Selected Words</h2> <ul class="selected-words-list list-inline"> <li ng-repeat="word in selectedWords"> <div class="panel panel-default"> <div class="panel-body text-center"> <p class="lead">{{word}} </p> <buttton class="btn btn-danger" type="button" ng-click="deselectWord(word)"> <span class="glyphicon glyphicon-remove"></span> </buttton> </div> </div></li> </ul> </div> </div> <div class="row jumbotron"> <div class="col-xs-12"> <h1>Find Sight Words</h1> <p> <label for="s">Search: <input type="text" name="searchTerm" ng-model="searchTerm"> </label> <button class="btn btn-lg btn-primary" ng-click="refreshsearch(searchTerm)"> <span class="glyphicon glyphicon-search"></span> </button> </p> </div> </div> </div> <div class="row results"> <div class="col-xs-12"> <ul class="result-word list-inline" ng-repeat="word in suggestedWords"> <!-- word.word used to define search results array named "word" & object named "word" --> <div class="col-xs-6 col-md-4"> <li type="text" name="selectedWord"> <div class="panel panel-default"> <div class="panel-body"> <!-- add ng-click="selectWord()" --> <a class="btn btn-success pull-right" ng-click="selectWord(word.word)"> <span class="glyphicon glyphicon-ok"></span> </a> <!-- add ng-hide --> <!-- <a class="btn btn-danger" type="button" class="btn btn-primary btn-lg" ng-click="deselectWord(word.word)">\n                      <span class="glyphicon glyphicon-remove"></span>\n                    </a> --> <p class="lead text-center">{{word.word}}</p> </div> </div> </li> </div> </ul> </div> </div> </div> </div>')}]);