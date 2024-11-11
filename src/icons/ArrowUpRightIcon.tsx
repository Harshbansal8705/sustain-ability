const ArrowUpRightIcon = ({ color = 'currentColor', size = 16, style, ...props }: { color?: string, size?: number, style?: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
    />
  </svg>
);

export default ArrowUpRightIcon;