function PC(props){
    let name="React"
    return <div>
        <h1>Welcome to , {name}</h1>
    <C1 n={props.version}/>
    </div>   
}

function C1(props){
    return <div>
       
        <h1>Version: {props.n}</h1>
        
    </div>
}

ReactDOM.render(<PC version="17.02" />,document.getElementById('container'))