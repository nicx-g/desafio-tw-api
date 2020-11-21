let img = $("#user-img");
let name = $("#userName");
let userLocation = $("#userlocation");
let repos = $("#repos");
let gists = $("#gists");
let followers = $("#followers");
let input = $('#user');
let btn = $('#btn')
let error = $('#error')


$(() => {

    $(btn).on('click', (e) => {
        e.preventDefault();
    
        let userValue = input.val();
    
        $.ajax({
            type: 'GET',
            url: `https://api.github.com/users/${userValue}`,
            dataType: 'json'
        }).done((response) => {

            error.fadeOut();
    
            img.attr('src', response.avatar_url);
            name.html(response.name);
            userLocation.html(response.location);
            repos.html(response.public_repos);
            gists.html(response.public_gists);
            followers.html(response.followers);


        }).catch((response) => {
            
            img.attr('src', "https://via.placeholder.com/200x200?text=No+se+encontro");
            name.html("¿Quién será?");
            userLocation.html("");
            repos.html("");
            gists.html("");
            followers.html("");

            error.fadeIn();

        })
    })
})

