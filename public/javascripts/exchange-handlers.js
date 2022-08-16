async function deleteExchange(event) {
    const exchangeId = event.target.getAttribute('exchange_id');

    fetch(`api/exchanges/${exchangeId}`, {
        method: 'DELETE'
    })
        // .then(document.location.replace('/exchanges'));    
}

// Event listeners
// Creates a listener for each exchange's delete button
document.querySelectorAll('.btn-del').forEach(delBtn => {
    delBtn.addEventListener('click', deleteExchange);
});

