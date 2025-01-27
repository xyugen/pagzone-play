const TITLE = "PZPlay";

export default function getTitle(title?: string) {
  if (!title) return TITLE;
  return `%s | ${TITLE}`.replace("%s", title);
}
