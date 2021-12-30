function MyApp1(){

    const [Food, setFood]=React.useState({
        Food:"Veg Biriyani"
    })
    let updateFood=()=>{
        setFood({
            ...Food,
            Food:"Chiken Biriyani"
        })
        {alert("You want Chiken Biriyani")}
    }
    return <div>
        <h1>Food:{Food.Food} </h1>
        <button onClick={updateFood}>Click</button>
        
    </div>
}
ReactDOM.render(<MyApp1 />,document.getElementById('container'))