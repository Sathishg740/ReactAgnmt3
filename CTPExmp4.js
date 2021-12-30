class PCData extends React.Component{
    state={
        name:"Ronaldo",
        age:"20",
        Name:"Messi",
        Age:""

    }
    render(){
        return <div>
           <h2>{this.state.name}</h2>
           <h3>{this.state.age}</h3>
           <h2>{this.state.Name}</h2>
           <h3>{this.state.Age}</h3>
            <Child action={this.getDataFPC.bind(this)}/>
        </div>
    }
    getDataFPC(childData){
        this.setState({
            Age:childData
        })
    }
}
function Child(props){
    let data="30";
    return <div>
        <button onClick={()=>{props.action(data)}}>Click</button>
    </div>
}
ReactDOM.render(<PCData />,document.getElementById('container'))

