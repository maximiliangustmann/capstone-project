import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}
body {
    background: var(--gradient-black);
    margin: 0;
    padding: 0;
    
}

:root {
    
    --main-black: #00001d;
    --main-white: #f4f4f4;
    --main-red: #f13d3c;
    --main-green: #52c397;

    --gradient-black: linear-gradient(180deg, rgba(0,0,29,1), rgba(0,0,11,1));
    --gradient-white: linear-gradient(180deg, rgba(244, 244, 244, 1), rgba(181, 181, 181, 1));
    --gradient-red: linear-gradient(180deg, rgba(241, 61, 60, 1), rgba(121, 31, 30, 1));
    --gradient-green: linear-gradient(180deg, rgba(82, 195, 151, 1), rgba(41, 98, 76, 1));

    --shadow-red-30: 0 0 30px #f13d3c80;
    --shadow-red-50: 0 0 50px #f13d3c80;
    --shadow-red-review: 10px 10px 50px #f13d3c4d;
    --shadow-green: 0 0 30px #52c39780;
}


`
