tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
            DEFAULT: '#0066CC',
            light: '#3385D6',
            dark: '#004C99'
        },
        secondary: '#00CC99',
        dark: {
            DEFAULT: '#1A1A2E',
            light: '#4A4A6A',
            lighter: '#71718A'
        },
        light: {
            DEFAULT: '#F5F7FA',
            dark: '#E0E0E0',
            white: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1400px',
        }
      }
    },
  }
}