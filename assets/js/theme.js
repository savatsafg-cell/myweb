// Theme and UI enhancements for the blog
document.addEventListener('DOMContentLoaded', function() {
  // Register Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/assets/js/sw.js')
        .then(function(registration) {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(function(err) {
          console.log('ServiceWorker registration failed: ', err);
        });
    });
  }
  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add copy button to code blocks
  const codeBlocks = document.querySelectorAll('pre.highlight');
  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.innerHTML = '<i class="fas fa-copy"></i>';
    button.title = '复制代码';
    
    button.addEventListener('click', function() {
      const code = block.querySelector('code');
      const text = code.textContent;
      
      navigator.clipboard.writeText(text).then(() => {
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.title = '已复制!';
        
        setTimeout(() => {
          button.innerHTML = '<i class="fas fa-copy"></i>';
          button.title = '复制代码';
        }, 2000);
      }).catch(err => {
        console.error('无法复制代码: ', err);
      });
    });
    
    // Style the button
    button.style.position = 'absolute';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.background = '#0366d6';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.padding = '6px 10px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '12px';
    button.style.zIndex = '10';
    
    // Make the code block relative to position the button
    block.style.position = 'relative';
    block.appendChild(button);
  });
  
  // Add scroll to top button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopBtn.title = '回到顶部';
  scrollToTopBtn.className = 'scroll-to-top';
  
  // Style the button
  scrollToTopBtn.style.position = 'fixed';
  scrollToTopBtn.style.bottom = '20px';
  scrollToTopBtn.style.right = '20px';
  scrollToTopBtn.style.background = '#0366d6';
  scrollToTopBtn.style.color = 'white';
  scrollToTopBtn.style.border = 'none';
  scrollToTopBtn.style.borderRadius = '50%';
  scrollToTopBtn.style.width = '50px';
  scrollToTopBtn.style.height = '50px';
  scrollToTopBtn.style.cursor = 'pointer';
  scrollToTopBtn.style.fontSize = '18px';
  scrollToTopBtn.style.zIndex = '100';
  scrollToTopBtn.style.opacity = '0';
  scrollToTopBtn.style.visibility = 'hidden';
  scrollToTopBtn.style.transition = 'opacity 0.3s, visibility 0.3s';
  
  // Add click event
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Add to body
  document.body.appendChild(scrollToTopBtn);
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.opacity = '1';
      scrollToTopBtn.style.visibility = 'visible';
    } else {
      scrollToTopBtn.style.opacity = '0';
      scrollToTopBtn.style.visibility = 'hidden';
    }
  });
  
  // Add reading progress bar
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress';
  
  // Style the progress bar
  progressBar.style.position = 'fixed';
  progressBar.style.top = '0';
  progressBar.style.left = '0';
  progressBar.style.width = '0%';
  progressBar.style.height = '3px';
  progressBar.style.background = '#0366d6';
  progressBar.style.zIndex = '1000';
  progressBar.style.transition = 'width 0.2s';
  
  // Add to body
  document.body.appendChild(progressBar);
  
  // Update progress bar based on scroll position
  window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
  
  // Add external link indicator
  const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
  externalLinks.forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    
    // Add icon if not already present
    if (!link.querySelector('i.fa-external-link-alt')) {
      const icon = document.createElement('i');
      icon.className = 'fas fa-external-link-alt';
      icon.style.fontSize = '0.7em';
      icon.style.marginLeft = '5px';
      icon.style.opacity = '0.7';
      link.appendChild(icon);
    }
  });
  
  // Add table of contents for long posts
  const postContent = document.querySelector('.post-content');
  if (postContent) {
    const headings = postContent.querySelectorAll('h2, h3');
    
    if (headings.length > 3) { // Only add TOC if there are more than 3 headings
      const tocContainer = document.createElement('div');
      tocContainer.className = 'table-of-contents';
      
      const tocTitle = document.createElement('h3');
      tocTitle.textContent = '目录';
      tocContainer.appendChild(tocTitle);
      
      const tocList = document.createElement('ul');
      
      headings.forEach((heading, index) => {
        // Add ID to heading if not present
        if (!heading.id) {
          heading.id = 'heading-' + index;
        }
        
        const listItem = document.createElement('li');
        listItem.className = heading.tagName.toLowerCase();
        
        const link = document.createElement('a');
        link.href = '#' + heading.id;
        link.textContent = heading.textContent;
        
        listItem.appendChild(link);
        tocList.appendChild(listItem);
      });
      
      tocContainer.appendChild(tocList);
      
      // Style the TOC
      tocContainer.style.background = '#f6f8fa';
      tocContainer.style.border = '1px solid #e1e4e8';
      tocContainer.style.borderRadius = '5px';
      tocContainer.style.padding = '20px';
      tocContainer.style.marginBottom = '30px';
      
      tocTitle.style.marginTop = '0';
      tocTitle.style.marginBottom = '15px';
      tocTitle.style.fontSize = '18px';
      
      tocList.style.marginLeft = '0';
      tocList.style.paddingLeft = '20px';
      
      const tocListItems = tocList.querySelectorAll('li');
      tocListItems.forEach(item => {
        item.style.marginBottom = '8px';
        
        const link = item.querySelector('a');
        link.style.color = '#0366d6';
        link.style.fontSize = '14px';
        
        link.addEventListener('mouseover', function() {
          this.style.textDecoration = 'underline';
        });
        
        link.addEventListener('mouseout', function() {
          this.style.textDecoration = 'none';
        });
        
        if (item.classList.contains('h3')) {
          item.style.paddingLeft = '20px';
        }
      });
      
      // Insert TOC before the first heading
      const firstHeading = headings[0];
      firstHeading.parentNode.insertBefore(tocContainer, firstHeading);
    }
  }
});