function Goods(props){
    return(
        <div className="goods-block">
            <img src={props.image} alt="" />
            <p>{props.title}</p>
            <p>{props.cost}</p>
            
            
        </div>
    );
    
}

export default Goods;