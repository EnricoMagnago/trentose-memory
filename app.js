// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

var cardPattern = "<li id=\"$id\" class=\"card\"><h3>$idInc</h3></li>"; 
var lastClicked = 1;
$(document).ready(function() {
    for (var i = 0; i< data.length; i++) {
        var id = data[i];
        var card =  cardPattern.replace ("$id", id);
        card = card.replace ("$idInc", id);
        $(".cards").append(card);
    }
    
    $(".opt-start").click(function(event){
        $(".card").removeClass("hidden").addClass("hidden");
    });
    
    $(".cards").on("click", ".hidden", function(){
        if(lastClicked == $(this).attr("id")){
            $(this).removeClass("hidden").addClass("done");
            lastClicked++;
        }else{
            alert("you loose!");            
        }
    });
});







