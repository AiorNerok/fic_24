import { uuid, pgTable, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: uuid().primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
})