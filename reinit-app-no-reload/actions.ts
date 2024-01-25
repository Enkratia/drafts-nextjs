"use server";

import { revalidatePath } from "next/cache";

// сбросить все серверные данные
export const revaldatePathAction = () => {
  revalidatePath("/", "layout");
};
