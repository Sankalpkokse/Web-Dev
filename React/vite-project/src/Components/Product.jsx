import Item from './Item';
import ItemDate from './ItemDate';
import './Product.css';
function Product(){
    let arr = [
        {
          itemName:"Nirma",
          day:"03",
          Month: "January",
          Year:"2003"
        },
        {
          itemName:"Surf Excel",
          day:"04",
          Month: "January",
          Year:"2003"
        },
        {
          itemName:"Arial",
          day:"05",
          Month: "January",
          Year:"2003"
        }
      ];
    return(
        <>
            <ItemDate className="itemDate" day = {arr[0].day} Month = {arr[0].Month} Year = {arr[0].Year}></ItemDate>
            <Item itemName = {arr[0].itemName}> I am the first Item</Item>

            <ItemDate className="itemDate" day = {arr[1].day} Month = {arr[1].Month} Year = {arr[1].Year}></ItemDate>
            <Item itemName = {arr[1].itemName}> I am second Item</Item>

            <ItemDate className="itemDate" day = {arr[2].day} Month = {arr[2].Month} Year = {arr[2].Year}></ItemDate>
            <Item itemName = {arr[2].itemName}></Item>
        </>
        )
    }
export default Product;