function loadContent(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error('Content not found');
            return response.text();
        })
        .then(data => {
            document.getElementById("content-display").innerHTML = data;
        })
        .catch(error => {
            document.getElementById("content-display").innerHTML = "<p>Sorry, the content couldn't be loaded.</p>";
            console.error("Error loading content:", error);
        });
}
