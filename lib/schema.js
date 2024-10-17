import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("ai_output", {
  id: serial("id").primaryKey(),
  formData: varchar("formData").notNull(),
  aiResponse: text("aiResponse"),
  contentSlug: varchar("contentSlug").notNull(),
  createdBy: varchar("email").notNull(),
  createdAt: varchar("createdAt"),
});
