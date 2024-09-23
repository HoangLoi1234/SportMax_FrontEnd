import React, {useState, useEffect} from 'react'
import '../Responsive/Responsive.css'
import './NewCollections.css'
//import new_collections from '../Assets/new_collections';
import Item from '../Item/Item';

export const NewCollections = () => {

  const [new_collection, setNew_collection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data));
  },[])
  return (
    <div className='new-collections'>
      <h1 className='new-collections__header'>SẢN PHẨM MỚI</h1>
      <hr/>
      <div className="collections grid wide">
        <div className="row">
          {new_collection.map((item, i) => {
            return (
              <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default NewCollections;
