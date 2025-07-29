export default function Home() {
  return (
    <div className="min-h-screen bg-red-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-4">TAILWIND TEST</h1>
      <p className="text-white text-xl mb-4">If you see this in white text on red background, Tailwind is working!</p>
      
      <div className="bg-blue-500 p-4 rounded-lg">
        <p className="text-yellow-300 font-bold">This should be a blue box with yellow text</p>
      </div>
      
      <div className="mt-4 bg-green-500 p-4 rounded-lg">
        <p className="text-white font-bold">This should be a green box with white text</p>
      </div>
    </div>
  );
}
