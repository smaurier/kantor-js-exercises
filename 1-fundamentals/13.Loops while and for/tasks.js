// Task 1: afficher les nombres de 1 à 5 avec while
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// Task 2: afficher les nombres de 5 à 1 avec do...while
let j = 5;
do {
  console.log(j);
  j--;
} while (j > 0);

// Task 3: afficher les nombres pairs de 0 à 10 avec for
for (let k = 0; k <= 10; k++) {
  if (k % 2 === 0) {
    console.log(k);
  }
}

// Task 4: utiliser break
for (let n = 0; n < 10; n++) {
  if (n === 3) break;
  console.log(n);
}

// Task 5: utiliser continue
for (let m = 0; m < 5; m++) {
  if (m === 2) continue;
  console.log(m);
}
