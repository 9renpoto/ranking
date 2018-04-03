import { injectGlobal } from 'styled-components'

export default injectGlobal`
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', sans-serif;
  line-height: 1;
  color: #333333;
  margin: 0;
}

ul, ol {
  list-style: none;
}

h1, h3, h4, h5, h6, p, ol, ul, dl, dt, dd, figure ,button {
  margin: 0;
  padding: 0;
}

button {
  background-color: transparent;
  border: none;
  outline: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

input, textarea {
  border: none;
  outline: none;
  font-size: 1rem;
}

::-webkit-input-placeholder {
  color: #ccc;
}

img {
  max-width: 100%;
  vertical-align: top;
}

a,
a:hover,
a:focus {
  color: #475876;
  text-decoration: none;
}
`
