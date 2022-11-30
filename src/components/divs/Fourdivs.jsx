import React,{useState} from 'react'
import './fourdivs.css'
const Fourdivs = () => {

    const [count,setCount] = useState(0)
    const [toggle,setToggle] = useState(false)

    const countHandler = () => {
        setCount(prevState=>prevState+1)
    }

    const toggleHandler = () => {
        setToggle(!toggle)
    }
  return (
    <div class="container text-center">
        <div class="row">
            <div class="col">
                <h1>{count}</h1>
                <button onClick={countHandler}>Click Me</button>
            </div>
            <div class="col">
                2 of 2
            </div>
        </div>
        <div class="row">
            <div class="col">
                1 of 2
            </div>
            <div class="col">
                <img src={toggle?"https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-1200-80.jpg" : "https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png"} alt="" />
                <button onClick={toggleHandler}>Toggle</button>
            </div>
        </div>
    </div>
  )
}
export default Fourdivs