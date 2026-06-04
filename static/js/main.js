/* ── Countdown ── */
(function () {
  const target = new Date('2026-07-10T19:12:00');

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const now  = new Date();
    const diff = target - now;

    if (diff <= 0) {
      document.getElementById('countdown').innerHTML =
        '<span style="font-family:\'Bebas Neue\',sans-serif;font-size:1.6rem;color:var(--gold-bright);letter-spacing:0.1em">A ACONTECER AGORA!</span>';
      return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000)  / 60000);
    const s = Math.floor((diff % 60000)    / 1000);

    document.getElementById('days').textContent  = pad(d);
    document.getElementById('hours').textContent = pad(h);
    document.getElementById('mins').textContent  = pad(m);
    document.getElementById('secs').textContent  = pad(s);
  }

  tick();
  setInterval(tick, 1000);
})();

/* ── Scroll reveal ── */
(function () {
  const els = document.querySelectorAll('.reveal');

  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      const idx   = parseInt(entry.target.dataset.index, 10) || 0;
      const delay = idx * 120;
      entry.target.style.transitionDelay = delay + 'ms';
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  els.forEach(function (el) { io.observe(el); });
})();
