// Navigation between views
const views = document.querySelectorAll('.view');
const navItems = document.querySelectorAll('.nav-item');
const mainContent = document.getElementById('mainContent');

function showView(viewId) {
  views.forEach(v => v.classList.remove('active'));
  const target = document.getElementById(viewId);
  if (target) {
    target.classList.add('active');
    mainContent.scrollTop = 0;
  }

  // Update bottom nav active state
  navItems.forEach(item => {
    item.classList.toggle('active', item.dataset.view === viewId);
  });
}

// Bottom nav clicks
navItems.forEach(item => {
  item.addEventListener('click', () => {
    const viewId = item.dataset.view;
    if (viewId) showView(viewId);
  });
});

// Summary cards & quick actions
document.querySelectorAll('[data-target]').forEach(el => {
  el.addEventListener('click', () => {
    const viewId = el.dataset.target;
    const sectionId = el.dataset.section;
    showView(viewId);

    if (sectionId) {
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  });
});

// Prevent double-tap zoom on buttons
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('touchend', e => {
    e.preventDefault();
    btn.click();
  });
});
