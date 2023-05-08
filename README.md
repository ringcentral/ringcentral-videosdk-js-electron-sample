# RingCentral Video Client SDK Electron Sample

An Electron application with React and TypeScript, which dependes on RCV Client Web Video SDK and React UI components SDK.
This sample help you to get started a video meeting by RingCentral platform accounts.

- [RCV Client Web Video SDK](https://www.npmjs.com/package/@ringcentral/video-sdk)
- [React UI components SDK](https://www.npmjs.com/package/@ringcentral/video-sdk-react)


## What is RingCentral Video Client SDK?

By RingCentral video SDK, you could use less efforts to create a web application with real-time audio/video communications.

With the video client SDK you can:

- Joins or starts a meeting with a valid access token.
- Joins the meeting as a guest. (The app needs to get the authorization of the guest type first)
- Starts the audio/video communication with participants.
- Mutes and unmutes the local audio.
- Starts and stops the local video.
- Sharing the device screen or application.
- Sends in-meeting private and public chat messages.
- Starts an stops the local audio and video device test.
- Receives meeting and media event callback, such as participant joined/leave, audio/video muted/unmuted.
- Host or moderator privileges:
    - Mutes and unmutes a specific participant' audio or video.
    - Mutes and unmutes all meeting users' audio or video.
    - Locks/unlocks the meeting.
    - Starts and pauses the recording.
    - Assigns and revokes the moderator role with meeting users.
    - Puts in-meeting users into the waiting room.
    - Admits/denies a user from the waiting room.
    - Admits all users from the waiting room.
    - Stops remote users' sharing.
    - Locks and unlocks the meeting sharing function.
    - Removes the meeting user from the active meeting.
- Starts and pauses recording.
- Starts and pauses close captions.
- Starts and pauses live transcription.

More changes refers to [Release notes](https://github.com/ringcentral/ringcentral-videosdk-js/wiki/Release-Notes).

## Project Setup

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

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