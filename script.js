// Load snippets
fetch('/data/snippets.json')
  .then(res => res.json())
  .then(snippets => {
    snippets.forEach((snippet, index) => {
      document.getElementById('snippets').innerHTML += `
        <div class="snippet">
          <h3>${snippet.title}</h3>
          <pre id="code-${index}">${snippet.code}</pre>
          <button onclick="copyCode(${index})">📋 Copy</button>
        </div>
      `;
    });
  });

// Copy function
function copyCode(id) {
  let text = document.getElementById(`code-${id}`).innerText;
  navigator.clipboard.writeText(text);
  alert("Copied 🚀");
}

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light");
}

// Load leaderboard
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
