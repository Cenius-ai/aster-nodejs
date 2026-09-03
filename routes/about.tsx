import { SEOHead } from "../components/SEOHead.tsx";
import { Nav } from "../components/Nav.tsx";
import DarkModeToggle from "../islands/DarkModeToggle.tsx";

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About"
        description="Learn about the photographer behind Aster — a contemporary visual artist specializing in urban landscapes, environmental portraits, and abstract light studies."
      />
      <Nav current="about" />

      <main class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div class="flex items-center justify-between mb-10">
          <h1 class="font-display text-display text-fg">About</h1>
          <DarkModeToggle />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {/* Placeholder image */}
          <div class="md:col-span-1">
            <div class="aspect-[3/4] rounded-card overflow-hidden bg-surface-inset border border-border">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400" class="h-full w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="about-g1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:hsl(30,55%,48%)" />
                    <stop offset="100%" style="stop-color:hsl(45,50%,62%)" />
                  </linearGradient>
                </defs>
                <rect width="300" height="400" fill="url(#about-g1)" />
                <circle cx="150" cy="160" r="60" fill="hsla(25,40%,75%,0.22)" />
                <circle cx="200" cy="290" r="40" fill="hsla(40,35%,70%,0.16)" />
              </svg>
            </div>
          </div>

          {/* Bio + contact */}
          <div class="md:col-span-2">
            <p class="text-lg text-fg leading-relaxed mb-5">
              I'm a contemporary photographer based in Portland, Oregon, working at the intersection of
              architecture, portraiture, and experimental light studies. My practice is guided by a single
              conviction: that light — its geometry, its absence, its color — is the deepest language
              available to the still image.
            </p>
            <p class="text-fg-muted leading-relaxed mb-5">
              After studying visual arts at the Rhode Island School of Design and spending five years as a
              photojournalist across Southeast Asia and Eastern Europe, I returned to the Pacific Northwest
              to build a slower, more deliberate body of work. Each album on this site represents a sustained
              investigation — months or years spent with a place, a person, or a phenomenon — until the
              frames begin to speak to each other.
            </p>
            <p class="text-fg-muted leading-relaxed mb-8">
              I'm available for commissioned editorial work, fine-art print sales, and collaborative
              projects. If my approach resonates with what you're building, I'd love to hear from you.
            </p>

            {/* Contact links */}
            <div class="space-y-4 border-t border-border pt-6">
              <h2 class="font-display text-heading text-fg mb-4">Get in touch</h2>
              <ul class="space-y-3 text-fg-muted">
                <li>
                  <a href="mailto:hello@aster.photo" class="inline-flex items-center gap-2 hover:text-accent transition-colors duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    hello@aster.photo
                  </a>
                </li>
                <li>
                  <a href="#" class="inline-flex items-center gap-2 hover:text-accent transition-colors duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                    @aster.photo
                  </a>
                </li>
                <li>
                  <a href="#" class="inline-flex items-center gap-2 hover:text-accent transition-colors duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" class="inline-flex items-center gap-2 hover:text-accent transition-colors duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer class="border-t border-border py-8">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-fg-subtle">
          <p>Aster &copy; {new Date().getFullYear()} — A photographer's portfolio.</p>
        </div>
      </footer>
    </>
  );
}
