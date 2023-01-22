const player = document.querySelector('.gym__video');
const button = document.querySelector('.gym__video-play');
const overlay = document.querySelector('.gym__video-overlay');

if (player && button && overlay) {
  button.addEventListener('click', () => {
    player.src += '?autoplay=1';
    overlay.classList.add('gym__video-overlay--hidden');
  });
}
