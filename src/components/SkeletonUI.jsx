const pulseClass = "animate-pulse bg-[#eadfca]";

export const PageSkeleton = () => {
  return (
    <div className="min-h-[70vh] p-4 lg:p-6">
      <div className={`h-10 w-2/5 rounded-xl ${pulseClass}`} />
      <div className="mt-4 space-y-3">
        <div className={`h-4 w-full rounded ${pulseClass}`} />
        <div className={`h-4 w-11/12 rounded ${pulseClass}`} />
        <div className={`h-4 w-10/12 rounded ${pulseClass}`} />
      </div>
      <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className={`h-40 rounded-2xl ${pulseClass}`} />
        ))}
      </div>
    </div>
  );
};

export const RecipeGridSkeleton = ({ count = 10 }) => {
  return (
    <div className="p-3 lg:p-[1.2vw] min-h-screen grid gap-[2vw] grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
      {[...Array(count)].map((_, idx) => (
        <div key={idx} className="rounded-2xl bg-white p-2 lg:p-3 shadow-sm">
          <div className={`h-28 lg:h-40 rounded-xl ${pulseClass}`} />
          <div className={`h-4 mt-3 rounded w-3/4 ${pulseClass}`} />
          <div className={`h-3 mt-2 rounded w-1/2 ${pulseClass}`} />
          <div className={`h-3 mt-2 rounded w-2/3 ${pulseClass}`} />
          <div className="mt-4 flex items-center justify-between">
            <div className={`h-4 rounded w-1/4 ${pulseClass}`} />
            <div className={`h-8 w-8 rounded-full ${pulseClass}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const RecipeDetailsSkeleton = () => {
  return (
    <div className="p-3 lg:p-[1.5vw] lg:flex lg:gap-[1vw] min-h-screen">
      <div className="left lg:w-[42%]">
        <div className={`h-64 lg:h-[28vw] rounded-xl ${pulseClass}`} />
        <div className="bg-white rounded-xl mt-3 p-4 space-y-3">
          <div className={`h-6 w-3/4 rounded ${pulseClass}`} />
          <div className={`h-4 w-full rounded ${pulseClass}`} />
          <div className={`h-4 w-10/12 rounded ${pulseClass}`} />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className={`h-12 rounded-lg ${pulseClass}`} />
          ))}
        </div>
      </div>

      <div className="right mt-4 lg:mt-0 lg:flex-1">
        <div className={`h-6 w-40 rounded ${pulseClass}`} />
        <div className="mt-3 space-y-2">
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className={`h-10 rounded-lg ${pulseClass}`} />
          ))}
        </div>

        <div className={`h-6 w-48 rounded mt-6 ${pulseClass}`} />
        <div className="mt-3 space-y-2">
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className={`h-10 rounded-lg ${pulseClass}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const FormSkeleton = () => {
  return (
    <div className="flex justify-center p-4 lg:p-8 min-h-[70vh]">
      <div className="w-full max-w-3xl space-y-4">
        <div className={`h-9 w-1/3 rounded ${pulseClass}`} />
        {[...Array(8)].map((_, idx) => (
          <div key={idx} className="space-y-2">
            <div className={`h-4 w-1/4 rounded ${pulseClass}`} />
            <div className={`h-11 w-full rounded-xl ${pulseClass}`} />
          </div>
        ))}
        <div className={`h-11 w-40 rounded-xl ${pulseClass}`} />
      </div>
    </div>
  );
};