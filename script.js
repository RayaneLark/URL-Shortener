let ApiURL = {

    fetchURL: function(website) {
        fetch('https://gotiny.cc/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "input" : website })
        })
        .then((response)=> {
            if(!response.ok) {
                alert("No URL shortened.");
                throw new Error("No URL shortened.");
            }
            return response.json();
        })
        
        .then((data) => this.displayURL(data));
    },

    displayURL: function(data) {
        const { long } = data[0];
        const { code } = data[0];
        
        document.querySelector(".link").innerText = "=>  gotiny.cc/" + code;
        
    }
}

document.querySelector(".search button").addEventListener("click", function () {
    ApiURL.fetchURL(document.querySelector(".search-bar").value)
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        ApiURL.fetchURL(document.querySelector(".search-bar").value)
    }
  });