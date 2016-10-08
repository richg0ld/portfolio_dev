import React from 'react';
import WorksInfo from './WorksInfo';
import WorksDetail from './WorksDetail';

export default class Works extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedKey: -1,
            keyword:'',
            worksData:[{
                    name:"sk텔링크 홈페이지 접근성 개선",
                    url:"http://www.sktelink.com/",
                    workingDate:{
                        start:201504,
                        finish:201504
                    }
                },{
                    name:"kt금호렌터카, 롯데렌터카로 리브랜딩",
                    url:"https://www.lotterentacar.net",
                    workingDate:{
                        start:201506,
                        finish:201507
                    }
                }
            ]
        };

        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.HandleClickWorkTitle = this. HandleClickWorkTitle.bind(this);
    }

    handleChangeSearch(e) {
        this.setState({
            keyword: e.target.value
        });
        console.log(e.target.value);
    }

    HandleClickWorkTitle(key){
        this.setState({
           selectedKey: key
        });
        console.log(key, "요거를 클릭했고만?")
    }

    render(){
        const mapToComponents = data => {
            data.sort();
            data = data.filter(work => {
                return work.name.toLowerCase().indexOf(this.state.keyword) > -1;
            });
            return data.map((work, i) => {
                return <WorksInfo
                    work={work}
                    key={i}
                    onClick={ () => this.HandleClickWorkTitle(i) }
                />
            });
        };
        return (
            <div>
                <h1>Works</h1>
                <input
                    type="text"
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChangeSearch}
                />
                <div>{mapToComponents(this.state.worksData)}</div>
                <WorksDetail
                    isSelected={this.state.selectedKey !== -1}
                    work={this.state.worksData[this.state.selectedKey]}
                />
            </div>
        );
    }
}