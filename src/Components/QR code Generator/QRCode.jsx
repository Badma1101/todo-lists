import React from 'react'

function QRCode() {
  return (
    <div className='container'>
        <h1 className='title'>QR Code Generator</h1>
        <form>
            <input type="text" className="search" />
            <button className="generate"></button>
        </form>
    </div>
  )
}

export default QRCode