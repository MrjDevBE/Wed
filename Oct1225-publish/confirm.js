function addConfirmationLink(){
    const confirmbtn = document.getElementById('confirm-btn');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    confirmbtn.href = `https://forms.gle/rA9EghBQx9gQBFjW6`;
}

addConfirmationLink();