import LinkStyled from "../ui/LinkStyled.js";
import Flex, {Accordeon} from "../ui/Flex.js";
import Button from "../ui/Button.js";
const svgBookmark = <img className="svg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPxJREFUSEvtlbENwjAQRV86BqCgZAQGoIANGAEmgUwCo1BQULIBlBQUlBRIoC85KJic4hyJaLjGUWT/f//uvp3RcWQd42MRTIAloDUltkAOaH0Li+AIDFOQS3sEPk0leDQEL7Z/JGwpsAjOAWlgJPA1wSEAj9om2AN3YByAT0APuEW9cilQ86xp2pVIxe0i0EGVJi5L1T83gUhUlmJ09a2IR9lNcAH6wUhXYAZoouJpchPE0xM3vTUf1PnPraAO+K/gVaFV+Jobt627B/F9L2ev2/LBAtgYXdajVFbTSIGyFnjhWmuS5GapkapkAmVlZW0RVZ752aOfaqzafU9ruzQZCxst5gAAAABJRU5ErkJggg=="/>
const svgBook = <img className="svg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJxJREFUSEvtlcsNgDAMQx+bwCawCZsAk8AmMAqbgFwVUQlRyqecmksPieLEVeyMyJFF7s+vACNQejaagcHmayC/qC2UdzdYPqbL9H4KUAHTyUDboK8AfH+XAAzziaLLi0gUJYr2W3kqdq2Vdp+8H8SuB6TzX4SUVoob5GgyFk3aOCYj8+kcAzod6o5lCkhb6jVuFRJ3AEL6HWqiA6zF4ygZp4EGxAAAAABJRU5ErkJggg=="/>;
const svgUser = <img className="svg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAR5JREFUSEvtldENwjAMRK+bwCYwCTAJMAlsApvAJqAn5VBa4iatVIkPIvEBsf3ssx06LXy6hePrpwEXSWdJzzEVahXsJe0krVKQawq6kXRLwbdjkDHAUdKpkJ0hAABjQyXFEwFwfAQ+SHJIWdtmHVURAZAGjaMDgEqoArn8/cs+AljjVgB9uJeM50hEHEvySkEnS4Rf1GQ31ff0BMCkJtuYIMjFh0CeoLxH/M4Ucdfcg9oLApBJIwHvSHFcox7kmecwsqWZztpSUlFxJ4YAjBhPMqwdIN7ivF+9hg8BnutacN9TDRAOiVFJT6ocUFuu2k7YP4f2nmtn0Jp9qQrvxSfxvALeFU/EFEjzHpg+Jbhtw1e59n8wB9bz+QOqEr4Bq6VBGetK8tYAAAAASUVORK5CYII="/>;
const svgPin = <img className="svg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANVJREFUSEvVlcsNAjEMRN92Ap1AKVQCVAKdQCfQCWikWAI2tuPDgvAlh9gz/k0ysbBNC+MTEWyAPaAzsitwBHTOLCK4AavBCgW+rRI8WkDWxtAvCv4awWCX+vP86QyUedam7D5c0/8nkAakBZk3K2vRGrhXdCDwU1OxAgXQMxOjfCS0GYmXmZ6IQwvwwEWoRC7tPAO7zyyy0jMVG4nbyoxgVGTmN8PzCCoPnYF3H7yRFrxWkQprdAZea/6fwLYlWt236qszsO+z+z1WlFxdT9e/WkGZ+Aml5ygZRX6QywAAAABJRU5ErkJggg=="/>;
function Navigation(props){
    const defaultPadding = '5px 0 5px 10px';
    return(
        <Accordeon direction='column' padding='1% 0 0 0' width='250px' height='100%' align='center' transform={props.transform} backgroundColor="#f5f5f5">
            <LinkStyled padding={defaultPadding} width='90%' backgroundcolor='rgb(255,127,80)' hoverbackgroundcolor='#CC5500' to='/'>
                {/* {svgHouse} */}
                <Flex color='white' justify='space-between'>
                    <h2>Home</h2>
                    <Button onClick={()=>props.showNav(false)} width='30px' height='30px' borderRadius='15px' margin='0 5px 0 0'>X</Button>
                </Flex>
            </LinkStyled>
            <Flex padding='0 0 0 5px' margin='10px 0 5px 0' width='90%'>
                {svgBookmark} 
                <h2>Search</h2>
            </Flex>
            <LinkStyled padding={defaultPadding} width='90%' to="advanced-search">
                Advanced Search
            </LinkStyled>
            <Flex margin='10px 0 5px 0' padding='0 0 0 5px' width='90%'> 
                {svgPin} 
                <h2>Info</h2>
            </Flex>
            <LinkStyled padding={defaultPadding} width='90%' to="advanced-search">About Site</LinkStyled>
            <Flex className="nav-main-socials" width='90%'>
                {/* <LinkStyled href="https://discord.com/invite/mangadex" target="_blank"  padding={defaultPadding}> */}
                    {/* <img src="https://img.freepik.com/premium-vector/modern-badge-discord-icon_578229-169.jpg?w=2000"></img> */}
                {/* </LinkStyled> */}
                {/* <LinkStyled href="https://twitter.com/MangaDexRE" target="_blank"  padding={defaultPadding}> */}
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png"></img> */}
                {/* </LinkStyled> */}
                {/* <LinkStyled href="https://www.reddit.com/r/mangadex/" target="_blank"  padding={defaultPadding}> */}
                    {/* <img src="https://www.redditinc.com/assets/images/site/reddit-logo.png"></img> */}
                {/* </LinkStyled> */}
                {/* <LinkStyled href="https://web.telegram.org/" target="_blank"  padding={defaultPadding}> */}
                    {/* <img src='https://st3.depositphotos.com/4141023/14403/v/450/depositphotos_144034639-stock-illustration-paper-airplane-icons-vector.jpg'></img> */}
                {/* </LinkStyled> */}
            </Flex>
        </Accordeon>

    );
}

export default Navigation;