const EVENTS = [
  { time: '2026-02-28T10:00:00-05:00', label: 'Project Start' },
  { time: '2026-02-28T10:08:00-05:00', label: 'Peregrine Online' },
  { time: '2026-02-28T10:14:00-05:00', label: 'Security Audit' },
  { time: '2026-02-28T11:03:00-05:00', label: 'Clean Slate' },
  { time: '2026-02-28T12:28:00-05:00', label: 'Pipeline Fix' },
  { time: '2026-02-28T12:37:00-05:00', label: 'Site Live' }
];

function renderTimeline() {
  const container = document.getElementById('timeline');
  const now = new Date();
  const start = new Date(EVENTS[0].time);
  const totalDuration = now - start;

  EVENTS.forEach(event => {
    const eventTime = new Date(event.time);
    const offset = eventTime - start;
    const percent = (offset / totalDuration) * 100;

    // Create dot
    const dot = document.createElement('div');
    dot.className = 'timeline-dot';
    dot.style.left = `${percent}%`;
    dot.title = `${event.label} (${eventTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})})`;
    
    // Create label (hidden by default, shown on hover via CSS)
    const label = document.createElement('div');
    label.className = 'timeline-label';
    label.textContent = event.label;
    dot.appendChild(label);

    container.appendChild(dot);
  });

  // Add "Now" indicator
  const nowDot = document.createElement('div');
  nowDot.className = 'timeline-dot now';
  nowDot.style.left = '100%';
  nowDot.title = `Now (${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})})`;
  container.appendChild(nowDot);
}

renderTimeline();
