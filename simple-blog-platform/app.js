// app.js
// Common JavaScript for all pages

// Navigation and footer injection
document.addEventListener("DOMContentLoaded", () => {
  // Inject navigation
  const navPlaceholder = document.getElementById("nav-placeholder");
 
  navPlaceholder.innerHTML = `
        <nav class="navbar">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="create.html">New Post</a></li>
            </ul>
        </nav>
`;
  // Inject footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  footerPlaceholder.innerHTML = `
        <footer class="footer">
            <p>&copy; 2023 Simple Blog. All rights reserved.</p>
        </footer>
    `;
});

// Update the posts initialization in app.js
let posts = JSON.parse(localStorage.getItem('posts')) || [
    {
        id: 1,
        title: 'First Blog Post',
        author: 'Admin',
        date: 'October 1, 2023',
        content: 'This is the content of the first blog post...',
        excerpt: 'This is the excerpt of the first blog post...'
    },
    {
        id: 2,
        title: 'Second Blog Post',
        author: 'Admin',
        date: 'October 5, 2023',
        content: 'This is the content of the second blog post...',
        excerpt: 'This is the excerpt of the second blog post...'
    }
];

// Update the loadPosts function to include author
function loadPosts() {
    const postsContainer = document.getElementById('posts');
    if (postsContainer) {
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.className = 'post-card fade-in';
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <small>By ${post.author} | ${post.date}</small>
                <p>${post.excerpt}</p>
                <a href="post.html?id=${post.id}" class="btn">Read More</a>
            `;
            postsContainer.appendChild(postElement);
        });
    }
}

// Function to load single post
// Update the loadPost function in app.js
function loadPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const post = posts.find(p => p.id === postId);
    
    if (post) {
        document.title = post.title;
        const container = document.querySelector('.container');
        container.innerHTML = `
            <article class="post-card slide-in">
                <h2>${post.title}</h2>
                <small>By ${post.author} | ${post.date}</small>
                <p>${post.content}</p>
                <a href="index.html" class="btn">Back to Home</a>
            </article>
        `;
    } else {
        window.location.href = 'index.html';
    }
}