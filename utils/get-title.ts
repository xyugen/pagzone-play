const TITLE_TEMPLATE = "%s | Pagzone Play";

export default function getTitle(title: string = "Home") {
  return TITLE_TEMPLATE.replace("%s", title);
}
