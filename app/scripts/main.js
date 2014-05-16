
'use strict';

$.getJSON("https://api.github.com/users/TOVERkij15/repos?client-id=31b6368691d0774c212b&client-secret=227508046ccf4d97d53a93dabb0a06d6a3eedd9f").done(function(data){
    renderRepos(data)
});

function renderRepos(repos){
  var showRepos =_.template($(".get-name").text());
  repos.forEach(function (allRepos) {
    var rendered = showRepos(allRepos);
    $(".column-two").append(rendered);
  });
}







/*var getName = _.template($(".get-name").text());

repos.forEach(function(name) {

var allRepos = getName(name);

  $(".column-two").prepend(allRepos);
});


var getStar = _.template($('.get-star').text());

repos.forEach(function(stargazers_count) {

  var allRepos = getStar(stargazers_count);

  $(".column-two").prepend(allRepos);
});

var getforks = _.template($('.get-forks').text());

repos.forEach(function(forks_count) {

  var allRepos = getforks(forks_count);

  $(".column-two").prepend(allRepos);
});


var getlanguage = _.template($('.get-language').text());

repos.forEach(function(language_count) {

  var allRepos = getlanguage(language_count);

  $(".column-two").prepend(allRepos);
});

var getdescription = _.template($('.get-description').text());

repos.forEach(function(description) {

  var allRepos = getdescription(description);

  $(".column-two").prepend(allRepos);
});
*/