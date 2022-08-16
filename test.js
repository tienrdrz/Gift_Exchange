// {{!-- 



//     STEPS TO GET WISHLIST
//     - Get information from database
//         - GET request using user's id
//         - Parse wishlist got from get request
        
//         Creating the Card in jQuery
//         - Make a card element with -> <div> = <div></div>
//         - addClass('content-card d-flex justify-content-center')
    
//         - Make a anchor element with -> <a> = <a></a>
//         - addClass('card')
//         - attr('href', 'link to view a single wishlist')
//         - text(${title})
    
    
//         --}}
    
//                     <!-- CARD 2 -->
//                     <div class="content-card d-flex justify-content-center">
//                         <a href="wishlist/2" class="card">Wishlist Title</a>
//                         <button type="button" class="btn btn-del">Delete</button>
//                     </div>

var gettingWishlistData = function() {
    fetch('/api/wishlists/3', {
        method: 'GET',
        body: JSON.stringify({

        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => console.log(response))
    .catch(e => console.log(e));        
}

gettingWishlistData();