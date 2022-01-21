const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  const [Word, setWord] = useState('안녕하세요');
  const [Value, setValue] = useState('');
  const [Result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (Word[Word.length - 1] === Value[0]) {
      setResult('딩동댕');
      setWord(Value);
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{Word}</div>
      <form onSubmit={onSubmitForm}>
        <label id="label" htmlFor="wordInput">글자를 입력하세요</label>
        <input id="wordInput" className="wordInput" ref={inputRef} value={Value} onChange={onChangeInput} />
        <button>입력!</button>
      </form>
      <div>{Result}</div>
    </>
  );
}

module.exports = WordRelay;