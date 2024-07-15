const CurrentTodo = ({todo}) => {
    return (
        <div  style={{color:'white', diplay:'flex', flexDirection:'column', justifyContent: 'start'}}>
            <h1>Current Todo</h1>
            <label>
                <textarea style={{color:'white', border:'none',backgroundColor:'#353A40'}} name="editTodo" rows={4} cols={40} />
            </label>
        </div>
    )
}

export default CurrentTodo;