////
const url = new URL(location.href);
let tempMode = new URLSearchParams(url.search).get('mode');
let tempLang = new URLSearchParams(url.search).get('lang');

const mode = tempMode ? tempMode : 'dark';
const lang = tempLang ? tempLang : 'en';

const dismode = (mode == 'dark' ? 'light' : 'dark');
const dislang = (lang == 'en' ? 'tw' : 'en'); 

//navbar
if (mode == 'light') {
  $('nav .navbar').addClass('light navbar-light');
  $('nav .navbar span').addClass('light-text');
  $('nav .glow-on-hover').removeClass('glow-on-hover');

  $('.bi-globe').css({color: '#000'});
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
$('.light-btn').attr("href", `${url.pathname}?mode=${dismode}&&lang=${lang}`);
$('.lang-btn').attr("href", `${url.pathname}?mode=${mode}&&lang=${dislang}`);


$('.navbar-nav .nav-item:nth-child(1) a').attr("href", `${'../pages/main.html'}?mode=${mode}&&lang=${lang}`);
$('.navbar-nav .nav-item:nth-child(2) a').attr("href", `${'../pages/aboutUs.html'}?mode=${mode}&&lang=${lang}`);
$('.navbar-nav .nav-item:nth-child(3) a').attr("href", `${'../index.html'}?mode=${mode}&&lang=${lang}#end`);
$('.navbar-nav .nav-item:nth-child(4) a').attr("href", `${'../pages/copyright.html'}?mode=${mode}&&lang=${lang}`);

//text
if(lang == 'tw') {
  $('#address .text-box').html('<h1>工作室位置</h1><p>242新北市新莊區中正路510號</p>')
  $('#recuit-text .text-box').html('<h1>成員招募</h1>')
  $('#text6').html('<div></div><p>我們團隊成立於2022年9月，<p>我們團隊的「使命」是通過創新的網頁設計和尖端的前端技術</p><p>，為客戶提供最佳的網頁體驗。</p><p>我們的「願景」是成為領先的網頁設計團隊，為客戶提供更好的服務。</p>')
  $('.info').html('<h1>團隊成員</h1>')
  

}

////map
function initMap() {
  const markers = [
      {
          name: 'fju',
          latlng: { lat: 25.0362927, lng: 121.4325929 },
          marker: {},
          infoWindow: {
              content: "<span>輔仁大學</span>",
              ariaLabel: "輔仁大學",
          },
      },
      {
          name: 'station',
          latlng: { lat: 25.032756651989466, lng: 121.43513197110086},
          marker: {},
          infoWindow: {
              content: "<span>輔大捷運站</span>",
              ariaLabel: "輔大捷運站",
          },
      }
  ]
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: {lat: 25.034828445483907, lng: 121.43335992121816},
      styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#242f3e"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#746855"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#242f3e"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#263c3f"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#6b9a76"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#38414e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#212a37"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9ca5b3"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#746855"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#1f2835"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#f3d19c"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#2f3948"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#17263c"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#515c6d"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#17263c"
              }
            ]
          }
      ]
  });

  let image = {
      url: '../images/gura/tri.png',
      scaledSize: new google.maps.Size(50, 50),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(30, 50)
  };
  markers.forEach(e => {
      e.marker = new google.maps.Marker({
          position: e.latlng,
          icon: image,
          map: map,
      });
      e.infoWindow = new google.maps.InfoWindow(e.infoWindow);

      e.marker.addListener("click", () => {
          schoolInfowindow.open({
              anchor: e.marker,
              map,


          });
      });
      //init
      e.infoWindow.open({
          anchor: e.marker,
          map,
      });
  })
}
  
window.initMap = initMap;




//aboutUS anime
const observer =new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show1');
    }else{
      entry.target.classList.remove('show1');

    }
  });
});


const hiddenElements=document.querySelectorAll('.hidden1');
hiddenElements.forEach((e1)=>observer.observe(e1));



const observer2 =new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show2');
    }else{
      entry.target.classList.remove('show2');

    }
  });
});


const hiddenElements2=document.querySelectorAll('.hidden2');
hiddenElements2.forEach((e1)=>observer2.observe(e1));


const observer3 =new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show3');
    }else{
      entry.target.classList.remove('show3');

    }
  });
});


const hiddenElements3=document.querySelectorAll('.hidden3');
hiddenElements3.forEach((e1)=>observer3.observe(e1));





new TypeIt("#simpleUsage", {
  
  strings: "About us.",
  speed: 80,
  waitUntilVisible: true,
}).go();



