import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { createActions } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'
const Header = (props) => {
  const { focused, handleFocus, handleBlur } = props
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left">首页</NavItem>
        <NavItem className="left">下载APP</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={focused}
            classNames='slide'
            timeout={200}>
            <NavSearch onFocus={handleFocus} onBlur={handleBlur} className={focused ? 'focused' : ''}></NavSearch>
          </CSSTransition>
          <i className="iconfont">&#xe614;</i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <i className="iconfont">&#xe625;</i>
          <span>写文章</span>
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    // 下面这种方法也可以
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus() {
      dispatch(createActions.searchFoucusAction())
    },
    handleBlur() {
      dispatch(createActions.searchBlurAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)