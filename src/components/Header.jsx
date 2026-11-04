/* ======================================================
    Lab 7 - Header.jsx starter    
    
    TODO: Create the entire Header component. 
    
    Requirements:
        - Show the site title and a one-sentence description.
        - Show summary numbers: totalPosts, totalLikes, totalDislikes. 
====================================================== */

export default function Header({ totalPosts, totalLikes, totalDislikes }) {
    // TODO: Replace return null with your JSX 
    const siteTitle = "GridBlog";
    const siteDescription = "A place to share thoughts and ideas.";
    
    return (
        <header>
            <h1>{siteTitle}</h1>
            <p>{siteDescription}</p>
            <div className="summary">
                <span>Total Posts: {totalPosts}</span>
                <span> • </span>
                <span>Total Likes: {totalLikes}</span>
                <span> • </span>
                <span>Total Dislikes: {totalDislikes}</span>
            </div>
        </header>
    );
} 