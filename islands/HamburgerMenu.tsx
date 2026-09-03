import { useState } from "preact/hooks";
import { useEffect } from "preact/hooks";

interface HamburgerMenuProps {
  current?: string;
}

export default function HamburgerMenu({ current }: HamburgerMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger button — visible only on mobile */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        class="sm:hidden btn-ghost rounded-full w-10 h-10 p-0 z-40 relative"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          {open
            ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
          }
        </svg>
      </button>

      {/* Mobile overlay */}
      {open && (
        <div class="fixed inset-0 z-30 sm:hidden" onClick={() => setOpen(false)}>
          <div class="absolute inset-0 bg-black/40" />
          <nav
            class="absolute right-0 top-0 bottom-0 w-64 bg-surface-elevated border-l border-border p-6 pt-20 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <ul class="flex flex-col gap-3">
              <li>
                <a
                  href="/"
                  onClick={() => setOpen(false)}
                  class={`block py-2 text-lg font-medium ${current === "home" ? "text-accent" : "text-fg"}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/albums"
                  onClick={() => setOpen(false)}
                  class={`block py-2 text-lg font-medium ${current === "albums" ? "text-accent" : "text-fg"}`}
                >
                  Albums
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={() => setOpen(false)}
                  class={`block py-2 text-lg font-medium ${current === "about" ? "text-accent" : "text-fg"}`}
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
