import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import Tesseract from 'tesseract.js';
import { FiUpload, FiFile, FiEye, FiDownload, FiLoader } from 'react-icons/fi';

const OCRUploader = () => {
  const [files, setFiles] = useState([]);
  const [results, setResults] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('eng');

  const languages = [
    { code: 'eng', name: 'English' },
    { code: 'spa', name: 'Spanish' },
    { code: 'fra', name: 'French' },
    { code: 'deu', name: 'German' },
    { code: 'chi_sim', name: 'Chinese (Simplified)' },
    { code: 'jpn', name: 'Japanese' },
    { code: 'ara', name: 'Arabic' },
    { code: 'hin', name: 'Hindi' }
  ];

  const onDrop = useCallback((acceptedFiles) => {
    const newFiles = acceptedFiles.map(file => ({
      ...file,
      preview: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9)
    }));
    setFiles(prev => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.bmp', '.tiff'],
      'application/pdf': ['.pdf']
    },
    maxSize: 10 * 1024 * 1024 // 10MB
  });

  const processOCR = async (file) => {
    try {
      setIsProcessing(true);
      setProgress(0);

      const result = await Tesseract.recognize(
        file.preview,
        selectedLanguage,
        {
          logger: (m) => {
            if (m.status === 'recognizing text') {
              setProgress(m.progress * 100);
            }
          }
        }
      );

      setResults(prev => ({
        ...prev,
        [file.id]: {
          text: result.data.text,
          confidence: result.data.confidence,
          words: result.data.words,
          lines: result.data.lines
        }
      }));
    } catch (error) {
      console.error('OCR Error:', error);
      setResults(prev => ({
        ...prev,
        [file.id]: { error: 'Failed to process image' }
      }));
    } finally {
      setIsProcessing(false);
      setProgress(0);
    }
  };

  const removeFile = (fileId) => {
    setFiles(prev => prev.filter(file => file.id !== fileId));
    setResults(prev => {
      const newResults = { ...prev };
      delete newResults[fileId];
      return newResults;
    });
  };

  const downloadText = (fileId, text) => {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `ocr-result-${fileId}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Upload Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
            isDragActive
              ? 'border-honey-yellow bg-honey-yellow bg-opacity-10'
              : 'border-earthy-brown hover:border-honey-yellow hover:bg-honey-yellow hover:bg-opacity-5'
          }`}
        >
          <input {...getInputProps()} />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center space-y-4"
          >
            <FiUpload className="w-16 h-16 text-honey-yellow" />
            <div>
              <p className="text-xl font-semibold text-deep-brown mb-2">
                {isDragActive ? 'Drop files here' : 'Upload your documents'}
              </p>
              <p className="text-earthy-brown">
                Drag & drop images or PDFs, or click to browse
              </p>
              <p className="text-sm text-deep-brown mt-2">
                Supports: JPEG, PNG, PDF, TIFF (Max 10MB)
              </p>
            </div>
          </motion.div>
        </div>

        {/* Language Selector */}
        <div className="mt-6 flex items-center justify-center space-x-4">
          <label className="text-deep-brown font-medium">Language:</label>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-4 py-2 rounded-lg border border-earthy-brown bg-white text-deep-brown focus:outline-none focus:border-honey-yellow"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Processing Progress */}
      <AnimatePresence>
        {isProcessing && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 glass rounded-xl"
          >
            <div className="flex items-center space-x-3 mb-3">
              <FiLoader className="w-6 h-6 text-honey-yellow animate-spin" />
              <span className="text-deep-brown font-medium">Processing document...</span>
            </div>
            <div className="w-full bg-warm-beige rounded-full h-2">
              <motion.div
                className="honey-gradient h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-sm text-deep-brown mt-2">{Math.round(progress)}% complete</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* File Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {files.map((file) => (
            <motion.div
              key={file.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="card glass"
            >
              {/* File Preview */}
              <div className="mb-4">
                {file.type.startsWith('image/') ? (
                  <img
                    src={file.preview}
                    alt={file.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-48 bg-warm-beige rounded-lg flex items-center justify-center">
                    <FiFile className="w-16 h-16 text-earthy-brown" />
                  </div>
                )}
              </div>

              {/* File Info */}
              <div className="mb-4">
                <h3 className="font-semibold text-deep-brown truncate">{file.name}</h3>
                <p className="text-sm text-earthy-brown">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                {!results[file.id] && (
                  <button
                    onClick={() => processOCR(file)}
                    disabled={isProcessing}
                    className="flex-1 btn-primary text-sm py-2 flex items-center justify-center space-x-2"
                  >
                    <FiEye className="w-4 h-4" />
                    <span>Extract Text</span>
                  </button>
                )}
                
                {results[file.id] && !results[file.id].error && (
                  <button
                    onClick={() => downloadText(file.id, results[file.id].text)}
                    className="flex-1 btn-secondary text-sm py-2 flex items-center justify-center space-x-2"
                  >
                    <FiDownload className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                )}
                
                <button
                  onClick={() => removeFile(file.id)}
                  className="px-3 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Results */}
              {results[file.id] && (
                <div className="mt-4">
                  {results[file.id].error ? (
                    <p className="text-red-500 text-sm">{results[file.id].error}</p>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-earthy-brown">Confidence:</span>
                        <span className="font-medium text-deep-brown">
                          {Math.round(results[file.id].confidence)}%
                        </span>
                      </div>
                      <div className="bg-warm-beige rounded-lg p-3 max-h-32 overflow-y-auto">
                        <p className="text-sm text-deep-brown font-mono">
                          {results[file.id].text.substring(0, 200)}
                          {results[file.id].text.length > 200 && '...'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {files.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-6xl mb-4">📄</div>
          <h3 className="text-xl font-semibold text-deep-brown mb-2">
            No documents uploaded yet
          </h3>
          <p className="text-earthy-brown">
            Upload your first document to start extracting text
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default OCRUploader;