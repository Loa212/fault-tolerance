import React from "react";

const ScrollTop = () => {
  const [Scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    if (typeof window != "undefined") {
      setScrolled(window.scrollY > 0);
      document.addEventListener(
        "scroll",
        () => {
          const distanceFromTop = window.scrollY;
          if (distanceFromTop > 0) {
            setScrolled(true);
            alert("scrolled");
          } else {
            setScrolled(false);
          }
        },
        { passive: true }
      );
    }
  }, []);

  const scrollTop = () => {
    if (typeof window != "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (Scrolled)
    return (
      <button
        aria-label="scroll to top"
        onClick={scrollTop}
        className="z-50 fixed bottom-4 right-4 bg-green-700/80 hover:bg-green-900 text-white rounded-full h-16 w-16 lg:h-10 lg:w-10 flex flex-col items-center justify-center"
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0 2c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Zm-1-10v4h2v-4h3l-4-4-4 4h3Z"></path>
        </svg>
      </button>
    );
  return null;
};

export default ScrollTop;
