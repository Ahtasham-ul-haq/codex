import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 1000;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="flex justify-center items-center relative">
      {isVisible && (
        <div className="text-3xl w-[3rem] h-[3rem] text-pink-600 duration-500 ease bg-white rounded-lg fixed bottom-[2rem] right-[1rem] z-10 flex justify-center items-center transition cursor-pointer hover:-translate-y-1" onClick={goToBtn}>
          <FaArrowUp className="top-btn--icon" />
        </div>
      )}
    </div>
  );
};

//   .top-btn {
//     bottom: 5rem;
//     right: 5rem;
//     z-index: 999;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;

//     &--icon {
//       animation: gototop 1.2s linear infinite alternate-reverse;
//     }

//     @keyframes gototop {
//       0% {
//         transform: translateY(-0.5rem);
//       }
//       100% {
//         transform: translateY(1rem);
//       }
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .top-btn {
//       right: 0;
//       left: 40%;
//     }
//   }
// `;

export default GoToTop;