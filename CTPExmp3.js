class PCData extends React.Component{
    state={
       Uname:"Sathish",
       Urole:""
    }
    render(){
        return <div>
           <h2>Name: {this.state.Uname}</h2>
           <h2>Role:{this.state.Urole}</h2>
            <Child action={this.getDataFPC.bind(this)}/>
        </div>
    }
    getDataFPC(childData){
        this.setState({
            Urole:childData
        })
    }
}
function Child(props){
    let data="Admin";
    return <div>
       
        <button onClick={()=>{props.action(data)}}>Click</button>
    </div>
}
ReactDOM.render(<PCData />,document.getElementById('container'))

