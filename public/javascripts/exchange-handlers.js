async function deleteExchange(event) {
    // Get the exchange's id by targetting the exchange_id
    const exchangeId = event.target.getAttribute('exchange_id');

    const deleteExchangeRes = await fetch(`api/exchanges/${exchangeId}`, {
        method: 'DELETE'
    })

    // If delete success, refresh page to reflect changes
    if (deleteExchangeRes.ok) {
        document.location.reload();
    }
    // Else throw an error
    else {
        alert('Failed to delete a new exchange');
        console.log(deleteExchangeRes.statusText);
    }  
}

async function addExchange(event) {
    // Get the name of the exchange from the input
    const title = document.querySelector('#title').value;
    
    // POST call to create an exchange
    const addExchangeRes = await  fetch(`../api/exchanges`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title
        })        
    })
    
    // If add success, refresh page
    if (addExchangeRes.ok) {
        document.location.reload();
    } 
    // Else throw an error
    else {
        alert('Failed to create a new exchange');
        console.log(addExchangeRes.statusText);
    }
}

// Event listeners
// Creates a listener for each exchange's delete button
document.querySelectorAll('.btn-del').forEach(delBtn => {
    delBtn.addEventListener('click', deleteExchange);
});

// Listener for the create button
document.querySelector('.btn-add').addEventListener('click', addExchange);

