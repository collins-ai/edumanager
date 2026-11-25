const Progressbar = ({ value, max = 100 }) => {
  const percent = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{ width: "100%", height: 6, background: "#e2e1e1", borderRadius: 999, overflow: "hidden" }}
    >
      <div
        style={{
          width: `${percent}%`,
          height: "100%",
          background: "#17aae4",
          borderRadius: 999,
          transition: "width 0.4s ease",
        }}
      />
    </div>
  )
}

export default Progressbar