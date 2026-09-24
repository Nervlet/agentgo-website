const tabs = Array.from(document.querySelectorAll('[role="tab"][data-tab]'));

function activateTab(name, moveFocus = false) {
  const selected = tabs.find((tab) => tab.dataset.tab === name);
  if (!selected) return;
  for (const tab of tabs) {
    const active = tab === selected;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden = !active;
  }
  if (moveFocus) selected.focus();
}

for (const [index, tab] of tabs.entries()) {
  tab.addEventListener("click", () => activateTab(tab.dataset.tab));
  tab.addEventListener("keydown", (event) => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft")
      next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    activateTab(tabs[next].dataset.tab, true);
  });
}

for (const button of document.querySelectorAll("[data-show-tab]")) {
  button.addEventListener("click", () =>
    activateTab(button.dataset.showTab, true),
  );
}
