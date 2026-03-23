---
layout: page
title: Contact
---

<section class="bg-cover bg-center"
         style="background-image: url('{{ '/assets/images/background/skbackground.jpg' | relative_url }}');">
  <!-- Overlay with dark mode support -->
  <div class="bg-black/60 dark:bg-slate-900/80">
    <div class="container px-6 py-16 mx-auto lg:py-20">
      <div class="lg:flex lg:items-center lg:-mx-6">
        
        <!-- Left: Text Column -->
        <div class="text-white lg:w-1/2 lg:mx-6">
          <h1 class="text-2xl font-semibold text-slate-100 lg:text-3xl">
            Geospatial Intelligence & Environmental Systems
          </h1>
          <p class="max-w-xl mt-4 text-base text-slate-200 leading-relaxed">
            I bridge academic research and operational practice to real‑world challenges in environmental management and sustainability.
          </p>
          

          <!-- Button (matches about page style) -->
          <a href="/pages/contact/"
             class="inline-block px-6 py-3 mt-8 text-sm font-medium tracking-wide
                    bg-slate-900 text-white rounded-md
                    dark:bg-slate-200 dark:text-slate-900
                    hover:bg-slate-700 dark:hover:bg-white
                    transition">
            Let’s work together
          </a>
        </div>

        <!-- Right: Contact Form Column -->
        <div class="mt-10 lg:mt-0 lg:w-1/2 lg:mx-6">
          <div class="w-full px-8 py-10 mx-auto overflow-hidden
                      bg-white dark:bg-slate-900
                      border border-slate-200 dark:border-slate-800
                      rounded-2xl shadow-lg hover:shadow-xl
                      transition lg:max-w-xl">

            <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Send a message
            </h2>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Interested in collaboration or have a project in mind? Let’s talk.
            </p>

            <form class="mt-6 space-y-4">
              <!-- Name -->
              <div>
                <label class="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Full name
                </label>
                <input type="text"
                       placeholder="Kojo Commey"
                       class="block w-full px-5 py-3 text-sm
                              bg-white dark:bg-slate-900
                              border border-slate-200 dark:border-slate-700
                              rounded-md
                              focus:outline-none focus:ring-2 focus:ring-slate-400/50
                              dark:focus:ring-slate-500/50
                              text-slate-900 dark:text-slate-100
                              placeholder-slate-400 dark:placeholder-slate-500" />
              </div>

              <!-- Email -->
              <div>
                <label class="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email address
                </label>
                <input type="email"
                       placeholder="kojocom@example.com"
                       class="block w-full px-5 py-3 text-sm
                              bg-white dark:bg-slate-900
                              border border-slate-200 dark:border-slate-700
                              rounded-md
                              focus:outline-none focus:ring-2 focus:ring-slate-400/50
                              dark:focus:ring-slate-500/50
                              text-slate-900 dark:text-slate-100
                              placeholder-slate-400 dark:placeholder-slate-500" />
              </div>

              <!-- Message -->
              <div>
                <label class="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea rows="4"
                          placeholder="Tell me about your project..."
                          class="block w-full px-5 py-3 text-sm
                                 bg-white dark:bg-slate-900
                                 border border-slate-200 dark:border-slate-700
                                 rounded-md
                                 focus:outline-none focus:ring-2 focus:ring-slate-400/50
                                 dark:focus:ring-slate-500/50
                                 text-slate-900 dark:text-slate-100
                                 placeholder-slate-400 dark:placeholder-slate-500"></textarea>
              </div>

              <!-- Submit Button -->
              <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide
                             bg-slate-900 text-white rounded-md
                             dark:bg-slate-200 dark:text-slate-900
                             hover:bg-slate-700 dark:hover:bg-white
                             transition">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
