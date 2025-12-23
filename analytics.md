---
layout: default
title: 网站统计
permalink: /analytics/
---

<div class="analytics-container">
  <h1>网站统计分析</h1>
  <p class="analytics-description">本页面展示了博客的访问统计和用户行为分析数据。</p>
  
  <div class="analytics-grid">
    <div class="analytics-card">
      <div class="card-icon">
        <i class="fas fa-users"></i>
      </div>
      <div class="card-content">
        <h3>总访问量</h3>
        <p class="card-value" id="total-visitors">-</p>
        <p class="card-change positive">+12.5% 较上月</p>
      </div>
    </div>
    
    <div class="analytics-card">
      <div class="card-icon">
        <i class="fas fa-eye"></i>
      </div>
      <div class="card-content">
        <h3>页面浏览量</h3>
        <p class="card-value" id="page-views">-</p>
        <p class="card-change positive">+8.3% 较上月</p>
      </div>
    </div>
    
    <div class="analytics-card">
      <div class="card-icon">
        <i class="fas fa-clock"></i>
      </div>
      <div class="card-content">
        <h3>平均停留时间</h3>
        <p class="card-value" id="avg-duration">-</p>
        <p class="card-change negative">-2.1% 较上月</p>
      </div>
    </div>
    
    <div class="analytics-card">
      <div class="card-icon">
        <i class="fas fa-percentage"></i>
      </div>
      <div class="card-content">
        <h3>跳出率</h3>
        <p class="card-value" id="bounce-rate">-</p>
        <p class="card-change positive">-5.7% 较上月</p>
      </div>
    </div>
  </div>
  
  <div class="analytics-sections">
    <div class="analytics-section">
      <h2>热门文章</h2>
      <div class="popular-posts" id="popular-posts">
        <div class="loading-indicator">
          <i class="fas fa-spinner fa-spin"></i> 加载中...
        </div>
      </div>
    </div>
    
    <div class="analytics-section">
      <h2>流量来源</h2>
      <div class="traffic-sources">
        <div class="source-item">
          <div class="source-label">直接访问</div>
          <div class="source-bar">
            <div class="source-fill" style="width: 45%"></div>
          </div>
          <div class="source-percentage">45%</div>
        </div>
        <div class="source-item">
          <div class="source-label">搜索引擎</div>
          <div class="source-bar">
            <div class="source-fill" style="width: 30%"></div>
          </div>
          <div class="source-percentage">30%</div>
        </div>
        <div class="source-item">
          <div class="source-label">社交媒体</div>
          <div class="source-bar">
            <div class="source-fill" style="width: 15%"></div>
          </div>
          <div class="source-percentage">15%</div>
        </div>
        <div class="source-item">
          <div class="source-label">外部链接</div>
          <div class="source-bar">
            <div class="source-fill" style="width: 10%"></div>
          </div>
          <div class="source-percentage">10%</div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="analytics-note">
    <p><i class="fas fa-info-circle"></i> 注意：此页面显示的是模拟数据。要查看真实的网站统计数据，请配置 Google Analytics 并在 _config.yml 中设置您的跟踪 ID。详细配置说明请参考 <a href="/DEPLOYMENT.md#访问统计配置">部署文档</a>。</p>
  </div>
</div>

<style>
  .analytics-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .analytics-description {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .analytics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .analytics-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    padding: 20px;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .analytics-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
  
  .card-icon {
    background: #f6f8fa;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
  }
  
  .card-icon i {
    font-size: 1.5rem;
    color: #0366d6;
  }
  
  .card-content h3 {
    margin: 0 0 5px 0;
    font-size: 0.9rem;
    color: #666;
  }
  
  .card-value {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0 0 5px 0;
    color: #333;
  }
  
  .card-change {
    font-size: 0.8rem;
    margin: 0;
  }
  
  .card-change.positive {
    color: #28a745;
  }
  
  .card-change.negative {
    color: #dc3545;
  }
  
  .analytics-sections {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 40px;
  }
  
  @media (max-width: 768px) {
    .analytics-sections {
      grid-template-columns: 1fr;
    }
  }
  
  .analytics-section {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    padding: 20px;
  }
  
  .analytics-section h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 1.3rem;
    color: #333;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  
  .popular-posts {
    min-height: 200px;
  }
  
  .loading-indicator {
    text-align: center;
    padding: 40px 0;
    color: #666;
  }
  
  .traffic-sources {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .source-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .source-label {
    width: 100px;
    font-size: 0.9rem;
  }
  
  .source-bar {
    flex: 1;
    height: 10px;
    background: #f1f3f5;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .source-fill {
    height: 100%;
    background: #0366d6;
    border-radius: 5px;
  }
  
  .source-percentage {
    width: 40px;
    text-align: right;
    font-weight: 600;
  }
  
  .analytics-note {
    background: #f8f9fa;
    border-left: 4px solid #0366d6;
    padding: 15px;
    border-radius: 0 4px 4px 0;
    margin-top: 20px;
  }
  
  .analytics-note p {
    margin: 0;
    color: #666;
  }
  
  .analytics-note i {
    color: #0366d6;
    margin-right: 8px;
  }
  
  .post-item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }
  
  .post-item:last-child {
    border-bottom: none;
  }
  
  .post-rank {
    width: 30px;
    height: 30px;
    background: #f6f8fa;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin-right: 15px;
  }
  
  .post-info h4 {
    margin: 0 0 5px 0;
    font-size: 1rem;
  }
  
  .post-info h4 a {
    color: #0366d6;
    text-decoration: none;
  }
  
  .post-info h4 a:hover {
    text-decoration: underline;
  }
  
  .post-info p {
    margin: 0;
    font-size: 0.9rem;
    color: #666;
  }
</style>

<script>
  // Simulate loading analytics data
  document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading delay
    setTimeout(function() {
      // Update card values with simulated data
      document.getElementById('total-visitors').textContent = '12,543';
      document.getElementById('page-views').textContent = '45,821';
      document.getElementById('avg-duration').textContent = '3:42';
      document.getElementById('bounce-rate').textContent = '42.3%';
      
      // Update popular posts
      const popularPosts = document.getElementById('popular-posts');
      popularPosts.innerHTML = `
        <div class="post-item">
          <div class="post-rank">1</div>
          <div class="post-info">
            <h4><a href="/2023/12/15/web-performance-optimization.html">Web性能优化技巧</a></h4>
            <p>浏览量: 3,421</p>
          </div>
        </div>
        <div class="post-item">
          <div class="post-rank">2</div>
          <div class="post-info">
            <h4><a href="/2023/12/05/jekyll-github-pages.html">使用Jekyll搭建GitHub Pages博客</a></h4>
            <p>浏览量: 2,856</p>
          </div>
        </div>
        <div class="post-item">
          <div class="post-rank">3</div>
          <div class="post-info">
            <h4><a href="/2023/12/10/modern-frontend-development.html">现代前端开发趋势</a></h4>
            <p>浏览量: 2,103</p>
          </div>
        </div>
        <div class="post-item">
          <div class="post-rank">4</div>
          <div class="post-info">
            <h4><a href="/2023/12/01/welcome.html">欢迎来到我的博客</a></h4>
            <p>浏览量: 1,789</p>
          </div>
        </div>
      `;
    }, 1500);
  });
</script>