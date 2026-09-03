import HamburgerMenu from "../islands/HamburgerMenu.tsx";

export function Nav({ current }: { current?: string }) {
  const linkCls = (name: string) =>
    `btn-ghost text-sm ${current === name ? "text-accent" : "text-fg-muted"}`;

  return (
    <nav
      class="sticky top-0 z-30 border-b border-border bg-surface/80 backdrop-blur-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="/"
          class="font-display text-heading tracking-tight text-fg no-underline hover:text-accent transition-colors duration-150"
          aria-label="Aster home"
        >
          Aster
        </a>

        {/* Desktop links — hidden on mobile */}
        <div class="hidden sm:flex items-center gap-2">
          <a href="/" class={linkCls("home")}>Home</a>
          <a href="/albums" class={linkCls("albums")}>Albums</a>
          <a href="/about" class={linkCls("about")}>About</a>
        </div>

        {/* Mobile hamburger — visible only on mobile */}
        <HamburgerMenu current={current} />
      </div>
    </nav>
  );
}
