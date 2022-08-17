// Function to handle deleting of items
async function deleteItem(event) {
    // Get the item's id by targetting the item_id
    const itemId = event.target.getAttribute('item_id');
console.log(itemId);
    const deleteItemRes = await fetch(`../api/items/${itemId}`, {
        method: 'DELETE'
    })

    // If delete success, refresh page to reflect changes
    if (deleteItemRes.ok) {
        document.location.reload();
    }
    // Else throw an error
    // else {
    //     alert('Failed to create a new item');
    //     console.log(deleteItemRes.statusText);
    // }  
}


async function addItem(event) {
    // Get the name of the item from the input
    const itemUrl = document.querySelector('#url').value;
    const itemName = document.querySelector('#name').value;
    const listID = window.location.href.split('/wishlist/')[1];

    // POST call to create an item
    const addItemRes = await  fetch(`../api/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            list_id: listID,
            url: itemUrl,
            name: itemName
        })        
    })
    
    // If add success, refresh page
    if (addItemRes.ok) {
        document.location.reload();
    } 
    // Else throw an error
    else {
        alert('Failed to create a new item');
        console.log(addItemRes.statusText);
    }
}

// Event listeners
// Creates a listener for each item's delete button
document.querySelectorAll('.btn-del').forEach(delBtn => {
    delBtn.addEventListener('click', deleteItem);
});

// Listener for the create button
document.querySelector('.btn-add').addEventListener('click', addItem);


// Function to add an item to a list
// CODE HERE


// Event listeners
// Creating an event listener for each item's delete button
// CODE HERE

// An event listener for the adding an item
// CODE HERE

