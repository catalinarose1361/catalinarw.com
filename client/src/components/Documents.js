import React, { ReactPDF } from 'react';
import Resume from '../documents/resume.pdf'
import Certification from '../documents/certificate.pdf'
const Documents = () => {
    return (
     <>
            <object data={Resume} type="application/pdf" width="400px" height="500px">
                <p>Alternative text - include a link <a href={Resume}>to the PDF!</a></p>
            </object>
            <object data={Certification} type="application/pdf" width="400px" height="500px">
                <p>Alternative text - include a link <a href={Certification}>to the PDF!</a></p>
            </object>
</> 
           
    
    )
}

export default Documents;