// ASYNC/AWAIT
function tempos(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg != "string") reject("Erro")
      setTimeout(() => {
        console.log(msg);
        resolve(msg);

      }, 1000);
  });
}
async function executar() {
  try {
    const fase1 = setTimeout(()=>{
        esperaAi("Fase 1", tempos(1, 2));
    },4000) 
    const fase2 = await esperaAi("Fase 2", tempos(5, 8));
    const fase3 = await esperaAi("Fase 3", tempos(5, 8));
    const fase4 = await esperaAi("Fase 4", tempos(5, 8));
  } catch (e) {
    console.log("Erro", e);
  }
}
executar();
