async function deleteMember(event) {
    const exchangeId = window.location.href.split('/exchange/')[1];
    const exchangeMemberId = event.target.getAttribute('exchange_member_id');

    fetch(`../api/exchanges/${exchangeId}/del-member`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            exchange_member_id: exchangeMemberId
        })
    })
        .then(document.location.replace(`/exchange/${exchangeId}`));    
}

async function addMember(event) {
    // First checks if user in field exists in user table
    const username = document.querySelector('#member').value;
    fetch(`../api/users/exists`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username
        })
    })
        .then(response => {
            console.log(response.ok);
            if (!response.ok) {
                alert('User does not exist');
                return;
            } else {
                // Check if user is already in the exchange
                // MORE CODE
                return response.json();
            }
        })
        // If user exists, add user to exchange
        .then(data => {            
            const exchangeId = window.location.href.split('/exchange/')[1];
            fetch(`../api/exchanges/${exchangeId}/add-member`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id: data.id
                })
            })
            .then(document.location.replace(`/exchange/${exchangeId}`));   
        });
}

// Event listeners
// Creates a listener for each members's delete button
document.querySelectorAll('.btn-del').forEach(delBtn => {
    delBtn.addEventListener('click', deleteMember);
});

document.querySelector('.btn-add').addEventListener('click', addMember);

