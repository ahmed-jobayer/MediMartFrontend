const AnimatedLogo = () => {
  return (
    <>
      <style jsx>{`
        .logo-container {
          animation: logoFadeIn 1.2s ease forwards;
        }

        .capsule {
          transform: translateX(-50px);
          opacity: 0;
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .cross {
          transform: translate(28px, 30px) scale(0);
          transform-origin: center;
          animation: crossPopIn 0.6s ease-out 0.6s forwards;
        }

        .logo-text {
          opacity: 0;
          transform: translateY(10px);
          animation: textFadeUp 0.8s ease-out 0.9s forwards;
        }

        @keyframes slideInLeft {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes crossPopIn {
          to {
            transform: translate(28px, 30px) scale(1);
          }
        }

        @keyframes textFadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <svg
        className="logo-container"
        width="180"
        height="50"
        viewBox="0 0 300 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Capsule */}
        <rect
          className="capsule"
          x="10"
          y="15"
          rx="20"
          ry="20"
          width="60"
          height="50"
          fill="#4F46E5"
        />
        {/* Medical Cross */}
        <g className="cross" transform="translate(28,30)">
          <rect x="7.5" y="0" width="10" height="25" fill="#FFFFFF" />
          <rect x="0" y="7.5" width="25" height="10" fill="#FFFFFF" />
        </g>
        {/* Brand Name */}
        <text
          className="logo-text"
          x="80"
          y="55"
          fontFamily="Segoe UI, sans-serif"
          fontSize="40"
          fill="#EC4899"
          fontWeight="bold"
        >
          Medi
          <tspan fill="#4F46E5">Mart</tspan>
        </text>
      </svg>
    </>
  );
};

export default AnimatedLogo;