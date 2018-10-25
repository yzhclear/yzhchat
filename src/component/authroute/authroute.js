import React from 'react'
import axios from 'axios'
import { withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { loadData } from '../../redux/user.redux'

@withRouter
@connect(
    null,
    { loadData }
)
class AuthRoute extends React.Component {
    //
    componentDidMount() {
        // 如果已经是登录页
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
        // 是否登录
        // 现在的url地址
        // 用户身份的类型
        // 用户是否完善信息
    }

    render() {
        return null
    }
}

export default AuthRoute
