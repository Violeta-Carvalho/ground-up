import initialItems from "./initialItems.json";

function getCanvaItems() {
    let tempCanvaItems: string | string[] | null =
      localStorage.getItem("canva-items");

    if (!tempCanvaItems) tempCanvaItems = [] as string[];
    else tempCanvaItems = JSON.parse(tempCanvaItems) as string[];
    
    return tempCanvaItems;
}

function getMenuItems() {
  let tempMenuItems: string | string[] | null =
    localStorage.getItem("menu-items");

  if (!tempMenuItems) tempMenuItems = initialItems as string[];
  else tempMenuItems = JSON.parse(tempMenuItems) as string[];
  
  return tempMenuItems;
}

const isEqual = (a: string[], b: string[]) => JSON.stringify(a.sort()) === JSON.stringify(b.sort())

export { getCanvaItems, isEqual, getMenuItems };
