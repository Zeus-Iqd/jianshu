import { injectGlobal } from 'styled-components'
injectGlobal`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1542117397065'); /* IE9*/
  src: url('./iconfont.eot?t=1542117397065#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1542117397065') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1542117397065#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-spin:before { content: "\e851"; }

.icon-fangdajing:before { content: "\e614"; }

.icon-Aa:before { content: "\e636"; }

.icon-icon-test:before { content: "\e625"; }
`
