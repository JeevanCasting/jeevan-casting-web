/**
 * Jeevan Casting - Professional Color Palette Switcher
 * Allows easy switching between 5 professional color palettes
 */

class PaletteSwitcher {
    constructor() {
        this.currentPalette = 1;
        this.palettes = {
            1: {
                name: "Cinematic Gold & Charcoal",
                colors: {
                    '--primary-gold': '#FFD700',
                    '--secondary-charcoal': '#2C2C2C',
                    '--accent-brown': '#8B4513',
                    '--background-light': '#F8F8F8',
                    '--text-dark': '#1A1A1A',
                    '--white': '#FFFFFF'
                }
            },
            2: {
                name: "Hollywood Noir",
                colors: {
                    '--primary-gold': '#FFD700',
                    '--secondary-black': '#1C1C1C',
                    '--accent-goldenrod': '#B8860B',
                    '--background-white': '#FFFFFF',
                    '--highlight-vermillion': '#FF6B35',
                    '--text-black': '#1C1C1C'
                }
            },
            3: {
                name: "Warm Professional",
                colors: {
                    '--primary-gold': '#FFD700',
                    '--secondary-gray': '#4A4A4A',
                    '--accent-chocolate': '#D2691E',
                    '--background-off-white': '#FAFAFA',
                    '--support-green': '#8FBC8F',
                    '--text-medium': '#4A4A4A'
                }
            },
            4: {
                name: "Modern Cinematic",
                colors: {
                    '--primary-gold': '#FFD700',
                    '--secondary-slate': '#2F4F4F',
                    '--accent-peru': '#CD853F',
                    '--background-smoke': '#F5F5F5',
                    '--highlight-steel': '#4682B4',
                    '--text-slate': '#2F4F4F'
                }
            },
            5: {
                name: "Elegant Studio",
                colors: {
                    '--primary-gold': '#FFD700',
                    '--secondary-charcoal-blue': '#36454F',
                    '--accent-sienna': '#A0522D',
                    '--background-almost-white': '#FDFDFD',
                    '--support-slate-gray': '#708090',
                    '--text-charcoal': '#36454F'
                }
            }
        };
        
        this.init();
    }

    init() {
        // this.createSwitcherUI(); // Commented out - no palette switcher
        this.applyPalette(1); // Default to Cinematic Gold & Charcoal
    }

    createSwitcherUI() {
        // Commented out - palette switcher removed
        /*
        const switcher = document.createElement('div');
        switcher.className = 'palette-switcher';
        switcher.innerHTML = `
            <h6 style="margin: 0 0 10px 0; font-size: 12px; font-weight: bold;">Color Palettes</h6>
            <button class="btn-switch-1" onclick="paletteSwitcher.switchPalette(1)">Cinematic Gold</button>
            <button class="btn-switch-2" onclick="paletteSwitcher.switchPalette(2)">Hollywood Noir</button>
            <button class="btn-switch-3" onclick="paletteSwitcher.switchPalette(3)">Warm Professional</button>
            <button class="btn-switch-4" onclick="paletteSwitcher.switchPalette(4)">Modern Cinematic</button>
            <button class="btn-switch-5" onclick="paletteSwitcher.switchPalette(5)">Elegant Studio</button>
        `;
        
        document.body.appendChild(switcher);
        */
    }

    switchPalette(paletteNumber) {
        if (this.palettes[paletteNumber]) {
            this.currentPalette = paletteNumber;
            this.applyPalette(paletteNumber);
            console.log(`Switched to ${this.palettes[paletteNumber].name}`);
        }
    }

    applyPalette(paletteNumber) {
        const palette = this.palettes[paletteNumber];
        const root = document.documentElement;
        
        // Apply CSS custom properties
        Object.entries(palette.colors).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });

        // Update specific elements that use inline styles
        this.updateInlineStyles(paletteNumber);
        
        // Update active button state
        this.updateActiveButton(paletteNumber);
    }

    updateInlineStyles(paletteNumber) {
        const palette = this.palettes[paletteNumber];
        
        // Update hero section gradient
        const heroSection = document.querySelector('.col-fixed');
        if (heroSection) {
            switch(paletteNumber) {
                case 1:
                    heroSection.style.background = 'linear-gradient(135deg, #FFD700 0%, #FFED4E 50%, #FFF200 100%)';
                    break;
                case 2:
                    heroSection.style.background = 'linear-gradient(135deg, #1C1C1C 0%, #B8860B 100%)';
                    break;
                case 3:
                    heroSection.style.background = 'linear-gradient(135deg, #D2691E 0%, #FFD700 100%)';
                    break;
                case 4:
                    heroSection.style.background = 'linear-gradient(135deg, #2F4F4F 0%, #4682B4 100%)';
                    break;
                case 5:
                    heroSection.style.background = 'linear-gradient(135deg, #36454F 0%, #A0522D 100%)';
                    break;
            }
        }

        // Update footer gradient
        const footer = document.querySelector('footer');
        if (footer) {
            switch(paletteNumber) {
                case 1:
                    footer.style.background = '#000000'; // Complete black footer
                    break;
                case 2:
                    footer.style.background = 'linear-gradient(135deg, #1C1C1C 0%, #B8860B 100%)';
                    break;
                case 3:
                    footer.style.background = 'linear-gradient(135deg, #4A4A4A 0%, #D2691E 100%)';
                    break;
                case 4:
                    footer.style.background = 'linear-gradient(135deg, #2F4F4F 0%, #CD853F 100%)';
                    break;
                case 5:
                    footer.style.background = 'linear-gradient(135deg, #36454F 0%, #A0522D 100%)';
                    break;
            }
        }

        // Update body background
        document.body.style.backgroundColor = this.getBackgroundColor(paletteNumber);
    }

    getBackgroundColor(paletteNumber) {
        switch(paletteNumber) {
            case 1: return '#F8F8F8';
            case 2: return '#FFFFFF';
            case 3: return '#FAFAFA';
            case 4: return '#F5F5F5';
            case 5: return '#FDFDFD';
            default: return '#F8F8F8';
        }
    }

    updateActiveButton(paletteNumber) {
        // Remove active class from all buttons
        document.querySelectorAll('.palette-switcher button').forEach(btn => {
            btn.style.opacity = '0.7';
            btn.style.transform = 'scale(1)';
        });
        
        // Add active state to current button
        const activeButton = document.querySelector(`.btn-switch-${paletteNumber}`);
        if (activeButton) {
            activeButton.style.opacity = '1';
            activeButton.style.transform = 'scale(1.05)';
            activeButton.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        }
    }

    // Export current palette as CSS
    exportCurrentPalette() {
        const palette = this.palettes[this.currentPalette];
        let css = `/* ${palette.name} Palette */\n:root {\n`;
        
        Object.entries(palette.colors).forEach(([property, value]) => {
            css += `    ${property}: ${value};\n`;
        });
        
        css += '}\n';
        
        console.log(css);
        return css;
    }

    // Get palette recommendations
    getPaletteRecommendations() {
        return {
            1: "Best for premium, luxury casting agency feel. Use for hero sections and primary branding.",
            2: "Perfect for classic, dramatic, high-contrast designs. Great for headers and navigation.",
            3: "Ideal for approachable, trustworthy, creative atmosphere. Use for content sections and forms.",
            4: "Excellent for contemporary, tech-forward, professional look. Perfect for modern layouts.",
            5: "Great for sophisticated, refined, studio-like atmosphere. Use for portfolio displays."
        };
    }
}

// Initialize the palette switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.paletteSwitcher = new PaletteSwitcher();
});

// Utility functions for developers
window.CastingPalettes = {
    // Quick palette application
    apply: (paletteNumber) => {
        if (window.paletteSwitcher) {
            window.paletteSwitcher.switchPalette(paletteNumber);
        }
    },
    
    // Get current palette info
    current: () => {
        if (window.paletteSwitcher) {
            return window.paletteSwitcher.palettes[window.paletteSwitcher.currentPalette];
        }
    },
    
    // Export palette CSS
    export: () => {
        if (window.paletteSwitcher) {
            return window.paletteSwitcher.exportCurrentPalette();
        }
    },
    
    // Get recommendations
    recommendations: () => {
        if (window.paletteSwitcher) {
            return window.paletteSwitcher.getPaletteRecommendations();
        }
    }
};