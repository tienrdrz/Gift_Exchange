// Function to handle deleting of items
async function deleteWishlist(event) {
    //Getting the wishlist ID by targetting wishlist_id
    const wishlistId = event.target.getAttribute('wishlist_id');
console.log(wishlistId);
    const deleteWishlist = await fetch(`api/wishlists/${wishlistId}`, {
        method: 'DELETE'
    })
    //If the delete is a success, refresh the page to remove list: 
    if (deleteWishlist.ok){
        document.location.reload(); 
    }
    //Throw an error if it fails:
    else {
        alert('Failed to delete Wishlist');
        console.log(deleteWishlist.statusText);
    }
}

// Function to create a new list
async function addWishlist(event) {
    //Get name of wishlist from input
const title = document.querySelector('#title').value;

    //POST a call to create wishlist
const addWishlistRes = await fetch(`/api/wishlists`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: title,
        })
    })

//If the add is a success, refresh the page to display:
if (addWishlistRes.ok){
    document.location.reload();
}
//Else, throw an error:
else {
    alert('Failed to create a new Wishlist');
    console.log(addWishlistRes.statusText);
}
}


////// Event listeners//////
// Creating an event listener for each list's delete button

('click', deleteWishlist);
document.querySelectorAll('.btn-del').forEach(delBtn => {
    delBtn.addEventListener('click', deleteWishlist);
});

// An event listener for creating a list
document.querySelector('.btn-add').addEventListener('click', addWishlist);