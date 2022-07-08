/**
 * @description Design system color preview
 */

import React from 'react';

const PreviewColors = (): JSX.Element => {
  return (
    <div className="w-full justify-center">
      <div className="container flex flex-col">
        <h2 className="text-4xl font-semibold my-8">Colors</h2>
        <div className="flex flex-row px-4 mb-8">
          <div className="w-1/2 flex flex-col">
            <span className="text-base font-medium">Primary</span>
            <span className="text-sm">theme.colors.primary</span>
          </div>
          <div className="w-1/2 flex flex-row">
            <div className="w-full h-12 bg-primary-base rounded-lg flex justify-center items-center text-white">
              #3E816D
            </div>
            <div className="w-full h-12 bg-primary-lighten rounded-lg flex justify-center items-center text-white">
              #649A8A
            </div>
            <div className="w-full h-12 bg-primary-darken rounded-lg flex justify-center items-center text-white">
              #316757
            </div>
          </div>
        </div>
        <div className="flex px-4 mb-8">
          <div className="w-1/2 flex flex-col">
            <span className="text-base font-medium">Primary Alt</span>
            <span className="text-sm">theme.colors.primaryAlt</span>
          </div>
          <div className="w-1/2 flex">
            <div className="w-full h-12 bg-primaryAlt-base rounded-lg flex justify-center items-center text-white">
              #288091
            </div>
            <div className="w-full h-12 bg-primaryAlt-lighten rounded-lg flex justify-center items-center text-white">
              #5299A7
            </div>
            <div className="w-full h-12 bg-primaryAlt-darken rounded-lg flex justify-center items-center text-white">
              #206674
            </div>
          </div>
        </div>
        <div className="flex flex-row px-4 mb-8">
          <div className="w-1/2 flex flex-col">
            <span className="text-base font-medium">Secondary</span>
            <span className="text-sm">theme.colors.secondary</span>
          </div>
          <div className="w-1/2 flex">
            <div className="w-full h-12 bg-secondary-base rounded-lg flex justify-center items-center text-white">
              #263D54
            </div>
            <div className="w-full h-12 bg-secondary-lighten rounded-lg flex justify-center items-center text-white">
              #516376
            </div>
            <div className="w-full h-12 bg-secondary-darken rounded-lg flex justify-center items-center text-white">
              #1E3043
            </div>
          </div>
        </div>
        <div className="flex flex-row px-4 mb-8">
          <div className="w-1/2 flex flex-col">
            <span className="text-base font-medium">Secondary Alt</span>
            <span className="text-sm">theme.colors.secondaryAlt</span>
          </div>
          <div className="w-1/2 flex">
            <div className="w-full h-12 bg-secondaryAlt-base rounded-lg flex justify-center items-center text-white">
              #516376
            </div>
            <div className="w-full h-12 bg-secondaryAlt-lighten rounded-lg flex justify-center items-center text-white">
              #738291
            </div>
            <div className="w-full h-12 bg-secondaryAlt-darken rounded-lg flex justify-center items-center text-white">
              #404F5E
            </div>
          </div>
        </div>
        <div className="flex flex-row px-4 mb-8">
          <div className="w-1/2 flex flex-col">
            <span className="text-base font-medium">Success</span>
            <span className="text-sm">theme.colors.success</span>
          </div>
          <div className="w-1/2 flex">
            <div className="w-full h-12 bg-success-base rounded-lg flex justify-center items-center text-white">
              #008537
            </div>
            <div className="w-full h-12 bg-success-lighten rounded-lg flex justify-center items-center text-white">
              #329D5E
            </div>
            <div className="w-full h-12 bg-success-darken rounded-lg flex justify-center items-center text-white">
              #006A2C
            </div>
          </div>
        </div>
        <div className="flex flex-row px-4 mb-8">
          <div className="w-1/2 flex flex-col">
            <span className="text-base font-medium">Warning</span>
            <span className="text-sm">theme.colors.warning</span>
          </div>
          <div className="w-1/2 flex">
            <div className="w-full h-12 bg-warning-base rounded-lg flex justify-center items-center text-white">
              #706700
            </div>
            <div className="w-full h-12 bg-warning-lighten rounded-lg flex justify-center items-center text-white">
              #8C8532
            </div>
            <div className="w-full h-12 bg-warning-darken rounded-lg flex justify-center items-center text-white">
              #595200
            </div>
          </div>
        </div>
        <div className="flex flex-row px-4 mb-8">
          <div className="w-1/2 flex flex-col">
            <span className="text-base font-medium">Danger</span>
            <span className="text-sm">theme.colors.danger</span>
          </div>
          <div className="w-1/2 flex">
            <div className="w-full h-12 bg-danger-base rounded-lg flex justify-center items-center text-white">
              #C0392B
            </div>
            <div className="w-full h-12 bg-danger-lighten rounded-lg flex justify-center items-center text-white">
              #CC6055
            </div>
            <div className="w-full h-12 bg-danger-darken rounded-lg flex justify-center items-center text-white">
              #992D22
            </div>
          </div>
        </div>
        <div className="flex flex-row px-4 mb-8">
          <div className="w-1/2 flex flex-col">
            <span className="text-base font-medium">Info</span>
            <span className="text-sm">theme.colors.info</span>
          </div>
          <div className="w-1/2 flex">
            <div className="w-full h-12 bg-info-base rounded-lg flex justify-center items-center text-white">
              #207b8D
            </div>
            <div className="w-full h-12 bg-info-lighten rounded-lg flex justify-center items-center text-white">
              #4C95A3
            </div>
            <div className="w-full h-12 bg-info-darken rounded-lg flex justify-center items-center text-white">
              #196270
            </div>
          </div>
        </div>
        <div className="flex flex-row px-4 mb-8">
          <div className="w-1/2 flex flex-col">
            <span className="text-base font-medium">Gray</span>
            <span className="text-sm">theme.colors.gray</span>
          </div>
          <div className="w-1/2">
            <div className="w-full h-12 bg-gray rounded-lg flex justify-center items-center text-white">#6c6c6c</div>
          </div>
        </div>
        <div className="flex flex-row px-4 mb-8">
          <div className="w-1/2 flex flex-col">
            <span className="text-base font-medium">Dark Gray</span>
            <span className="text-sm">theme.colors.dark-gray</span>
          </div>
          <div className="w-1/2">
            <div className="w-full h-12 bg-dark-gray rounded-lg flex justify-center items-center text-white">
              #4b4b4b
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewColors;
