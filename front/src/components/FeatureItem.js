function FeatureItem(props) {
    return (
        <div class="feature-item">
            <img src={props.imgSrc} alt={props.imgAlt} class="feature-icon" />
            <h3 class="feature-item-title">{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}
export default FeatureItem;