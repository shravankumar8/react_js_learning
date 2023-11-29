function button({onClick,children}){
    return(<button onClick={onClick}>
        {children}
    </button>)
}   

function playbutton({moviename}){
    return (
        alert(moviename)
    )

}
function uploading(){}