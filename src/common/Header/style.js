import styled from 'styled-components'
import logoPic from '../../static/logo.png'


const HeaderWrapper = styled.div`
  width: 100%;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`

const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: cover;
`

const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`
const NavItem = styled.div`
height: 56px;
padding: 0 10px;
line-height: 56px;
font-size: 17px;
color: #333;
&.left {
  float: left;
}
&.right {
  float: right;
  color: #969696;
}
&.active {
  color: #ea6f5a;
}
`
const SearchWrapper = styled.div`
  float: left;
  position: relative;

  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
  }
`
const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
box-sizing: border-box;
width: 160px;
height: 38px;
margin-top: 9px;
margin-left: 20px;
color: #666;
padding: 0 35px 0 20px;
border: none;
outline: none;
border-radius: 19px;
background-color: #eee;
font-size: 14px;
&.slide-enter, &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit-active {
    width: 160px;
  }
&::placeholder {
  color: #999;
}
&.focused {
  width: 240px;
  & + .iconfont{
    color: #fff;
    background: #777;
  }
}
`
const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`
const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ec6149;
    background-color: #fff;
  }
  &.writting {
    color: #fff;
    background-color: #ec6149;
    .iconfont{
      margin-right: 6px;
      vertical-align: middle;
    }
  }
`

export {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
}