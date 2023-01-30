const url = new URL(location.href);
let tempMode = new URLSearchParams(url.search).get('mode');
let tempLang = new URLSearchParams(url.search).get('lang');

const mode = tempMode ? tempMode : 'dark';
const lang = tempLang ? tempLang : 'en';

const dismode = (mode == 'dark' ? 'light' : 'dark');
const dislang = (lang == 'en' ? 'tw' : 'en'); 


if (mode == 'light') {
    $('.name').css({'background-color': '#000'});
    $('.name2').addClass('sidebar-span-light');

    $('.navbar').addClass('light navbar-light');
    $('.navbar span').addClass('light-text');
    $('.glow-on-hover').removeClass('glow-on-hover');

    $('.sidebar').addClass('light sidebar-light');
    $('.sidebar a').addClass('light-text');
    $('.bi-text-left').css({'color': '#000'});

    $('.content').addClass('light');
    $('.content .box').css({"box-shadow": "none"});    
    $('.content p, a, h1').addClass('light-text');

    //hover
    $('.content .box a').on('mouseover', function() {
        $(this).addClass('light-active')
    })
    $('.content .box a').on('mouseout', function(){
        $(this).removeClass('light-active')
    })

} else {
    $('.content .box').on('mouseover', function(){
        $(this).css({"background": "rgba(149, 145, 143, 0.186)"});
    })
    $('.content .box').on('mouseout', function(){
        $(this).css({"background": "transparent"});
    })
    $('.cookie').on('mouseover', function(){
        $(this).css({"color": "#fff"});
    })
    $('.cookie').on('mouseout', function(){
        $(this).css({"color": "rgb(131, 128, 128)"});
    })
}

if (lang == 'tw') {
    $('.side').css({'font-weight': '800'});
    $('.cookie').text('CookieS隱私權');
    $('.menu li:nth-child(1) span').text('首頁');
    $('.menu li:nth-child(2) span').text('流行歌手');
    $('.about-us').text('關於我們');
    $('.about-pages').text('關於網站');
    $('.copyright').text('網站聲明');
    $('.word1').text('古典音樂');
    $('.word2').text('嘻哈音樂');
    $('.word3').text('搖滾音樂');
    $('.word4').text('流行音樂');
    $('.text2 h1').text('探索');
    $('.text3 h1').text('熱門歌曲');
    $('.text4 h1').text('最新單曲');
} else {

}


if(lang == 'tw') {
    if(mode == 'light') {
        $('.light-btn span').text("夜間模式");
        $('.light-btn span').prepend("<i class='bi bi-moon-fill'></i>")
    } else {
        $('.light-li span').text('日間模式')
        $('.light-btn span').prepend("<i class='bi bi-sun'></i>")
    }
    $('.lang-lang').text("English");
    $('.lang-lang').prepend("<i class='bi bi-globe'></i>")
} else {
    if(mode == 'light') {
        $('.light-btn span').text("to Dark");
        $('.light-btn span').prepend("<i class='bi bi-moon-fill'></i>")
    } else {
        $('.light-btn span').text("to Light");
        $('.light-btn span').prepend("<i class='bi bi-sun'></i>")
    }
    $('.lang-lang').text("繁體中文");
    $('.lang-lang').prepend("<i class='bi bi-globe'></i>")

}
if (mode == 'light') {
    $('.bi-globe').css({color: '#000'});
}
a = {
    Home: "首頁",
    Privacy: "隱私權",
    Classical: "古典音樂",
    "Hip-Hop": "嘻哈音樂",
    Pop: "流行音樂",
    Rock: "搖滾音樂",
    Explore: "探索",
    Trending: "熱門歌曲",
    "New Releases": "最新單曲",
    copyright: "版權聲明",
}

$('.light-btn').attr("href", `${url.pathname}?mode=${dismode}&&lang=${lang}`);
$('.lang-btn').attr("href", `${url.pathname}?mode=${mode}&&lang=${dislang}`);

$('.menu .s1 a').attr("href", `${'../'}?mode=${mode}&&lang=${lang}`);
$('.navbar-nav .nav-item:nth-child(1) a').attr("href", `${'../pages/main.html'}?mode=${mode}&&lang=${lang}`);
$('.navbar-nav .nav-item:nth-child(2) a').attr("href", `${'../pages/aboutUs.html'}?mode=${mode}&&lang=${lang}`);
$('.navbar-nav .nav-item:nth-child(3) a').attr("href", `${'../index.html'}?mode=${mode}&&lang=${lang}#end`);
$('.navbar-nav .nav-item:nth-child(4) a').attr("href", `${'../pages/copyright.html'}?mode=${mode}&&lang=${lang}`);

if(lang == 'tw') {
    $('#copy .row:nth-child(1) .col-md-12').html(`<h1>網站聲明</h1>
    <p>本網站由 CopyPaste 團隊製作於2022年9月至12月，為輔仁大學梅興教授所開的 Web Fundamentals 之期末專題。</p>
    <p>此網站的所有內容（圖片、音樂）均為學習用途，此網站的任何內容禁止任何形式的複製、重製，直接或間接做為商業用途使用。</p>
    <p>如有任何問題請來信告知 example@mail.com 謝謝</p>
`);
    $('#copy .row:nth-child(2) h1').text('圖片引用');
    $('#copy .row:nth-child(3) h1').text('音樂引用');

    $('#copy .row:nth-child(2) .row:nth-child(3) p').text('所有圖片: Youtube Music');
    $('#copy .row:nth-child(2) .row:nth-child(4) p').text('所有圖片: Youtube Music');
    $('#copy .row:nth-child(3) .row p').text('所有音樂: Youtube');
}
