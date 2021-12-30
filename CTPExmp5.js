class PCData extends React.Component{
    state={
        Name:"Raju",
        Email:"raju@123gmail.com",
        Phone:4665656566,


    }
    render(){
        return <div>
           <h2>Name: {this.state.Name}</h2>
           <h3>Email: {this.state.Email}</h3>
           <h2>Phone: {this.state.Phone}</h2>
            <Child action={this.getDataFPC.bind(this)}/>
        </div>
    }
    getDataFPC(childData){
        this.setState({
            Phone:childData
        })
    }
}
function Child(props){
    let data=7406295667;
    return <div>
        <button onClick={()=>{props.action(data)}}>Click</button>
    </div>
}
ReactDOM.render(<PCData />,document.getElementById('container'))

