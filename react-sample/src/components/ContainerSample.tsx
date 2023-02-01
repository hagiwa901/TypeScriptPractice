import React from 'react'

type ContainerProps = {
    title: string
    children: React.ReactNode
}

// Containerは赤背景のボックスの中にタイトルと小要素を表示
const Container=(props: ContainerProps): JSX.Element => {
    const { title, children } = props

    return (
        <div style={{ background: 'red' }}>
            <span>{title}</span>
            {/* propsのchildrenを埋め込むと、このコンポーネントの開始タグと閉じタグで囲んだ要素を表示 */}
            <div>{children}</div>
        </div>
    )
}

const Parent = (): JSX.Element => {
    return (
        <Container title="Hello">
            <p>ここの部分が背景色で囲まれる</p>
        </Container>
    )
}

export default Parent