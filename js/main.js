$(function () {
  gsap.registerPlugin(ScrollTrigger);
  // header
  function setHeaderActiveByWidth() {
    if ($(window).width() <= 1024) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  }
  setHeaderActiveByWidth();
  $(window).on('resize', setHeaderActiveByWidth);

  // 1025px 이상에서만 호버 이벤트 적용
  function bindHeaderHover() {
    if ($(window).width() > 1024) {
      $("#header").on('mouseenter.headerHover', function () {
        $(this).addClass("active");
      });
      $("#header").on('mouseleave.headerHover', function () {
        $(this).removeClass("active");
      });
    } else {
      $("#header").off('.headerHover');
    }
  }
  bindHeaderHover();
  $(window).on('resize', bindHeaderHover);

  $("a[href^='#']").click(function () {
    event.preventDefault();  // 기본 a링크 동작 방지
    let target = $(this.hash);
    $('html, body').animate({ scrollTop: target.offset().top }, 1500);
  });

  $(window).scroll(function () {
    let pos = $(this).scrollTop();
    if (pos > 100) {
      $("#header").addClass("fix");
      $(".btn_top").fadeIn();
    } else {
      $("#header").removeClass("fix");
      $(".btn_top").fadeOut();
    }
  });

  //mgnb
  $(".btn_ham").click(function () {
    $(".mgnb").slideToggle();
  });

  // program
  const program_list = new Swiper(".program_list", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },

    slidesPerView: 1,
    grid: {
      rows: 1,
    },
    spaceBetween: 20,
    breakpoints: {
      // 1024px 이상일 때
      1024: {
        slidesPerView: 1,
        grid: {
          rows: 4
        },
        spaceBetween: 30
      }
    }
  });

  // event
  const b_list = new Swiper(".b_list", {
    slidesPerView: 1.25,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      767: {
        slidesPerView: 2.5,
        spaceBetween: 30
      },
      // 1024px 이상일 때
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });

  // popup
  $(".popup").hide();
  $(".pp").click(function () {
    $(".popup").fadeIn();
  });
  $(".close").click(function () {
    $(".popup").fadeOut();
  });

  $(".btn_top").hide();

  // 헤더 active 상태에 따라 로고 이미지 변경
  function updateHeaderLogo() {
    if ($("#header").hasClass("active") || $("#header").hasClass("fix")) {
      $("#header h1 a img").attr("src", "img/hover_logo.png");
    } else {
      $("#header h1 a img").attr("src", "img/logoW.png");
    }
  }
  // active 상태 변경 시마다 로고 이미지 변경
  const observer = new MutationObserver(updateHeaderLogo);
  observer.observe(document.getElementById('header'), { attributes: true, attributeFilter: ['class'] });
  // 최초 실행
  updateHeaderLogo();

  // .letter .txt > p 스크롤 애니메이션 (트리거 방식 복원)
  $('.letter .txt p').each(function (idx, el) {
    gsap.set(el, { autoAlpha: 0, y: 80 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: function () {
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out'
        });
      },
      onLeaveBack: function () {
        gsap.to(el, {
          autoAlpha: 0,
          y: 80,
          duration: 0.6,
          ease: 'power2.in'
        });
      }
    });
  });

  // .img01, .img02, .img03 스크롤 애니메이션 (트리거 방식 복원)
  $('.letter .con .img01, .letter .con .img02, .letter .con .img03').each(function (idx, el) {
    gsap.set(el, { autoAlpha: 0, y: 80 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: function () {
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out'
        });
      },
      onLeaveBack: function () {
        gsap.to(el, {
          autoAlpha: 0,
          y: 80,
          duration: 0.6,
          ease: 'power2.in'
        });
      }
    });
  });

  $('.m_img01, .m_img02').each(function (idx, el) {
    gsap.set(el, { autoAlpha: 0, y: 80 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: function () {
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 1.3,
          delay: idx * 0.3, // m_img01은 0초, m_img02는 0.3초 후 등장
          ease: 'power2.out'
        });
      },
      onLeaveBack: function () {
        gsap.to(el, {
          autoAlpha: 0,
          y: 80,
          duration: 0.6,
          delay: 0, // 사라질 때는 딜레이 없이
          ease: 'power2.in'
        });
      }
    });
  });

  // .map_item01~04 img 스크롤 애니메이션 (트리거 방식 복원)
  $('.map_item01 img, .map_item02 img, .map_item03 img, .map_item04 img').each(function (idx, el) {
    gsap.set(el, { autoAlpha: 0, y: 80 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: function () {
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out'
        });
      },
      onLeaveBack: function () {
        gsap.to(el, {
          autoAlpha: 0,
          y: 80,
          duration: 0.6,
          ease: 'power2.in'
        });
      }
    });
  });

  // program_list의 .swiper-slide 스크롤 애니메이션 (트리거 방식 복원)
  $('.program_list .swiper-slide').each(function (idx, el) {
    gsap.set(el, { autoAlpha: 0, y: 80 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: function () {
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out'
        });
      },
      onLeaveBack: function () {
        gsap.to(el, {
          autoAlpha: 0,
          y: 80,
          duration: 0.6,
          ease: 'power2.in'
        });
      }
    });
  });

  // program .deco01, .deco02 스크롤 애니메이션 (트리거 방식 복원)
  $('.program .deco01, .program .deco02').each(function (idx, el) {
    gsap.set(el, { autoAlpha: 0, y: 80 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: function () {
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out'
        });
      },
      onLeaveBack: function () {
        gsap.to(el, {
          autoAlpha: 0,
          y: 80,
          duration: 0.6,
          ease: 'power2.in'
        });
      }
    });
  });

  // event 주요 블록 애니메이션
  $('.event_title, .reward-cards, .bangbeob, .prize, .notice').each(function (idx, el) {
    gsap.set(el, { autoAlpha: 0, y: 80 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: function () {
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out'
        });
      },
      onLeaveBack: function () {
        gsap.to(el, {
          autoAlpha: 0,
          y: 80,
          duration: 0.6,
          ease: 'power2.in'
        });
      }
    });
  });

  // media 영역 h2, p, div에 스크롤 애니메이션 적용
  $('.media h2, .media p, .media div').each(function (idx, el) {
    gsap.set(el, { autoAlpha: 0, y: 80 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: function () {
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out'
        });
      },
      onLeaveBack: function () {
        gsap.to(el, {
          autoAlpha: 0,
          y: 80,
          duration: 0.6,
          ease: 'power2.in'
        });
      }
    });
  });

  // letter 영역의 h2, pc_bg, tab_bg, mo_bg에 스크롤 애니메이션 적용
  $('.letter h2, .letter .pc_bg, .letter .tab_bg, .letter .mo_bg').each(function (idx, el) {
    gsap.set(el, { autoAlpha: 0, y: 80 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: function () {
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out'
        });
      },
      onLeaveBack: function () {
        gsap.to(el, {
          autoAlpha: 0,
          y: 80,
          duration: 0.6,
          ease: 'power2.in'
        });
      }
    });
  });

  // npc의 h2, .tit_p, .container에만 스크롤 애니메이션 적용 (container 안의 p에는 적용 X)
  $('.npc h2, .npc .tit_p, .npc .container').each(function (idx, el) {
    gsap.set(el, { autoAlpha: 0, y: 80 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: function () {
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out'
        });
      },
      onLeaveBack: function () {
        gsap.to(el, {
          autoAlpha: 0,
          y: 80,
          duration: 0.6,
          ease: 'power2.in'
        });
      }
    });
  });

  // map_btn에만 스크롤 애니메이션 적용
  $('.map_btn').each(function (idx, el) {
    gsap.set(el, { autoAlpha: 0, y: 80 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: function () {
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out'
        });
      },
      onLeaveBack: function () {
        gsap.to(el, {
          autoAlpha: 0,
          y: 80,
          duration: 0.6,
          ease: 'power2.in'
        });
      }
    });
  });

});