async function fetchData() {
    const data = JSON.parse(localStorage.getItem('appData') || {
        userOnline: {
            name: 'Guest ',
            role: 'Coach'
        }
    });
}