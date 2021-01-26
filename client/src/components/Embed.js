import React, { useState } from 'react';
import file from "../assets/Resume.pdf";
import { Document, Page, pdfjs  } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Embed = () => {
        const [numPages, setNumPages] = useState(null);
        const [pageNumber, setPageNumber] = useState(1);
      
        function onDocumentLoadSuccess({ numPages }) {
          setNumPages(numPages);
        }
      
        return (
          <div>
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        );
  }
  
  export default Embed;