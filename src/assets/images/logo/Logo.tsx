const Logo = () => {
  return (
    <>
      <svg
        width="180"
        height="50"
        viewBox="0 0 300 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/*  Capsule  */}
        <rect
          x="10"
          y="15"
          rx="20"
          ry="20"
          width="60"
          height="50"
          fill="#4F46E5"
        />
        {/*  Medical cross  */}
        <g transform="translate(28,30)">
          <rect x="7.5" y="0" width="10" height="25" fill="#FFFFFF" />
          <rect x="0" y="7.5" width="25" height="10" fill="#FFFFFF" />
        </g>
        {/*  Brand Name  */}
        <text
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

export default Logo;
