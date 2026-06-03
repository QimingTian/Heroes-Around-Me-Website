document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  const eventsTablist = document.querySelector('.events-tabs[role="tablist"]');
  if (eventsTablist) {
    const tabs = eventsTablist.querySelectorAll('.events-tab');
    const panels = document.querySelectorAll('.events-panel');

    function showEventsTab(tabName) {
      tabs.forEach((tab) => {
        const active = tab.dataset.tab === tabName;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      panels.forEach((panel) => {
        const show = panel.dataset.panel === tabName;
        panel.classList.toggle('is-hidden', !show);
        panel.hidden = !show;
      });
    }

    eventsTablist.addEventListener('click', (e) => {
      const tab = e.target.closest('.events-tab');
      if (!tab || !eventsTablist.contains(tab)) return;
      showEventsTab(tab.dataset.tab);
    });

    showEventsTab('national');
  }
});
