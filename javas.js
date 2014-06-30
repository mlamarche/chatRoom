function getName() {
    text = "";
    $('#inputtext').val('');
    $('#myModal').on('shown.bs.modal', function() {
        $('#inputtext').focus();
    })
    $('#addbutton').on("click", function() {
        text = $('#inputtext').val();
        if (text != "") {
            newPlayer(text);
        }
        $('#inputtext').val('');
    })
    $('#inputtext').on("keydown", function(e) {
        if (e.keyCode === 13) {
            text = $('#inputtext').val();

            if (text != "") {
                newPlayer(text);
            }
            $('#inputtext').val('');
            $('#myModal').modal('hide');
        }
    })
}

function newPlayer(name) {
    playerName = name;
}

$(document).ready(function() {
    console.log($('#myModal'));
    $('#myModal').modal('show');
    getName();
    beginning = true;
});