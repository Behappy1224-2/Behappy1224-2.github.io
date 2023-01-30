const url = new URL(location.href);
let tempMode = new URLSearchParams(url.search).get('mode');
let tempLang = new URLSearchParams(url.search).get('lang');

const mode = (tempMode ? tempMode : 'dark');
const lang = (tempLang ? tempLang : 'en');

const dismode = (mode == 'dark' ? 'light' : 'dark');
const dislang = (lang == 'en' ? 'tw' : 'en'); 
//index
if (lang == 'tw') {
    document.querySelector('#log button:nth-child(1)').innerText = '註冊';
    document.querySelector('#log button:nth-child(2)').innerText = '登入';
    document.querySelector('#exp text').innerHTML = '開始探索';
    document.querySelector('#exp-phone text').innerHTML = '開始探索';
    document.querySelector('#scroll text').innerHTML = '往下滑';
    document.querySelector('#scroll-phone text').innerHTML = '往下滑';
    document.querySelector('#aboutUS').innerHTML = `<h1 style="color: #111;">關於網站</h1>
    
    <p>本網站由 CopyPaste 團隊製作於2022年9月至12月，為輔仁大學梅興教授所開的 Web Fundamentals 之期末專題。</p>
    <p>使用純前端技術模擬 Spotify、Youtube Music 等流行音樂串流平台。</p>
    <p>此網站的所有內容（圖片、音樂）均為學習用途，如想了解更多請至「網站聲明」。</p>


    <div id="rtr">
        <a href="./?mode=${mode}&&lang=${lang}" class="btn">回到上方</a>
        <a href="./pages/main.html?mode=${mode}&&lang=${lang}" class="btn">開始探索</a>
    </div>`;
};

document.querySelector('#exp').setAttribute('href', `./pages/main.html?mode=${mode}&&lang=${lang}`);
document.querySelector('#exp-phone').setAttribute('href', `./pages/main.html?mode=${mode}&&lang=${lang}`);
document.querySelector('#rtr a:nth-child(1)').href = `./?mode=${mode}&&lang=${lang}`;
document.querySelector('#rtr a:nth-child(2)').href = `./pages/main.html?mode=${mode}&&lang=${lang}`;