const HTML_ENTITIES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export const escapeHtml = (value: string): string =>
  value.replace(/[&<>"']/g, (char) => HTML_ENTITIES[char] ?? char);

/** Escapes user text and keeps its line breaks for HTML emails. */
export const toHtmlParagraph = (value: string): string =>
  escapeHtml(value).replace(/\r?\n/g, "<br />");
