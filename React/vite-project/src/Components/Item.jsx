import './Item.css';


function Item(props){
    return(
        <h1 className="itemComp"> {props.itemName} {props.children} </h1>

    );
}

export default Item;