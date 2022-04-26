// import React from 'react';
import React, { useState } from 'react';

const IterationSample = () => {
    // const names = ['눈사람', '얼음', '눈', '바람', '번개'];
    // const nameList = names.map((name, index) => <li key={index}>{ name }</li>);
    // return <ul>{nameList}</ul>;
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' }
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);        //새로운 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        if(inputText.length > 0){
            const nextName = names.concat({
                id: nextId,
                text: inputText
            });
            setNextId(nextId + 1);  // nextId 값에 1을 더해준다.
            setNames(nextName);     // names 값을 업데이트 한다.
            setInputText('')        // inputText를 공백 비워준다.
        } else alert('데이터를 입력해주세요!')
    }
    // input에 무언가 입력 후 Enter 누를 시 onClick 함수 호출하도록
    const onKeyUp = e => { if(e.key === 'Enter') onClick()};
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id) }>{name.text}</li>);

    return (
        <div>
            <input value={ inputText } onChange={ onChange } onKeyUp={ onKeyUp } />
            <button onClick={ onClick }>추가</button>
            <br />
            <ul>{ nameList }</ul>
        </div>
    );
}
 
export default IterationSample;