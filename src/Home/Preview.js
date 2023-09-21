
import './Preview.css'
import PreviewCard from './PreviewCard'

function Preview({homePreview}) {
    const previewCardContainer = homePreview && homePreview.map(country => {
       return <PreviewCard
            key={country.ccn3}
            name={country.name.common}
            flag={country.flags.png}
            id={country.ccn3}
            alt={country.flags.alt}
        />
    })

    return (
        <div className='preview-card-container'>{previewCardContainer}</div>
    )

}

export default Preview