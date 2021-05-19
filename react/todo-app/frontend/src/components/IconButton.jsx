import If from "./If"

const IconButton = (props) => {
    return (
        <If test={!props.hide}>
            <button className={`btn btn-${props.styleBtn}`} onClick={props.onClick}>
                <i className={`fa fa-${props.icon}`}></i>
            </button>  
        </If>
    )
}

export default IconButton