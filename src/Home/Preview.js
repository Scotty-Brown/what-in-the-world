
import './Preview.css'
import PreviewCard from './PreviewCard'
import PropTypes from 'prop-types'

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

Preview.propTypes = {
    homePreview: PropTypes.arrayOf(
      PropTypes.shape({
        ccn3: PropTypes.string.isRequired,
        flags: PropTypes.shape({
          alt: PropTypes.string.isRequired
        }).isRequired,
        name: PropTypes.shape({
          common: PropTypes.string.isRequired,
          nativeName: PropTypes.shape({
            official: PropTypes.string
          }),
          official: PropTypes.string.isRequired
        })
      })
    ).isRequired
  }