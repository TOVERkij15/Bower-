
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


var gitHubProfile = _.template($('.git-hub-profile').text());


$.getJSON("https://api.github.com/users/TOVERkij15?client-id=31b6368691d0774c212b&client-secret=227508046ccf4d97d53a93dabb0a06d6a3eedd9f").done(function(profile){
    renderProfile(profile)
})
  function renderProfile(profile){

    var showRepos = _.template($(".get-info").text());

    var rendered = showRepos(profile);

    $('.column-one').prepend(rendered);
  };



