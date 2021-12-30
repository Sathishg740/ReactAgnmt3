class PCData extends React.Component{
    state={
        name:"Virat"
    }
    render(){
        return <div>
           <h2>Name: {this.state.name}</h2>
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
    let data="Kohli";
    return <div>
        <button onClick={()=>{props.action(data)}}>Click</button>
    </div>
}
ReactDOM.render(<PCData />,document.getElementById('container'))

