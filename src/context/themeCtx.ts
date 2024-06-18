interface IGet {
  theme: 'light' | 'dark'
}

const get: IGet = {
  theme: 'light',
}

const set = (_: IGet) => {}

const themeCtx = { get, set, init: () => {} }

export default themeCtx
