import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import QueueAnim from 'rc-queue-anim'
import NavLinkBar from '../navlink/navlink'
import Boss from '../boss/boss'
import Genius from '../genius/genius'
import User from '../user/user'
import Msg from '../msg/msg'
import { getMsgList, receiveMsg } from '../../redux/chat.redux'

@connect(
    state => state,
    { getMsgList, receiveMsg }
)

class Dashboard extends React.Component {
    componentDidMount() {
        if (!this.props.chat.chatmsg.length) {
            this.props.getMsgList()
            this.props.receiveMsg()
        }
    }

    render() {
        const user = this.props.user
        const {pathname} = this.props.location
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                component: Boss,
                hide: user.type === 'genius'
            },
            {
                path: '/genius',
                text: 'boss',
                icon: 'job',
                title: 'BOSS列表',
                component: Genius,
                hide: user.type === 'boss'
            },
            {
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg
            },
            {
                path: '/me',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: User
            }
        ]
        const page = navList.find(v => v.path === pathname)

        return page ?  (
            <div>
                <NavBar className='fixd-header' mode='dard'>
                    {navList.find(v => v.path === pathname).title}
                </NavBar>

                <div>
                    <QueueAnim type='scaleX' duration={800}>
                        <Route key={page.path} path={page.path} component={page.component}></Route>
                    </QueueAnim>
                </div>

                <NavLinkBar data={navList}></NavLinkBar>
            </div>

        ) : <Redirect to='/me'></Redirect>
    }
}

export default Dashboard
