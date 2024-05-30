"use client";

import { useFormState } from "react-dom";
import { submitFormAction } from "./actions";

const clientAction = async (previousState, formData) => {
  try {
    console.log("TRYING CLIENT ACTION");
    const result = await submitFormAction(previousState, formData);
    return result;
  } catch (error) {
    console.log("FAILED CLIENT ACTION");
    // eslint-disable-next-line no-console
    console.error("Startups Credits error", error);

    return {
      status: "error",
      message:
        "An unknown error occurred. Please refresh the page and try again.",
    };
  }
};

export default function Home() {
  const [formState, formAction] = useFormState(clientAction, {
    status: "pending",
  });

  return (
    <main className="flex flex-col items-center justify-between gap-8 p-24">
      <form
        action={formAction}
        className="flex flex-col gap-4 border rounded p-8"
      >
        <input
          type="hidden"
          name="text"
          value="Please upload a screenshot of the entire browser window with the Vercel Credit offer in your Partner dashboard, hub, wiki, or console as verification. A screenshot of your acceptance email or profile are not valid and will cause delay in the approval process.Please upload a screenshot of the entire browser window with the Vercel Credit offer in your Partner dashboard, hub, wiki, or console as verification. A screenshot of your acceptance email or profile are not valid and will cause delay in the approval process.Please upload a screenshot of the entire browser window with the Vercel Credit offer in your Partner dashboard, hub, wiki, or console as verification. A screenshot of your acceptance email or profile are not valid and will cause delay in the approval process.Please upload a screenshot of the entire browser window with the Vercel Credit offer in your Partner dashboard, hub, wiki, or console as verification. A screenshot of your acceptance email or profile are not valid and will cause delay in the approval process.Please upload a screenshot of the entire browser window with the Vercel Credit offer in your Partner dashboard, hub, wiki, or console as verification. A screenshot of your acceptance email or profile are not valid and will cause delay in the approval process.Please upload a screenshot of the entire browser window with the Vercel Credit offer in your Partner dashboard, hub, wiki, or console as verification. A screenshot of your acceptance email or profile are not valid and will cause delay in the approval process.Please upload a screenshot of the entire browser window with the Vercel Credit offer in your Partner dashboard, hub, wiki, or console as verification. A screenshot of your acceptance email or profile are not valid and will cause delay in the approval process.Please upload a screenshot of the entire browser window with the Vercel Credit offer in your Partner dashboard, hub, wiki, or console as verification. A screenshot of your acceptance email or profile are not valid and will cause delay in the approval process.Please upload a screenshot of the entire browser window with the Vercel Credit offer in your Partner dashboard, hub, wiki, or console as verification. A screenshot of your acceptance email or profile are not valid and will cause delay in the approval process.Please upload a screenshot of the entire browser window with the Vercel Credit offer in your Partner dashboard, hub, wiki, or console as verification. A screenshot of your acceptance email or profile are not valid and will cause delay in the approval process.Please upload a screenshot of the entire browser window with the Vercel Credit offer in your Partner dashboard, hub, wiki, or console as verification. A screenshot of your acceptance email or profile are not valid and will cause delay in the approval process."
        />
        <input
          accept=".jpeg,.jpg,.pdf,.png,.webp"
          className="block w-full cursor-pointer text-sm text-slate-500 file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100"
          id="uploads"
          name="uploads"
          required
          type="file"
        />
        {formState.status === "error" && formState.message ? (
          <p id="uploads-error" className="text-xs text-red-600">
            error={formState.message}
          </p>
        ) : null}
        <button
          className="rounded-full bg-violet-500 text-white px-4 py-2 font-semibold text-sm hover:bg-violet-600"
          type="submit"
        >
          Submit Form
        </button>
      </form>
      <p className="text-sm">{`Form State: ${JSON.stringify(
        formState,
        null,
        2
      )}`}</p>
    </main>
  );
}
