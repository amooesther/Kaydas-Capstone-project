import React from 'react';
import './Receipt.css';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import Footer from '../../Components/footer/Footer.jsx';

const Receipt = () => {
  const handleDownloadReceipt = () => {
   
    const receiptContent = `DATE: 17th March 2024
TIME: 10:15AM
TRANSACTION TYPE: debit
AMOUNT PAID: N30,600`;

   
    const blob = new Blob([receiptContent], { type: 'text/plain' });

    
    const url = URL.createObjectURL(blob);

   
    const tempLink = document.createElement('a');
    tempLink.href = url;
    tempLink.setAttribute('download', 'payment_receipt.txt');
    tempLink.click();

    
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <NavBar />
      <div className='receipt'>
        <p className='payR'>Payment Receipt</p>
        <div className='payRe'>
          <div className='receiptOne'>
            <p>Thank you</p>
            <p>Your transaction was successful</p>
          </div>
          <div>
            <div className='receiptTWo'>
              <p>DATE</p>
              <p>17th March 2024</p>
            </div>
            <div className='receiptTWo'>
              <p>TIME</p>
              <p>10:15AM</p>
            </div>
            <div className='receiptTWo'>
              <p>TRANSACTION TYPE</p>
              <p>debit</p>
            </div>
            <div className='receiptTWo'>
              <p>AMOUNT PAID</p>
              <p>N30,600</p>
            </div>
            <button onClick={handleDownloadReceipt}>Download receipt</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Receipt;
