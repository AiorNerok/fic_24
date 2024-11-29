"use server";

import bcrypt from "bcrypt"
import { db } from "../db";
import { eq } from "drizzle-orm";
import { JoinSchemas } from "use-case/auth/models/credentials";
import { users } from "../schema";
import { actionClient } from "shared/lib/safe-action";


export const CreateNewAccount = actionClient
  .schema(JoinSchemas)
  .action(
    async ({ parsedInput: { email, password  } }) => {
      const hashedPassword = await bcrypt.hash(password, 10)

      const existingUser = await db.query.users.findFirst({
        where: eq(users.email, email),
      })

      if (existingUser) {
        return {error: "Looks like you already have an account. Please log in."};
      }

      await db.insert(users).values({
        email: email,
        password: hashedPassword,
      });

      return {success: "Account created successfully"}
    }
  )