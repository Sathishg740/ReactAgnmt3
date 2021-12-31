function Todo(){
    const [state, setState] = React.useState("")
    const [newList, setList] = React.useState([])

    let TodoEvent = (event)=>{
        console.log(event.target.value)
        setState(event.target.value)
    }
    let Add = (event)=>{
        console.log(state)
        newList.push(state)
        console.log(newList)
        event.preventDefault();
        setState("")
    }
    let Delete = (index)=>{
        let indexOfItem = index
        newList.splice(indexOfItem,1)
        setList([...newList])
    }

    return <div className="div">
        <div className="item">
        <input type="text" value={state} onChange={(event)=>{TodoEvent(event)}} />
        <button onClick={Add}>Add List</button>
        </div>
        <div >
            <ul className="ListItem">
        {newList.map((val,index)=>{
            return <li  key={val+index}>{val} <button onClick={()=>{Delete(index)}}>X</button></li>
            }
        )}
        </ul>
        </div>
    </div>
}

ReactDOM.render(<Todo/>, document.getElementById("container"))