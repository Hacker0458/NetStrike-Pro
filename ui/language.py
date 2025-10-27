"""
NetStrike Pro - Multi-language Support
"""

import yaml
from pathlib import Path
from typing import Dict, Any

class LanguageManager:
    """Manage multi-language support"""
    
    def __init__(self, lang: str = "en"):
        self.lang = lang
        self.translations = {}
        self.load_language(lang)
    
    def load_language(self, lang: str):
        """Load language configuration"""
        config_path = Path(__file__).parent.parent / "config" / "language" / f"{lang}.yaml"
        
        try:
            with open(config_path, 'r', encoding='utf-8') as f:
                self.translations = yaml.safe_load(f)
        except FileNotFoundError:
            # Fallback to English
            config_path = Path(__file__).parent.parent / "config" / "language" / "en.yaml"
            with open(config_path, 'r', encoding='utf-8') as f:
                self.translations = yaml.safe_load(f)
    
    def get(self, key: str, default: str = "") -> str:
        """Get translated text by key"""
        keys = key.split('.')
        value = self.translations
        
        for k in keys:
            if isinstance(value, dict) and k in value:
                value = value[k]
            else:
                return default
        
        return str(value) if value else default
    
    def switch_language(self, lang: str):
        """Switch to another language"""
        self.lang = lang
        self.load_language(lang)

# Global language manager instance
_lang_manager = None

def init_language(lang: str = "en") -> LanguageManager:
    """Initialize language manager"""
    global _lang_manager
    _lang_manager = LanguageManager(lang)
    return _lang_manager

def get_lang() -> LanguageManager:
    """Get current language manager"""
    global _lang_manager
    if _lang_manager is None:
        _lang_manager = LanguageManager()
    return _lang_manager

def t(key: str, default: str = "") -> str:
    """Quick translation function"""
    return get_lang().get(key, default)


