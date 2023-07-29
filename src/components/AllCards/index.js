import { useState } from 'react'
import Card from '../EachCard'
import './index.css'

const imagesArray = [
    { id: 1, img: 'https://cdn-icons-png.flaticon.com/128/1090/1090806.png', status: "" },
    { id: 1, img: 'https://cdn-icons-png.flaticon.com/128/1090/1090806.png', status: "" },
    { id: 2, img: 'https://cdn-icons-png.flaticon.com/128/892/892721.png', status: "" },
    { id: 2, img: 'https://cdn-icons-png.flaticon.com/128/892/892721.png', status: "" },
    { id: 3, img: 'https://cdn-icons-png.flaticon.com/128/892/892799.png', status: "" },
    { id: 3, img: 'https://cdn-icons-png.flaticon.com/128/892/892799.png', status: "" },
    { id: 4, img: 'https://cdn-icons-png.flaticon.com/128/1674/1674453.png', status: "" },
    { id: 4, img: 'https://cdn-icons-png.flaticon.com/128/1674/1674453.png', status: "" },
    { id: 5, img: 'https://cdn-icons-png.flaticon.com/128/6832/6832253.png', status: "" },
    { id: 5, img: 'https://cdn-icons-png.flaticon.com/128/6832/6832253.png', status: "" },
    { id: 6, img: 'https://cdn-icons-png.flaticon.com/128/2154/2154992.png', status: "" },
    { id: 6, img: 'https://cdn-icons-png.flaticon.com/128/2154/2154992.png', status: "" },
    
]

const AllCards = () => {
    const [cards, setCards] = useState(imagesArray.sort(() => Math.random() - 0.5))

    const [prevImg, setPrevImg] = useState(-1)

    const compareCards = currentImg => {
        if(cards[currentImg].id === cards[prevImg].id){
            cards[currentImg].status = "correct"
            cards[prevImg].status = "correct"
            setCards([...cards])
            setPrevImg(-1)
        }else{
            cards[currentImg].status = "wrong"
            cards[prevImg].status = "wrong"
            setCards([...cards])
            setTimeout(() => {
                cards[currentImg].status = ""
                cards[prevImg].status = ""
                setCards([...cards])
                setPrevImg(-1)
            }, 1000)
        }
    }

    const onClick = id => {
        if(prevImg === -1){
            cards[id].status = "active"
            setCards([...cards])
            setPrevImg(id)
        }else{
            compareCards(id)
        }
    }

    return (
        <div className="container">
            { cards.map((item, index) => (
                <Card key={index} item={item} id={index} onClick={onClick} />
            )) }
        </div>
    )
}

export default AllCards