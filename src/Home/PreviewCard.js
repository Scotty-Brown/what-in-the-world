import './PreviewCard.css'

function PreviewCard({name, flag, id, alt}) {
    return (
        <div id={id} className="preview-card">
            <img alt={alt}  src={flag}></img>
            <p className='preview-card-name'>{name}</p>
        </div>
    )
}

export default PreviewCard