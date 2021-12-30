class CTP extends React.Component{
    state={
        Food:" Veg Biriyani"
    }
    render(){
        return <div>
            <h1>Food: {this.state.Food}</h1>
            <button onClick={()=>{this.change()}}>Change</button>
        </div>
    }
     change(){
        this.setState({
            Food:"Chiken Biriyani"
        },()=>{console.log(this.state.Food)})
    }
}

ReactDOM.render(<CTP />,document.getElementById('container'))