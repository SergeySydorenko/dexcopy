import './navigation.css';
function Navigation(){

    return(
        <nav className="nav-main">
            <a href="#" className="nav-main-title"><img src="https://mangadex.org/_nuxt/ddb5721c5458b5edc9d6782a5f107119.svg"/><h1>MangaDex</h1><button>x</button></a>
            <h2>Home</h2>
            <h2>Follows</h2>
            <a href="#">Updates</a>
            <a href="#">Library</a>
            <a href="#">MDLists</a>
            <a href="#">Followed Groups</a>
            <a href="#">Reading History</a>
            <h2>Titles</h2>
            <a href="#">Advanced Search</a>
            <a href="#">Recently Added</a>
            <a href="#">Latest Updates</a>
            <a href="#">Random</a>
            <h2>Community</h2>
            <a href="#">Groups</a>
            <a href="#">Users</a>
            <h2>Mangadex</h2>
            <a href="#">About Us</a>
            <a href="#">Site Rules</a>
            <a href="#">Announcements</a>
            <a href="#">Merch Store</a>
            <hr></hr>
            <h3>Powered by</h3>
            <a href="https://ddos-guard.net/en" target="_blank">DDos-GUARd</a>
            <a href="https://ddos-guard.net/en" target="_blank">Path Network</a>
            <a href="https://ddos-guard.net/en" target="_blank">sdbx.moe</a>
            <a href="https://ddos-guard.net/en" target="_blank">Sibyl</a>
            <div className="nav-main-socials">
                <a href="https://discord.com/invite/mangadex" target="_blank">
                    <img src="https://img.freepik.com/premium-vector/modern-badge-discord-icon_578229-169.jpg?w=2000"></img>
                </a>
                <a href="https://twitter.com/MangaDexRE" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png"></img></a>
                <a href="https://www.reddit.com/r/mangadex/" target="_blank"><img src="https://www.redditinc.com/assets/images/site/reddit-logo.png"></img></a>
                <a href="https://web.telegram.org/" target="_blank"><img src='https://st3.depositphotos.com/4141023/14403/v/450/depositphotos_144034639-stock-illustration-paper-airplane-icons-vector.jpg'></img></a>
            </div>

            
        </nav>

    );
}

export default Navigation;