import { useState } from "react"


function Exercicio4() {
	const [counter,setCounter] = useState(0)

	return (
		<>
		 <div
        style={{
          display: "flex",
		  flexDirection:'column',
          alignItems: "center",
          justifyContent: "start",
          width: "100%",
          height: "100%",
        }}
      >
		  <p>You have clicked me {counter} times</p>
			<button onClick={()=>{setCounter(counter+1)}}>Click me</button>
	  </div>
		</>
	)
}

export default Exercicio4
