# rcv-sdk-sample-electron

An Electron application with React and TypeScript, which dependes on RCV Client Web Video SDK and React UI components SDK.

- [RCV Client Web Video SDK](https://www.npmjs.com/package/@ringcentral/video-sdk)
- [React UI components SDK](https://www.npmjs.com/package/@ringcentral/video-sdk-react)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ pnpm install
```

### Development

1. Config **src/renderer/src/config.ts** file and place your client id, client secret, RingCentral extension user name, and password.

```
window.initConfig = {
    clientId: '', 
    clientSecret: '', 
    jwt: '' // or authorize by jwt
    userName: '', // authorize by password & userName 
    password: '',
}
```

2. Run local app
```bash
$ pnpm run dev
```

### Build

```bash
# For windows
$ pnpm run build:win

# For macOS
$ pnpm run build:mac

# For Linux
$ pnpm run build:linux
```
