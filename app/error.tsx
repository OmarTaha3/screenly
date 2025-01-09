'use client';
const GlobalError = () => {
  return (
    <section className="container px-4 py-8 text-center">
      <div className="max-w-auto mx-auto">
        <div className="mx-auto md:max-w-lg">
          <p className="text-[200px] font-semibold text-gray-300">500</p>
        </div>
        <h2 className="mt-8 text-xl font-black lg:text-5xl">
          Oops! Something went wrong
        </h2>
        <p className="my-2 text-sm text-secondary lg:text-base">
          We&apos;re having trouble processing your request right now. Please
          try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    </section>
  );
};

export default GlobalError;
