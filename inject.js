
(() => {
  Object.defineProperty(navigator, "language", { get: () => "en-US" });
  Object.defineProperty(navigator, "languages", { get: () => ["en-US", "en"] });
})();
