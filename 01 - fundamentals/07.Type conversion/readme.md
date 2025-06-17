# Type Conversion (Conversions de type)

## 1. Conversion explicite

### → En string : `String(value)`
- `String(null)` → `"null"`
- `String(undefined)` → `"undefined"`
- `String(true)` → `"true"`, `String(false)` → `"false"`
- `String(123)` → `"123"`

### → En nombre : `Number(value)`
- `Number("123")` → `123`
- `Number("   123   ")` → `123` (espaces ignorés)
- `Number("")` → `0`
- `Number(null)` → `0`
- `Number(undefined)` → `NaN`
- `Number(true)` → `1`, `Number(false)` → `0`
- `Number("abc")` → `NaN`

### → En booléen : `Boolean(value)`
- Falsy values (évaluées à `false`) :
  - `""` (chaîne vide)
  - `0`, `-0`
  - `null`
  - `undefined`
  - `NaN`

- Tout le reste est `true`, même :
  - `"0"` → `true` (string non vide)
  - `"false"` → `true` (string non vide)
  - `[]` → `true`
  - `{}` → `true`



