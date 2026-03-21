// 1. PAGE ROUTER
function showPage(pageId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// 2. HIGH-END WEATHER TICKER (80 COUNTRIES)
const data = [
    {n:"USA", f:"🇺🇸"}, {n:"UK", f:"🇬🇧"}, {n:"Japan", f:"🇯🇵"}, {n:"China", f:"🇨🇳"}, {n:"UAE", f:"🇦🇪"}, 
    {n:"Switzerland", f:"🇨🇭"}, {n:"Singapore", f:"🇸🇬"}, {n:"Germany", f:"🇩🇪"}, {n:"France", f:"🇫🇷"}, {n:"Australia", f:"🇦🇺"}
];

function buildTicker() {
    const track = document.getElementById('tickerTrack');
    const fullList = [...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data];
    fullList.forEach(c => {
        const temp = Math.floor(Math.random() * 20) + 12;
        const div = document.createElement('div');
        div.style.cssText = "display:flex; align-items:center; padding:0 40px; border-right:1px solid rgba(255,255,255,0.1);";
        div.innerHTML = `<span style="font-size:1.6rem; margin-right:15px;">${c.f}</span>
                         <div style="line-height:1">
                            <p style="font-size:0.7rem; font-weight:900; letter-spacing:1px">${c.n} NODE</p>
                            <p style="font-size:0.6rem; color:#c5a059; font-weight:bold">SECURE / ${temp}°C</p>
                         </div>`;
        track.appendChild(div);
    });
}

// 3. YOUTUBE VIDEO SEAMLESS API
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: '2KxCjRr-wlM',
        playerVars: { 
            'autoplay': 1, 'controls': 0, 'showinfo': 0, 'modestbranding': 1, 
            'loop': 1, 'mute': 1, 'playlist': '2KxCjRr-wlM', 'rel': 0 
        },
        events: {
            'onReady': (e) => { e.target.mute(); e.target.playVideo(); },
            'onStateChange': (e) => {
                // Seek back 1s early to hide black screen
                if (e.data == YT.PlayerState.PLAYING) {
                    setInterval(() => {
                        if (player.getCurrentTime() > (player.getDuration() - 1)) { player.seekTo(0); }
                    }, 500);
                }
            }
        }
    });
}

function mockTrack() {
    alert("Establishing Encrypted Link... Accessing Global Database.");
    showPage('dashboard');
}

window.onload = buildTicker;