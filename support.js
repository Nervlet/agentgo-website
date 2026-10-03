const copyButton = document.querySelector('#copy-email');
const copyStatus = document.querySelector('#copy-status');
copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('aozhuhan@gmail.com');
    copyStatus.textContent = '邮箱已复制，请在邮件应用中填写并发送。';
  } catch {
    copyStatus.textContent = '无法自动复制，请长按或选中上方邮箱手动复制。';
  }
});
