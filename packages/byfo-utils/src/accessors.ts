export function useAccessor<T>(propNames: (keyof T)[], context: T & { _store?: { [K in keyof T]?: T[K] }; _watcherMap?: Map<keyof T, { [id: string]: (v: any) => void }> }) {
  context._store = {};
  context._watcherMap = new Map();
  for (const prop of propNames) {
    const key = prop as keyof T;
    Object.defineProperty(context, key, {
      get() {
        return context._store?.[key];
      },
      set(v) {
        context._store[key] = v;
        const watchers = context._watcherMap.get(key) ?? {};
        Object.values(watchers).forEach((watcher: (val: typeof v) => void) => watcher(v));
      },
    });
  }

  return function on<T extends (typeof propNames)[number]>(prop: T, fn: (v: (typeof context)[T]) => void, { instant }: { instant?: boolean } = {}): () => void {
    const watchers = this._watcherMap.get(prop) ?? {};
    let id = Math.floor(Math.random() * 10000).toString();
    while (id in watchers) {
      Math.floor(Math.random() * 10000).toString();
    }
    watchers[id] = fn;
    this._watcherMap.set(prop, watchers);
    if (instant) {
      fn(this[prop]);
    }
    return () => {
      const watchers = this._watcherMap.get(prop);
      delete watchers[id];
      this._watcherMap.set(prop, watchers);
    };
  };
}
