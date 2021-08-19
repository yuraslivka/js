function Header(props){
    return (
        <>
        <h1>{props.data.site_name}</h1>
        <Nav nav={props.data.nav}/>
        </>
    );
}

function Nav(props){
    let data = props.nav;
    const listItem = data.map(item => <li key={item.index}><a href={item.link}>{item.text}</a></li>);
    return(
        <nav>
            
                {listItem}
            
        </nav>
    );
}

export default Header;