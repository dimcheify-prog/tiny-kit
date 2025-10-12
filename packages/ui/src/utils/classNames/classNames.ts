// TODO: add conditional args (conditionalClasses, additional)

type ClassType = string | undefined;

export default function classNames(
  cls: ClassType,
  conditionalClasses?: Record<string, boolean | string | undefined>,
  additional?: ClassType[]
): string {
  const classes: string[] = [];

  if (cls) classes.push(cls);

  if (conditionalClasses) {
    const classList = Object.entries(conditionalClasses)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls);
    classes.push(...classList);
  }

  if (additional) {
    additional.forEach(cls => {
      if (cls) classes.push(cls);
    })
  }

  return classes.join(" ");
}
