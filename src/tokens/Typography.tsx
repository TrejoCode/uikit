/**
 * @description Design system typography preview
 */

import React from "react";

const PreviewTypography = (): React.ReactElement => (
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
      </div>
    </div>
  </div>
);

export default PreviewTypography;
