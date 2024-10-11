import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { toollist } from "@/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// get all valid tags from config.js
export function getTags() {
  console.log(Array.from(new Set(toollist.flatMap(t => t.tags), )))
  return Array.from(new Set(toollist.flatMap(t => t.tags), ))
}