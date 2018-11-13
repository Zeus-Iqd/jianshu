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
    const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChange } = this.props
    const pageList = []
    const jsList = list.toJS()
    if (jsList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (jsList[i]) {
          pageList.push(
            <SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>
          )
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
          <SearchInfoSwitch onClick={() => { handleChange(page, totalPage, this.spinIcon) }}>
              <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {pageList}
          </div>
        </SearchInfo>
      )
    }
  }
  render() {
    const { focused, handleFocus, handleBlur, list } = this.props
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
              <NavSearch onFocus={() => { handleFocus(list) }} onBlur={handleBlur} className={focused ? 'focused' : ''}></NavSearch>
            </CSSTransition>
            <i className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe614;</i>
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
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus(list) {
      if (list.size === 0) {
        dispatch(createActions.getList())
      }
      dispatch(createActions.searchFoucusAction())
    },
    handleBlur() {
      dispatch(createActions.searchBlurAction())
    },
    handleMouseEnter() {
      dispatch(createActions.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(createActions.mouseLeave())
    },
    handleChange(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/g, '')
      console.log(originAngle)
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      if (page < totalPage) {
        dispatch(createActions.changePage(page + 1))
      } else {
        dispatch(createActions.changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)