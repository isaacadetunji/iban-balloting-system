// Player Interface Logic
if (document.getElementById('playerForm')) {
    const playerForm = document.getElementById('playerForm');
    const playerNameInput = document.getElementById('playerName');
    const resultDiv = document.getElementById('result');

    playerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = playerNameInput.value.trim();

        if (!name) {
            alert('Please enter a name.');
            return;
        }

        try {
            const response = await fetch('/api/players/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name }),
            });

            const data = await response.json();

            if (response.ok) {
                resultDiv.innerHTML = `
                    <p>${data.player.name} has been assigned to <strong>${data.player.team}</strong>.</p>
                `;
            } else {
                resultDiv.innerHTML = `
                    <p style="color: red;">${data.error}</p>
                `;
            }
        } catch (err) {
            console.error('Error:', err);
            resultDiv.innerHTML = `
                <p style="color: red;">An error occurred. Please try again later.</p>
            `;
        }

        playerNameInput.value = '';
    });
}

// Admin Dashboard Logic
if (document.getElementById('exportBtn')) {
    document.getElementById('exportBtn').addEventListener('click', () => {
        window.location.href = '/api/players/export';
    });
}

if (document.getElementById('resetBtn')) {
    document.getElementById('resetBtn').addEventListener('click', async () => {
        const response = await fetch('/admin/reset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Balloting reset successfully!');
        } else {
            alert('Error resetting balloting.');
        }
    });
}

// Admin Login Logic
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }

        try {
            const response = await fetch('/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                window.location.href = '/admin/dashboard';
            } else {
                alert('Invalid credentials.');
            }
        } catch (err) {
            console.error('Error:', err);
            alert('An error occurred. Please try again later.');
        }
    });
}
