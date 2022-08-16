async function deleteWishlist(event) {
    const wishlistId = event.target.getAttribute('wishlist_id');

    fetch(`api/wishlists/${wishlistId}`, {
        method: 'DELETE'
    })
        .then(document.location.replace('/wishlists'));    
}
('click', deleteWishlist);
document.querySelectorAll('.btn-del').forEach(delBtn => {
    delBtn.addEventListener('click', deleteWishlist);
});

