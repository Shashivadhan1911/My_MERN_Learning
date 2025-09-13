import { useRef, useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import WebcamSection from './components/WebcamSection.jsx'
import Controls from './components/Controls.jsx'
import Preview from './components/Preview.jsx'
import Gallery from './components/Gallery.jsx'
import './App.css'

function App() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [storedImages, setStoredImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [currentView, setCurrentView] = useState('capture');

  const capture=()=>{
    const imgSrc = webcamRef.current.getScreenshot();
    setImage(imgSrc);
  };

  const uploadImg = async()=>{
    if(!image) return;

    setUploading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ image })
      });

      const data = await res.json();
      if(data.message === "Image uploaded successfully") {
        fetchStoredImages();
        setSuccess("Image uploaded successfully!");
      } else {
        setError(data.message || "Upload failed");
      }
    } catch (err) {
      setError("Upload failed: " + err.message);
    } finally {
      setUploading(false);
    }
  }

  const fetchStoredImages = async () => {
    setFetching(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:5000/images/data");
      if (!res.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await res.json();
      setStoredImages(data);
    } catch (error) {
      setError("Error fetching stored images: " + error.message);
    } finally {
      setFetching(false);
    }
  };

  const switchView = (view) => {
    setCurrentView(view);
    if (view === 'gallery') {
      fetchStoredImages();
    }
  };

  useEffect(() => {
    fetchStoredImages();
  }, []);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <>
      <div className="app-container">
        <Header currentView={currentView} onSwitchView={switchView} />
        {currentView === 'capture' && (
          <>
            <WebcamSection webcamRef={webcamRef} />
            <Controls onCapture={capture} onUpload={uploadImg} image={image} uploading={uploading} />
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            <Preview image={image} />
          </>
        )}
        {currentView === 'gallery' && <Gallery storedImages={storedImages} fetching={fetching} />}
      </div>
    </>
  )
}

export default App
