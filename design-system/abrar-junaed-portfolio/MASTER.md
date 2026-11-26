# Design System Master File — Abrar Junaed Portfolio

> **LOGIC:** Global UI/UX Pro Max Source of Truth for `e:\Project\Portfolio`.

## 1. Visual Style & Typography
- **Direction:** Modern Developer Bento & Swiss Grid (Dual-Mode Light & Midnight Tokyo-Slate Dark)
- **Heading Font:** `Space Grotesk` (500, 600, 700)
- **Body Font:** `DM Sans` (400, 500, 600, 700)
- **Monospace Font:** `JetBrains Mono` (400, 500, 600) — used for section eyebrows (`// 01`), code terminal, tech pills, and metadata

## 2. Semantic Color Tokens (`frontend/src/index.css`)

| Semantic Token | Light Mode | Dark Mode (`[data-theme="dark"]`) | Contrast Notes |
|---|---|---|---|
| `--bg-primary` | `#F8FAFC` | `#0B0F19` | Base page canvas |
| `--bg-secondary` | `#F1F5F9` | `#111827` | Alternating section surface |
| `--bg-card` | `#FFFFFF` | `#151E32` | Elevated Bento cards |
| `--text-primary` | `#0F172A` | `#F8FAFC` | >15:1 contrast |
| `--text-secondary` | `#334155` | `#CBD5E1` | >9:1 contrast |
| `--text-muted` | `#475569` | `#94A3B8` | >=6.4:1 contrast (passes WCAG AA 4.5:1) |
| `--accent-primary` | `#2563EB` | `#60A5FA` | Primary interactive & focus ring |
| `--accent-secondary` | `#0891B2` | `#22D3EE` | Secondary gradient & highlights |
| `--accent-violet` | `#7C3AED` | `#A78BFA` | Brand tertiary accent |

## 3. UI/UX Pro Max Quality & Accessibility Rules Enforced
- **No Emojis as Icons:** All structural/UI icons use inline vector SVGs (custom Sun/Moon sliding switch, `<AJ />` favicon/monogram) or Font Awesome 6 vector glyphs with `aria-hidden="true"`.
- **Interactive Controls:** Accessible `role="switch"` + `aria-checked` theme toggle, `role="tablist"` / `role="tab"` + `aria-selected` filter bars, `>= 44px` hit targets on header controls and social links.
- **Keyboard & Motion:** Visible `2px solid var(--accent-primary)` `:focus-visible` outlines (`3px` offset) and full `@media (prefers-reduced-motion: reduce)` support.
- **Content Authenticity:** Strictly verified UIU CSE academic record and actual GitHub/workspace projects; zero placeholder work experience or unverified awards.
