const PI = Math.PI;

function degToRad(angleDegrees) {
  return (angleDegrees * PI) / 180;
}

function hajmniHisoblash(
  radius,
  umumiyBalandlik,
  olchanganMasofa,
  burchakGrad
) {
  const burchakRad = degToRad(burchakGrad);
  const olchanganMasofaTogirlangan = olchanganMasofa * Math.cos(burchakRad);
  const suyuqlikBalandligi = umumiyBalandlik - olchanganMasofaTogirlangan;
  const hajm = PI * Math.pow(radius, 2) * suyuqlikBalandligi;
  return hajm;
}

function hisobla() {
  const radius = parseFloat(document.getElementById("radius").value);
  const umumiyBalandlik = parseFloat(
    document.getElementById("balandlik").value
  );
  const olchanganMasofa = parseFloat(document.getElementById("masofa").value);
  const burchakGrad = 27.0;

  const hajm = hajmniHisoblash(
    radius,
    umumiyBalandlik,
    olchanganMasofa,
    burchakGrad
  );

  document.getElementById(
    "natija"
  ).innerText = `Idishdagi suyuqlik hajmi: ${hajm.toFixed(2)} kub metr`;
}
