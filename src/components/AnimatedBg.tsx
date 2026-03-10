const AnimatedBg = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Blob 1 — purple, top right */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.22] blur-[100px] animate-blob-1"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
      />
      {/* Blob 2 — blue, bottom left */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full opacity-[0.18] blur-[100px] animate-blob-2"
        style={{ background: 'radial-gradient(circle, #2563eb, transparent 70%)' }}
      />
      {/* Blob 3 — teal, center */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.15] blur-[80px] animate-blob-3"
        style={{ background: 'radial-gradient(circle, #0d9488, transparent 70%)' }}
      />
    </div>
  );
};

export default AnimatedBg;
