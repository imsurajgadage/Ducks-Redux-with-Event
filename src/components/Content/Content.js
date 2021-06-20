import React from 'react'
import styles from './Content.module.css'
import {useSelector} from 'react-redux'

const Content = () => {

    // const timer = useSelector((state) => state.timer.currentTime)    
    const currentTime = useSelector(state => state.time.currentTime)
    return (
        <div className={styles.container}>
            <div>
            {
                        currentTime.map((item)=>(
                            <p>You Clicked at: {item.value}</p>
                        ))
            }
            </div>

    
        </div>
    )
}

export default Content


// const items = useSelector(state => state.items);

// return (
//   <ListGroup className="m-4" variant="flush">
//     {items.map((item, index) => {
//       return item.inBasket ? (
//         <InBasketItem item={item} index={index} />
//       ) : (
//         <InListItem item={item} index={index} />
//       );
//     })}
//   </ListGroup>
// );
// }