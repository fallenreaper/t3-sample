import Link from "next/link";

const sampleUrls = [
  "https://kk46uxu9iv.ufs.sh/f/M9uN7NbtyqZUj1nwg8sGQZpsu8qcXil9boSP4K0FAwnCBHrh",
  "https://kk46uxu9iv.ufs.sh/f/M9uN7NbtyqZUhUBzyVr1lCYJaQb3vLI5Zy8pWOm69ieFxSVr",
  "https://kk46uxu9iv.ufs.sh/f/M9uN7NbtyqZUFDkqXs0pO0cbT5sXZ7eNP3LKV8zwySWMAlBi",
  "https://kk46uxu9iv.ufs.sh/f/M9uN7NbtyqZUTM6zwxguhHo9XsVeA0EZi8qLtMbFUKPz5YkD"
]

const mockImages = sampleUrls.map( (url, idx) => ({ 
  id: idx+1,
  url
}))
export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <div className="flex flex-wrap gap-4">
        { mockImages.map( (img) => (
          <div key={img.id} className="w-48">
            <img src={img.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
