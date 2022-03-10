import React, { Component } from 'react';
import Try from './Try';

function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],  // 리액트에서 배열에 값을 넣을 때 push 를 사용하면 안된다. (불변성 : 기존 배열에 push 를 하면 리액트가 어떤 부분이 바뀐지 감지를 하지 못한다.)
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.value === this.state.answer.join('') ) {
      this.setState((prevState) => {
        return {
          result: '홈런!',
          tries: [...prevState.tries, { try: this.state.value, result: '홈런!' }], // 그래서 기존 배열을 ... 로 복사하고 새로운 것을 넣어준다.
        }
      });
      alert('게임을 다시 시작합니다.');
      this.setState({
        value: '',
        answer: getNumbers(),
        tries: [],
      });
    } else {
      const answerArray = this.state.value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) { // 10 번 이상 틀렸을 때
        this.stateState({
          result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')}였습니다.`,
        });
        alert('게임을 다시 시작합니다.');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          };
        };
        this.setState((prevState) => {
          return {
            tries: [...prevState.tries, { try: this.state.value, result: `${strike} 스트라이크, ${ball} 볼 입니다.`}],
            value: '',
          };
        });
      };
    };

    console.log(this.state.value);
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  // fruits = [
  //   { fruit: '사과', price: '1000원'}, 
  //   { fruit: '바나나', price: '4000원'}, 
  //   { fruit: '키위', price: '2000원'}, 
  //   { fruit: '포도', price: '6000원'}, 
  //   { fruit: '귤', price: '9000원'},
  //   { fruit: '귤', price: '7000원'},
  // ];

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v, i) => (
            <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
          ))}
        </ul>
      </>
    )
  }
}

export default NumberBaseball;