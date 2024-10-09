import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import brainIcon from './assets/brain-icon.png';  // Adjust filename as needed
import coronalPlane from './assets/coronal-plane.jpg';
import axialPlane from './assets/axial-plane.jpg';
import sagittalPlane from './assets/sagittal-plane.jpg';
import brainRegions from './assets/brain-regions.png';
import mixtureGraph from './assets/mixture-graph.png';
import probabilityGraph from './assets/probability-graph.png';

const ADPredictionDashboard = () => {
  const [patientInfo, setPatientInfo] = useState({
    patientId: '',
    age: '',
    gender: '',
    cognitiveScore: ''
  });
  const [diagnosisResult, setDiagnosisResult] = useState('MCI');
  const [prognosisYear, setPrognosisYear] = useState(3);
  const [riskOfAD, setRiskOfAD] = useState(0.68);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpload = () => {
    // Placeholder for image upload functionality
    console.log('Image upload triggered');
  };

  const handleRunPrediction = () => {
    // Placeholder for prediction functionality
    console.log('Running prediction');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center">
        <h1 className="text-2xl font-bold">Trustworthy AD Prediction System</h1>
        <img src={brainIcon} alt="Brain icon" className="ml-2 w-6 h-6" />
      </header>
      
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
          <input
            type="text"
            name="patientId"
            placeholder="Patient ID"
            value={patientInfo.patientId}
            onChange={handleInputChange}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={patientInfo.age}
            onChange={handleInputChange}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={patientInfo.gender}
            onChange={handleInputChange}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="number"
            name="cognitiveScore"
            placeholder="Cognitive Score"
            value={patientInfo.cognitiveScore}
            onChange={handleInputChange}
            className="w-full mb-2 p-2 border rounded"
          />
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Image Input</h3>
            <div
              onClick={handleUpload}
              className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer"
            >
              <Upload className="mx-auto mb-2" />
              <p>Upload Brain Image (MRI, PET)</p>
            </div>
          </div>
          <button
            onClick={handleRunPrediction}
            className="w-full mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Run Prediction
          </button>
        </div>
        
        {/* <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Fair Diagnosis Results</h2>
          <div className="grid grid-cols-1 gap-2">
            <img src={coronalPlane} alt="Coronal Plane" className="w-full mb-4" />
            <p className="text-center">Coronal Plane</p>
            <img src={axialPlane} alt="Axial Plane" className="w-full" />
            <p className="text-center">Axial Plane</p>
            <img src={sagittalPlane} alt="Sagittal Plane" className="w-full" />
            <p className="text-center">Sagittal Plane</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Diagnosis Results (CN, MCI or AD)</h3>
            <p className="text-2xl font-bold text-center mt-2">{diagnosisResult}</p>
          </div>
        </div> */}

        {/* Fair Diagnosis Results Panel */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Fair Diagnosis Results</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="relative">
              <img src={coronalPlane} alt="Coronal Plane" className="ml-2 w-20 h-20" />
              <div className="absolute top-0 right-0 bg-white p-1 text-sm">Coronal Plane</div>
            </div>
            <div className="relative">
              <img src={axialPlane} alt="Axial Plane" className="ml-2 w-20 h-20" />
              <div className="absolute top-0 right-0 bg-white p-1 text-sm">Axial Plane</div>
            </div>
            <div className="relative">
              <img src={sagittalPlane} alt="Sagittal Plane" className="ml-2 w-20 h-20" />
              <div className="absolute top-0 right-0 bg-white p-1 text-sm">Sagittal Plane</div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Diagnosis Results (CN, MCI or AD)</h3>
            <p className="text-2xl font-bold text-center mt-2">{diagnosisResult}</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Interpretable Prognosis Results</h2>
          <img src={brainRegions} alt="Brain regions" className="w-full mb-4" />
          <img src={mixtureGraph} alt="Mixture graph" className="ml-2 w-20 h-20" />
          <img src={probabilityGraph} alt="Probability graph" className="ml-2 w-20 h-20" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Year</h3>
              <p className="text-2xl font-bold text-center">{prognosisYear}</p>
            </div>
            <div>
              <h3 className="font-semibold">Risk of AD</h3>
              <p className="text-2xl font-bold text-center">{riskOfAD} (high)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ADPredictionDashboard;