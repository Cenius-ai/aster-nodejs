import { SEOHead } from "../components/SEOHead.tsx";
import { Nav } from "../components/Nav.tsx";

export default function NotFoundPage() {
  return (
    <>
      <SEOHead title="Page not found" description="The page you're looking for doesn't exist." />
      <Nav />

      <main class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <p class="font-display text-[8rem] leading-none text-accent mb-4" aria-hidden="true">404</p>
        <h1 class="font-display text-display text-fg mb-4">Page not found</h1>
        <p class="text-fg-muted text-lg leading-relaxed mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Return home to browse the portfolio.
        </p>
        <a
          href="/"
          class="inline-flex items-center justify-center rounded-btn bg-accent text-accent-fg px-6 py-3 text-sm font-medium
                 hover:bg-accent-muted transition-colors duration-150
                 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          Back to home
        </a>
      </main>
    </>
  );
}
