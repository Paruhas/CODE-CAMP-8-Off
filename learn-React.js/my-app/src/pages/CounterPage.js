import Counter from '../component/Counter'
import ExtraCounter from '../component/ExtraCounter'

import { useEffect, useState } from 'react'
import Button from '../component/Button';

function CounterPage() {


    // // ทดสอบ Unmount()
    // const [toggle, setToggle] = useState(true);
    
    
    // ทดสอบ useEffect()
    const [toggle, setToggle] = useState(true);
    
    // // แบบปกติ
    // return (
    //     <div>
    //         <h1>Counter page</h1>
    //         <ExtraCounter></ExtraCounter>

    //         {/* ทดสอบ Unmount() */}

    //         {/* {toggle && <ExtraCounter />}
    //         <button onClick={() => setToggle(!toggle)}>Toggle</button> */}
            

    //         {/* ทดสอบ useEffect() */}

    //         {toggle && <Counter />}
    //         <button onClick={() => setToggle(!toggle)}>Toggle</button>
    //     </div>
    // )

    
    // แบบเอา useState มาใช้ข้างนอก แล้ว props access ค่าเอา
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>Counter page</h1>
            {toggle && <Counter 
                counter={counter}
                setCounter={setCounter}
            />}
            <h1>Show Counter: {counter}</h1>
            <Button onClick={() => setToggle(!toggle)}>Toggle</Button>
        </div>
    )
}

export default CounterPage