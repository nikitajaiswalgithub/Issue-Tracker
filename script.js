// Dummy issue data for testing
const dummyData = [
    { id: 1, title: 'Bug in Login', description: 'Users cannot log in', priority: 'high', assignee: 'John Doe', attachment: 'log-issue.png' },
    { id: 2, title: 'Feature Request', description: 'Add dark mode to the app', priority: 'medium', assignee: 'Jane Doe', attachment: 'dark-mode-feature.png' },
    // Add more dummy issues as needed
];

// Function to create an issue
function createIssue() {
    // Fetch values from the form
    const title = document.getElementById('issue-title').value;
    const description = document.getElementById('issue-description').value;
    const priority = document.getElementById('priority').value;
    const assignee = document.getElementById('assignee').value;
    const attachment = document.getElementById('attachment').value;

    // Dummy ID (In a real app, you'd generate a unique ID)
    const id = dummyData.length + 1;

    // Create a new issue object
    const newIssue = { id, title, description, priority, assignee, attachment };

    // Add the new issue to the dummy data
    dummyData.push(newIssue);

    // Call a function to display issues (you'll need to implement this)
    displayIssues();

    // Clear the form fields
    document.getElementById('issue-title').value = '';
    document.getElementById('issue-description').value = '';
    document.getElementById('priority').value = 'low';
    document.getElementById('assignee').value = '';
    document.getElementById('attachment').value = '';
}

// Function to display issues
function displayIssues() {
    const issueListDiv = document.getElementById('issue-list');
    issueListDiv.innerHTML = '';

    dummyData.forEach(issue => {
        const issueDiv = document.createElement('div');
        issueDiv.innerHTML = `
            <h3>${issue.title}</h3>
            <p>${issue.description}</p>
            <p><strong>Priority:</strong> ${issue.priority}</p>
            <p><strong>Assignee:</strong> ${issue.assignee}</p>
            <p><strong>Attachment:</strong> ${issue.attachment}</p>
        `;
        issueListDiv.appendChild(issueDiv);
    });
}

// Initial display of issues
displayIssues();
