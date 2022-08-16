async function deleteExchange(event) {
    const exchangeId = event.target.getAttribute('exchange_id');

    fetch(`api/exchanges/${exchangeId}`, {
        method: 'DELETE'
    })
        .then(document.location.replace('/exchanges'));    
}

// document.querySelector('.btn-del').addEventListener('click', deleteExchange);
document.querySelectorAll('.btn-del').forEach(delBtn => {
    delBtn.addEventListener('click', deleteExchange);
});

