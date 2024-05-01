function info1(){
    var country = document.getElementById("country").value;

    if(country=="France"){
        // removing the renewable sources info;
        var content_remove = document.getElementById("container");
        while(content_remove.firstChild){
            content_remove.firstChild.remove();
        }
        content_remove.remove();

        // adding new tag elements for France;
        var parent = document.getElementById("par_add");
        parent.setAttribute("style", "display: grid; grid-template-columns: 1fr 2fr;");

        // setting the commun style attribute for paragraph tag;
        const style_par = "width: 400px; text-align: justify; font-size: 90%;";

        var div1 = document.createElement("div");
        parent.appendChild(div1);

        var img1 = document.createElement("img");
        img1.setAttribute("src", "./images/france_renewable.png");
        img1.setAttribute("alt", "Répartition des sources d'énergie renouvelables en France");
        img1.setAttribute("style", "width: 400px; border: 1px solid #ddd; border-radius: 4px; padding: 5px;");
        div1.appendChild(img1);

        var par1 = document.createElement("p");
        par1.textContent = "En France les parts des énergies renouvelables dans la consommation finale brute d'énergie " +
        "n'atteignent pas les objectifs fixés par les directives de l'Union européenne. A titre d'exemple pour l'année 2020 cet " +
        "objectif était de 20% tandis que selon Eurostat le niveau de la contribution des sources renouvelables à la production d'énergie " +
        "en 2021 en France s'eléve qu'a 19.2%.";
        par1.setAttribute("style", style_par);
        div1.insertBefore(par1, img1);

        var div2 = document.createElement("div");
        parent.appendChild(div2);

        var par2 = document.createElement("p");
        par2.textContent = "";
    }
}
