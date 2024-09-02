import { Button } from "@/components/ui/button";

export default function Home() {



  return (
    <main className="flex flex-col justify-center items-center">
      <div>Menu page</div>
      <div className="flex">
        <div className="border rounded-md p-4">
          Client Side
          <div className="border rounded-md p-4">
            <ul>

            </ul>
          </div>
        </div>

      </div>
      <div className="border rounded-md p-4">
        Environment: {process.env.NODE_ENV}
      </div>
    </main>
  );
}
