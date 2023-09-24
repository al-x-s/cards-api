import React from "react";
import { revalidatePath } from "next/cache";

export default function NewHandButton() {
  return (
    <form
      action={async () => {
        "use server";
        revalidatePath("/");
      }}
    >
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Deal a Hand
      </button>
    </form>
  );
}
