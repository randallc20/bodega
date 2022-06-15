import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function ReorderInventoryList({items, onDeleteItem}) {
    const reorderList = items.map((item) => (
        <InventoryItemCard key={item.id} item={item} onItemClick={onDeleteItem}/>
    ))

    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {reorderList}
            </div>
        </div>
    );
}

export default ReorderInventoryList;