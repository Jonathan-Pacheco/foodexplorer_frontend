import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  *::-webkit-scrollbar {
    width: .8rem;
  }
  
  *::-webkit-scrollbar-track-piece  {
    background-color:  ${({ theme }) => theme.COLORS.DARK_100};
  }
  
  *::-webkit-scrollbar-thumb:vertical {
    background-color:  ${({ theme }) => theme.COLORS.DARK_800};
  }

  @media (max-width: 600px) {
    *::-webkit-scrollbar {
    width: 0rem;
  }
  }
}

:root {
        font-size: 62.5%;
    }

body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    -webkit-font-smoothing: antialiased;  
}

a {
    text-decoration: none;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
    filter: brightness(0.8);
}
`;