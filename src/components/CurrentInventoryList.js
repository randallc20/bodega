import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function CurrentInventoryList({items, onAddItem, handleDelete}) {
    const cards = items.map((item) => (
        <InventoryItemCard 
            key={item.id} 
            item={item} 
            onItemClick={onAddItem} 
            onDelete={handleDelete}
            />
    ))

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {cards}
            </div>
        </div>
    );
}

export default CurrentInventoryList;