// Sans "use strict"
undeclared = 42; // ✅ passe (mauvaise pratique : variable globale implicite)

// Avec "use strict"
"use strict";
undeclared = 42; // ❌ ReferenceError: undeclared is not defined

"use strict";
let obj = {};
Object.defineProperty(obj, "x", { value: 1, writable: false });
obj.x = 2; // ❌ TypeError en strict mode