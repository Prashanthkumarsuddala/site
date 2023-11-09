function highlightSearch() {
    var searchInputValue = document.getElementById('searchInput').value;
    var contentToHighlight = document.querySelector('.nav-body').innerHTML;

    // Use a regular expression to find and replace the search term with a highlighted version
    var highlightedContent = contentToHighlight.replace(new RegExp(searchInputValue, 'gi'), match => `<span class="highlight">${match}</span>`);

    // Display the highlighted content
    document.querySelector('.nav-body').innerHTML = highlightedContent;
}
