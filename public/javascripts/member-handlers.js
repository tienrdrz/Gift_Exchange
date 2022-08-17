async function deleteMember(event) {
    const exchangeId = window.location.href.split('/exchange/')[1];
    const exchangeMemberId = event.target.getAttribute('exchange_member_id');

    const deleteMemberRes = await fetch(`../api/exchanges/${exchangeId}/del-member`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            exchange_member_id: exchangeMemberId
        })
    })
    
    if (deleteMemberRes.ok) {
        (document.location.replace(`/exchange/${exchangeId}`));    
    }
    else {
        alert('Failed to delete member');
        console.log(deleteMemberRes.statusText);
    }    
}

async function addMember(event) {
    // First checks if user in field exists in user table
    const username = document.querySelector('#member').value;
    
    const userExistsRes = await fetch(`../api/users/exists`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username
        })
    });

    // If user exists proceed with adding of user
    if (userExistsRes.ok) {
        const userData = JSON.parse(await userExistsRes.text());
        
        // Get exchange 
        const exchangeId = window.location.href.split('/exchange/')[1];
        
        // Adds user
        const addMemberRes = await fetch(`../api/exchanges/${exchangeId}/add-member`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_id: userData.id
            })
        });

        // If add member is success, refresh page to reflect changes
        if (addMemberRes.ok) {
            document.location.reload();
        }
        // Else throw an error
        else {
            alert('Failed to add a new member');
            console.log(addMemberRes.statusText);
        }
    }
    // If user does not exist, throw an error
    else {
        alert('User does not exist');
        return;
    }
}

// Event listeners
// Creates a listener for each members's delete button
document.querySelectorAll('.btn-del').forEach(delBtn => {
    delBtn.addEventListener('click', deleteMember);
});

// A listener to monitor if the add memner button is clicked
document.querySelector('.btn-add').addEventListener('click', addMember);

