import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color:#3A3CE6;
    --secondary-color#00000099;
    --text-color: #333;
    --background-color: #f9f9f9;
    --header-height: 60px;
    --sidebar-width: 250px;
    --color-accent: #3A3CE6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-color);
    color: var(--text-color);
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  /* Additional styles for mobile */
  @media (max-width: 768px) {
    :root {
      --sidebar-width: 100%;
    }
  }
`;

export default GlobalStyles; 