# Yoga in Context

A single-page public education and donor introduction site, built with semantic
HTML and responsive CSS. There is no JavaScript, build step, package installation,
or analytics. The contact form posts directly to Formspree; no third-party
JavaScript is loaded.

## Local preview

From this directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open <http://127.0.0.1:4173> and reload after editing a file.

## Structure and conventions

- `index.html` contains the approved copy, navigation, and page structure.
- `styles.css` is organized into design tokens, document defaults, layout,
  components, responsive overrides, and reduced-motion preferences.
- `assets/` contains the manuscript illustration and founder portraits.
- `.nojekyll` tells GitHub Pages to serve the static files directly.
- `.editorconfig` and `.gitattributes` keep formatting and line endings consistent.

Keep the approved wording intact unless the owner requests copy changes. Use
component classes for styling; do not depend on a link's position in the markup.
Shared colors, content widths, and page gutters are defined once in `:root`.
Asset paths are relative so deployment works under a repository subpath.

Images have explicit dimensions to reserve layout space. Founder portraits load
lazily; the introductory manuscript image is prioritized. Navigation remains
available at every screen size. Keyboard users have a skip link and visible link
focus, and smooth scrolling respects reduced-motion preferences.

## Support form

“Discuss supporting the project” expands a native HTML disclosure with a name,
email, and message form. Labels, required fields, email validation, and keyboard
controls use browser-native behavior. A hidden `_gotcha` field provides
Formspree's honeypot filtering.

The form posts to `https://formspree.io/f/xvkgqvyy`. This public endpoint is a form
identifier, not a secret. The receiving address is configured privately in the
owner's Formspree dashboard and must never be added to HTML, CSS, or Git history.
The visitor's `email` field supplies the Reply-To address for notifications.

Formspree handles the submission response, including its confirmation page and
any spam challenge. The site does not claim success before the service accepts a
submission. Manage delivery, spam protection, and submissions in Formspree. The
form includes a link to the processor's privacy policy.

Replying from a personal mailbox reveals its address to the correspondent. Use a
project mailbox or an alias that masks replies when private correspondence is
also required.

## Publishing

The repository is <https://github.com/gtstamant/yoga-in-context>.
The GitHub Pages URL is <https://gtstamant.github.io/yoga-in-context/>.

In the repository's **Settings → Pages**, choose **Deploy from a branch**, then
`main` and `/ (root)`. Subsequent pushes to `main` publish automatically. No custom
Actions workflow is needed for this static site.

Use the account's GitHub-provided `noreply` address for commit author and committer
email. This repository has a local Git setting for that purpose; new clones need
their own setting. Keep `.work/` previews, credentials, and personal files out of
commits.

## Checking changes

Before pushing:

1. Run `git diff --check` and review the diff for copy changes or private data.
2. Preview at desktop, tablet, and narrow mobile widths; check for horizontal
   scrolling, readable biographies, and loaded images.
3. Use the keyboard to follow the skip link, navigation, and support disclosure.
   Check that the form expands and collapses with Enter or Space and that empty
   fields and invalid email addresses prevent submission.
4. Confirm the form action matches the owner's Formspree endpoint. A live test
   submission sends an email notification; arrange a test with the owner before
   sending one.
5. After deployment, confirm the live page, stylesheet, images, and navigation
   work at the repository URL.

## Illustrations

The manuscript and founder portraits were generated from the supplied founder
photographs and an approved contemporary impressionist manuscript concept.
Portrait identities are Guy St. Amant, Quinn A. Clark, and Thomas Hunden. The
manuscript is an interpretive illustration, not a reproduction of a documented
historical object. Full-resolution originals are not part of this repository.
