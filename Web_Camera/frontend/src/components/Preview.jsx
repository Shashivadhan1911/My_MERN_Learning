import './Preview.css'

function Preview({ image }) {
  if (!image) return null;

  return (
    <div className="preview-section">
      <h2 className="preview-heading">Preview</h2>
      <img src={image} alt="Capture" width={300} className="preview-image" />
    </div>
  )
}

export default Preview
