# Design System

Componentes React conectados a Figma via Code Connect.  
Basado en [Untitled UI](https://www.untitledui.com/).

---

## Componentes

| Componente | Estado | Figma |
|------------|--------|-------|
| Button | ✅ Listo | [Ver en Figma](https://www.figma.com/design/1HNJgu9OFzzeXg40P7eylw) |

---

## Uso

```tsx
import { Button } from './src/components/Button';

// Primary
<Button>Guardar</Button>

// Secondary
<Button hierarchy="secondary-gray">Cancelar</Button>

// Con dot leading
<Button dotLeading>Nueva tarea</Button>

// Loading
<Button loading>Procesando...</Button>

// Tamaños
<Button size="sm">Pequeño</Button>
<Button size="lg">Grande</Button>
```

## Props — Button

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `hierarchy` | `primary` \| `secondary-color` \| `secondary-gray` \| `tertiary-color` \| `tertiary-gray` \| `link-color` \| `link-gray` | `primary` | Estilo visual |
| `size` | `sm` \| `md` \| `lg` \| `xl` \| `2xl` | `md` | Tamaño |
| `dotLeading` | `boolean` | `false` | Punto decorativo antes del texto |
| `iconLeading` | `ReactNode` | — | Ícono antes del texto |
| `iconTrailing` | `ReactNode` | — | Ícono después del texto |
| `iconOnly` | `boolean` | `false` | Solo ícono, sin texto |
| `disabled` | `boolean` | `false` | Estado deshabilitado |
| `loading` | `boolean` | `false` | Estado de carga con spinner |

---

## Code Connect — Figma

Para publicar los componentes a Figma:

```bash
# 1. Instalar dependencias
npm install

# 2. Autenticarse con Figma (necesitás tu token de API)
export FIGMA_ACCESS_TOKEN=tu_token_aqui

# 3. Publicar
npm run figma:publish
```

Tu token de Figma lo encontrás en:  
**Figma → Settings → Account → Personal access tokens**

---

## Estructura

```
src/
  components/
    Button/
      Button.tsx         # Componente React
      Button.css         # Estilos y tokens
      Button.figma.tsx   # Code Connect mapping
      index.ts           # Exportaciones
  index.ts               # Exportación global
```
