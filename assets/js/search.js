// Search functionality for the blog
document.addEventListener('DOMContentLoaded', function() {
  // Get all search input elements
  const searchInputs = document.querySelectorAll('#search-input');
  const searchButtons = document.querySelectorAll('#search-button');
  
  // Function to navigate to search page with query
  function performSearch(query) {
    if (query.trim().length < 2) {
      return false;
    }
    
    // Navigate to search page with query parameter
    window.location.href = `/search/?q=${encodeURIComponent(query.trim())}`;
    return true;
  }
  
  // Add event listeners to all search inputs
  searchInputs.forEach(input => {
    input.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        performSearch(this.value);
      }
    });
  });
  
  // Add event listeners to all search buttons
  searchButtons.forEach(button => {
    button.addEventListener('click', function() {
      const input = this.previousElementSibling || this.parentElement.querySelector('#search-input');
      if (input) {
        performSearch(input.value);
      }
    });
  });
});