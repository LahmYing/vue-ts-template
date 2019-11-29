const [sessionStorage, localStorage] =
  ['sessionStorage', 'localStorage'].map(name => window[name] ||
    { getItem: () => void 0, setItem: () => void 0, removeItem: () => void 0 })

export {
  sessionStorage,
  localStorage
}
