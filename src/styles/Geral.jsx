import { createGlobalStyle } from "styled-components";

const Geral = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    @media (prefers-color-scheme: dark) {
        :root {
            color-scheme: light;
        }
    }

`

export default Geral;