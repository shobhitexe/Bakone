"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FilterSidebar() {
  const [typeOpen, setTypeOpen] = useState(true);
  const [colorsOpen, setColorsOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [weightOpen, setWeightOpen] = useState(true);
  const [shapesOpen, setShapesOpen] = useState(true);

  return (
    <div className="w-full lg:w-64">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-medium">Type of Stone</h2>
        <button onClick={() => setTypeOpen(!typeOpen)}>
          {typeOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>

      {typeOpen && (
        <div className="mb-6 space-y-2">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="h-4 w-4 accent-amber-800" />
            Alexandrite
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="h-4 w-4 accent-amber-800" />
            Aquamarine
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="h-4 w-4 accent-amber-800" />
            Beryl
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="h-4 w-4 accent-amber-800" />
            Heliodor
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="h-4 w-4 accent-amber-800" />
            Emerald
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="h-4 w-4 accent-amber-800" />
            Quartz
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="h-4 w-4 accent-amber-800"
              defaultChecked
            />
            Amethyst
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="h-4 w-4 accent-amber-800" />
            Kunzite
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="h-4 w-4 accent-amber-800"
              defaultChecked
            />
            Ruby
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="h-4 w-4 accent-amber-800" />
            Topaz
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="h-4 w-4 accent-amber-800"
              defaultChecked
            />
            Sapphire
          </label>
          <div className="ml-4 mt-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-amber-800">•</span>
              <span>Gemstones</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-amber-800">•</span>
              <span className="text-amber-800">Gemstones</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-amber-800">•</span>
              <span>Gemstones</span>
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="h-4 w-4 accent-amber-800" />
            Opal
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="h-4 w-4 accent-amber-800" />
            Scapolite
          </label>
        </div>
      )}

      <div className="mb-4 flex items-center justify-between border-t border-gray-200 pt-4">
        <h2 className="text-sm font-medium">Gemstones</h2>
        <div className="flex items-center gap-2">
          <div className="h-5 w-8 rounded-full bg-gray-200 p-0.5">
            <div className="h-4 w-4 rounded-full bg-amber-800"></div>
          </div>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between border-t border-gray-200 pt-4">
        <h2 className="text-sm font-medium">Gemstones</h2>
        <button onClick={() => setShapesOpen(!shapesOpen)}>
          {shapesOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>

      {shapesOpen && (
        <div className="mb-6 grid grid-cols-4 gap-2">
          <div className="flex flex-col items-center">
            <div className="mb-1 h-10 w-10 rounded-md border border-gray-300 p-1">
              <div className="h-full w-full rounded-full border border-gray-300"></div>
            </div>
            <span className="text-xs">Round</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-1 h-10 w-10 rounded-md border border-gray-300 p-1">
              <div className="h-full w-full rounded-md border border-gray-300"></div>
            </div>
            <span className="text-xs">Square</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-1 h-10 w-10 rounded-md border border-gray-300 p-1">
              <div className="h-full w-full border border-gray-300"></div>
            </div>
            <span className="text-xs">Cushion</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-1 h-10 w-10 rounded-md border border-gray-300 p-1">
              <div className="h-full w-full border border-gray-300"></div>
            </div>
            <span className="text-xs">Radiant</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-1 h-10 w-10 rounded-md border border-gray-300 p-1">
              <div className="h-full w-full border border-gray-300"></div>
            </div>
            <span className="text-xs">Oval</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-1 h-10 w-10 rounded-md border border-gray-300 p-1">
              <div className="h-full w-full border border-gray-300"></div>
            </div>
            <span className="text-xs">Marquise</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-1 h-10 w-10 rounded-md border border-gray-300 p-1">
              <div className="h-full w-full border border-gray-300"></div>
            </div>
            <span className="text-xs">Pear</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-1 h-10 w-10 rounded-md border border-gray-300 p-1">
              <div className="h-full w-full border border-gray-300"></div>
            </div>
            <span className="text-xs">Heart</span>
          </div>
        </div>
      )}

      <div className="mb-4 flex items-center justify-between border-t border-gray-200 pt-4">
        <h2 className="text-sm font-medium">Gemstone Colours</h2>
        <button onClick={() => setColorsOpen(!colorsOpen)}>
          {colorsOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>

      {colorsOpen && (
        <div className="mb-6 grid grid-cols-5 gap-2">
          <div className="h-6 w-6 rounded-sm bg-red-800"></div>
          <div className="h-6 w-6 rounded-sm bg-blue-500"></div>
          <div className="h-6 w-6 rounded-sm bg-yellow-500"></div>
          <div className="h-6 w-6 rounded-sm bg-pink-300"></div>
          <div className="h-6 w-6 rounded-sm bg-cyan-500"></div>
          <div className="h-6 w-6 rounded-sm bg-amber-800"></div>
          <div className="h-6 w-6 rounded-sm bg-green-500"></div>
          <div className="h-6 w-6 rounded-sm bg-purple-700"></div>
          <div className="h-6 w-6 rounded-sm bg-red-600"></div>
        </div>
      )}

      <div className="mb-4 flex items-center justify-between border-t border-gray-200 pt-4">
        <h2 className="text-sm font-medium">Price</h2>
        <button onClick={() => setPriceOpen(!priceOpen)}>
          {priceOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>

      {priceOpen && (
        <div className="mb-6">
          <div className="mb-2 flex gap-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="$5,000"
                className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                defaultValue="$5,000"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="$50,000"
                className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                defaultValue="$50,000"
              />
            </div>
          </div>
          <div className="relative mt-4 h-1 bg-gray-200">
            <div className="absolute left-0 top-0 h-1 w-1/2 bg-amber-800"></div>
            <div className="absolute left-0 top-0 -mt-1.5 h-4 w-4 rounded-full border-2 border-amber-800 bg-white"></div>
            <div className="absolute left-1/2 top-0 -mt-1.5 h-4 w-4 rounded-full border-2 border-amber-800 bg-white"></div>
          </div>
        </div>
      )}

      <div className="mb-4 flex items-center justify-between border-t border-gray-200 pt-4">
        <h2 className="text-sm font-medium">Weight</h2>
        <button onClick={() => setWeightOpen(!weightOpen)}>
          {weightOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>

      {weightOpen && (
        <div className="mb-6">
          <div className="mb-2 flex gap-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="0.200"
                className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                defaultValue="0.200"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="3.500"
                className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                defaultValue="3.500"
              />
            </div>
          </div>
          <div className="relative mt-4 h-1 bg-gray-200">
            <div className="absolute left-0 top-0 h-1 w-1/3 bg-amber-800"></div>
            <div className="absolute left-0 top-0 -mt-1.5 h-4 w-4 rounded-full border-2 border-amber-800 bg-white"></div>
            <div className="absolute left-1/3 top-0 -mt-1.5 h-4 w-4 rounded-full border-2 border-amber-800 bg-white"></div>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="0.0000"
              className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
              defaultValue="0.0000"
            />
          </div>
        </div>
      )}

      <div className="mb-4 flex items-center justify-between border-t border-gray-200 pt-4">
        <h2 className="text-sm font-medium">Gemstones</h2>
        <ChevronDown className="h-4 w-4" />
      </div>
    </div>
  );
}
