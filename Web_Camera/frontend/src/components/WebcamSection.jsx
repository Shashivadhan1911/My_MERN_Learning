import Webcam from 'react-webcam'
import './WebcamSection.css'

function WebcamSection({ webcamRef }) {
  return (
    <div className="webcam-section">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={350}
        className="webcam"
      />
    </div>
  )
}

export default WebcamSection
