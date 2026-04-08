/**
 * 多语言国际化系统
 * 支持中文和英文切换
 */

class I18n {
    constructor() {
        this.currentLang = 'en'; // 默认语言：'en' 或 'zh'
        this.translations = {};
        this.buttonInitialized = false; // 标记按钮是否已初始化
        this.init();
    }

    /**
     * 初始化多语言系统
     */
    async init() {
        // 从 localStorage 读取用户语言偏好
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
            this.currentLang = savedLang;
        } else {
            // 根据浏览器语言自动检测
            const browserLang = navigator.language || navigator.userLanguage;
            this.currentLang = browserLang.startsWith('zh') ? 'zh' : 'en';
        }

        // 加载语言包
        await this.loadTranslations();
        
        // 应用翻译
        this.applyTranslations();
        
        // 更新页面语言属性
        this.updatePageLang();
        
        // 初始化语言切换按钮
        this.initLanguageSwitchButton();
    }

    /**
     * 加载语言包
     */
    async loadTranslations() {
        try {
            const response = await fetch(`./scripts/locales/translate.${this.currentLang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load language file: ${response.statusText}`);
            }
            this.translations = await response.json();
        } catch (error) {
            console.error('Error loading translations:', error);
            // 如果加载失败，尝试加载英文作为后备
            if (this.currentLang !== 'en') {
                try {
                    const fallbackResponse = await fetch('./scripts/locales/translate.en.json');
                    this.translations = await fallbackResponse.json();
                    this.currentLang = 'en';
                } catch (fallbackError) {
                    console.error('Error loading fallback translations:', fallbackError);
                }
            }
        }
    }

    /**
     * 根据 key 路径获取翻译文本
     * @param {string} key - 翻译键，支持点号分隔的路径，如 "pages.page1.title"
     * @returns {string} 翻译后的文本
     */
    getTranslation(key) {
        if (!key) return '';
        
        const keys = key.split('.');
        let value = this.translations;
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key; // 如果找不到翻译，返回原始 key
            }
        }
        
        return typeof value === 'string' ? value : key;
    }

    /**
     * 应用翻译到页面
     */
    applyTranslations() {
        // 处理 data-i18n 属性（设置 textContent）
        const i18nElements = document.querySelectorAll('[data-i18n]');
        i18nElements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // 处理 data-i18n-html 属性（设置 innerHTML）
        const i18nHtmlElements = document.querySelectorAll('[data-i18n-html]');
        i18nHtmlElements.forEach(element => {
            const key = element.getAttribute('data-i18n-html');
            const translation = this.getTranslation(key);
            if (translation) {
                element.innerHTML = translation;
            }
        });

        // 处理 data-i18n-lang 属性（根据语言显示/隐藏元素）
        const i18nLangElements = document.querySelectorAll('[data-i18n-lang]');
        i18nLangElements.forEach(element => {
            const langAttr = element.getAttribute('data-i18n-lang');
            if (!langAttr) return;

            // 如果属性值与当前语言一致，显示元素
            if (langAttr === this.currentLang) {
                // 如果之前被隐藏过，恢复显示
                // 优先使用 data-i18n-lang-original-display 保存的原始 display 值
                const originalDisplay = element.getAttribute('data-i18n-lang-original-display');
                if (originalDisplay) {
                    element.style.display = originalDisplay;
                    element.removeAttribute('data-i18n-lang-original-display');
                } else {
                    // 如果没有保存的原始值，移除 style.display，让元素使用 CSS 默认值
                    element.style.display = '';
                }
            } else {
                // 如果属性值与当前语言不一致，隐藏元素
                // 先保存当前的 display 值（如果不是 none）
                if (element.style.display !== 'none') {
                    const currentDisplay = element.style.display || window.getComputedStyle(element).display;
                    if (currentDisplay !== 'none') {
                        element.setAttribute('data-i18n-lang-original-display', currentDisplay);
                    }
                }
                element.style.display = 'none';
            }
        });
    }

    /**
     * 更新页面语言属性
     */
    updatePageLang() {
        document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';
        
        // 更新 homepage-logo 元素的 lang 属性，以适配 CSS 样式
        const homepageLogo = document.querySelector('.homepage-logo');
        if (homepageLogo) {
            homepageLogo.setAttribute('lang', this.currentLang);
        }
        const homepageContainer=document.querySelector('.homepage-container');
        if (homepageContainer) {
            homepageContainer.setAttribute('lang', this.currentLang);
        }
    }

    /**
     * 切换语言
     * @param {string} lang - 目标语言：'en' 或 'zh'
     */
    async switchLanguage(lang) {
        if (lang !== 'en' && lang !== 'zh') {
            console.warn(`Invalid language: ${lang}. Supported languages: 'en', 'zh'`);
            return;
        }

        if (this.currentLang === lang) {
            return; // 已经是目标语言，无需切换
        }

        this.currentLang = lang;
        
        // 保存用户语言偏好
        localStorage.setItem('preferred-language', lang);
        
        // 重新加载语言包
        await this.loadTranslations();
        
        // 应用翻译
        this.applyTranslations();
        
        // 更新页面语言属性
        this.updatePageLang();
        
        // 触发语言切换事件
        this.onLanguageChanged();
    }

    /**
     * 语言切换后的回调
     * 可以在这里处理一些额外的逻辑，比如更新 logo 显示
     */
    onLanguageChanged() {
        // 更新 homepage-logo 元素的 lang 属性，以适配 CSS 样式
        const homepageLogo = document.querySelector('.homepage-logo');
        if (homepageLogo) {
            homepageLogo.setAttribute('lang', this.currentLang);
        }
        
        // 切换 logo 显示
        const logoEn = document.getElementById('logo-text-svg-en');
        const logoZh = document.getElementById('logo-text-svg-zh');
        
        if (logoEn && logoZh) {
            if (this.currentLang === 'zh') {
                logoEn.style.display = 'none';
                logoZh.style.display = 'block';
            } else {
                logoEn.style.display = 'block';
                logoZh.style.display = 'none';
            }
        }

        // 更新语言切换按钮文本
        const langSwitchBtn = document.getElementById('lang-switch-btn');
        const langSwitchText = document.getElementById('lang-switch-text');
        if (langSwitchBtn && langSwitchText) {
            langSwitchText.textContent = this.currentLang === 'zh' ? 'EN' : '中';
        }

        // 触发自定义事件，方便其他脚本监听
        const event = new CustomEvent('languageChanged', {
            detail: { language: this.currentLang }
        });
        document.dispatchEvent(event);
    }

    /**
     * 初始化语言切换按钮
     */
    initLanguageSwitchButton() {
        if (this.buttonInitialized) {
            return; // 已经初始化过，避免重复绑定
        }
        
        const langSwitchBtn = document.getElementById('lang-switch-btn');
        if (langSwitchBtn) {
            langSwitchBtn.addEventListener('click', () => {
                const newLang = this.currentLang === 'zh' ? 'en' : 'zh';
                this.switchLanguage(newLang);
            });
            this.buttonInitialized = true;
        }
    }

    /**
     * 获取当前语言
     * @returns {string} 当前语言代码
     */
    getCurrentLanguage() {
        return this.currentLang;
    }
}

// 创建全局 i18n 实例
const i18n = new I18n();

// 暴露到全局作用域，方便在控制台或其他脚本中使用
window.i18n = i18n;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 确保 logo 根据当前语言正确显示
    i18n.onLanguageChanged();
    
    // 确保按钮已绑定（如果还没有绑定的话）
    i18n.initLanguageSwitchButton();
});

