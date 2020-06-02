# Platzom

Platzom es un idioma inventado para el [curso de fundamentos de JavaScript](https://platzi.com/js) en [Platzi](https://platzi.com).

## Descripción del idioma

- Si la palabra termina en "AR" se le quitan esos dos caracteres.
- Si la palabra inicia con Z se le añade "pe" al final
- Si la palabra tiene 10 o más letras se debe partir a la mitad y unir con un "-"
- Si la palabra es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas

## Instalación

```
npm install @omarefg/platzom
```

## Uso

```
import platzom from 'platzom'

platzom("Programar") // Program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarppe
platzom("abecedario") // abece-dario
platzom("sometemos") //SoMeTeMoS
```

## Créditos
- [Sacha Lifszyc](https://twitter.com/slifszyc)
- [Omar Flores](https://twitter.com/omarefg)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
