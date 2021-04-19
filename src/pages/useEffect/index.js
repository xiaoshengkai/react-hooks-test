import { useState, useEffect } from 'react'

function UseEffectDemo () {
    const [ count, setCount ] = useState(0)

    // 相当于 componentDidMount，componentDidUpdate和componentWillUnmount
    useEffect(() => {
        console.log('f1', count)
    })

    // 相当于 componentDidMount
    useEffect(() => {
        console.log('f2', count)
    }, [])

    // 解绑数据
    useEffect(() => {
        console.log('插入数据', count)
        localStorage.setItem('count', count)

        // 每次状态值变化时，会先执行当前函数，执行过程如下
        // count:0
        // 插入数据 0
        // count: 1
        // 清楚数据
        // 插入数据 1
        return () => {
            console.log('清楚数据')
            localStorage.removeItem('count')
        }
    })

    // 优针对自己所创建状态值进行优化
    const [count1, setCount1] = useState(1)
    useEffect(() => {
        console.log('f3', count1)
    }, [count1])

    function add () {
        setCount(count + 1)
    }

    return <div>
        <h3>{ count }</h3>
        <div>
            <button onClick={ add }>add</button>
        </div>
    </div>
}

export default () => <div>
    <h1>useEffect</h1>
    <UseEffectDemo></UseEffectDemo>
</div>