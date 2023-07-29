import './index.css'

function Card({item, id, onClick}){
    console.log(item.status)
    const itemClass = item.status ? " active " + item.status : ""

    return (
        <div className={"card" + itemClass} onClick={() => onClick(id)}>
            <img src={item.img} alt="" />
        </div>
    )
}

export default Card