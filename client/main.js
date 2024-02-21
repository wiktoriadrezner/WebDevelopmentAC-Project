fetch("http://localhost:3000/stores/all")
    .then((response) => response.json())
    .then(function (stores) {
        console.log(stores);
        // That's where we manipulate the data
    });

console.log("test");
