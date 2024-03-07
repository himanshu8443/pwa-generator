import ManifestForm from "./components/ManifestForm";

export default function Home() {
  return (
    <div className="bg-black text-white flex justify-center items-center">
      <div className="w-10/12 mt-10">
        <div className="flex flex-col gap-2">
          <h1 className=" text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            PWA Manifest Generator
          </h1>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent">
            Generate your PWA manifest file with ease
          </h3>
        </div>
        <ManifestForm />
      </div>
    </div>
  );
}
