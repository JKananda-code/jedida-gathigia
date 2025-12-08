// app/gallery/page.tsx
import Image from "next/image";

export default function GalleryPage() {
  const photos = [
    { src: "/images/mum1.jpg", alt: "Mum smiling" },
    { src: "/images/mum2.jpg", alt: "Family gathering" },
    { src: "/images/mum3.jpg", alt: "Community event" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Photo Memories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-md">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={500}
              height={800}
              className="object-cover w-full h-64"
            />
            <p className="text-center text-sm text-gray-600 mt-2">{photo.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}