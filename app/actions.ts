"use server";

import { put } from "@vercel/blob";

const createFormError = (message) => ({
  status: "error",
  message,
});

export async function submitFormAction(previousState, formData) {
  console.log("TRYING SERVER ACTION");
  try {
    const uploads = formData.getAll("uploads") as File[];
    const text = formData.get("text") as string;

    if (!uploads.length) {
      return createFormError("Upload is required.");
    }

    const uploadPromises = uploads.map((file) => {
      if (file.name) {
        return put(file.name, file, {
          access: "public",
          token: process.env.STARTUP_PROGRAM_BLOB_READ_WRITE_TOKEN,
        })
          .then(({ url }) => url)
          .catch((error) => {
            console.error("Error uploading file", error);
            return null;
          });
      }
      return Promise.resolve(null);
    });
    const uploadUrls = (await Promise.all(uploadPromises)).filter(
      (blobUrl) => blobUrl !== null
    ) as string[];

    if (!uploadUrls.length) {
      return createFormError("Upload failed. Please try again.");
    }

    console.log("uploadUrls", uploadUrls);
    console.log("text", text);

    return {
      status: "success",
      message: uploadUrls[0],
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Startups Credits error", error);

    return createFormError(
      "An unknown error occurred. Please refresh the page and try again."
    );
  }
}
