---
layout: default
title: Insights
subtitle: Thoughts, methods, and applied work in geospatial intelligence
---

<section class="max-w-5xl mx-auto px-6 py-16">
  <header class="mb-12">
    <h1 class="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
      {{ page.title }}
    </h1>
    <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
      {{ page.subtitle }}
    </p>
  </header>

  <div class="grid gap-10 md:grid-cols-2">
    {% for post in site.insights reversed %}
    <a
      href="{{ post.url | relative_url }}"
      class="group block p-6 card"
    >
      {% if post.category %}
      <p class="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
        {{ post.category }}
      </p>
      {% endif %}

      <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-white transition">
        {{ post.title }}
      </h2>

      <p class="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        {{ post.summary }}
      </p>

      <div class="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
        <time>{{ post.date | date: "%B %d, %Y" }}</time>
        {% if post.read_time %}
        <span class="text-slate-300 dark:text-slate-600">·</span>
        <span>{{ post.read_time }} min read</span>
        {% endif %}
      </div>

      {% if post.tags %}
      <div class="mt-4 flex flex-wrap gap-2">
        {% for tag in post.tags limit:3 %}
        <span class="tag-pill">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </a>
    {% endfor %}
  </div>

  {% if site.insights.size == 0 %}
  <p class="text-slate-500 dark:text-slate-400">No insights published yet. Check back soon.</p>
  {% endif %}
</section>