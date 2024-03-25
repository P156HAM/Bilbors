export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/ä/g, "a") // Replace ä with a
    .replace(/ö/g, "o") // Replace ö with o
    .replace(/å/g, "a") // Replace å with a
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "och") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}
