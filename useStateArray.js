function MyApp() {

    const [Mobiles, setBikes] = React.useState(['Samsung','Oppo','Redmi','vivo','Realme'])
    let remove = () => {
        let indexOfOppo = Mobiles.indexOf('Oppo')
        console.log(indexOfOppo)
        if (indexOfOppo >= 0) {
            Mobiles.splice(indexOfOppo,1)
            setBikes(
                [...Mobiles]
            )
        }
        else{
            return <div>{alert("Index was not found")}</div>
        }
    }
    return <div>
        {
            Mobiles.map((Mobile,idx) => {
                return <p key={idx+Mobile}><tr><th>{Mobile}</th></tr></p>
            })
        }
        <button onClick={remove}>Click</button>
    </div>
}
ReactDOM.render(<MyApp />, document.getElementById('container'))
