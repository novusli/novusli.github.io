## Personal portfolio with ReactJS

### Using Vite
#### Dependent libraries
Need to install the libraries below:
##### Tailwind CSS alone with PostCSS
- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`
`-p` for generating a `postcss.config.js` file.

##### React Router
- `npm install react-router-dom`

##### React Icons
- `npm install -D react-icons`

##### React Tilt
- `npm install react-tilt`

##### React Vertical Timeline Component
- `npm install react-vertical-timeline-component`

##### Tailwind CSS Prettier Plugin
- `npm install -D prettier-plugin-tailwindcss`

##### Fonts
**Google Fonts** - `Source Sans Pro` (Regular 400, SemiBold 600, Bold 700)
Roboto font
- `@fontsouce/roboto` 


**index.css**
```ruby
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: url('./assets/fonts/SourceSansPro-Regular.ttf') format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  src: url('./assets/fonts/SourceSansPro-SemiBold.ttf') format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  src: url('./assets/fonts/SourceSansPro-Bold.ttf') format('truetype');
  font-display: swap;
}
```


##### VS Code Extensions
- Tailwind Shades - Tailwind CSS color palette generator.
- Tailwind CSS IntelliSense


#### Uninstalled

##### React ThreeJS
- `npm install @react-three/fiber @react-three/drei`

##### ThreeJS Geometry Utility Function
- `npm install maath`

##### Framer Motion
- `npm install framer-motion`