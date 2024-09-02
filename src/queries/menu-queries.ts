import { db } from "@/drizzle/db"
import { MenuItemTable, MenuTable } from "@/drizzle/schema";

export async function CreateMenu() {
    const menu = {
        name: "Menu 1",
        description: "Menu 1 description",
        category: "Category 1",
    }

    const result = await db.insert(MenuTable).values(menu);
} 

export async function FetchMenu() {
    const result = await db.select().from(MenuTable);
    return result;
}

export async function CreateMenuItem(){
    const menuItem = {
        name: "Menu Item 1",
        description: "Menu Item 1 description",
        price: 100,
        menuId: "1"
    }

    const result = await db.insert(MenuItemTable).values(menuItem);
}

export async function FetchMenuItems(){
    const result = await db.select().from(MenuItemTable);
    return result;
}