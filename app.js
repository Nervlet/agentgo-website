const layouts = {
  phone: {
    label: "手机竖屏 / 折叠屏折起",
    tag: "窄屏",
    title: "窄屏时，一次专注一件事。",
    description:
      "项目、会话与工具逐级进入。在对话和工具之间切换，把当前内容完整呈现在小屏上。",
    diagram: "手机窄屏布局示意：单页呈现当前会话，项目和工具逐级进入",
  },
  fold: {
    label: "折叠屏展开",
    tag: "展开",
    title: "展开后，对话与工具并排。",
    description:
      "可用空间足够时，一边跟进 Agent，一边检查文件、Diff 或终端；折起后回到单页浏览。",
    diagram: "折叠屏布局示意：对话与工具左右并排",
  },
  tablet: {
    label: "平板大屏 / 横屏",
    tag: "大屏",
    title: "空间足够，项目导航常驻。",
    description:
      "更宽的窗口可以同时容纳项目列表、对话和工具。设置也采用左侧选项、右侧配置的结构，减少来回切换。",
    diagram: "平板大屏布局示意：项目导航、当前会话与工具三个区域",
  },
  window: {
    label: "二合一设备 / 自由窗口",
    tag: "窗口",
    title: "窗口变化，工作保持连续。",
    description:
      "在二合一设备或分屏窗口中，按实际可用宽度安排内容。窗口缩窄时收起分栏，放宽时恢复；不因布局切换重置当前工作。",
    diagram: "二合一宽窗口布局示意：项目导航、对话与工具随可用宽度调整",
  },
};

const layoutButtons = [
  ...document.querySelectorAll("[data-layout][aria-pressed]"),
];
const stage = document.getElementById("adaptive-preview");
for (const button of layoutButtons) {
  button.addEventListener("click", () => {
    const mode = button.dataset.layout;
    const selected = layouts[mode];
    if (!selected || !stage) return;
    for (const item of layoutButtons)
      item.setAttribute("aria-pressed", String(item === button));
    stage.dataset.layout = mode;
    stage
      .querySelector(".layout-diagram")
      .setAttribute("aria-label", selected.diagram);
    stage.querySelector(".layout-mode-tag").textContent = selected.tag;
    document.getElementById("adaptive-mode-label").textContent = selected.label;
    document.getElementById("adaptive-mode-title").textContent = selected.title;
    document.getElementById("adaptive-mode-description").textContent =
      selected.description;
  });
}
