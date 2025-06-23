import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
				'mono': ['Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				blush: {
					50: '#fef7f7',
					100: '#fdedef',
					200: '#fad1d4',
					300: '#f5a6ab',
					400: '#ed6b73',
					500: '#e23d47',
				},
				lavender: {
					50: '#f8f7ff',
					100: '#f1efff',
					200: '#e6e2ff',
					300: '#d1cbff',
					400: '#b4a7ff',
					500: '#9580ff',
				},
				mint: {
					50: '#f0fdf8',
					100: '#dcfce8',
					200: '#bbf7d1',
					300: '#86efac',
					400: '#4ade80',
					500: '#22c55e',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'gentle-bounce': {
					'0%, 100%': {
						transform: 'translateY(0) scale(1)',
					},
					'50%': {
						transform: 'translateY(-8px) scale(1.05)',
					},
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)',
					},
					'50%': {
						transform: 'translateY(-10px)',
					},
				},
				'twinkle': {
					'0%, 100%': {
						opacity: '0.3',
						transform: 'scale(0.8)',
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.2)',
					},
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gentle-bounce': 'gentle-bounce 0.6s ease-in-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'twinkle': 'twinkle 2s ease-in-out infinite',
			},
			zIndex: {
				'-5': '-5',
				'-10': '-10',
				'-20': '-20',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
