// Swiper Carousel functionality with custom features - 走马灯效果（无缝循环）
(function () {
  const ROOT_PATH_URL = 'https://visionary-laboratory.github.io/visionary';
  // const ROOT_PATH_URL = 'http://localhost:8091';
  // 确保 DOM 完全加载后再初始化
  function initSwiper() {
    const carouselElement = document.querySelector('#homepageCarousel');

    if (!carouselElement) {
      console.warn('Carousel element not found');
      return;
    }

    // 获取幻灯片数量（在初始化时获取，此时还没有被 Swiper 克隆）
    const slides = carouselElement.querySelectorAll('.swiper-slide');
    const slidesCount = slides.length;

    // 为每个 slide 包裹一个内部容器，用于控制视觉缩放，避免影响 Swiper 的布局计算
    slides.forEach(slide => {
      if (!slide.querySelector('.carousel-slide-inner')) {
        const inner = document.createElement('div');
        inner.className = 'carousel-slide-inner';

        while (slide.firstChild) {
          inner.appendChild(slide.firstChild);
        }

        slide.appendChild(inner);
      }
    });

    // 动态计算循环参数：根据幻灯片数量设置，确保循环模式正常工作
    // 重要：当使用 slidesPerView: 'auto' + centeredSlides: true 时
    // loopedSlides 必须设置为所有幻灯片数量，以确保循环模式正常工作
    // 因为 Swiper 无法在 'auto' 模式下预先知道会显示多少个幻灯片
    // 设置为幻灯片总数（或更大）可以确保有足够的克隆幻灯片用于循环
    const calculatedLoopedSlides = slidesCount; // 设置为所有幻灯片数量
    // 确保首次加载时至少三张幻灯片位置都有内容
    // 由于 centeredSlides: true，需要确保左右两侧都有足够的克隆幻灯片
    // 设置为至少 3，确保左右各至少有一张可见的克隆幻灯片
    // const calculatedLoopAdditionalSlides = Math.max(3, Math.ceil(slidesCount * 0.5)); // 增加额外克隆数量，确保至少3张
    const calculatedLoopAdditionalSlides = 0; // 增加额外克隆数量，确保至少3张

    // 配置项
    const config = {
      interval: 5000, // 自动播放间隔（毫秒）
      speed: 600, // 切换动画速度（毫秒）
      loop: true, // 启用循环
      // 动态计算循环参数：根据幻灯片数量设置
      // 关键：对于 'auto' 模式，loopedSlides 必须等于所有幻灯片数量
      loopedSlides: calculatedLoopedSlides, // 设置为所有幻灯片数量，确保循环模式正常工作
      loopAdditionalSlides: calculatedLoopAdditionalSlides, // 额外克隆的幻灯片数量，确保平滑过渡
      slidesPerView: 'auto', // 通过内容宽度控制每屏显示的幻灯片数量
      centeredSlides: true, // 居中显示当前激活项
      centeredSlidesBounds: false, // 不额外限制边界，依赖宽度控制视觉效果
      spaceBetween: 40, // 幻灯片间距（2.5rem = 40px，与 CSS gap 保持一致）
      grabCursor: true, // 鼠标悬停时显示抓取光标
      preventInteractionOnTransition: true, // 过渡期间禁止交互
      watchSlidesProgress: true, // 监听幻灯片进度，用于平滑过渡
      loopFillGroupWithBlank: false, // 不要用空白填充组
      effect: 'slide', // 使用滑动效果
      resistance: true, // 启用阻力效果
      // resistanceRatio: 0.85 // 阻力比例
      resistanceRatio: 0.5 // 阻力比例
    };

    // 初始化 Swiper
    let swiper = new Swiper('#homepageCarousel', {
      speed: config.speed,
      loop: config.loop,

      // cssMode: true,
      observer: true,
      observeParents: true,
      // 禁用观察子元素，因为使用transform scale不会改变布局，避免不必要的重新计算
      observeSlideChildren: false,

      loopAdditionalSlides: config.loopAdditionalSlides,
      loopedSlides: config.loopedSlides,
      slidesPerView: config.slidesPerView,
      // slidesPerView: 7,
      centeredSlides: config.centeredSlides,
      centeredSlidesBounds: config.centeredSlidesBounds,
      spaceBetween: config.spaceBetween,
      grabCursor: config.grabCursor,
      preventInteractionOnTransition: config.preventInteractionOnTransition,
      watchSlidesProgress: config.watchSlidesProgress,
      loopFillGroupWithBlank: config.loopFillGroupWithBlank,
      effect: config.effect,
      resistance: config.resistance,
      resistanceRatio: config.resistanceRatio,
      // 解决循环模式警告的关键配置
      loopPreventsSliding: true, // 允许在循环模式下滑动
      watchOverflow: true, // 监听溢出状态
      // 对于 'auto' 模式，确保循环正常工作
      slidesPerGroup: 1, // 每次滑动一个幻灯片，避免分组导致的循环问题

      // 自定义导航按钮
      navigation: {
        nextEl: '.carousel-btn-next',
        prevEl: '.carousel-btn-prev',
      },

      // 自动播放配置 - 确保启用循环自动播放
      autoplay: {
        delay: config.interval, // 5000ms = 5秒
        disableOnInteraction: false, // 交互后不停止自动播放
        pauseOnMouseEnter: true, // 鼠标悬停时暂停
        waitForTransition: true, // 等待过渡完成后再继续自动播放
        reverseDirection: false, // 不反向播放
        enabled: true, // 明确启用自动播放
        stopOnLastSlide: false, // 不在最后一张幻灯片停止（循环模式）
      },

      // 事件处理
      on: {
        init: function () {
          const swiperInstance = this;

          // 初始化所有视频的循环播放属性
          initializeAllVideosLoop();

          // 处理克隆幻灯片中的 video 元素，确保 video 在克隆幻灯片中也能正常工作
          setupClonedSlideVideos();

          // 初始化样式和视频控制
          updateActiveSlideStyles();
          setupVideoHoverPlay();

          // 确保自动播放启动
          setTimeout(() => {
            if (swiperInstance && swiperInstance.autoplay) {
              if (!swiperInstance.autoplay.running) {
                swiperInstance.autoplay.start();
              }
            } else {
              console.warn('Autoplay module not available');
            }
          }, 500);
        },

        slideChangeTransitionStart: function () {
          // 过渡开始时暂停所有视频
          const videos = carouselElement.querySelectorAll('video');
          videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
          });
        },

        slideChangeTransitionEnd: function () {
          const swiperInstance = this;
          // 过渡结束后更新样式和视频控制
          setTimeout(() => {
            // 处理克隆幻灯片中的 video 元素
            setupClonedSlideVideos();
            updateActiveSlideStyles();
            setupVideoHoverPlay();
          }, 0);

          // 确保自动播放继续运行（如果被停止）
          if (swiperInstance && swiperInstance.autoplay) {
            if (!swiperInstance.autoplay.running) {
              swiperInstance.autoplay.start();
            }
          }
        },

        resize: function () {
          // 窗口大小改变时更新样式
          updateActiveSlideStyles();
        },

        // 处理循环切换时的平滑过渡
        loopFix: function () {
          // Swiper 内部会自动处理循环修复，这里确保样式正确更新
          setTimeout(() => {
            // 处理克隆幻灯片中的 video 元素
            setupClonedSlideVideos();
            updateActiveSlideStyles();
          }, 0);
        }
      }
    });

    // 将 swiper 实例保存到全局，以便其他地方使用
    window.homepageSwiper = swiper;

    // 更新激活幻灯片的样式
    function updateActiveSlideStyles() {
      const slides = carouselElement.querySelectorAll('.swiper-slide');

      requestAnimationFrame(() => {
        slides.forEach(slide => {
          // 检查是否是激活的幻灯片（包括克隆的）
          const isActive = slide.classList.contains('swiper-slide-active');
          if (isActive) {
            slide.classList.add('active');
          } else {
            slide.classList.remove('active');
          }
        });
      });
    }

    // 初始化所有视频的循环播放属性
    function initializeAllVideosLoop() {
      const allVideos = carouselElement.querySelectorAll('.carousel-video');
      allVideos.forEach(video => {
        if (video.tagName === 'VIDEO') {
          // 启用循环播放
          if (!video.hasAttribute('loop')) {
            video.setAttribute('loop', 'true');
          }
          video.loop = true; // 同时设置 JavaScript 属性
        }
      });
    }

    // 处理克隆幻灯片中的 video 元素，确保 video 在克隆幻灯片中也能正常工作
    function setupClonedSlideVideos() {
      const allSlides = carouselElement.querySelectorAll('.swiper-slide');

      allSlides.forEach((slide, index) => {
        // 检查是否是克隆的幻灯片（Swiper 会在克隆的幻灯片上添加特定类名）
        const isCloned = slide.classList.contains('swiper-slide-duplicate') ||
          slide.classList.contains('swiper-slide-duplicate-next') ||
          slide.classList.contains('swiper-slide-duplicate-prev');

        // 查找幻灯片中的 video 元素
        const videos = slide.querySelectorAll('.carousel-video');

        videos.forEach(video => {
          // 确保 video 元素有正确的属性
          if (video.tagName === 'VIDEO') {
            // 如果 video 没有 src 属性，尝试从 data-src 获取
            if (!video.src && video.getAttribute('data-src')) {
              video.src = video.getAttribute('data-src');
            }

            // 确保 video 元素可以正常加载
            // 对于克隆的 video，需要重新加载以确保内容正确
            if (isCloned && video.readyState === 0) {
              video.load();
            }

            // 确保 video 元素有正确的属性设置
            if (!video.hasAttribute('preload')) {
              video.setAttribute('preload', 'metadata');
            }
            if (!video.hasAttribute('muted')) {
              video.setAttribute('muted', 'true');
            }
            if (!video.hasAttribute('playsinline')) {
              video.setAttribute('playsinline', 'true');
            }
            // 启用循环播放
            if (!video.hasAttribute('loop')) {
              video.setAttribute('loop', 'true');
            }
            video.loop = true; // 同时设置 JavaScript 属性
          }
        });
      });
    }

    // 为激活项设置视频悬停播放功能
    function setupVideoHoverPlay() {
      // 移除之前所有项的悬停事件监听器
      const allSlides = carouselElement.querySelectorAll('.swiper-slide');
      allSlides.forEach(slide => {
        if (slide._videoHoverEnter) {
          slide.removeEventListener('mouseenter', slide._videoHoverEnter);
          slide._videoHoverEnter = null;
        }
        if (slide._videoHoverLeave) {
          slide.removeEventListener('mouseleave', slide._videoHoverLeave);
          slide._videoHoverLeave = null;
        }
      });

      // 获取当前激活项
      const activeSlide = carouselElement.querySelector('.swiper-slide-active');
      if (!activeSlide) return;

      // 检查激活项是否包含视频
      const video = activeSlide.querySelector('.carousel-video');
      if (!video) return;

      // 确保视频启用循环播放
      if (!video.hasAttribute('loop')) {
        video.setAttribute('loop', 'true');
      }
      video.loop = true; // 同时设置 JavaScript 属性

      // 添加视频结束事件监听器，确保循环播放（备用处理）
      const handleVideoEnded = function () {
        if (video && video.loop) {
          video.currentTime = 0;
          video.play().catch(err => {
            console.debug('Video loop play failed:', err);
          });
        }
      };

      // 移除之前的事件监听器（如果存在）
      if (video._loopEndedHandler) {
        video.removeEventListener('ended', video._loopEndedHandler);
      }
      video._loopEndedHandler = handleVideoEnded;
      video.addEventListener('ended', handleVideoEnded);

      // 创建悬停进入处理函数
      activeSlide._videoHoverEnter = function () {
        if (video && video.readyState >= 2) { // HAVE_CURRENT_DATA
          video.play().catch(err => {
            // 如果播放失败，静默处理（可能是浏览器策略限制）
            console.debug('Video play failed:', err);
          });
        } else {
          // 如果视频还没加载好，等待加载完成
          const playOnLoad = function () {
            video.play().catch(err => {
              console.debug('Video play failed:', err);
            });
            video.removeEventListener('loadeddata', playOnLoad);
          };
          video.addEventListener('loadeddata', playOnLoad, { once: true });
        }
      };

      // 创建悬停离开处理函数
      activeSlide._videoHoverLeave = function () {
        if (video) {
          video.pause();
          video.currentTime = 0; // 重置到开头
        }
      };

      // 添加事件监听器
      activeSlide.addEventListener('mouseenter', activeSlide._videoHoverEnter);
      activeSlide.addEventListener('mouseleave', activeSlide._videoHoverLeave);
    }



    function setupClickHandler() {
      const targetUrl = `${ROOT_PATH_URL}/index_demoview.html`; // 跳转到示例页面

      carouselElement.addEventListener('click', function (e) {
        const target = e.target;

        // 忽略点击导航按钮
        if (target.closest('.carousel-btn-next') || target.closest('.carousel-btn-prev')) {
          return;
        }

        const slide = target.closest('.swiper-slide');
        if (!slide || !swiper) return;

        const isActive = slide.classList.contains('swiper-slide-active');

        if (!isActive) {
          const slideIndexAttr = slide.getAttribute('data-swiper-slide-index');

          if (slideIndexAttr !== null) {
            const slideIndex = Number.parseInt(slideIndexAttr, 10);
            if (!Number.isNaN(slideIndex)) {
              swiper.slideToLoop(slideIndex);
            }
          } else {
            const allSlides = Array.from(carouselElement.querySelectorAll('.swiper-slide'));
            const directIndex = allSlides.indexOf(slide);
            if (directIndex >= 0) {
              swiper.slideTo(directIndex);
            }
          }
          return;
        }

        const sceneElement = target.closest('[data-scene]') || slide.querySelector('[data-scene]');
        const sceneValue = sceneElement ? sceneElement.getAttribute('data-scene') : null;

        let fullUrl = targetUrl;
        if (sceneValue) {
          const separator = targetUrl.includes('?') ? '&' : '?';
          fullUrl = `${targetUrl}${separator}scene=${encodeURIComponent(sceneValue)}`;
        }

        window.open(fullUrl, '_blank');
        // window.location.href = fullUrl;
      });
    }

    // 初始化点击处理
    setupClickHandler();
  }

  // 为所有带有 btn-goto-getstart 类的按钮添加点击跳转功能
  function setupGetStartButtons() {
    const buttons = document.querySelectorAll('.btn-goto-getstart');
    buttons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        try {
          const addressBarPath = (window.self !== window.top) ? ROOT_PATH_URL : window.location.origin;
          window.top.location.href = `${addressBarPath}/index_visionary.html`;
        } catch (err) {
          window.location.href = `${window.location.origin}/index_visionary.html`;
        }
      });
    });
  }

  function setupTeachButton() {
    const teachButton = document.querySelector('.btn-goto-teach');
    teachButton.addEventListener('click', function (e) {
      e.preventDefault();
      gotoTeachPage();
    });
  }

  function gotoTeachPage() {
    let teachPageUrl = `${ROOT_PATH_URL}/index_help.html`;
    if (i18n.currentLang === 'zh') {
      teachPageUrl = `${ROOT_PATH_URL}/index_help_zh.html`;
    }
    window.open(teachPageUrl, '_blank');
  }

  // 获取滚动偏移量：返回header高度（4rem），确保homepage-main位于header下方
  function getScrollOffset() {
    const header = document.querySelector('.homepage-header');
    const headerHeight = header ? header.offsetHeight : 64; // 默认64px (4rem)
    return headerHeight;
  }

  // 根据当前页面更新 main-1 的显示状态
  function updateMain1Visibility() {
    const main1 = document.getElementById('main-1');
    if (!main1) return;

    const currentIndex = getCurrentMainIndex();
    const isCurrentMain1 = currentIndex === 1;

    if (!isCurrentMain1) {
      // 当前页不是 main-1，隐藏 main-1
      main1.style.opacity = '0';
      main1.style.pointerEvents = 'none';
    } else {
      // 当前页是 main-1，显示 main-1
      main1.style.opacity = '';
      main1.style.pointerEvents = '';
    }
  }

  // 平滑滚动到指定元素，并添加翻页动画效果
  function scrollToElement(element, offset = null) {
    if (!element) return;

    // 获取所有main元素
    const mains = document.querySelectorAll('.homepage-main');
    const currentIndex = getCurrentMainIndex();
    const targetIndex = Array.from(mains).indexOf(element) + 1;

    // 如果目标就是当前显示的main，不执行动画
    if (currentIndex === targetIndex) {
      // 即使不滚动，也确保没有残留的动画类
      element.classList.remove('page-fade-in', 'page-fade-out');
      element.style.opacity = '';
      element.style.transform = '';
      return;
    }

    // 获取当前页和目标页的实际高度
    const currentMain = document.getElementById(`main-${currentIndex}`);
    const currentMainHeight = currentMain ? currentMain.offsetHeight : 0;
    const targetMainHeight = element.offsetHeight || 0;
    const viewportHeight = window.innerHeight;
    const headerHeight = getScrollOffset();

    // 找到当前显示的main，添加淡出动画
    if (currentMain && currentMain !== element) {
      // 移除之前的动画类
      currentMain.classList.remove('page-fade-in', 'page-fade-out');

      // 重置当前main中的内容元素动画状态
      const currentDetailInfo = currentMain.querySelector('.main-content-detail-info');
      const currentDetailImg = currentMain.querySelector('.main-content-detail-img');
      if (currentDetailInfo) {
        currentDetailInfo.classList.remove('content-fade-in');
        currentDetailInfo.style.opacity = '';
        currentDetailInfo.style.transform = '';
      }
      if (currentDetailImg) {
        currentDetailImg.classList.remove('content-fade-in');
        currentDetailImg.style.opacity = '';
        currentDetailImg.style.transform = '';
      }

      // 触发重排，确保动画可以重新开始
      void currentMain.offsetWidth;
      // 添加淡出动画
      currentMain.classList.add('page-fade-out');

      // 淡出动画结束后清理
      setTimeout(() => {
        currentMain.classList.remove('page-fade-out');
        currentMain.style.opacity = '';
        currentMain.style.transform = '';
      }, 400);
    }

    // 给目标main添加淡入动画
    // 先移除之前的动画类
    element.classList.remove('page-fade-in', 'page-fade-out');
    // 设置初始状态（从下方淡入）
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    // 触发重排，确保初始状态生效
    void element.offsetWidth;
    // 添加淡入动画类
    element.classList.add('page-fade-in');

    // 检查目标main是否包含detail内容，如果是则触发内容动画
    const detailInfo = element.querySelector('.main-content-detail-info');
    const detailImg = element.querySelector('.main-content-detail-img');

    if (detailInfo || detailImg) {
      // 重置内容元素的初始状态
      if (detailInfo) {
        detailInfo.classList.remove('content-fade-in');
        detailInfo.style.opacity = '0';
        detailInfo.style.transform = 'translateX(-30px)';
        void detailInfo.offsetWidth;
      }

      if (detailImg) {
        detailImg.classList.remove('content-fade-in');
        detailImg.style.opacity = '0';
        detailImg.style.transform = '';
        void detailImg.offsetWidth;
      }

      // 在main淡入动画开始后，触发内容动画
      // main-content-detail-info 立即开始动画
      if (detailInfo) {
        setTimeout(() => {
          detailInfo.classList.add('content-fade-in');
        }, 0);
      }

      // main-content-detail-img 延迟0.3s开始动画（CSS中已设置延迟，这里确保类名添加）
      if (detailImg) {
        setTimeout(() => {
          detailImg.classList.add('content-fade-in');
        }, 0);
      }

      // 动画结束后清理样式（等待所有动画完成：0.4s main动画 + 0.3s延迟 + 0.5s img动画 = 1.2s）
      setTimeout(() => {
        if (detailInfo) {
          detailInfo.classList.remove('content-fade-in');
          detailInfo.style.opacity = '';
          detailInfo.style.transform = '';
        }
        if (detailImg) {
          detailImg.classList.remove('content-fade-in');
          detailImg.style.opacity = '';
          detailImg.style.transform = '';
        }
      }, 1200); // 等待所有动画完成
    }

    // 控制 main-1 的显示/隐藏：如果目标页不是 main-1，则隐藏 main-1
    const main1 = document.getElementById('main-1');
    const isTargetMain1 = element.id === 'main-1';

    if (main1) {
      if (!isTargetMain1) {
        // 目标页不是 main-1，隐藏 main-1
        main1.style.opacity = '0';
        main1.style.pointerEvents = 'none';
      } else {
        // 目标页是 main-1，显示 main-1
        main1.style.opacity = '';
        main1.style.pointerEvents = '';
      }
    }

    // 如果offset为null，使用动态计算的偏移量（header高度，确保main位于header下方）
    const finalOffset = offset !== null ? offset : headerHeight;

    // 计算精确的滚动位置，确保目标页面完全占满视口，不被分割
    // 目标：目标页顶部对齐到header下方，整页显示
    const elementTop = element.offsetTop;
    const expectedScrollTop = elementTop - headerHeight;

    // 执行滚动到精确位置
    window.scrollTo({
      top: expectedScrollTop,
      behavior: 'smooth'
    });

    // 滚动完成后，验证并调整位置以确保整页完整展示，不被分割
    // 使用多个检查点确保滚动位置精确
    const checkAndAdjustPosition = () => {
      const scrollTop = window.pageYOffset || window.scrollY;
      const currentElementTop = element.offsetTop;
      const currentElementHeight = element.offsetHeight;
      const currentElementBottom = currentElementTop + currentElementHeight;

      // 计算视口范围（考虑header高度）
      const viewportTop = scrollTop + headerHeight;
      const viewportBottom = scrollTop + viewportHeight;

      // 计算期望的滚动位置（目标页顶部对齐到header下方）
      const correctScrollTop = currentElementTop - headerHeight;
      const scrollDifference = Math.abs(scrollTop - correctScrollTop);

      // 检查目标页是否完整显示（顶部对齐到header下方，底部不超出视口或整页显示）
      // 对于整页显示，我们要求：
      // 1. 目标页顶部精确对齐到header下方（允许1px误差）
      // 2. 如果目标页高度小于等于视口可用高度，确保完全显示
      // 3. 如果目标页高度大于视口可用高度，确保顶部对齐（整页显示，底部可以超出）
      const isTopAligned = Math.abs(currentElementTop - viewportTop) <= 2; // 允许2px误差
      const isFullyVisible = currentElementTop >= (viewportTop - 2) &&
        (currentElementHeight <= (viewportHeight - headerHeight) ?
          currentElementBottom <= (viewportBottom + 2) : true);

      // 如果位置不准确或页面被分割，强制调整到精确位置
      if (!isTopAligned || scrollDifference > 2 || !isFullyVisible) {
        // 使用 'auto' 行为立即跳转到精确位置，避免动画导致的误差累积
        window.scrollTo({
          top: correctScrollTop,
          behavior: 'auto'
        });
      }
    };

    // 在滚动动画进行中多次检查，确保位置精确
    // 使用 requestAnimationFrame 和 setTimeout 组合，确保在滚动完成后精确调整
    let checkCount = 0;
    const maxChecks = 10; // 最多检查10次

    const performCheck = () => {
      checkAndAdjustPosition();
      // 更新 main-1 的显示状态
      updateMain1Visibility();
      checkCount++;

      // 如果还有检查次数，继续检查
      if (checkCount < maxChecks) {
        // 前几次快速检查，后续逐渐延长间隔
        const delay = checkCount <= 3 ? 50 : (checkCount <= 6 ? 100 : 200);
        setTimeout(performCheck, delay);
      }
    };

    // 开始检查序列
    setTimeout(performCheck, 50); // 第一次检查在50ms后

    // 淡入动画结束后清理类名和样式
    setTimeout(() => {
      element.classList.remove('page-fade-in', 'page-fade-out');
      element.style.opacity = '';
      element.style.transform = '';
    }, 1000); // 1s
  }

  // 获取当前可见的 main 元素索引
  // 基于视口顶部位置，确保整页滚动时正确检测当前页面
  // 优先检测哪个页面的顶部对齐到header下方（整页显示）
  function getCurrentMainIndex() {
    const mains = document.querySelectorAll('.homepage-main');
    const scrollPosition = window.pageYOffset || window.scrollY;
    const headerHeight = getScrollOffset();
    const viewportTop = scrollPosition + headerHeight;

    // 首先尝试精确匹配：查找顶部对齐到header下方的页面
    // 这是整页显示的标准状态
    for (let i = 0; i < mains.length; i++) {
      const main = mains[i];
      const mainTop = main.offsetTop;

      // 检查页面顶部是否精确对齐到header下方（允许5px误差）
      if (Math.abs(mainTop - viewportTop) <= 5) {
        return i + 1; // 返回 1-based 索引
      }
    }

    // 如果没有精确匹配，查找视口顶部位于哪个页面范围内
    // 使用较小的容差，确保整页显示时不会误判
    const tolerance = 50; // 减小容差，提高精确度

    for (let i = 0; i < mains.length; i++) {
      const main = mains[i];
      const mainTop = main.offsetTop;
      const mainBottom = mainTop + main.offsetHeight;

      // 检查视口顶部是否在当前main范围内
      // 优先考虑顶部对齐的情况
      if (viewportTop >= mainTop && viewportTop < mainBottom) {
        return i + 1; // 返回 1-based 索引
      }

      // 考虑容差范围（用于处理滚动过程中的中间状态）
      if (scrollPosition >= (mainTop - tolerance) && scrollPosition < (mainBottom - tolerance)) {
        return i + 1;
      }
    }

    // 如果还没找到，返回最接近的（基于距离视口顶部最近）
    let closestIndex = 1;
    let closestDistance = Infinity;

    mains.forEach((main, index) => {
      const mainTop = main.offsetTop;
      // 计算期望的滚动位置（main顶部对齐到header下方）
      const expectedScrollTop = mainTop - headerHeight;
      const distance = Math.abs(scrollPosition - expectedScrollTop);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index + 1;
      }
    });

    return closestIndex;
  }

  // 设置 next-arrow-btn 点击事件：滚动到下一个 main
  function setupNextArrowButton() {
    const nextArrowBtn = document.querySelector('.next-arrow-btn');
    if (!nextArrowBtn) return;

    nextArrowBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const mains = document.querySelectorAll('.homepage-main');
      const currentIndex = getCurrentMainIndex();
      const nextIndex = currentIndex < mains.length ? currentIndex + 1 : 1; // 循环到第一个

      const nextMain = document.getElementById(`main-${nextIndex}`);
      if (nextMain) {
        scrollToElement(nextMain); // 使用动态计算的偏移量
      }
    });
  }

  // 设置 navbar-item 点击事件：滚动到对应的 main
  function setupNavbarItems() {
    const navbarItems = document.querySelectorAll('.main-content-detail-navbar-item');
    navbarItems.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        const pageIndex = this.getAttribute('data-page-index');
        if (!pageIndex) return;

        // data-page-index 从 1 开始，对应 main-2, main-3, main-4
        // 因为第一个 main (main-1) 没有 navbar
        const mainId = `main-${parseInt(pageIndex) + 1}`;
        const targetMain = document.getElementById(mainId);

        if (targetMain) {
          scrollToElement(targetMain); // 使用动态计算的偏移量
        }
      });
    });
  }

  // 鼠标滚轮平滑翻页功能
  function setupWheelScroll() {
    let isScrolling = false; // 是否正在滚动中
    let lastWheelTime = 0; // 上次滚轮事件时间
    let wheelDebounceTimer = null; // 防抖定时器
    let accumulatedDeltaY = 0; // 累积的滚动量
    let lastScrollDirection = 0; // 上次滚动方向：1=向下，-1=向上，0=无
    
    const wheelThrottle = 100; // 滚轮事件节流时间（毫秒），用于快速响应
    const wheelDebounceDelay = 300; // 防抖延迟时间（毫秒），滚动停止后执行
    const scrollAnimationDuration = 800; // 滚动动画持续时间（毫秒）
    const minScrollDelta = 30; // 最小滚动幅度阈值

    // 滚动到指定的 main
    function scrollToMain(index) {
      if (isScrolling) return; // 如果正在滚动，忽略新的滚动请求

      const mains = document.querySelectorAll('.homepage-main');
      if (index < 1 || index > mains.length) return;

      const targetMain = document.getElementById(`main-${index}`);
      if (!targetMain) return;

      isScrolling = true;
      scrollToElement(targetMain); // 使用动态计算的偏移量

      // 滚动完成后重置标志
      setTimeout(() => {
        isScrolling = false;
      }, scrollAnimationDuration);
    }

    // 执行滚动操作（防抖后的最终执行）
    function executeScroll() {
      // 清除防抖定时器
      if (wheelDebounceTimer) {
        clearTimeout(wheelDebounceTimer);
        wheelDebounceTimer = null;
      }

      // 如果正在滚动中，忽略
      if (isScrolling) {
        accumulatedDeltaY = 0;
        lastScrollDirection = 0;
        return;
      }

      // 如果累积的滚动量太小，忽略
      if (Math.abs(accumulatedDeltaY) < minScrollDelta) {
        accumulatedDeltaY = 0;
        lastScrollDirection = 0;
        return;
      }

      // 获取当前 main 索引
      const currentIndex = getCurrentMainIndex();
      const mains = document.querySelectorAll('.homepage-main');

      // 根据累积的滚动方向确定目标索引
      const isScrollingDown = accumulatedDeltaY > 0;
      let targetIndex = currentIndex;

      if (isScrollingDown) {
        // 向下滚动：滚动到下一个 main
        targetIndex = currentIndex < mains.length ? currentIndex + 1 : mains.length;
      } else {
        // 向上滚动：滚动到上一个 main
        targetIndex = currentIndex > 1 ? currentIndex - 1 : 1;
      }

      // 如果目标索引与当前索引相同，不执行滚动
      if (targetIndex === currentIndex) {
        accumulatedDeltaY = 0;
        lastScrollDirection = 0;
        return;
      }

      // 重置累积量
      accumulatedDeltaY = 0;
      lastScrollDirection = 0;

      // 执行滚动
      scrollToMain(targetIndex);
    }

    // 处理滚轮事件
    function handleWheel(e) {
      // 如果正在滚动中，阻止默认行为并返回
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      const currentTime = Date.now();
      const timeSinceLastWheel = currentTime - lastWheelTime;

      // 检测滚动方向（兼容不同浏览器）
      let deltaY = 0;
      if (e.deltaY !== undefined) {
        deltaY = e.deltaY; // 现代浏览器
      } else if (e.detail !== undefined) {
        deltaY = e.detail * -40; // Firefox (需要反转并放大)
      } else if (e.wheelDelta !== undefined) {
        deltaY = -e.wheelDelta; // 旧版浏览器
      }

      // 如果滚动幅度太小，忽略（避免误触发）
      if (Math.abs(deltaY) < 10) {
        return;
      }

      // 阻止默认滚动行为
      e.preventDefault();

      // 确定当前滚动方向
      const currentDirection = deltaY > 0 ? 1 : -1;

      // 如果滚动方向改变，重置累积量
      if (lastScrollDirection !== 0 && currentDirection !== lastScrollDirection) {
        accumulatedDeltaY = 0;
      }

      // 累积滚动量
      accumulatedDeltaY += deltaY;
      lastScrollDirection = currentDirection;

      // 节流处理：如果距离上次滚轮事件时间太短，只累积不执行
      if (timeSinceLastWheel < wheelThrottle) {
        // 清除之前的防抖定时器
        if (wheelDebounceTimer) {
          clearTimeout(wheelDebounceTimer);
        }
        // 设置新的防抖定时器
        wheelDebounceTimer = setTimeout(executeScroll, wheelDebounceDelay);
        lastWheelTime = currentTime;
        return;
      }

      // 更新最后滚轮事件时间
      lastWheelTime = currentTime;

      // 清除之前的防抖定时器
      if (wheelDebounceTimer) {
        clearTimeout(wheelDebounceTimer);
      }

      // 设置新的防抖定时器：在滚动停止后执行
      wheelDebounceTimer = setTimeout(executeScroll, wheelDebounceDelay);
    }

    // 添加滚轮事件监听（使用 passive: false 以便可以 preventDefault）
    // 支持多种浏览器兼容性
    // 现代浏览器使用 'wheel' 事件
    if ('onwheel' in document || typeof WheelEvent !== 'undefined') {
      window.addEventListener('wheel', handleWheel, { passive: false });
    }
    // 兼容旧版浏览器
    if ('onmousewheel' in document) {
      window.addEventListener('mousewheel', handleWheel, { passive: false });
    }
    // 兼容旧版 Firefox
    window.addEventListener('DOMMouseScroll', handleWheel, { passive: false });
  }

  // 根据窗口宽度计算缩放比例
  // 1440px = 1.0倍，1920px = 1.5倍，线性插值
  // 当页面高度小于700px时，缩放比例为1
  function calculateScale() {
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    console.log('viewportHeight', viewportHeight);

    // 如果页面高度小于700px，缩放比例为1
    if (viewportHeight < 700) {
      return 1.0;
    } else if (viewportHeight < 750) {
      return 1.1;
    } else if (viewportHeight < 800) {
      if (i18n.currentLang === 'zh') {
        return 1.2;
      } else {
        return 1.13;
      }
    } else if (viewportHeight < 840) {
      if (i18n.currentLang === 'zh') {
        return 1.23;
      } else {
        return 1.15;
      }
    } else if (viewportHeight < 860) {
      if (i18n.currentLang === 'zh') {
        return 1.25;
      } else {
        return 1.2;
      }
    }

    // 页面高度大于等于700px时，按现有逻辑基于宽度计算缩放
    const minWidth = 1440;
    const maxWidth = 1920;
    const minScale = 1.0;
    const maxScale = 1.3;

    if (viewportWidth < minWidth) {
      return minScale;
    } else if (viewportWidth > maxWidth) {
      return maxScale;
    } else {
      // 线性插值：scale = minScale + (viewportWidth - minWidth) / (maxWidth - minWidth) * (maxScale - minScale)
      const scale = minScale + (viewportWidth - minWidth) / (maxWidth - minWidth) * (maxScale - minScale);
      return scale;
    }
  }

  // 调整所有 homepage-main 的高度以适应视口
  function adjustMainHeights() {
    const mains = document.querySelectorAll('.homepage-main');
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    // 获取header的实际高度
    const header = document.querySelector('.homepage-header');
    const headerHeight = header ? header.offsetHeight : 64; // 默认64px (4rem)

    // 计算每个main应该占据的高度（视口高度减去header高度）
    const availableHeight = viewportHeight - headerHeight;

    // 计算缩放比例
    const scale = calculateScale();

    // 在resize前记录当前main索引（基于滚动位置计算）
    const currentScrollTop = window.pageYOffset || window.scrollY;
    let currentMainIndex = 1;

    // 先根据旧的布局计算当前在哪个main
    mains.forEach((main, index) => {
      const mainTop = main.offsetTop;
      const mainHeight = main.offsetHeight || availableHeight;
      if (currentScrollTop >= mainTop && currentScrollTop < mainTop + mainHeight) {
        currentMainIndex = index + 1;
      }
    });

    // 计算每个main应该占据的高度（视口高度减去header高度）
    const mainHeight = availableHeight;

    // main-1 的最小高度限制
    // 当页面高度在609-650px之间时，最小高度为630px
    // 当页面高度在650-679px之间时，最小高度为650px
    // 当页面高度在680-699px之间时，最小高度为660px
    // 其他情况下，最小高度为610px
    let main1MinHeight = 585;
    if (i18n.currentLang === 'zh') {
      main1MinHeight = 610;
    } else {
      main1MinHeight = 585;
    }
    if (viewportHeight >= 590 && viewportHeight <= 609) {
      if (i18n.currentLang === 'zh') {
        main1MinHeight = 610;
      } else {
        main1MinHeight = 590;
      }
    } else if (viewportHeight >= 610 && viewportHeight <= 639) {
      if (i18n.currentLang === 'zh') {
        main1MinHeight = 615;
      } else {
        main1MinHeight = 610;
      }
    } else if (viewportHeight >= 640 && viewportHeight <= 649) {
      if (i18n.currentLang === 'zh') {
        main1MinHeight = 615;
      } else {
        main1MinHeight = 640;
      }
    } else if (viewportHeight >= 650 && viewportHeight <= 669) {
      if (i18n.currentLang === 'zh') {
        main1MinHeight = 650;
      } else {
        main1MinHeight = 640;
      }
    } else if (viewportHeight >= 670 && viewportHeight <= 679) {
      if (i18n.currentLang === 'zh') {
        main1MinHeight = 650;
      } else {
        main1MinHeight = 665;
      }
    } else if (viewportHeight >= 680 && viewportHeight <= 699) {
      main1MinHeight = 665;
    } else if (viewportHeight >= 700 && viewportHeight <= 729) {
      main1MinHeight = 690;
    } else if (viewportHeight >= 730 && viewportHeight <= 749) {
      main1MinHeight = 705;
    } else if (viewportHeight >= 750 && viewportHeight <= 759) {
      main1MinHeight = 730;
    } else if (viewportHeight >= 760 && viewportHeight <= 799) {
      main1MinHeight = 750;
    } else if (viewportHeight >= 800 && viewportHeight <= 829) {
      main1MinHeight = 770;
    } else if (viewportHeight >= 830 && viewportHeight <= 849) {
      main1MinHeight = 780;
    }

    // 设置每个main的高度和缩放
    mains.forEach((main, index) => {
      // 对于 main-1，根据视口高度设置最小高度
      let finalMainHeight = mainHeight;
      if (main.id === 'main-1') {
        finalMainHeight = Math.max(mainHeight, main1MinHeight);
      }

      // 设置精确的高度为视口高度，确保每个main正好占据一屏
      main.style.height = `${finalMainHeight}px`;
      main.style.minHeight = `${finalMainHeight}px`;
      main.style.maxHeight = `${finalMainHeight}px`;

      // position、top、padding、margin已在CSS中设置

      // 确保内容容器能够适应并应用缩放
      const mainContent = main.querySelector('.main-content');
      if (mainContent) {
        // 对于第一个main，使用特殊的高度计算
        if (main.id === 'main-1') {
          // #main-1的main-content最大高度为596*scale
          // 由于缩放后视觉高度 = 实际高度 * scale
          // 所以实际高度应该设置为596，缩放后视觉高度为596*scale
          const main1ContentHeight = 596;
          mainContent.style.height = `${main1ContentHeight}px`;
          mainContent.style.maxHeight = `${main1ContentHeight * scale}px`;
        } else {
          // 其他main的计算方式
          // 如果内容高度为H，缩放scale后视觉高度为H*scale
          // 为了保持main的高度为availableHeight，我们需要H*scale = availableHeight
          // 所以 H = availableHeight / scale
          let scaledContentHeight = availableHeight / scale;
          if (scaledContentHeight < 528) {
            scaledContentHeight = 528;
          }
          mainContent.style.height = `${scaledContentHeight}px`;
          mainContent.style.maxHeight = `${scaledContentHeight}px`;
        }

        mainContent.style.overflowY = 'auto';
        mainContent.style.overflowX = 'hidden';

        // 应用缩放变换
        // transform scale不会影响布局空间，只影响视觉大小
        // 根据视口高度动态调整 translateY 值，避免在低高度时内容被 header 遮挡
        let translateY = -2; // 默认值 -2rem
        if (i18n.currentLang === 'zh') {
          translateY = -4;
        } else {
          translateY = -2;
        }
        if (main.id === 'main-1') {
          // 对于 main-1，根据视口高度调整 translateY
          // 当页面高度在609-679px之间时，使用-4rem
          // 当页面高度在680-699px之间时，使用-3rem
          if (viewportHeight < 610) {
            if (i18n.currentLang === 'zh') {
              translateY = -4; // 高度低于610px：-4rem
            } else {
              translateY = -3.5; // 高度低于610px：-4rem
            }
          } else if (viewportHeight <= 679) {
            if (i18n.currentLang === 'zh') {
              translateY = -4; // 高度在610-679px之间：-4rem
            } else {
              translateY = -3; // 高度在610-679px之间：-4rem
            }
          } else if (viewportHeight <= 699) {
            if (i18n.currentLang === 'zh') {
              translateY = -3; // 高度在680-699px之间：-3rem
            } else {
              translateY = -2.5; // 高度在680-699px之间：-3rem
            }
          } else if (viewportHeight <= 749) {
            if (i18n.currentLang === 'zh') {
              translateY = -3.5; // 低高度：-2rem
            } else {
              translateY = -2; // 低高度：-2rem
            }
          } else if (viewportHeight <= 799) {
            if (i18n.currentLang === 'zh') {
              translateY = -4; // 中等低高度：-3rem
            } else {
              translateY = -2.5; // 中等低高度：-3rem
            }
          } else {
            if (i18n.currentLang === 'zh') {
              translateY = -4; // 正常高度：-4rem
            } else {
              translateY = -2; // 正常高度：-4rem
            }
          }
        }

        mainContent.style.transform = `translateY(${translateY}rem) scale(${scale})`;
        mainContent.style.transformOrigin = 'center center';
      }
    });

    // 确保body和container的高度足够包含所有main
    // 总高度 = header高度 + 所有main的高度
    // 对于 main-1，使用实际设置的高度（可能大于 availableHeight，因为最小高度限制）
    const main1FinalHeight = Math.max(mainHeight, main1MinHeight);
    const totalHeight = headerHeight + main1FinalHeight + (mains.length - 1) * mainHeight;

    document.body.style.minHeight = `${totalHeight}px`;
    const container = document.querySelector('.homepage-container');
    if (container) {
      container.style.minHeight = `${totalHeight}px`;
    }

    // 如果 Swiper 已初始化，触发 resize 事件
    if (window.homepageSwiper) {
      window.homepageSwiper.update();
    }

    // resize后，重新滚动到之前所在的main的顶部
    // 使用setTimeout确保DOM完全更新后再滚动
    setTimeout(() => {
      if (currentMainIndex > 0 && currentMainIndex <= mains.length) {
        const targetMain = document.getElementById(`main-${currentMainIndex}`);
        if (targetMain) {
          // 计算目标main的新位置
          // 由于每个main都有4rem的margin-top，offsetTop已经包含了这个偏移
          // 但我们需要减去header高度，确保main内容位于header下方
          const targetTop = targetMain.offsetTop - headerHeight;
          // 立即滚动到目标位置，不使用动画
          window.scrollTo({
            top: targetTop,
            behavior: 'auto'
          });
          // 更新 main-1 的显示状态
          updateMain1Visibility();
        }
      }
    }, 0);
  }

  // 设置窗口 resize 事件监听
  function setupResizeHandler() {
    let resizeTimer;
    const resizeDelay = 150; // 防抖延迟（毫秒），稍微增加以确保稳定

    function handleResize() {
      // 清除之前的定时器
      clearTimeout(resizeTimer);

      // 设置新的定时器，实现防抖
      resizeTimer = setTimeout(function () {
        adjustMainHeights();
      }, resizeDelay);
    }

    // 监听resize事件
    window.addEventListener('resize', handleResize, { passive: true });

    // 监听orientationchange事件（移动设备旋转）
    window.addEventListener('orientationchange', function () {
      // 旋转后稍微延迟，等待浏览器完成布局
      setTimeout(function () {
        adjustMainHeights();
      }, 300);
    }, { passive: true });

    // 初始调整一次，确保页面加载时高度正确
    // 使用setTimeout确保DOM完全渲染
    setTimeout(function () {
      adjustMainHeights();
    }, 100);

    // 在load事件时再次调整，确保所有资源加载完成后高度正确
    window.addEventListener('load', function () {
      adjustMainHeights();
    }, { once: true });
  }

  // 等待 DOM 加载完成后再初始化
  function init() {
    // 检查 Swiper 库是否已加载
    if (typeof Swiper === 'undefined') {
      console.error('Swiper library is not loaded. Please check if the script is included.');
      return;
    }

    initSwiper();
    setupGetStartButtons();
    setupTeachButton();
    setupNextArrowButton();
    setupNavbarItems();
    setupWheelScroll();
    setupResizeHandler();

    // 初始化 main-1 的显示状态
    setTimeout(() => {
      updateMain1Visibility();
    }, 200); // 延迟执行，确保页面布局已完成

    // 初始化按钮点击跟踪（在页面完全加载后）
    // trackButtonClick 函数由 tracking.js 提供，在 HTML 中已引入
    if (typeof window.trackButtonClick === 'function') {
      window.trackButtonClick();
    } else {
      console.warn('[Editor] trackButtonClick function not found. Make sure tracking.js is loaded.');
    }
  }

  // 等待 DOM 和 Swiper 库加载完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM 已经加载完成，但仍然需要等待 Swiper 库
    if (typeof Swiper !== 'undefined') {
      init();
    } else {
      // 如果 Swiper 还没加载，等待一下
      setTimeout(init, 100);
    }
  }
})();
