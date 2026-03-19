/**
 * 为示例场景视频添加 hover 播放交互
 */
(function() {
    'use strict';

    /**
     * 初始化视频 hover 交互
     */
    function initVideoHoverInteraction() {
        // 获取所有包含 video 的 vision-scene-image-item 元素
        const sceneImageItems = document.querySelectorAll('.vision-scene-image-item');
        
        sceneImageItems.forEach(item => {
            const video = item.querySelector('video');
            if (!video) return;

            // 鼠标悬停时播放视频
            item.addEventListener('mouseenter', function() {
                if (video.paused) {
                    video.currentTime = 0; // 重置到开始位置
                    video.play().catch(err => {
                        console.warn('视频播放失败:', err);
                    });
                }
            });

            // 鼠标移开时停止播放并重置
            item.addEventListener('mouseleave', function() {
                if (!video.paused) {
                    video.pause();
                    video.currentTime = 0; // 重置到开始位置
                }
            });
        });
    }

    /**
     * 使用 MutationObserver 监听 DOM 变化，处理动态添加的元素
     */
    function observeModalChanges() {
        // 监听 demoViewModal 和 sceneModal 的变化
        const modals = [
            document.getElementById('demoViewModal'),
            document.getElementById('sceneModal')
        ];

        modals.forEach(modal => {
            if (!modal) return;

            const observer = new MutationObserver(function(mutations) {
                // 检查是否有新的 vision-scene-image-item 被添加
                const hasNewItems = mutations.some(mutation => {
                    return Array.from(mutation.addedNodes).some(node => {
                        return node.nodeType === 1 && (
                            node.classList?.contains('vision-scene-image-item') ||
                            node.querySelector?.('.vision-scene-image-item')
                        );
                    });
                });

                if (hasNewItems) {
                    initVideoHoverInteraction();
                }
            });

            observer.observe(modal, {
                childList: true,
                subtree: true
            });
        });
    }

    // DOM 加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initVideoHoverInteraction();
            observeModalChanges();
        });
    } else {
        // DOM 已经加载完成
        initVideoHoverInteraction();
        observeModalChanges();
    }

    // 监听模态框显示事件，确保在模态框显示时也能正确初始化
    document.addEventListener('shown.bs.modal', function(event) {
        // Bootstrap 模态框显示后重新初始化
        setTimeout(initVideoHoverInteraction, 100);
    });

    // 如果模态框使用自定义的显示类，也监听该类变化
    const modalOverlays = document.querySelectorAll('.vision-modal-overlay');
    modalOverlays.forEach(overlay => {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(mutation => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (overlay.classList.contains('vision-modal-show')) {
                        // 模态框显示时初始化
                        setTimeout(initVideoHoverInteraction, 100);
                    }
                }
            });
        });

        observer.observe(overlay, {
            attributes: true,
            attributeFilter: ['class']
        });
    });

})();

