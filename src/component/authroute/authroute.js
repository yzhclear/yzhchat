import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadData } from '../../redux/user.redux'

@withRouter

@connect(
    null,
    { loadData }
)
class AuthRoute extends React.Component {
    componentDidMount() {
        // 如果已经是登录页则直接返回
        const publiclist = ['/login', '/register']
        const pathname = this.props.location.pathname
        if (publiclist.indexOf(pathname) > -1) {
            return null
        }

        // 获取用户信息
        axios.get('/user/info')
            .then( res => {
                if (res.status === 200) {
                    if (res.data.code === 0) {
                        // 有登录信息
                        this.props.loadData(res.data.data)
                    }else {
                        this.props.history.push('/login')
                    }
                }
            })
    }

    render() {
        return null
    }
}

export default AuthRoute
