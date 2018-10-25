import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import { update } from '../../redux/user.redux'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'

@connect(
    state => state.user,
    { update }
)

class BossInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            company: '',
            money: '',
            desc: ''
        }
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    render() {
        const isRedirect = !(this.props.redirectTo === this.props.location.pathname)
        return (
            <div>
                {isRedirect ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <NavBar mode='mode'>BOSS信息完善页面</NavBar>
                <AvatarSelector
                    selectAvatar={(imgname) => {
                        this.setState({
                            avatar: imgname
                        })
                    }}>
                </AvatarSelector>
                <InputItem onChange={(v) => this.handleChange('title', v)}>招聘职位</InputItem>
                <InputItem onChange={(v) => this.handleChange('company', v)}>公司名称</InputItem>
                <InputItem onChange={(v) => this.handleChange('money', v)}>职位薪资</InputItem>
                <TextareaItem
                    onChange={(v) => this.handleChange('desc', v)}
                    title='职位要求'
                    rows={3}
                    autoHeight>
                </TextareaItem>
                <Button type='primary' onClick={() => {this.props.update(this.state)}}>保存</Button>
            </div>
        )
    }
}

export default BossInfo
