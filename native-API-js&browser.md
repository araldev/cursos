# 🧩 APIs nativas del navegador (sin librerías externas)

## 1. Web Speech API (voz ↔ texto)

| **Interfaz**               | **Métodos / Propiedades clave**                                                | **Eventos principales**                          | **Notas / Ejemplo rápido**                                                      |
| -------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------------------------------------- |
| `SpeechRecognition`        | `.start()` – `.stop()` – `.abort()` – `lang` – `continuous` – `interimResults` | `onresult` – `onerror` – `onend` – `onspeechend` | `const rec = new (webkitSpeechRecognition)();` `rec.lang='es-ES'; rec.start();` |
| `SpeechSynthesis`          | `.speak(utterance)` – `.cancel()` – `.pause()` – `.resume()` – `.getVoices()`  | `onvoiceschanged`                                | `speechSynthesis.speak(new SpeechSynthesisUtterance('Hola'));`                  |
| `SpeechSynthesisUtterance` | `text` – `voice` – `volume` – `rate` – `pitch` – `lang`                        | `onstart` – `onend` – `onerror` – `onboundary`   | `new SpeechSynthesisUtterance('Hola');`                                         |

### ✅ Ejemplo de uso Web Speech API

#### SpeechRecognition (voz→texto)

```js
const rec = new (window.SpeechRecognition || webkitSpeechRecognition)();
rec.lang = "es-ES";
rec.continuous = false;
rec.interimResults = false;

rec.onstart = () => console.log("Escuchando…");
rec.onresult = (e) => console.log("Reconocido:", e.results[0][0].transcript);
rec.onerror = (e) => console.error(e.error);

// Iniciar con click
document.addEventListener("click", () => rec.start(), { once: true });
```

#### SpeechSynthesis (texto→voz)

```js
const utter = new SpeechSynthesisUtterance("Hola desde el navegador");
utter.lang = "es-ES";
utter.rate = 1.1;
speechSynthesis.speak(utter);
```

#### SpeechSynthesisUtterance (crear objeto que le pasaremos a speechSynthesis)

Este método es el que crea el texto con sus configuraciones para pasarselo a SpeechSynthesis

```js
// Crear la frase que queremos escuchar
const utter = new SpeechSynthesisUtterance(
  "¡Hola! Esta es la API de síntesis de voz nativa del navegador."
);
utter.lang = "es-ES"; // idioma
utter.rate = 1.0; // velocidad (0.1 – 10)
utter.pitch = 1.0; // tono   (0 – 2)
utter.volume = 1.0; // volumen (0 – 1)

// Eventos (opcional)
utter.onstart = () => console.log("► Empezando síntesis");
utter.onend = () => console.log("◄ Síntesis finalizada");

// Reproducir
speechSynthesis.speak(utter);
```

## 2. Translation API (Chrome 126+ “built-in”)

| **Interfaz**         | **Métodos / Propiedades clave**                                                                      | **Ejemplo**                                                                                             |
| -------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `window.translation` | `.createTranslator({sourceLanguage, targetLanguage})` – `.canTranslate(config)` – `.translate(text)` | `const t = await translation.createTranslator({source:'en', target:'es'}); await t.translate('Hello');` |

### ✅ Ejemplo de uso Translation API

```js
/* Requiere HTTPS y la flag experimental */
if (!("translation" in window)) {
  console.warn("Tu navegador no soporta Translator API");
} else {
  // 1. Crear traductor (es→en)
  const translator = await window.translation.createTranslator({
    sourceLanguage: "es",
    targetLanguage: "en",
  });

  // 2. Traducir
  const original = "¡Hola, mundo!";
  const translated = await translator.translate(original);
  console.log(original, "→", translated); // Hello, world!

  // 3. Liberar recursos
  translator.destroy();
}
```

## 3. 🔍 Language Detector API (nativa del navegador)

| **Interfaz**         | **Métodos / Propiedades clave**                                               | **Ejemplo**                                                                                                                               |
| -------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `window.translation` | `.createDetector()` – `detector.detect(text, options)` – `detector.destroy()` | `const d = await translation.createDetector(); const res = await d.detect('Hola mundo'); // [{detectedLanguage: 'es', confidence: 0.98}]` |

### ✅ Ejemplo de uso Language Detector API

```js
if (!("translation" in window)) {
  console.warn("Tu navegador no soporta Language Detector API");
} else {
  // 1. Crear detector
  const detector = await window.translation.createDetector({
    expectedInputLanguages: ["en", "es", "fr"], // ayuda al motor
  });

  // 2. Detectar
  const text = "Bonjour le monde";
  const results = await detector.detect(text);
  console.table(results); // [{detectedLanguage: 'fr', confidence: 0.97}]

  // 3. Liberar recursos
  detector.destroy();
}
```
