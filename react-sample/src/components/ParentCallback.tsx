import React, { useState, useCallback } from 'react'

type ButtonProps = {
    onClick: () => void
}

// DecrementButtonは通常の関数コンポーネントでボタンを表示する
const DecrementButton = (props: ButtonProps) => {
    const { onClick } = props

    console.log(`DecrementButtonが再描写されました`)

    return <button onClick={onClick}>Decrement</button>
}

// IncrementButtonは通常の関数コンポーネントでボタンを表示する
const IncrementButton = React.memo((props: ButtonProps) => {
    const { onClick } = props

    console.log(`IncrementButtonが再描写されました`)

    return <button onClick={onClick}>Increment</button>
})

// DoubleButtonは通常の関数コンポーネントでボタンを表示する
const DoubleButton = React.memo((props: ButtonProps) => {
    const { onClick } = props

    console.log(`DoubleButtonが再描写されました`)

    return <button onClick={onClick}>Double</button>
})

// この形式でexportしたときはimport { Parent } from ... で読み込む
export const Parent = () => {
    const [count, setCount] = useState(0)
    
    const decrement = () => {
        setCount((c) => c - 1)
    }

    const increment = () => {
        setCount((c) => c + 1)
    }

    const double = useCallback(() => {
        setCount((c) => c * 2)
    }, [])

    return (
        <div>
            <p>Count: {count}</p>
            {/* コンポーネントに関数を渡す */}
            <DecrementButton onClick={decrement} />
            {/* メモ化コンポーネントに関数を渡す */}
            <IncrementButton onClick={increment} />
            {/* メモ化コンポーネントにメモ化した関数を渡す */}
            <DoubleButton onClick={double} />
        </div>
    )

}

export default Parent
