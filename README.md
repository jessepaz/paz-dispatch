# PAZ Dispatch v1.0 Beta

Firebase-ready starter build for PAZ Transport.

## Included
- Dispatcher dashboard
- Create dispatch
- Dispatch IDs
- Truck movement between jobs/interplant
- Office-only travel time
- El Mirage 1-hour default
- Jobsite pin field
- Driver preview
- Timecard rule preview
- Firestore and Storage rule templates

## Local setup
1. Install Node.js LTS.
2. Run `npm install`.
3. Replace the placeholders in `src/firebase.js` with your Firebase Web App config.
4. Run `npm run dev`.

## Firebase deployment
1. Copy `.firebaserc.example` to `.firebaserc` and confirm the project ID.
2. Run `firebase login`.
3. Run `firebase use paz-dispatch`.
4. Run `npm install`.
5. Run `npm run build`.
6. Run `firebase deploy`.

## Important
The UI is a functional starter. Authentication, Firestore writes, GPS background tracking, phone verification, and document uploads still need their production implementation and testing before driver rollout.
