export function getMaps(maps)
{
    const item = Object.keys(maps).map((title) => maps[title]);
    return item;
}