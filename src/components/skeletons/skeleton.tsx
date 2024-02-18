export const LoadingSkeleton = () => {
  return (
    <div className="bg-transprent rounded-md relative top-[15vh] p-6 w-[80vw] h-[70vh] gap-6 flex flex-col">
      <div className=" rounded-md p-4 w-full">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-6 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-6 bg-gray-300 rounded col-span-2"></div>
                <div className="h-6 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-md p-4 w-full">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-300 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-6 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-6 bg-gray-300 rounded col-span-2"></div>
                <div className="h-6 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md p-4 w-full">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-6 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-6 bg-gray-300 rounded col-span-2"></div>
                <div className="h-6 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md p-4 w-full">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-6 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-6 bg-gray-300 rounded col-span-2"></div>
                <div className="h-6 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
