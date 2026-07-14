(() => {
  document.querySelectorAll('[data-copy-target]').forEach((button) => {
    button.addEventListener('click', async () => {
      const target = document.getElementById(button.dataset.copyTarget);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.innerText);
        const oldText = button.textContent;
        button.textContent = 'Copied';
        setTimeout(() => { button.textContent = oldText; }, 1200);
      } catch {
        button.textContent = 'Select text';
      }
    });
  });

  document.querySelectorAll('.examples-toggle[aria-controls]').forEach((button) => {
    const target = document.getElementById(button.getAttribute('aria-controls'));
    const label = button.querySelector('.toggle-label');
    if (!target || !label) return;

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isExpanded));
      target.hidden = isExpanded;
      label.textContent = isExpanded
        ? button.dataset.expandLabel
        : button.dataset.collapseLabel;
    });
  });
})();
