import React from 'react';

const ExternalLinks = ({ url,label }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className='projectLinking'>
     {label}   
    </a>
  );
};

export default ExternalLinks;