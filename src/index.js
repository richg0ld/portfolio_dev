import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducerApp from './reducers';

import App from './components/App';
import './style.scss';


////////////////////////////
//// 일반 리덕스 테스트 ////
////////////////////////////
// import { createStore } from 'redux';
// //
// // Action
// //
// const INCREMENT = "INCREMENT"; //액션타입
//
// function increase(diff){ //액션함수
//     return { //
//         type: INCREMENT,
//         addBy: diff
//     }
// }
//
// //
// // Reducer
// //
// const initialState = {
//     value: 0
// };
//
// const counterReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case INCREMENT:
//             return Object.assign({}, state, {
//                 value: state.value + action.addBy
//             });
//         default:
//             return state;
//     }
// };
//
// //
// // Store
// //
// const store = createStore(counterReducer);
//
// //리덕스 테스트용 컴포넌트
// class Test extends React.Component {
//     constructor(props) {
//         super(props);
//         this.onClick = this.onClick.bind(this);
//     }
//
//     onClick() {
//         console.log(this.props.store);
//         this.props.store.dispatch(increase(1));
//     }
//
//     render() {
//
//         let centerStyle = {
//             position: 'fixed',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             WebkitUserSelect: 'none',
//             MozUserSelect: 'none',
//             MsUserSelect:'none',
//             userSelect: 'none',
//             cursor: 'pointer'
//         };
//
//         return (
//             <div
//                 onClick={ this.onClick }
//                 style={ centerStyle }
//             >
//
//                 <h1> {this.props.store.getState().value} </h1>
//             </div>
//         )
//     }
// }
//
// const render = () => {
//     const rootElement = document.getElementById('root');
//     ReactDOM.render(<Test store={store} />, rootElement);
//     // ReactDOM.render(<App />, rootElement);
// };
//
// store.subscribe(render);
// render();

//////////////////////////////
//// 리엑트 리덕스 테스트 ////
//////////////////////////////
// import { createStore } from 'redux';
// import { connect, Provider } from 'react-redux';
// import { increment, decrement, setDiff } from './actions';
// import counterApp from './reducers';
//
// //카운터 컴포넌트
// const Counter = (()=>{
//     class Counter extends React.Component {
//         render() {
//             return (
//                 <h1>VALUE: { this.props.value }</h1>
//             );
//         }
//     }
//     //상태 값을 받아 카운터의 값을 갖는 value 프로퍼티를 가진 객체를 리턴
//     let mapStateToProps = (state) => {
//         return {
//             value: state.counter.value
//         };
//     };
//
//     // # connect API (자세히..)
//     //
//     // connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
//     //
//     // connect는 react-redux 의 내장 API 입니다. 이 함수는 React Component 를 Redux Store에  ‘연결’ 해줍니다.
//     //
//     //     이 함수의 리턴값은 특정 컴포넌트 클래스의 props 를 store의 데이터에 연결시켜주는 또 다른 함수를 리턴합니다.
//     //
//     //     리턴된 함수에 컴포넌트를 인수로 넣어 실행하면, 기존 컴포넌트를 수정하는게 아니라 새로운 컴포넌트를 return 합니다.
//
//     //리덕스에 connect 메소드로 mapStateToProps를 넘긴 함수를 실행하여(실행하면 리덕스 스토어에 연결이 된다.) 얻은 함수에 컴포넌트를 인자로 넣어 다시 실행하면 가공된 컴포넌트를 얻을 수 있다.
//     return connect(mapStateToProps)(Counter);
// })();
//
//
// const Buttons = (()=>{
//     class Buttons extends React.Component {
//         render() {
//             return (
//                 <div>
//                     <button type="button"
//                             onClick={ this.props.onIncrement }>
//                         +
//                     </button>
//                     <button type="button"
//                             onClick={ this.props.onDecrement }>
//                         -
//                     </button>
//                 </div>
//             )
//         }
//     }
//
//
//     let mapDispatchToProps = (dispatch) => {
//         return {
//             onIncrement: () => dispatch(increment()),
//             onDecrement: () => dispatch(decrement())
//         }
//     };
//
//     return connect(undefined, mapDispatchToProps)(Buttons);
// })();
//
// const Option = (()=>{
//     class Option extends React.Component {
//         constructor(props) {
//             super(props);
//
//             this.state = {
//                 diff: '1'
//             };
//
//
//             this.onChangeDiff = this.onChangeDiff.bind(this);
//         }
//
//         render() {
//             return (
//                 <div>
//                     <input type="text" value={ this.state.diff } onChange={this.onChangeDiff} />
//                 </div>
//             );
//         }
//
//         onChangeDiff(e) {
//
//             if(isNaN(e.target.value))
//                 return;
//
//             this.setState({ diff: e.target.value });
//
//             if(e.target.value=='') {
//                 this.setState({ diff: '0' });
//             }
//
//             this.props.onUpdateDiff(parseInt(e.target.value));
//
//         }
//     }
//
//     let mapDispatchToProps = (dispatch) => {
//         return {
//             onUpdateDiff: (value) => dispatch(setDiff(value))
//         };
//     };
//
//     return connect(undefined, mapDispatchToProps)(Option);
// })();
//
// class Test extends React.Component {
//     render(){
//         return (
//             <div style={ {textAlign: 'center'} }>
//                 <Counter/>
//                 <Option/>
//                 <Buttons/>
//             </div>
//         );
//     }
// }
//
// const store = createStore(counterApp);
// const rootElement = document.getElementById('root');
// ReactDOM.render(
//     <Provider store = {store}>
//         <Test />
//     </Provider>,
//     rootElement
// );

///////////////////
//// 원래 버전 ////
///////////////////
const store = createStore(reducerApp);
const rootElement = document.getElementById('root');

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);