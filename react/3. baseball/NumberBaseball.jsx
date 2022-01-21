import React, { Component } from 'react';

function getNumbers() { // 숫자 4개를 무작위로 겹치지 않게 뽑는 함수

}

class NumberBaseball extends Component {
 state = {
   result: '',
   value: '',
   answer: getNumbers(),
   tries: [],
 };

 onSubmitForm = () => {
 };

 onChangeInput = () => {
 };

 render() {
   return (
     <>
      <h1>{this.state.result}</h1>
      <form onSubmit={this.onSubmitForm}>
        <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
      </form>
      <div>시도: {this.state.tries.length}</div>
      <ul>
        {[
          { fruit: '사과', price: '1000원'}, 
          { fruit: '바나나', price: '4000원'}, 
          { fruit: '키위', price: '2000원'}, 
          { fruit: '포도', price: '6000원'}, 
          { fruit: '귤', price: '9000원'},
          { fruit: '귤', price: '7000원'},
        ].map((v, i) => (
          <li key={v.fruit + v.price} ><b>{v.fruit}</b> - {v.price} - {i}</li>
        ))}
      </ul>
     </>
   )
 }
}

export default NumberBaseball;