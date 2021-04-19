import { useState } from 'react'

function UseDemo ({ initialCount }) {
    const [count, setCount] = useState(initialCount)

    function add () {
        setCount(count+1)
    }

    return <div>
        <h3>{ count }</h3>
        <div>
            <button onClick={ add }>add</button>
        </div>
    </div>
}

function UseDemo1 ({ initialCount }) {
    const [count, setCount] = useState(() => 10 * initialCount)

    function add () {
        setCount(count+1)
    }

    return <div>
        <h3>{ count }</h3>
        <div>
            <button onClick={ add }>add</button>
        </div>
    </div>
}

// 复杂对象
function UseDemo2 ({ initialCount }) {
    const [data, setData] = useState({
        a: 1,
        b: 2,
        c: 3
    })

    function change () {
        setData({
            ...data,
            a: 2
        })
    }

    return <div>
        <h3>{Object.keys(data).map(ele => data[ele])}</h3>
        <div>
            <button onClick={ change }>复杂对象</button>
        </div>
    </div>
}

// 报错误
// let is = true
// function UseDemo2 ({ initialCount }) {
//     const [foo, setFoo] = useState(0)
//     if (is) {
//         const [foo1, setFoo1] = useState(1)
//         is = false
//     }
    
//     const [foo2, setFoo2] = useState(2)

//     return <div>
//        1
//     </div>
// }

export default () => (
    <div>
        <h1>useState 基础</h1>
        <UseDemo initialCount={1}></UseDemo>
        <h1>useState 惰性初始</h1>
        <UseDemo1 initialCount={1}></UseDemo1>
        <h1>useState 是按顺序来记忆（没法演示报错误）</h1>
        <UseDemo2></UseDemo2>
        {/* <UseDemo2></UseDemo2> */}
    </div>
)