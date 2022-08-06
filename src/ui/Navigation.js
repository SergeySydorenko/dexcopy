import Link from "../components/Link.js";
import Flex from "../components/Flex.js";
import Button from "../components/Button.js";
// const svgHouse = <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>;
const svgBookmark = <img className="svg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPxJREFUSEvtlbENwjAQRV86BqCgZAQGoIANGAEmgUwCo1BQULIBlBQUlBRIoC85KJic4hyJaLjGUWT/f//uvp3RcWQd42MRTIAloDUltkAOaH0Li+AIDFOQS3sEPk0leDQEL7Z/JGwpsAjOAWlgJPA1wSEAj9om2AN3YByAT0APuEW9cilQ86xp2pVIxe0i0EGVJi5L1T83gUhUlmJ09a2IR9lNcAH6wUhXYAZoouJpchPE0xM3vTUf1PnPraAO+K/gVaFV+Jobt627B/F9L2ev2/LBAtgYXdajVFbTSIGyFnjhWmuS5GapkapkAmVlZW0RVZ752aOfaqzafU9ruzQZCxst5gAAAABJRU5ErkJggg=="/>
const svgBook = <img className="svg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJxJREFUSEvtlcsNgDAMQx+bwCawCZsAk8AmMAqbgFwVUQlRyqecmksPieLEVeyMyJFF7s+vACNQejaagcHmayC/qC2UdzdYPqbL9H4KUAHTyUDboK8AfH+XAAzziaLLi0gUJYr2W3kqdq2Vdp+8H8SuB6TzX4SUVoob5GgyFk3aOCYj8+kcAzod6o5lCkhb6jVuFRJ3AEL6HWqiA6zF4ygZp4EGxAAAAABJRU5ErkJggg=="/>;
const svgUser = <img className="svg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAR5JREFUSEvtldENwjAMRK+bwCYwCTAJMAlsApvAJqAn5VBa4iatVIkPIvEBsf3ssx06LXy6hePrpwEXSWdJzzEVahXsJe0krVKQawq6kXRLwbdjkDHAUdKpkJ0hAABjQyXFEwFwfAQ+SHJIWdtmHVURAZAGjaMDgEqoArn8/cs+AljjVgB9uJeM50hEHEvySkEnS4Rf1GQ31ff0BMCkJtuYIMjFh0CeoLxH/M4Ucdfcg9oLApBJIwHvSHFcox7kmecwsqWZztpSUlFxJ4YAjBhPMqwdIN7ivF+9hg8BnutacN9TDRAOiVFJT6ocUFuu2k7YP4f2nmtn0Jp9qQrvxSfxvALeFU/EFEjzHpg+Jbhtw1e59n8wB9bz+QOqEr4Bq6VBGetK8tYAAAAASUVORK5CYII="/>;
const svgPin = <img className="svg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANVJREFUSEvVlcsNAjEMRN92Ap1AKVQCVAKdQCfQCWikWAI2tuPDgvAlh9gz/k0ysbBNC+MTEWyAPaAzsitwBHTOLCK4AavBCgW+rRI8WkDWxtAvCv4awWCX+vP86QyUedam7D5c0/8nkAakBZk3K2vRGrhXdCDwU1OxAgXQMxOjfCS0GYmXmZ6IQwvwwEWoRC7tPAO7zyyy0jMVG4nbyoxgVGTmN8PzCCoPnYF3H7yRFrxWkQprdAZea/6fwLYlWt236qszsO+z+z1WlFxdT9e/WkGZ+Aml5ygZRX6QywAAAABJRU5ErkJggg=="/>;
function Navigation(props){
    const defaultPadding = '0 0 0 5px';
    return(
        <Flex direction='column' padding='1% 0 0 2%' width='25%' height='100vh'>
            <Flex href="#" className="nav-main-title" justify='space-between' align='center' padding={defaultPadding}>
                <img src="https://mangadex.org/_nuxt/ddb5721c5458b5edc9d6782a5f107119.svg"/>
                <h2>MangaDex</h2>
                <Button onClick={()=>props.showNav(false)}>x</Button>
            </Flex>
            <Link padding={defaultPadding}>
                {/* {svgHouse} */}
                <h2>Home</h2>
            </Link>
            <h2 className='title'>
                {svgBookmark} 
                Follows
            </h2>
            <Link padding={defaultPadding}>Updates</Link>
            <Link padding={defaultPadding}>Library</Link>
            <Link padding={defaultPadding}>MDLists</Link>
            <Link padding={defaultPadding}>Followed Groups</Link>
            <Link padding={defaultPadding}>Reading History</Link>
            <h2 className='title'>
                {svgBook} 
                Titles
            </h2>
            <Link padding={defaultPadding}>Advanced Search</Link>
            <Link padding={defaultPadding}>Recently Added</Link>
            <Link padding={defaultPadding}>Latest Updates</Link>
            <Link padding={defaultPadding}>Random</Link>
            <h2 className='title'>
                {svgUser} 
                Community
            </h2>
            <Link padding={defaultPadding}>Groups</Link>
            <Link padding={defaultPadding}>Users</Link>
            <h2 className='title'>
                {svgPin} 
                Mangadex
            </h2>
            <Link padding={defaultPadding}>About Us</Link>
            <Link padding={defaultPadding} >Site Rules</Link>
            <Link padding={defaultPadding}>Announcements</Link>
            <Link padding={defaultPadding}>Merch Store</Link>
            <hr/>
            <h4>Powered by</h4>
            <Link padding={defaultPadding}>DDos-GUARd</Link>
            <Link padding={defaultPadding}>Path Network</Link>
            <Link padding={defaultPadding}>sdbx.moe</Link>
            <Link padding={defaultPadding}>Sibyl</Link>
            <Flex className="nav-main-socials">
                <Link href="https://discord.com/invite/mangadex" target="_blank" className='genericLink' padding={defaultPadding}>
                    {/* <img src="https://img.freepik.com/premium-vector/modern-badge-discord-icon_578229-169.jpg?w=2000"></img> */}
                </Link>
                <Link href="https://twitter.com/MangaDexRE" target="_blank" className='genericLink' padding={defaultPadding}>
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png"></img> */}
                </Link>
                <Link href="https://www.reddit.com/r/mangadex/" target="_blank" className='genericLink' padding={defaultPadding}>
                    {/* <img src="https://www.redditinc.com/assets/images/site/reddit-logo.png"></img> */}
                </Link>
                <Link href="https://web.telegram.org/" target="_blank" className='genericLink' padding={defaultPadding}>
                    {/* <img src='https://st3.depositphotos.com/4141023/14403/v/450/depositphotos_144034639-stock-illustration-paper-airplane-icons-vector.jpg'></img> */}
                </Link>
            </Flex>

            
        </Flex>

    );
}

export default Navigation;