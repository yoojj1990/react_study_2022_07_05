import { useState } from "react";

import './App.css';

function Hello({color, name}) {
  
  return (
    <div style={{color: color}}>
      저는 {name}입니다.
    </div>
  );
}

Hello.defaultProps = {
  name:"홍길동"
}

function Counter() {
  const [number, setNumber] = useState(0);
  const onPlus = () => {
    setNumber(number+1)
  }
  const onMinus = () => {
    setNumber(number-1)
  }
  
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    </div>
  );
}

function InputSample() {
  // const [text, setText] = useState(""); // 한개일떄
  const [inputs, setInputs] = useState({
    name: "홍길동", email: "hong@abc.com",
  });

  const {name, email} = inputs;

  const onReset = () => {
    setInputs({
      name : "",
      email: ""
    });
  }
  const onChangeInput = (inputT) => {
    const {value, name} = inputT.target;
    setInputs({
      ...inputs, // spread 문법, 기존의 inputs 의 내용을 복사
      [name] : value
    });
  }
  return (
    <div>
      이름 : <input name="name" value={name} onChange={onChangeInput}></input><br></br>
      이메일 : <input name="email" value={email} onChange={onChangeInput}></input><br></br>
      <button onClick={onReset}>초기화</button>
      <div>
        <h1>이름 : {name}</h1>
        <h1>이메일 : {email}</h1>
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="App">
     {/* <Hello name="리엑트" color="red"></Hello>
     <Hello color="blue"></Hello> 
     <Counter></Counter>*/}
     <InputSample></InputSample>
    </div>
  );
}

export default App;
