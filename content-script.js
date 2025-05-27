
chrome.storage.local.get("enabledTabs", ({ enabledTabs = {} }) => {
  const enabled = enabledTabs["global"] === true;
  if (!enabled) return;

  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("inject.js");
  script.type = "text/javascript";
  script.onload = () => script.remove();
  (document.head || document.documentElement).appendChild(script);
});
