// app/gallery/page.tsx
import Image from "next/image";

export default function GalleryPage() {
  const photos = [
    { src: "/images/Jedida-03.jpeg", alt: "Mum was Always Smiling" },
    { src: "/images/Jedida-02.jpeg", alt: "Coming from Community Event" },
    { src: "/images/mum3.jpeg", alt: "Attentive at Recent Family Gathering" },
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
              height={400}
              className="object-cover w-full h-64"
            />
            <p className="text-center text-sm text-gray-600 mt-2">{photo.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}