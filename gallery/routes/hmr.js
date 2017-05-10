let store = null;

export function registerStore(s) {
   store = s;
   store.set('version', 1);
}

export function hmr(module) {
   if (module && module.hot) {
      module.hot.accept();
      store.update('version', v => v + 1);
   }
}