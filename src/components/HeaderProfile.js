import React from 'react';

import { connect } from 'react-redux';
import { toggleProfile } from '../actions';

import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';

const styles = {
    drawer:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding:'30px 0'
    },
    info:{
        marginTop:30,
        fontSize:14
    },
    infoTerm:{
        marginTop:15
    },
    infoDesc:{
        fontSize:16
    }
};

class HeaderProfile extends React.Component {
    render(){
        return (
            <div>
                <Drawer
                    docked={false}
                    width={300}
                    open={this.props.profileOpen}
                    onRequestChange={this.props.toggleProfile}
                    style={{overflow:'scroll'}}
                >
                    <div style={styles.drawer} >
                        <div style={{flex:1,textAlign:'center'}}>
                            <div>
                                <Avatar
                                    src={require('./../images/richg0ld.jpeg')}
                                    size={140}
                                />
                                <h2 style={{marginTop:10}}>Richg0ld ( 김 정현 )</h2>
                            </div>
                            <p style={{textAlign:'left',padding:'20px 40px',fontSize:14}}>
                                웹상의 프론트와 그래픽 기술을 지향하는 김정현입니다. <br />
                                전직 웹디자이너, 웹퍼블리셔이며, 현재는 UI개발자로 AngularJS를 이용한 웹어플리케이션 개발과 게임 프로모션 및 이벤트 페이지 UI와 canvas,jquery를 이용한 그래픽 애니메이션 작업을 하고 있습니다.
                            </p>
                            <dl style={styles.info}>
                                <dt style={styles.infoTerm}>phone</dt>
                                <dd style={styles.infoDesc}>+8210-2902-9552</dd>
                                <dt style={styles.infoTerm}>email</dt>
                                <dd style={styles.infoDesc}>
                                    <a href="mailto:corosk@gmail.com">corosk@gmail.com</a>
                                </dd>
                                <dt style={styles.infoTerm}>git</dt>
                                <dd style={styles.infoDesc}>
                                    <a href="http://github.com/richg0ld" target="blank">https://github.com/richg0ld</a>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }
}

HeaderProfile.propTypes = {
    profileOpen: React.PropTypes.bool,
    toggleProfile: React.PropTypes.func
};

HeaderProfile.defaultProps = {
    profileOpen: false,
    toggleProfile: () => console.error('Not working toggleProfile')
};

let mapStateToProps = state => {
    return {
        profileOpen: state.pageControl.profileOpen
    }
};

let mapDispatchToProps = dispatch => {
    return {
        toggleProfile: () => dispatch(toggleProfile())
    }
};

HeaderProfile = connect(mapStateToProps,mapDispatchToProps)(HeaderProfile);

export default HeaderProfile;