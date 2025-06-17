# Notes personnelles

- Les flottants posent problème à cause de la représentation binaire (IEEE-754)
- Ne jamais faire confiance à `a === NaN`, utiliser `Number.isNaN`
- Travailler en entiers autant que possible
- `BigInt` est une solution élégante pour les grands entiers, mais attention : pas de mix avec `number`
