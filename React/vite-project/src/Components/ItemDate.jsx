function ItemDate(props){
    const day = props.day;
    return(
        <span>{day} {props.Month} {props.Year}</span>
    );
}
export default ItemDate;