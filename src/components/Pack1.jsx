function Packages(props) {
    return (
        <section className="packages">
            <h3 className="title">{props.title}</h3>
            <p>{props.description}</p>
            <hr />

            <ul className="grid">
                <li>
                    <i className="fa fa-compass fa-4x"></i>
                    <h4>{props.package1Title}</h4>
                    <p>{props.package1Description}</p>
                </li>
                <li>
                    <i className="fa fa-camera-retro fa-4x"></i>
                    <h4>{props.package2Title}</h4>
                    <p>{props.package2Description}</p>
                </li>
                <li>
                    <i className="fa fa-bicycle fa-4x"></i>
                    <h4>{props.package3Title}</h4>
                    <p>{props.package3Description}</p>
                </li>
                <li>
                    <i className="fa fa-flag-checkered fa-4x"></i>
                    <h4>{props.package4Title}</h4>
                    <p>{props.package4Description}</p>
                </li>
            </ul>
        </section>
    );
}
export default Packages;