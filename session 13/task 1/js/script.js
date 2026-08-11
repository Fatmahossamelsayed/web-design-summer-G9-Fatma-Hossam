    let items = document.querySelectorAll("li");

items.forEach(function(item) {
    item.onclick = function() {
        items.forEach(function(item) {
            item.style.color = "";
        });
        
        this.style.color = "red";
    };
});