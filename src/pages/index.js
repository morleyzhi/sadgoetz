import React from 'react'
import { injectGlobal } from 'styled-components'

import App from 'components/App'

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    background: #d3d1cd;
    font-family: 'IM Fell DW Pica SC', Georgia, Times New Roman, serif;
  }

  * {
    box-sizing: border-box;
  }
`

const IndexPage = () => <App />

export default IndexPage
