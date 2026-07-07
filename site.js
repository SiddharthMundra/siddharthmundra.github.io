(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const triggers = document.querySelectorAll('.inline-trigger');
  const timeEl = document.getElementById('san-diego-time');
  const themeStorageKey = 'siddharthmundra-theme';

  function setTheme(theme, shouldPersist) {
    const normalizedTheme = theme === 'dark' ? 'dark' : 'light';
    root.setAttribute('data-theme', normalizedTheme);

    if (themeToggle) {
      const nextTheme = normalizedTheme === 'dark' ? 'light' : 'dark';
      themeToggle.textContent = nextTheme;
      themeToggle.setAttribute('aria-label', 'switch to ' + nextTheme + ' mode');
      themeToggle.setAttribute('aria-pressed', String(normalizedTheme === 'dark'));
    }

    if (!shouldPersist) {
      return;
    }

    try {
      localStorage.setItem(themeStorageKey, normalizedTheme);
    } catch (error) {
      return;
    }
  }

  function updateSanDiegoTime() {
    if (!timeEl) {
      return;
    }

    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

    timeEl.textContent = formatter.format(new Date()).toLowerCase() + ' in san diego, california.';
  }

  function setNoteHeight(note) {
    note.style.setProperty('--inline-note-height', note.scrollHeight + 'px');
  }

  try {
    const storedTheme = localStorage.getItem(themeStorageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(storedTheme || (prefersDark ? 'dark' : 'light'), false);
  } catch (error) {
    setTheme('light', false);
  }

  updateSanDiegoTime();
  window.setInterval(updateSanDiegoTime, 30000);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme, true);
    });
  }

  triggers.forEach(function (trigger) {
    const note = document.getElementById(trigger.getAttribute('aria-controls'));

    if (!note) {
      return;
    }

    setNoteHeight(note);

    trigger.addEventListener('click', function () {
      const nextExpanded = trigger.getAttribute('aria-expanded') !== 'true';

      setNoteHeight(note);
      trigger.setAttribute('aria-expanded', String(nextExpanded));
      note.setAttribute('aria-hidden', String(!nextExpanded));
      note.classList.toggle('is-visible', nextExpanded);
    });
  });

  window.addEventListener('resize', function () {
    triggers.forEach(function (trigger) {
      const note = document.getElementById(trigger.getAttribute('aria-controls'));

      if (note) {
        setNoteHeight(note);
      }
    });
  });
})();
