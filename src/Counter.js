import React, { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     // state의 초기값 설정하기
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0,
  //     };
  //   }
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭 되었을 때 호출할 함수를 지정한다.
          onClick={() => {
            // //this.state를 사용하여 state에 새로운 값을 넣을 수 있다.
            // this.setState({ number: number + 1 });

            // this.setState((prevState) => {
            //   return { number: prevState.number + 1 };
            // });
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));

            this.setState({ number: number + 1 }, () => {
              console.log("방금 setState가 호출되었습니다.");
              console.log(this.state);
            });
          }}
        >
          + 1
        </button>
      </div>
    );
  }
}

export default Counter;
