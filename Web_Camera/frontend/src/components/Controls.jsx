import './Controls.css'

function Controls({ onCapture, onUpload, image, uploading }) {
  return (
    <div className="controls-section">
      <div className="button-container">
        <button onClick={onCapture} className={`capture-btn ${!image ? 'pulse' : ''}`}>Capture</button>
        <button onClick={onUpload} disabled={!image || uploading} className="upload-btn">
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>
  )
}

export default Controls
