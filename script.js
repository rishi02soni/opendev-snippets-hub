fetch('/data/snippets.json')
  .then(res => res.json())
  .then(snippets => {
    snippets.forEach(snippet => {
      document.getElementById('snippets').innerHTML += `
        <div class="snippet">
          <h3>${snippet.title}</h3>
          <pre>${snippet.code}</pre>
        </div>
      `;
    });
  });

// leaderboard
fetch('/data/contributors.json')
  .then(res => res.json())
  .then(data => {
    let sorted = data.sort((a, b) => b.contributions - a.contributions);

    sorted.forEach(user => {
      document.getElementById('leaderboard').innerHTML += `
        <li>${user.name} - ${user.contributions}</li>
      `;
    });
  });
