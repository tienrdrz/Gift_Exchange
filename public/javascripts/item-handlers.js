// Function to handle deleting of items
async function deleteItem(event) {
    // Get the item's id by targetting the item_id
    const itemId = event.target.getAttribute('item_id');

    const deleteItemRes = await fetch(`api/exchanges/${itemId}`, {
        method: 'DELETE'
    })

    // If delete success, refresh page to reflect changes
    if (deleteItemRes.ok) {
        document.location.reload();
    }
    // Else throw an error
    else {
        alert('Failed to create a new exchange');
        console.log(deleteExchangeRes.statusText);
    }  
}

// Function to add an item to a list
// CODE HERE


// Event listeners
// Creating an event listener for each item's delete button
// CODE HERE

// An event listener for the adding an item
// CODE HERE

