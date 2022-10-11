const ListItem = ({name, quanity, index, basket, setBasket}) => {

    const DeleteItem = () => {
        const newBasket = [...basket];
        newBasket.splice(index, 1);
        setBasket(newBasket);
    }

    const DupeItem = () => {
        const newBasket = [...basket];
        newBasket[index].quanity+=1;
        setBasket(newBasket);
    }

    return(
    <p>{name}, {quanity} 
        <button onClick={DupeItem}>+1</button>
        <button onClick={DeleteItem}>X</button>
    </p>)

}

export default ListItem;