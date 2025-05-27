
chrome.action.onClicked.addListener(async (tab) => {
  const tabId = tab.id;
  const url = tab.url || "";

  if (url.startsWith("chrome://") || url.startsWith("chrome-extension://")) {
    console.warn("Language Switcher: Not allowed on internal Chrome pages.");
    return;
  }

  const { enabledTabs = {} } = await chrome.storage.local.get("enabledTabs");
  const isEnabled = enabledTabs["global"] || false;
  const newEnabled = !isEnabled;
  enabledTabs["global"] = newEnabled;

  await chrome.storage.local.set({ enabledTabs });

  chrome.declarativeNetRequest.updateEnabledRulesets({
    disableRulesetIds: newEnabled ? [] : ["langOverrideRules"],
    enableRulesetIds: newEnabled ? ["langOverrideRules"] : []
  });

  try {
    await chrome.scripting.executeScript({
      target: { tabId },
      func: (enabled) => localStorage.setItem("__lang_switch_enabled", enabled),
      args: [newEnabled]
    });
  } catch (e) {
    console.warn("Language Switcher: Script injection failed on this page.", e);
  }

  chrome.action.setBadgeText({
    tabId,
    text: newEnabled ? "EN" : ""
  });

  chrome.action.setBadgeBackgroundColor({ tabId, color: "#4FD1C5" });
});


chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete") return;

  const { enabledTabs = {} } = await chrome.storage.local.get("enabledTabs");
  const isEnabled = enabledTabs["global"] || false;

  chrome.action.setBadgeText({
    tabId,
    text: isEnabled ? "EN" : ""
  });

  if (isEnabled) {
    chrome.action.setBadgeBackgroundColor({ tabId, color: "#4FD1C5" });
  }
});
