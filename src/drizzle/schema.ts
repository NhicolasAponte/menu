import { pgSchema, serial, uuid, varchar } from "drizzle-orm/pg-core";

export const dbSchema = pgSchema(process.env.DEV_SCHEMA!);

export const MenuTable = dbSchema.table("menu", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  description: varchar("description"),
  category: varchar("category", { length: 100 }).notNull(),
});

export type MenuInsert = typeof MenuTable.$inferInsert;
export type MenuSelect = typeof MenuTable.$inferSelect;

export const MenuItemTable = dbSchema.table("menu_item", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  description: varchar("description"),
  price: serial("price").notNull(),
  // modifications: jsonb("modifications"),
  menuId: uuid("menu_id").notNull().references(() => MenuTable.id, {onDelete: "cascade"}),
});

// export const OderTable = dbSchema.table(
//     "order", 
//     {
//         id: uuid("id").defaultRandom().primaryKey(),
//         status: varchar("status", { length: 100 }).notNull(),
//         tableNumber: serial("table_number").notNull(),
//         total: serial("total").notNull(),
//         createdAt: varchar("created_at").notNull(),
//         updatedAt: varchar("updated_at").notNull(),
//         completedAt: varchar("completed_at"),
//         cancelledAt: varchar("cancelled_at"),
//         promotionId: uuid("promotion_id").references(() => PromotionTable.id, {onDelete: "set null"}),
//         notes: varchar("notes"),
//     }
// )

// export const OrderItemTable = dbSchema.table(
//     "order_item",
//     {
//         id: uuid("id").defaultRandom().primaryKey(),
//         orderId: uuid("order_id").notNull().references(() => OderTable.id, {onDelete: "cascade"}),
//         menuItemId: uuid("menu_item_id").notNull().references(() => MenuItemTable.id, {onDelete: "cascade"}),
//         quantity: serial("quantity").notNull(),
//     }
// )

// export const PromotionTable = dbSchema.table(
//     "promotion",
//     {
//         id: uuid("id").defaultRandom().primaryKey(),
//         name: varchar("name", { length: 100 }).notNull(),
//         description: varchar("description"),
//         startDate: varchar("start_date").notNull(),
//         endDate: varchar("end_date").notNull(),
//         discount: serial("discount").notNull(),
//     }
// )