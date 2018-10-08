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
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from './style'

class Header extends React.Component {

  getListArea() {
    const { focused, list } = this.props
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
          <SearchInfoSwitch>换一换</SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {list.map((e, index) => (
              <SearchInfoItem key={index}>{e}</SearchInfoItem>
            ))}
          </div>
        </SearchInfo>
      )
    }
  }
  render() {
    const { focused, handleFocus, handleBlur } = this.props
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
            {this.getListArea()}
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
}

const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    // 下面这种方法也可以
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus() {
      dispatch(createActions.getList())
      dispatch(createActions.searchFoucusAction())
    },
    handleBlur() {
      dispatch(createActions.searchBlurAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)