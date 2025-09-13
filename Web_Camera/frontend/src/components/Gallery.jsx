import './Gallery.css'

function Gallery({ storedImages, fetching }) {
  return (
    <div className="gallery-section">
      <h2 className="gallery-heading">Stored Photos</h2>
      {fetching ? (
        <div className="loading-container">
          <div className="loading"></div>
          <p>Loading images...</p>
        </div>
      ) : (
        <div className="gallery-grid">
          {storedImages.map((img) => (
            <div key={img._id} className="gallery-item">
              <img
                src={`data:${img.contentType};base64,${img.data}`}
                alt={img.filename}
                width={150}
                className="gallery-image"
              />
              <p>{img.filename}</p>
              <p>{new Date(img.uploadedAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Gallery
