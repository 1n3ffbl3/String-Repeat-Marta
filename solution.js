function repeatStringNTimes(n, string) {
  if (n <= 0) {
    return "";
  }
  return string.repeat(n);
}
repeatStringNTimes(2, "pitu");


/*
Second solution
function repeatStringNTimes(n, string) {
  if (n <= 0) {
    throw "n must be positive number";
  }
  return string.repeat(n);
}
*/
