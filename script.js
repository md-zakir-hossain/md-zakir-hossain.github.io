function loadContent(page) {
    const contentDisplay = document.getElementById('content-display');
    
    // Display a loading message while fetching the content
    contentDisplay.innerHTML = `<p>Loading content from ${page}...</p>`;
    
    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error('Content not found');
            return response.text();
        })
        .then(data => {
            document.getElementById("content-display").innerHTML = data;
        })
        .catch(error => {
            document.getElementById("content-display").innerHTML = "<p>Sorry, the content couldn't be loaded. Please try again later.</p>";
            console.error("Error loading content:", error);
        });
}

// Automatically load the Home page content on page load
window.onload = function() {
    loadContent('Home.html');
};
