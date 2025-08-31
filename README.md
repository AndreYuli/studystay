
# StudyStay

Aplicación web para gestión de propiedades y reservas, desarrollada con Next.js, TypeScript y Tailwind CSS.

## Arquitectura

- **Next.js (App Router):** Estructura basada en carpetas dentro de `app/` para rutas y páginas.
- **Componentes reutilizables:** Ubicados en `components/` y `components/ui/`.
- **Hooks personalizados:** En `hooks/`.
- **Utilidades:** En `lib/utils.ts`.
- **Estilos globales:** En `styles/globals.css` y `app/globals.css`.
- **Archivos de configuración:**
  - `next.config.mjs`: Configuración de Next.js
  - `tailwind.config.ts`: Configuración de Tailwind CSS
  - `postcss.config.mjs`: Configuración de PostCSS
  - `tsconfig.json`: Configuración de TypeScript

## Herramientas de desarrollo

- **Next.js**: Framework React para SSR y SSG
- **TypeScript**: Tipado estático para JavaScript
- **Tailwind CSS**: Framework de estilos utilitario
- **pnpm**: Gestor de paquetes rápido y eficiente
- **PostCSS**: Procesador de CSS

## Estructura de carpetas principal

```
app/                # Páginas y rutas principales
components/         # Componentes reutilizables
hooks/              # Hooks personalizados
lib/                # Funciones utilitarias
public/             # Recursos estáticos
styles/             # Estilos globales
```

## Cómo ejecutar el proyecto

1. Instala las dependencias:
	```powershell
	pnpm install
	```

2. Inicia el servidor de desarrollo:
	```powershell
	pnpm dev
	```

3. Abre tu navegador en [http://localhost:3000](http://localhost:3000)

---

Si tienes problemas con pnpm, instálalo globalmente:
```powershell
npm install -g pnpm
```

## Autor

AndreYuli + vo dev
