function info1(){
    var country = document.getElementById("country").value;

    if(country=="France"){
        // removing the renewable sources info;
        var par1 = document.getElementById("par_remove");
        var img1 = document.getElementById("fig_remove");
        par1.remove();
        while(img1.firstChild){
            img1.firstChild.remove();
        }
    }

    
}
