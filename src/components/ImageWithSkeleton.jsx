import { useState } from "react";

function ImageWithSkeleton({
  src,
  alt,
  className = "",
  loading = "lazy",
  decoding = "async",
  skeletonClassName = "",
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* Skeleton placeholder */}
      {!loaded && (
        <div
          className={`absolute inset-0 animate-pulse bg-gray-200 ${skeletonClassName}`}
          aria-hidden="true"
        />
      )}

      {/* Gambar asli */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        className={`${className} ${!loaded ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default ImageWithSkeleton;
