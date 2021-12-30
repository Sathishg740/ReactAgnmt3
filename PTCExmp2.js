function PC(props){
    
    return <div>
        <h1>I Love</h1>
    <C1 val={props.data}/>
    </div>   
}

function C1(props){
    return <div>
       
        <h1>Mother {props.val}</h1>
        
    </div>
}

ReactDOM.render(<PC data="India" />,document.getElementById('container'))