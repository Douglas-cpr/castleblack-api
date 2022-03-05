import { Item } from "@/domain/entities";

export interface DestroyItemById {
  destroy: (itemId: string) => Promise<Item>
}