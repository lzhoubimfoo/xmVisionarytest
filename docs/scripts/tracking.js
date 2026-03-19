/**
 * 初始化按钮点击跟踪
 * 在页面完全加载后调用此函数，它会为所有带有 .track-button 类的按钮添加点击跟踪
 * 只有在 gtag 函数存在时才会执行跟踪
 */
function trackButtonClick() {
    // 检查 gtag 函数是否存在
    if (typeof gtag !== 'function') {
        console.log('[Tracking] gtag is not available, button tracking disabled.');
        return;
    }

    // 使用事件委托监听所有 .track-button 的点击事件
    document.addEventListener('click', function(e) {
        if (e.target.closest('.tracking-button')) {
            const button = e.target.closest('.tracking-button');
            gtag('event', 'button_click', {
                'event_category': button.dataset.eventCategory || '按钮',
                'event_label': button.dataset.eventLabel || button.textContent,
                'button_id': button.id || '',
                'page_path': window.location.pathname
            });
            console.log('[Tracking] Button clicked:', button.dataset.eventCategory, button.dataset.eventLabel);
        }
    });
    
    console.log('[Tracking] Button tracking initialized successfully.');
}

function gtagTracking(category,label,id) {
    gtag('event', 'button_click', {
        'event_category': category,
        'event_label': label,
        'button_id': id,
        'page_path': window.location.pathname
    });
    console.log('[Tracking] Button clicked:', category, label);
}

// 将函数暴露到全局作用域，供其他脚本调用
window.trackButtonClick = trackButtonClick;
window.gtagTracking = gtagTracking;