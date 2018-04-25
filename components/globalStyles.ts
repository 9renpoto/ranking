import { injectGlobal } from 'styled-components'

export default injectGlobal`
html {
  height: 100%;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', sans-serif;
  line-height: 1;
  color: #333333;
  height: 100%;
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

h1, h3, h4, h5, h6, p, ol, ul, dl, dt, dd, figure, button {
  margin: 0;
  padding: 0;
}

button {
  background-color: transparent;
  border: none;
  outline: none;
}

input {
  width: 100%;
  border: none;
  box-sizing: border-box;
  outline: none;
  padding: .5rem;
  font-size: 1rem;
}

textarea {
  width: 100%;
  border: 0.063rem solid #cccccc;
  resize: none;
  outline: none;
  padding: .5rem;
  box-sizing: border-box;
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

#__next {
  height: 100%;
}

#root {
  height: 100%;
}
`
