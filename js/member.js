$(function () {
  function updateHeaderLogo() {
    if ($("#header").hasClass("active") || $("#header").hasClass("fix")) {
      $("#header h1 a img").attr("src", "../img/hover_logo.png");
    } else {
      $("#header h1 a img").attr("src", "../img/logoW.png");
    }
  }
  // active 상태 변경 시마다 로고 이미지 변경
  const observer = new MutationObserver(updateHeaderLogo);
  observer.observe(document.getElementById('header'), { attributes: true, attributeFilter: ['class'] });
  // 최초 실행
  updateHeaderLogo();

  $(function () {
    $('#header').addClass('fix'); // 항상 fix
    $(window).off('scroll');      // 스크롤 이벤트 제거
    // ...기존 코드...
  });

  $(function () {
    $('.btn_top').css('display', 'flex');
  });

  // gsap/ScrollTrigger 스크롤 애니메이션 (member 페이지)
  gsap.registerPlugin(ScrollTrigger);

  // .member .txt > p 각각에 애니메이션 적용
  var txtP = $('.member .txt p');
  txtP.each(function (idx, el) {
    gsap.set(el, { autoAlpha: 0, y: 80 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: function () {
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out',
          delay: idx * 0.15
        });
        // 마지막 p가 올라올 때 con 애니메이션 트리거
        if (idx === txtP.length - 1) {
          gsap.set('.member .con', { autoAlpha: 0, y: 80 });
          gsap.to('.member .con', {
            autoAlpha: 1,
            y: 0,
            duration: 1.3,
            ease: 'power2.out',
            delay: (idx + 1) * 0.15
          });
        }
      },
      onLeaveBack: function () {
        gsap.to(el, {
          autoAlpha: 0,
          y: 80,
          duration: 0.6,
          ease: 'power2.in',
          delay: idx * 0.1
        });
        // 마지막 p가 사라질 때 con도 같이 사라지게
        if (idx === txtP.length - 1) {
          gsap.to('.member .con', {
            autoAlpha: 0,
            y: 80,
            duration: 0.6,
            ease: 'power2.in',
            delay: (idx + 1) * 0.1
          });
        }
      }
    });
  });
});