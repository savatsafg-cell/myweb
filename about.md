---
layout: default
title: 关于
permalink: /about/
---

<div class="about-page">
  <div class="about-header">
    <img src="{{ site.avatar | default: '/assets/images/avatar.jpg' | relative_url }}" alt="{{ site.author }}" class="about-avatar">
    <h1 class="about-title">关于我</h1>
    <p class="about-subtitle">{{ site.description | default: "欢迎来到我的个人博客，这里分享技术文章、生活感悟和创意思考。" }}</p>
  </div>

  <div class="about-content">
    <div class="about-section">
      <h2>个人简介</h2>
      <p>你好！我是{{ site.author | default: "博主" }}，这是我的个人博客。在这里，我分享我的技术学习心得、项目经验以及生活中的点滴感悟。</p>
      <p>我热爱技术，喜欢探索新技术，享受解决复杂问题的过程。同时，我也关注用户体验和产品设计，致力于创造有价值的产品和服务。</p>
    </div>

    <div class="about-section">
      <h2>技能专长</h2>
      <div class="skills-grid">
        <div class="skill-item">
          <h3>前端开发</h3>
          <div class="skill-bar">
            <div class="skill-level" style="width: 90%"></div>
          </div>
        </div>
        <div class="skill-item">
          <h3>后端开发</h3>
          <div class="skill-bar">
            <div class="skill-level" style="width: 80%"></div>
          </div>
        </div>
        <div class="skill-item">
          <h3>UI/UX设计</h3>
          <div class="skill-bar">
            <div class="skill-level" style="width: 75%"></div>
          </div>
        </div>
        <div class="skill-item">
          <h3>数据分析</h3>
          <div class="skill-bar">
            <div class="skill-level" style="width: 70%"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="about-section">
      <h2>联系方式</h2>
      <div class="contact-info">
        {% if site.email %}
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <span>{{ site.email }}</span>
        </div>
        {% endif %}
        
        {% if site.github_username %}
        <div class="contact-item">
          <i class="fab fa-github"></i>
          <a href="https://github.com/{{ site.github_username }}" target="_blank">github.com/{{ site.github_username }}</a>
        </div>
        {% endif %}
        
        {% if site.linkedin_username %}
        <div class="contact-item">
          <i class="fab fa-linkedin"></i>
          <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank">linkedin.com/in/{{ site.linkedin_username }}</a>
        </div>
        {% endif %}
        
        {% if site.twitter_username %}
        <div class="contact-item">
          <i class="fab fa-twitter"></i>
          <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank">twitter.com/{{ site.twitter_username }}</a>
        </div>
        {% endif %}
      </div>
    </div>

    <div class="about-section">
      <h2>博客内容</h2>
      <p>本博客主要分享以下内容：</p>
      <ul>
        <li>技术教程与开发心得</li>
        <li>项目经验与案例分析</li>
        <li>行业动态与趋势观察</li>
        <li>生活感悟与个人成长</li>
      </ul>
      <p>希望我的分享能够对你有所帮助，也欢迎你与我交流讨论。如果你有任何问题或建议，请随时联系我。</p>
    </div>
  </div>
</div>