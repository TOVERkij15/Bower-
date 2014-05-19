
'use strict';

$.getJSON("https://api.github.com/users/TOVERkij15/repos").done(function(data){
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


$.getJSON("https://api.github.com/users/TOVERkij15").done(function(profile){
    renderProfile(profile)
})
  function renderProfile(profile){

    var showRepos = _.template($(".get-info").text());

    var rendered = showRepos(profile);

    $('.column-one').prepend(rendered);
  };


