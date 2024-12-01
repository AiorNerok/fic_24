"use server";

import { db } from "../db";
import { actionClient } from "@/lib/safe-action";
import { JoinSchema } from "@/components/use-case/auth/models/credentials";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";
import { users } from "@/server/schema";
import { v4 } from "uuid";

export const createNewUser = actionClient
  .schema(JoinSchema)
  .action(async ({ parsedInput: { email, name, password } }) => {
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existingUser) {
      return {
        error: "Looks like you already have an account. Please log in.",
      };
    }

    const hashedPassword = await hash(password, 11);

    const id = v4();
    const newUser = { id, name, email, password: hashedPassword };

    await db.insert(users).values(newUser);

    return { success: "Account created successfully" };
  });
