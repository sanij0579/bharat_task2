const projectList = document.getElementById('projectList');
const taskList = document.getElementById('taskList');

// Sample data (you would typically load this from a server)
const projectsData = [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
];

const tasksData = [
    { id: 1, projectId: 1, name: 'Task 1 for Project A' },
    { id: 2, projectId: 1, name: 'Task 2 for Project A' },
    { id: 3, projectId: 2, name: 'Task 1 for Project B' },
];

// Function to render projects
function renderProjects() {
    projectList.innerHTML = '';
    projectsData.forEach(project => {
        const projectItem = document.createElement('li');
        projectItem.textContent = project.name;
        projectList.appendChild(projectItem);
    });
}

// Function to render tasks
function renderTasks(projectId) {
    taskList.innerHTML = '';
    const tasksForProject = tasksData.filter(task => task.projectId === projectId);
    tasksForProject.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.name;
        taskList.appendChild(taskItem);
    });
}

// Initial rendering
renderProjects();
renderTasks(1); // Show tasks for the first project by default