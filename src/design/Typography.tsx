/**
 * @description Design system typography preview
 */

import React from 'react';

const PreviewTypography = (): JSX.Element => {
  return (
    <div className="w-full justify-center">
      <div className="container flex flex-col">
        <h2 className="text-4xl font-semibold my-8">Typography</h2>
        <div className="px-4 flex flex-col">
          <p className="mb-4">
            <strong>Font:</strong> IBM Plex Sans
          </p>
          <p className="mb-4">
            <strong>Weights:</strong> 400, 500, 600, 700
          </p>
        </div>
        <div className="flex flex-col px-4">
          <span className="text-display-1 mb-1">Display 1</span>
          <span className="text-display-2 mb-1">Display 2</span>
          <span className="text-display-3 mb-1">Display 3</span>
          <span className="text-display-4 mb-1">Display 4</span>
          <h1 className="mb-1">Heading one</h1>
          <h2 className="mb-1">Heading two</h2>
          <h3 className="mb-1">Heading three</h3>
          <h4 className="mb-1">Heading four</h4>
          <h5 className="mb-1">Heading five</h5>
          <h6 className="mb-1">Heading six</h6>
        </div>
      </div>
    </div>
  );
};

export default PreviewTypography;
