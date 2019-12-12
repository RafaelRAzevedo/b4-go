//SELECT GET CURRENT OPTION
$('#selectGenre').on('change', function(e) {
    console.log(this.options[e.target.selectedIndex].text);
    let clubs = $('#clubs');

    clubs.empty();
    
    let str= '<div class="col">isto é um teste</div>';

    $(str).appendTo(clubs);

});

$(document).ready(function(){
    getGenres();
    getClubs();
});

function getGenres(){

    function successCallback (data) {
        console.log(data);
        let select = $('#selectGenre');

        select.empty();

        $.each(data,function(index,element){
            
            let genre = data[index];
            genre = genre.charAt(0).toUpperCase() + genre.slice(1)
            let option = '<option class="option">' + genre + '</option>';
            $(option).appendTo(select);

            console.log(genre);
        });
    }

    function errorCallback(){
        alert("There was an error loading clubs");
    }
    
    $.ajax({
        url: 'http://192.168.1.105:8080/go-go/genre/',
        async: true,
        data:{},
        success: successCallback,
        error: errorCallback
    });
    
}


function getClubs(){
    
    function successCallback (data) {
        console.log(data);

        $.each(data,function(index,element){
            let cards = $('#clubs');

            let card = '<div class="col">'+
            '<div class="card"> '+
            '<img src="..." class="card-img-top" alt="..."> '+
            '<div class="card-body">'+
            '<h5 class="card-title">'+ element.name +'</h5>' +
            '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>'+
              '<a href="#" class="btn btn-primary">Go somewhere</a>'+
            '</div></div></div>';

            $(card).appendTo(cards);
            console.log(element.id);
        });
    }

    function errorCallback(){
        alert("There was an error loading clubs");
    }
    
    $.ajax({
        url: 'http://192.168.1.105:8080/go-go/club/',
        async: true,
        data:{get_param : 'id', get_param : 'name', get_param : 'musicGenre', get_param : 'userList'},
        success: successCallback,
        error: errorCallback
    });
    console.log("teste1");
}