import { useEffect, useRef } from "react";
import "@google/model-viewer";
import '../App.css';

function ModelViewer({ modelSrc, isPlaying, showDetailView, onLoad }) {
  const modelViewerRef = useRef(null);

  useEffect(() => {
    if (modelViewerRef.current) {
      if (isPlaying) {
        modelViewerRef.current.play();
      } else {
        modelViewerRef.current.pause();
      }
      // Call onLoad to pass the ref back to parent
      onLoad(modelViewerRef);
    }
  }, [isPlaying, showDetailView, onLoad]);

  return (
    <model-viewer
      ref={modelViewerRef}
      src={modelSrc}
      camera-controls
      auto-rotate={showDetailView} // Auto-rotate only in detail view
      className="model-viewer"
    />
  );
}

export default ModelViewer;