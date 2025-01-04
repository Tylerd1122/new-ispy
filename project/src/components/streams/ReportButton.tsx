import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const ReportButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [report, setReport] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the report to your backend
    console.log('Report submitted:', report);
    setReport('');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 mt-4 p-2 bg-red-500/10 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-colors"
      >
        <AlertCircle className="w-5 h-5" />
        <span className="font-mono text-sm">Report Activity</span>
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 w-64 bg-black/90 backdrop-blur border border-red-500/30 rounded-lg p-4">
          <form onSubmit={handleSubmit}>
            <textarea
              value={report}
              onChange={(e) => setReport(e.target.value)}
              placeholder="Describe the suspicious activity..."
              className="w-full h-24 bg-black/50 border border-red-500/30 rounded p-2 text-sm text-white placeholder-red-400/50 focus:outline-none focus:border-red-500"
            />
            <div className="flex justify-end gap-2 mt-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 text-sm text-red-400 hover:text-red-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1 bg-red-500/20 text-sm text-red-400 rounded hover:bg-red-500/30"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ReportButton;