

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
     <div>
      Main page
     </div>
     <div className="border rounded-md p-4">
      Environment: {process.env.NODE_ENV}
     </div>
    </main>
  );
}
