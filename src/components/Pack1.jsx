function PackageItem(props) {
    return (
        <li>
            <i className={props.iconClass}></i>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </li>
    );
}



export default PackageItem;