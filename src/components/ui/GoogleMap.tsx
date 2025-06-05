import React from 'react';

interface GoogleMapProps {
  address: string;
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ address, className = '' }) => {
  const encodedAddress = encodeURIComponent(address);
  const apiKey = 'AIzaSyBaumH2ztW6igaJKO7qb5Sx-U43noMVvoE';
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}`;

  return (
    <div className={`w-full h-64 rounded-lg overflow-hidden shadow-md ${className}`}>
      <iframe
        title="Office Location"
        width="100%"
        height="100%"
        frameBorder="0"
        src={mapUrl}
        allowFullScreen
      />
    </div>
  );
};

export default GoogleMap;