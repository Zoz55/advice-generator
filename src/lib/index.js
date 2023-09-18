export async function getNewAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const advicedata = await response.json();
  return advicedata.slip;
};

