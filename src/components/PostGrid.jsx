/* ======================================================
    Lab 7 - PostGrid.jsx starter    
====================================================== */

import PostCard from "./PostCard.jsx";

export default function PostGrid({ posts, onLike, onDislike }) {
    return (
        <div className="grid" id="posts">
            {posts.map((post) => (
                // TODO: 
                // - Render PostCard for each post
                // - Use key=post.id, post=post, onLike=onLike, onDislike=onDislike
                <PostCard
                    key={post.id}
                    post={post}
                    onLike={onLike}
                    onDislike={onDislike}
                />
            ))}
        </div>
    );
} 