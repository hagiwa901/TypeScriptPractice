import React from 'react'

// 名前を入力するためのテキストボックスを返す
const Name = () => {
    // input要素のonchangeイベントに対するコールバック関数を定義
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 入力されたテキストをコンソールに表示
        console.log(e.target.value)
    }

    return (
        // styleオブジェクトのキーはキャメルケースになる
        <div style={{padding: '16px', backgroundColor: 'gray'}}>
            { /* forの代わりにhtmlFowを利用 */}
            <label htmlFor="name">名前</label>
            { /* classやonchangeの代わりに、classNameやonChangeを使う */ }
            <input id="name" className='input-name' type="text" onChange={onChange} />
        </div>
    )
}

export default Name
