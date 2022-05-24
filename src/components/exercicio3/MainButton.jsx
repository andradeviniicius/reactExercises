import { useRef } from "react"

export default function MainButton(props){
    const child = useRef()

    function clickHandler(){
        alert(child.current.innerText)
    }
    
    return (
        <button ref={child} onClick={clickHandler}>
            {props.children}
        </button>
    )
}

// useRef