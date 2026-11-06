# VGBE Workshop Website

The current **2027** workshop lives directly in the repository root:

```text
index.html                  Current workshop homepage
styles.css                  Current workshop styles
script.js                   Current workshop navigation
assets/                     Current and shared images
2026/                       Independent 2026 archive
poster/                     Compatibility redirect to 2026/poster/
challenge_flyer/            Compatibility redirect to 2026/challenge_flyer/
data/2027-organizers.json    Local organizing-team draft (ignored by Git)
```

Open `/` for the current edition or `/2026/` for the archived workshop. Each page links to the other. There is no `2027/` directory and no homepage generation step.

## Current content

Title: **Video Generation and World Models: Benchmarks and Evaluation**.

The overview, six research themes, and paper formats follow the supplied `_CVPRW_27__2nd_VGBE_Workshop.pdf` (kept outside the public repository). The page describes a proposed CVPR 2027 workshop and does not claim acceptance. Speakers retain their **Tentative** labels; organizers are not displayed. Competition details are **TBD**. The official CVPR camera-ready deadline for accepted archival workshop papers is **April 23, 2027 (AoE)**; VGBE-specific submission dates and venue details remain **TBA**.

Paper formats are short papers of up to **4 pages** and long papers of up to **8 pages**, excluding references. Submissions are not yet open; submission links and publication details will be announced separately.

Topics use six cards: evaluation methods, datasets and benchmarks, and trustworthy evaluation in the first desktop row; video generation models, world models, and downstream applications in the second. Speaker cards link to verified personal or institutional homepages.

The design uses a deep blue palette, a Seattle photo hero, serif headings, compact body text, and portraits in their original colors.

## Local preview

Run `python3 -m http.server 8000` from this directory and open `http://localhost:8000/`.

## Future editions

Before replacing the root homepage for a new year, archive the current `index.html`, `styles.css`, `script.js`, and required assets in its year directory (for example `2027/`). Adjust its relative links and add it to Previous Editions. Then update the root for the new current year. Preserve existing archive directories and legacy resource URLs.

The 2026 archive remains self-contained. Legacy images and poster/flyer resources are also retained at their original root paths for compatibility.

The Schedule section describes a provisional full-day format; session times and talk assignments remain unpublished. All eight speaker cards now include supplied portrait images, including `assets/jun.jpg` and `assets/yi.jpeg`.
