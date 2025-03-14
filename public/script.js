document.getElementById('playerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('playerName').value;

    const response = await fetch('/api/players/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
    });

    const data = await response.json();
    if (response.ok) {
        document.getElementById('result').innerHTML = `
            <p>${data.player.name} has been assigned to ${data.player.team}</p>
        `;
    } else {
        document.getElementById('result').innerHTML = `
            <p style="color: red;">${data.error}</p>
        `;
    }
});