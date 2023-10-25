function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomName() {
  const names = ["Alice", "Marko", "Anja", "David", "Jelena", "Matej"];
  return names[Math.floor(Math.random() * names.length)];
}

export { getRandomColor, getRandomName };
