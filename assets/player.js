(() => {
  const video = document.querySelector('.wallpaper-video');
  if (!video) return;

  video.muted = true;
  video.loop = true;
  video.playsInline = true;

  const ensurePlayback = () => {
    if (video.paused) video.play().catch(() => {});
  };

  window.addEventListener('load', ensurePlayback);
  window.addEventListener('focus', ensurePlayback);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) ensurePlayback();
  });

  video.addEventListener('ended', () => {
    video.currentTime = 0;
    ensurePlayback();
  });
})();
