import './index.css'

const EachCard = ({item, id, onClick}) => {
    
    const itemClass = item.status ? " active " + item.status : ""

    return (
        <div className={"card" + itemClass} onClick={() => onClick(id)}>
            <img src={item.img} alt="" />
        </div>
    )
}

export default EachCard