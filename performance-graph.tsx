import React from 'react';

export const PerformanceGraph = () => {
  return (
    <div className="w-full h-full">
      <div className="relative h-full w-full">
        {/* Graph Container */}
        <div className="flex flex-col h-full">
          <div className="text-center font-semibold mb-4">Fund Performance Projection</div>
          
          {/* Graph */}
          <div className="flex-grow relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-muted-foreground">
              <div>25%</div>
              <div>20%</div>
              <div>15%</div>
              <div>10%</div>
              <div>5%</div>
              <div>0%</div>
            </div>
            
            {/* Graph content */}
            <div className="absolute left-12 right-0 top-0 bottom-0">
              {/* Horizontal grid lines */}
              <div className="absolute w-full h-full flex flex-col justify-between">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="border-t border-muted-foreground/20 w-full h-0"></div>
                ))}
              </div>
              
              {/* Bars */}
              <div className="absolute bottom-0 left-0 right-0 h-full flex justify-around items-end">
                <div className="flex flex-col items-center">
                  <div className="bg-primary w-12 h-[60%] rounded-t"></div>
                  <div className="text-xs mt-1">Northern Spain</div>
                  <div className="text-xs font-semibold">15%</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-secondary w-12 h-[72%] rounded-t"></div>
                  <div className="text-xs mt-1">Baja California</div>
                  <div className="text-xs font-semibold">18%</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-accent w-12 h-[80%] rounded-t"></div>
                  <div className="text-xs mt-1">Combined</div>
                  <div className="text-xs font-semibold">20%</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex justify-center mt-4 text-xs">
            <div className="flex items-center mx-2">
              <div className="w-3 h-3 bg-primary rounded-full mr-1"></div>
              <span>Northern Spain (15% ROI)</span>
            </div>
            <div className="flex items-center mx-2">
              <div className="w-3 h-3 bg-secondary rounded-full mr-1"></div>
              <span>Baja California (18% ROI)</span>
            </div>
            <div className="flex items-center mx-2">
              <div className="w-3 h-3 bg-accent rounded-full mr-1"></div>
              <span>Combined (20% ROI)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};