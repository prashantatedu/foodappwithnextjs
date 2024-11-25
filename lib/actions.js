"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const { saveMeal } = require("./meals");

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    image: formData.get("image"),
  };

  console.log(meal);
  saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
