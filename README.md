# Monorepo Starter for Expo (app) and react js (web) with a commonly shared code.

Run `yarn install` in the root directory to install all the dependencies.

Run `yarn build:watch` in the packages/common directory and keep the `watch` running to monitor the changes in the common directory

`cd packages/common`
`yarn build:watch`

Run `yarn start` in `app` folder and keep it running in a separate terminal.
Open `http://localhost:19002/` to run the app in respective devices or emulator.

`cd packages/app`
`yarn start`

Run `yarn start` in `web` folder and keep it running in a separate terminal.
Open `http://localhost:3000/` to view the web app.

`cd packages/web`
`yarn start`

Now you can add features in `common` and use it in `app` or/and `web`.

Happy code sharing :)

Huge shout-out to https://github.com/benawad and https://github.com/DNature

You can watch Ben's video tutorial in the following link :<br />
https://youtube.com/playlist?list=PLN3n1USn4xll9wq0rw0ECrO0j2PFzuXtn<br />
https://github.com/benawad/react-native-web-series/

You can see DNature's repo on which this monorepo was built, in the following link :<br />
https://github.com/DNature/expo-yarn-workspace-demo
