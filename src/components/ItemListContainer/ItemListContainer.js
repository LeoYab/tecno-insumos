
const ItemListContainer = ({greeting}) => {

const date = new Date();
const hour = date.getHours();
let greetingTime; 

greetingTime = hour >= 6 && hour < 12 ? greetingTime = greeting.dia : (hour >= 12 && hour < 20 ? greetingTime = greeting.tarde : greetingTime = greeting.noche);

    return(

        <h2>{greetingTime}</h2> 
        
    )
}

export default ItemListContainer;