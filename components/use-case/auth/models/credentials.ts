import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export type LoginType = z.infer<typeof LoginSchema>;

export const JoinSchema = LoginSchema.extend({
  confirmPassword: z.string().min(4),
}).refine(({ password, confirmPassword }) => password === confirmPassword);

export type JoinType = z.infer<typeof JoinSchema>;
