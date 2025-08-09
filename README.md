# diskplus4

## Development Notes

- Avoid using inline event handlers in HTML. Instead, attach events in separate JavaScript files. For example,
  `search.html` now loads `search.js` which registers a `keyup` listener for the search bar.
- Do not modify element styles directly in JavaScript. Define CSS classes and toggle them with `classList`.
  The search functionality uses a `.hidden` class to show or hide movie cards.

