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

    setTimeout(() => {
      title.classList.add('show');
    }, 100);

    setTimeout(() => {
      subtitle.classList.add('show');
    }, 700);

    
    containers.classList.add('show');

    startSnow();
  });
});

function startSnow() {
  const canvas = document.getElementById('snow-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const snowflakes = Array.from({ length: 200 }, createSnowflake);
  let snowShift = 0, targetShift = 0;

  function createSnowflake() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedY: Math.random() * 2 + 2
    };
  }

  document.addEventListener('mousemove', e => {
    const center = window.innerWidth / 2;
    const offset = (e.clientX - center) / center;
    targetShift = -offset * 6;
  });

  function animate() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    snowShift += (targetShift - snowShift) * 0.1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    
    snowflakes.forEach(flake => {
      flake.y += flake.speedY;
      flake.x += snowShift;

      if (flake.y > canvas.height) {
        flake.y = 0;
        flake.x = Math.random() * canvas.width;
      }
      if (flake.x > canvas.width) flake.x = 0;
      if (flake.x < 0) flake.x = canvas.width;

      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}
