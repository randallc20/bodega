import React from 'react'

function InventoryItemCard({item, onItemClick, onDelete}) {
    const { id, image, name, price } = item;

    function handleClick() {
        onItemClick(item)
    }

    function handleDelete(){
        fetch(`http://localhost:8001/inventory/${id}`, {
            method: "DELETE",
    });
        onDelete(id)
    // console.log(id)
    }

    return(
        <div className="card" onClick={handleClick}>
            <img src={image} alt={name}></img>
            <h3>{name}</h3>
            <h4>{price}</h4>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;