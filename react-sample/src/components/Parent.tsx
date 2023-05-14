import React, { memo, useState} from 'react'

type FizzProps = {
    isFizz: boolean
}

// Fizzは通常の関数コンポーネント
// isFizzがtrueの場合はFizzと表示し、それ以外は表示しない
// isFizzの変化に関わらず、親が再描画されるとFizzも再描画される
const Fizz = (props: FizzProps) => {
    const { isFizz } = props
    console.log(`Fizzが再描写されました, isFizz=${isFizz}`)
    return <span>{isFizz ? 'Fizz' : ''}</span>
}

type BuzzProps = {
    isBuzz: boolean
    // propsにonClickを追加
    onClick: () => void
}

// Buzzはメモ化した関数コンポーネント
// isBuzzはtrueの場合はBuzzと表示し、それ以外は何も表示しない
// 親コンポートが再描画されても、isBuzzが変化しない限りはBuzzは再描画しない
const Buzz = memo<BuzzProps>((props) => {
    const { isBuzz } = props
    console.log(`Buzzが再描写されました, isBuzz=${isBuzz}`)
    return (
        <span>
            {isBuzz ? 'Buzz' : ''}
        </span>
    )
})

// この形式でexportしたときはimport { Parent } from ... で読み込む
export const Parent = () => {
    const [count, setCount] = useState(1)
    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0

    // この関数はParentの再描画の度に作成される
    const onBuzzClick = () => {
        console.log(`Buzzがクリックされました isBuzz=${isBuzz}`)
    }

    console.log(`Parentが再描写されました, count=${count}`)
    return (
        <div>
            <button onClick={() => setCount((c) => c+1)}>+1</button>
            <p>{`現在のカウント： ${count}`}</p>
            <p>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} onClick={onBuzzClick}/>
            </p>
        </div>
    )

}

export default Parent
