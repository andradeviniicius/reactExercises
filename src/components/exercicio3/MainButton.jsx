export default function MainButton(props){
    function clickHandler(e){
        alert(e.target.innerText)
    }
    
    return (
        <button onClick={clickHandler}>
            {props.children}
        </button>
    )
}

 