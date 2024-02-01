function FeatureItem(props) {
    return (
        <div className="feature-item">
            <img src={props.imgSrc} alt={props.imgAlt} className="feature-icon" />
            <h3 className="feature-item-title">{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}
export default FeatureItem;