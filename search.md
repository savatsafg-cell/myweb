---
layout: default
title: 搜索结果
permalink: /search/
---

<div class="search-page">
  <h1 class="page-heading">搜索结果</h1>
  
  <div class="search-container">
    <div class="search-box">
      <input type="text" id="search-input" placeholder="输入关键词搜索文章...">
      <button id="search-button"><i class="fas fa-search"></i></button>
    </div>
    
    <div id="search-results" class="search-results">
      <p class="search-message">输入关键词开始搜索...</p>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    
    // Focus on search input when page loads
    searchInput.focus();
    
    // Function to perform search
    function performSearch() {
      const query = searchInput.value.trim().toLowerCase();
      
      if (query.length < 2) {
        searchResults.innerHTML = '<p class="search-message">请输入至少2个字符进行搜索...</p>';
        return;
      }
      
      // Get all posts
      const posts = [
        {% for post in site.posts %}
          {
            title: {{ post.title | jsonify }},
            url: {{ post.url | jsonify }},
            content: {{ post.content | strip_html | strip_newlines | jsonify }},
            excerpt: {{ post.excerpt | strip_html | strip_newlines | jsonify }},
            date: {{ post.date | date: "%Y年%m月%d日" | jsonify }},
            categories: [{% for category in post.categories %}{{ category | jsonify }}{% unless forloop.last %},{% endunless %}{% endfor %}],
            tags: [{% for tag in post.tags %}{{ tag | jsonify }}{% unless forloop.last %},{% endunless %}{% endfor %}]
          }{% unless forloop.last %},{% endunless %}
        {% endfor %}
      ];
      
      // Filter posts based on query
      const filteredPosts = posts.filter(post => {
        return post.title.toLowerCase().includes(query) ||
               post.content.toLowerCase().includes(query) ||
               post.excerpt.toLowerCase().includes(query) ||
               post.categories.some(cat => cat.toLowerCase().includes(query)) ||
               post.tags.some(tag => tag.toLowerCase().includes(query));
      });
      
      // Display results
      if (filteredPosts.length === 0) {
        searchResults.innerHTML = `<p class="search-message">没有找到与 "${query}" 相关的文章。</p>`;
        return;
      }
      
      let resultsHTML = `<p class="search-message">找到 ${filteredPosts.length} 篇与 "${query}" 相关的文章：</p>`;
      
      filteredPosts.forEach(post => {
        // Highlight search term in title and excerpt
        const highlightedTitle = post.title.replace(new RegExp(query, 'gi'), match => `<mark>${match}</mark>`);
        const highlightedExcerpt = post.excerpt.replace(new RegExp(query, 'gi'), match => `<mark>${match}</mark>`);
        
        resultsHTML += `
          <article class="post-item">
            <h2 class="post-title">
              <a href="${post.url}">${highlightedTitle}</a>
            </h2>
            <div class="post-meta">
              <time datetime="${post.date}">${post.date}</time>
              ${post.categories.length > 0 ? `• 分类: ${post.categories.map(cat => `<a href="/categories/${cat}/" class="post-category">${cat}</a>`).join(', ')}` : ''}
            </div>
            <div class="post-excerpt">
              ${highlightedExcerpt}
            </div>
            <a href="${post.url}" class="read-more">阅读全文</a>
          </article>
        `;
      });
      
      searchResults.innerHTML = resultsHTML;
    }
    
    // Event listeners
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        performSearch();
      }
    });
    
    // Perform search on page load if there's a query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    if (query) {
      searchInput.value = query;
      performSearch();
    }
  });
</script>