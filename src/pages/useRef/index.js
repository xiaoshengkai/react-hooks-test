import { useState, useEffect } from 'react'

function UseRefDemo () {
    const [ count, setCount ] = useState(0)
    

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
    <h1>useRef</h1>
    <UseRefDemo></UseRefDemo>
</div>