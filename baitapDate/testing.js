
function updateSelection(){
    var Selectedfrom = document.getElementById("Selectedfrom").value;
    var Selectedto = document.getElementById("Selectedto");

    function hideOptions(index){
        Selectedto.options[index].style.display = "none";
    }
    function reappearOptions(index){
        Selectedto.options[index].style.display = "inline-block";
    }

    if(Selectedfrom === "SGN"){
        hideOptions(1);
        reappearOptions(0);
        reappearOptions(2);
        reappearOptions(3);
        reappearOptions(4);

    }
    else if(Selectedfrom === "HN"){
        hideOptions(2);
        reappearOptions(0);
        reappearOptions(1);
        reappearOptions(3);
        hideOptions(4);
    }
    else if(Selectedfrom === "DN"){
        hideOptions(3);
        reappearOptions(0);
        reappearOptions(2);
        reappearOptions(1);
        hideOptions(4);
    }
    else if(Selectedfrom === "CD"){
        hideOptions(4);
        hideOptions(2);
        hideOptions(3);
        reappearOptions(0);
        reappearOptions(1);
    }
}