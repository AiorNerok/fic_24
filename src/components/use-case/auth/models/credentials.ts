import { z } from "zod";

export const LoginSchemas = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export type LoginTypes = z.infer<typeof LoginSchemas>;

export const JoinSchemas = LoginSchemas.extend({
  confirmPassword: z.string(),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  message: "passwords do not match",
});

export type JoinTypes = z.infer<typeof JoinSchemas>;
