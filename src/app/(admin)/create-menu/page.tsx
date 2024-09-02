"use client";
import { Button } from "@/components/ui/button";

export default function CreateMenuPage(){
    function handleClick() {
        console.log("Create Menu clicked");
      }
    return (
        <div className="flex flex-col border rounded-md p-4">
        Server Side

        <Button onClick={handleClick}>
          Create Menu
        </Button>
      </div>
    )
}