// 1. VIEW ROUTER
function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    window.scrollTo(0, 0);
}

// 2. WEATHER TICKER
const countries = [
    {n:"USA", f:"🇺🇸"}, {n:"UK", f:"🇬🇧"}, {n:"Canada", f:"🇨🇦"}, {n:"Germany", f:"🇩🇪"}, {n:"France", f:"🇫🇷"},
    {n:"Japan", f:"🇯🇵"}, {n:"China", f:"🇨🇳"}, {n:"UAE", f:"🇦🇪"}, {n:"Singapore", f:"🇸🇬"}, {n:"Switzerland", f:"🇨🇭"}
];

function initTicker() {
    const track = document.getElementById('ticker');
    const longList = Array(8).fill(countries).flat(); 
    longList.forEach(c => {
        const temp = Math.floor(Math.random() * 20) + 12;
        const div = document.createElement('div');
        div.className = 'ticker-item';
        div.innerHTML = `<span style="font-size:1.5rem; margin-right:10px;">${c.f}</span>
                         <span style="font-size:0.7rem; font-weight:900;">${c.n} / ${temp}°C</span>`;
        track.appendChild(div);
    });
}

// 3. YOUTUBE VIDEO FIX
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: '2KxCjRr-wlM',
        playerVars: { 'autoplay': 1, 'controls': 0, 'showinfo': 0, 'modestbranding': 1, 'loop': 1, 'mute': 1, 'playlist': '2KxCjRr-wlM' },
        events: {
            'onReady': (e) => { e.target.mute(); e.target.playVideo(); },
            'onStateChange': (e) => {
                if (e.data == YT.PlayerState.PLAYING) {
                    setInterval(() => {
                        if (player.getCurrentTime() > (player.getDuration() - 1)) { player.seekTo(0); }
                    }, 500);
                }
            }
        }
    });
}

window.onload = initTicker;