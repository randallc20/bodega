import React, {useState, useEffect} from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {
    const [items, setItems] = useState([])
    const [reorder, setReorder] = useState([])

    useEffect(() => {
        fetch("http://localhost:8001/inventory")
        .then((r) => r.json())
        .then(setItems);
    }, []);

    function handleAddItem(itemToAdd) {
        const reorderItem = reorder.find(
            (item) => item.id === itemToAdd.id
        )
        if(!reorderItem) {
            setReorder([...reorder, itemToAdd])
        }
    }

    function handleRemove(itemToRemove) {
        //console.log(itemToRemove)
        setReorder((reorder) =>
        reorder.filter((item) => item.id !== itemToRemove.id))
    }

    function handleDelete(id){
        const newItems = items.filter((item) => item.id !== id)
        setItems(newItems)
        const newReorderItems = reorder.filter((item) => item.id !== id)
        setReorder(newReorderItems)
    }

    return(
        <div className="container">
            <CurrentInventoryList items={items} onAddItem={handleAddItem} handleDelete={handleDelete}/>
            <ReorderInventoryList items={reorder} onDeleteItem={handleRemove}/>
        </div>
    );
}

export default InventoryManager;