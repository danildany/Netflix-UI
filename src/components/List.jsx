import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import './List.scss'
import ListItem from './ListItem'

const List = () => {
    const [isMove, setIsMove] = useState(false)
    const [sliderNumber, setSliderNumber] = useState(0)
    const listRef = useRef();
    const handleclick = (direction)=>{
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === 'left' && sliderNumber > 0){
            setSliderNumber(sliderNumber-1)
            console.log(sliderNumber)
            sliderNumber === 1 ? setIsMove(false):setIsMove(true)
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
            listRef.current.style.transition= `all .5s ease`;
        }
        if(direction === 'right' && sliderNumber < 4){
            setIsMove(true)
            setSliderNumber(sliderNumber+1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
            listRef.current.style.transition= `all .5s ease`;
        }
    }
    return (
        <div className='list'>
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                {isMove && (
                  <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleclick('left')} />  
                )}
                <div className="container" ref={listRef}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleclick('right')} />
            </div>
        </div>
    )
}

export default List
