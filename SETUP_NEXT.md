# PAZ Dispatch Pro - Next Steps

## 1. Upload to GitHub
Upload the CONTENTS of this folder to:

https://github.com/jessepaz/paz-dispatch

The following files should be visible at the top level of the repository:

- public/
- firebase.json
- .firebaserc
- firestore.rules
- storage.rules
- README.md
- SETUP_NEXT.md

Do not upload the ZIP itself.

## 2. Deploy with Firebase CLI

Open Command Prompt inside this folder and run:

```bash
npm install -g firebase-tools
firebase login
firebase use paz-dispatch
firebase deploy --only hosting
```

Sign in with:

jesse@paztrans.com

## 3. Expected live address

Firebase should provide a URL similar to:

https://paz-dispatch.web.app

## 4. Important

This starter version is a working front-end foundation.

The following still need production connection and testing:

- Firebase Authentication
- Firestore live dispatch syncing
- Cloud Storage paperwork uploads
- Driver phone login
- GPS/background tracking
- Timecard locking and audit logs
- Jobsite map pin integration

Do not use it for payroll or live driver tracking until those modules are connected and tested.
