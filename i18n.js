/**
 * Simple i18n implementation for loading and applying translations
 */
class I18n {
  constructor() {
    this.translations = {};
    this.currentLanguage = 'en';
    this.fallbackLanguage = 'en';
  }

  /**
   * Initialize i18n with the given language
   * @param {string} language - Language code (e.g., 'en', 'de')
   */
  async init(language = 'en') {
    this.currentLanguage = language;
    await this.loadTranslations(language);
    this.applyTranslations();
  }

  /**
   * Load translations from properties file
   * @param {string} language - Language code
   */
  async loadTranslations(language) {
    try {
      const filename = language === 'en' ? 'i18n.properties' : `i18n_${language}.properties`;
      const response = await fetch(`./i18n/${filename}`);
      
      if (!response.ok) {
        throw new Error(`Failed to load translations: ${response.status}`);
      }
      
      const content = await response.text();
      this.translations[language] = this.parseProperties(content);
    } catch (error) {
      console.warn(`Failed to load translations for ${language}:`, error);
      
      // Load fallback language if not already loaded
      if (language !== this.fallbackLanguage && !this.translations[this.fallbackLanguage]) {
        await this.loadTranslations(this.fallbackLanguage);
      }
    }
  }

  /**
   * Parse properties file content into key-value pairs
   * @param {string} content - Properties file content
   * @returns {Object} Parsed translations
   */
  parseProperties(content) {
    const translations = {};
    const lines = content.split('\n');
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      // Skip empty lines and comments
      if (!trimmedLine || trimmedLine.startsWith('#')) {
        continue;
      }
      
      const equalIndex = trimmedLine.indexOf('=');
      if (equalIndex > 0) {
        const key = trimmedLine.substring(0, equalIndex).trim();
        const value = trimmedLine.substring(equalIndex + 1).trim();
        translations[key] = value;
      }
    }
    
    return translations;
  }

  /**
   * Get translated text for a key
   * @param {string} key - Translation key
   * @returns {string} Translated text or key if not found
   */
  getText(key) {
    // Try current language first
    if (this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
      return this.translations[this.currentLanguage][key];
    }
    
    // Fallback to default language
    if (this.translations[this.fallbackLanguage] && this.translations[this.fallbackLanguage][key]) {
      return this.translations[this.fallbackLanguage][key];
    }
    
    // Return key if no translation found
    console.warn(`Translation not found for key: ${key}`);
    return key;
  }

  /**
   * Change language and apply translations
   * @param {string} language - New language code
   */
  async changeLanguage(language) {
    if (language === this.currentLanguage) {
      return;
    }
    
    this.currentLanguage = language;
    
    // Load translations if not already loaded
    if (!this.translations[language]) {
      await this.loadTranslations(language);
    }
    
    this.applyTranslations();
  }

  /**
   * Apply translations to all elements with data-i18n attribute
   */
  applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getText(key);
      
      // Handle different types of elements
      if (element.tagName === 'INPUT' && element.type === 'text') {
        element.placeholder = translation;
      } else if (element.tagName === 'INPUT' && element.type === 'email') {
        element.placeholder = translation;
      } else if (element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else if (element.tagName === 'LABEL') {
        element.textContent = translation;
      } else {
        element.textContent = translation;
      }
    });
  }
}

// Create global i18n instance
window.i18n = new I18n();
