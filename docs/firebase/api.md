# Api (Firebase)

The Firebase package api is centralized into a single function `createFirebase`. It requires the Firebase settings ([Creating a project](/docs/firebase/creating-a-project.md)) to start.

```ts
import { createFirebase } from "@chimera/firebase";

const firebase = createFirebase(firebaseConfig);
```