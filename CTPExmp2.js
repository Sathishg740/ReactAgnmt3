class PCData extends React.Component{
    state={
       val:"Welcome to Home Page"
    }
    render(){
        return <div>
           <h2>{this.state.val}</h2>
            <Child action={this.getDataFPC.bind(this)}/>
        </div>
    }
    getDataFPC(childData){
        this.setState({
            name:childData
        })
    }
}
function Child(props){
    let data=<h1>{alert("I'm React")}</h1>;
    return <div>
        <button onClick={()=>{props.action(data)}}>Click</button>
    </div>
}
ReactDOM.render(<PCData />,document.getElementById('container'))

