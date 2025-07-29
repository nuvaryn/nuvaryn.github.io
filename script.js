window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const clickScreen = document.getElementById('click-screen');
  const music = document.getElementById('bg-music');

  setTimeout(() => {
    loader.style.display = 'none';
    clickScreen.style.display = 'flex';
  }, 500);

  clickScreen.addEventListener('click', () => {
    clickScreen.style.display = 'none';
    music.play().catch(() => console.warn("Autoplay blocked"));

    const main = document.getElementById('main-content');
    main.style.display = 'flex';

    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');
    const containers = document.querySelector('.container-wrapper');
    const extraSubtitles = document.getElementById('extra-subtitles');

    setTimeout(() => {
      title.classList.add('show');
    }, 100);

    setTimeout(() => {
      subtitle.classList.add('show');
    }, 700);

    setTimeout(() => {
      extraSubtitles.classList.add('show');
    }, 900);

    containers.classList.add('show');

  });
});


