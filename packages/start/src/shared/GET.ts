/**
 *
 * Read more: https://docs.solidjs.com/solid-start/reference/server/get
 */
export function GET<T extends (...args: any[]) => any>(fn: T) {
  return (...args: Parameters<T>) => {
    return (fn as any).GET(...args) as ReturnType<T>;
  };
}
