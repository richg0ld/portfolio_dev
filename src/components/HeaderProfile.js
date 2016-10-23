import React from 'react';

import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

const styles = {
    drawer:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%'
        // textAlign:'center',
        // paddingTop:150
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

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <Drawer
                    docked={false}
                    width={400}
                    open={this.props.open}
                    onRequestChange={this.props.toggleProfile}
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

export default Header;