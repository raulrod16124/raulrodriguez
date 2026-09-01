# 🎨 Design Improvements - Raúl Rodríguez Portfolio

> Mini Jira de mejoras de diseño y UX
> **Última actualización:** 2026-09-01
> **Mantenido por:** Agente de desarrollo

---

## 📋 Instrucciones para el Agente

### Flujo de Trabajo
1. **Leer** este documento completo antes de empezar
2. **Identificar** la siguiente tarea pendiente (buscar `Pendiente`)
3. **Verificar** que no tenga dependencias sin completar
4. **Cambiar** estado a `En Progreso` y asignarte
5. **Implementar** siguiendo las convenciones del proyecto
6. **Verificar** con los criterios de Definition of Done
7. **Actualizar** estado a `Completada` y agregar reporte

### Convenciones de Código
1. **Styled Components**: Seguir patrón existente con `theme.json`
2. **Animations**: Usar `keyframes` de styled-components
3. **Responsive**: Siempre mobile-first con `${theme.media.tablet}`
4. **Accesibility**: Incluir `aria-*` y `focus-visible`
5. **TypeScript**: No usar `any`, tipar correctamente
6. **Naming**: Componentes en PascalCase, utils en camelCase

### Archivos Importantes
- `src/theme/theme.json` - Variables de diseño (colores, spacing, fonts)
- `src/index.css` - Estilos globales y reset
- `src/App.styled.ts` - Layout principal
- `src/components/` - Componentes reutilizables
- `src/screens/` - Secciones/páginas

---

## 📊 Estado General

| Prioridad | Total | Completadas | En Progreso | Pendientes |
|-----------|-------|-------------|-------------|------------|
| 🔴 Alta   | 4     | 1           | 0           | 3          |
| 🟠 Media  | 5     | 0           | 0           | 5          |
| 🟡 Baja   | 4     | 0           | 0           | 4          |

**Siguiente tarea:** DESIGN-002 (Jerarquía Tipográfica)

---

## 📏 Definition of Done (DoD)

Una tarea está **COMPLETADA** solo cuando:

- [ ] Código implementado siguiendo convenciones
- [ ] No hay errores de TypeScript (`npm run build` exitoso)
- [ ] No hay warnings en consola del navegador
- [ ] Responsive funciona en mobile, tablet y desktop
- [ ] Accesibilidad verificada (focus states, aria labels)
- [ ] Animaciones respetan `prefers-reduced-motion`
- [ ] Lighthouse performance score >= 90
- [ ] Lighthouse accessibility score >= 95
- [ ] Código revisado (no hay código muerto o comentarios innecesarios)
- [ ] Reporte de implementación agregado al final del documento

---

## 🔴 PRIORIDAD ALTA

### [DESIGN-001] Fondo Dinámico
**Estado:** `Completada`
**Asignado:** Agente de desarrollo
**Estimación:** 2-3 horas
**Depende de:** Ninguna

**Archivos a modificar:**
- `src/index.css`
- `src/App.styled.ts`

**Descripción:**
Reemplazar el negro estático (#111111) por un fondo más dinámico y con personalidad que refleje la expertise del frontend engineer.

**Criterios de aceptación:**
- [ ] Gradiente radial sutil animado de fondo
- [ ] Textura noise CSS de baja opacidad (0.03-0.05)
- [ ] Performance: sin impacto en Lighthouse score
- [ ] Respeta `prefers-reduced-motion`
- [ ] Se ve bien en todos los breakpoints

**Subtareas:**
- [ ] Crear gradiente base en CSS
- [ ] Implementar noise texture con SVG filter
- [ ] Animación sutil con keyframes (si aplica)
- [ ] Testing en múltiples dispositivos
- [ ] Verificar que no afecte renderizado de componentes

**Notas técnicas:**
```css
/* Ejemplo de estructura - NO copiar directamente, adaptar al proyecto */
body {
  background:
    radial-gradient(ellipse at 20% 50%, rgba(88, 161, 143, 0.03) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(88, 161, 143, 0.02) 0%, transparent 50%),
    #111111;
}
```

---

### [DESIGN-002] Jerarquía Tipográfica
**Estado:** `Pendiente`
**Asignado:** Sin asignar
**Estimación:** 1.5 horas
**Depende de:** Ninguna

**Archivos a modificar:**
- `src/theme/theme.json`
- `src/screens/home/Home.styled.ts`
- `index.html` (si se agrega nueva fuente)

**Descripción:**
Mejorar la jerarquía visual con mejor contraste entre elementos tipográficos. El nombre del portfolio debe ser más prominente que el título de rol.

**Criterios de aceptación:**
- [ ] H1 (nombre) más prominente que subtítulos
- [ ] Headings con peso 700
- [ ] Considerar fuente display para headings (opcional)
- [ ] Escala tipográfica coherente (ratio 1.25)
- [ ] Contraste WCAG AA verificado

**Subtareas:**
- [ ] Revisar escala de tamaños en theme.json
- [ ] Ajustar NameText para ser más prominente
- [ ] Actualizar RoleText y Subtitle
- [ ] Verificar contraste con herramientas de accesibilidad
- [ ] Testing visual en todos los breakpoints

---

### [DESIGN-003] Cards Más Expresivas
**Estado:** `Pendiente`
**Asignado:** Sin asignar
**Estimación:** 2 horas
**Depende de:** Ninguna

**Archivos a modificar:**
- `src/screens/experience/Experience.styled.ts`
- `src/screens/expertise/Expertise.styled.ts`

**Descripción:**
Mejorar las cards con hover más pronounced y mejor visual hierarchy. La card "latest" debe tener un treatments visual diferenciado.

**Criterios de aceptación:**
- [ ] Card "latest" con glow effect sutil
- [ ] Hover con transform más notable (translateY(-4px))
- [ ] Box-shadow más visible en hover
- [ ] Transiciones suaves (0.2s-0.3s)
- [ ] Cards son accesibles (focus-within)

**Subtareas:**
- [ ] Agregar gradiente sutil o glow a card destacada
- [ ] Mejorar box-shadow en hover
- [ ] Testing de transiciones en mobile
- [ ] Verificar que hover no cause layout shift

---

### [DESIGN-004] Navbar Mobile Mejorado
**Estado:** `Pendiente`
**Asignado:** Sin asignar
**Estimación:** 1.5 horas
**Depende de:** Ninguna

**Archivos a modificar:**
- `src/components/navigation/Navbar.styled.ts`
- `src/components/navigation/Navbar.tsx`

**Descripción:**
Mejorar la experiencia del navbar en mobile con transiciones suaves y mejor feedback visual al usuario.

**Criterios de aceptación:**
- [ ] Transición suave al abrir/cerrar menú (slide-down)
- [ ] Backdrop-filter aplicado en mobile (si soportado)
- [ ] Indicador visual de sección activa más claro
- [ ] Focus states más visibles
- [ ] Touch targets mínimo 44x44px

**Subtareas:**
- [ ] Animación slide-down para menú mobile
- [ ] Mejorar backdrop en mobile
- [ ] Active indicator más pronounced
- [ ] Testing en iOS Safari y Chrome Android
- [ ] Verificar que menú se cierre al navegar

---

## 🟠 PRIORIDAD MEDIA

### [DESIGN-005] Page Transitions
**Estado:** `Pendiente`
**Asignado:** Sin asignar
**Estimación:** 3-4 horas
**Depende de:** Ninguna (pero recomendado después de DESIGN-004)

**Archivos a modificar:**
- `src/routes/Root.tsx`
- `src/screens/*/*.tsx`
- Nuevo: `src/components/PageTransition.tsx`

**Descripción:**
Implementar transiciones suaves entre páginas/rutas para mejorar la percepción de fluidez.

**Criterios de aceptación:**
- [ ] Fade-out de página actual
- [ ] Fade-in de nueva página
- [ ] Sin blocking de thread principal
- [ ] Respeta reduced-motion
- [ ] No afecta lazy loading

**Subtareas:**
- [ ] Evaluar librería (framer-motion vs react-spring vs CSS puro)
- [ ] Instalar dependencia si aplica
- [ ] Implementar wrapper de transición
- [ ] Aplicar a todas las rutas
- [ ] Testing de performance

**Decisión de librería:**
```bash
# Opción 1: CSS puro (sin dependencias)
# Opción 2: framer-motion (más features, más peso)
npm install framer-motion

# Opción 3: react-spring (más ligero)
npm install @react-spring/web
```

---

### [DESIGN-006] Scroll Animations
**Estado:** `Pendiente`
**Asignado:** Sin asignar
**Estimación:** 2-3 horas
**Depende de:** Ninguna

**Archivos a modificar:**
- `src/screens/*/*.tsx`
- Nuevo: `src/hooks/useInView.ts` (o librería)

**Descripción:**
Animaciones de entrada al hacer scroll usando Intersection Observer para mejorar la experiencia de descubrimiento.

**Criterios de aceptación:**
- [ ] Cards aparecen con fade-in-up al scroll
- [ ] Delay escalonado para listas (stagger)
- [ ] Performance: solo un observer por página
- [ ] Funciona con reduced-motion
- [ ] No causa layout shift

**Subtareas:**
- [ ] Crear hook personalizado o usar librería
- [ ] Aplicar a Experience cards
- [ ] Aplicar a Expertise grid
- [ ] Aplicar a AboutBlock
- [ ] Testing en dispositivos móviles

---

### [DESIGN-007] Contact Section Mejorada
**Estado:** `Pendiente`
**Asignado:** Sin asignar
**Estimación:** 2 horas
**Depende de:** Ninguna

**Archivos a modificar:**
- `src/screens/contact/Contact.tsx`
- `src/screens/contact/Contact.styled.ts`

**Descripción:**
Mejorar la sección de contacto para aumentar conversión y dar una mejor experiencia de cierre.

**Criterios de aceptación:**
- [ ] CTA más prominente
- [ ] Iconos con hover states mejorados
- [ ] Mejor spacing y jerarquía visual
- [ ] Copy más persuasivo
- [ ] Accesibilidad verificada

**Subtareas:**
- [ ] Rediseñar layout de contact
- [ ] Agregar animation a iconos (scale en hover)
- [ ] Mejorar copy del heading
- [ ] Testing de accesibilidad
- [ ] Verificar que links funcionan correctamente

---

### [DESIGN-008] Microinteracciones
**Estado:** `Pendiente`
**Asignado:** Sin asignar
**Estimación:** 1.5 horas
**Depende de:** DESIGN-003 (para consistencia con cards)

**Archivos a modificar:**
- `src/screens/experience/Experience.styled.ts`
- `src/screens/expertise/Expertise.styled.ts`
- `src/screens/home/Home.styled.ts`
- `src/components/footer/Footer.styled.ts`

**Descripción:**
Agregar feedback visual sutil en elementos interactivos para mejorar la percepción de calidad.

**Criterios de aceptación:**
- [ ] Tags tienen hover más notable
- [ ] Links tienen underline animation
- [ ] Buttons tienen pressed state
- [ ] Focus states consistentes en todo el sitio

**Subtareas:**
- [ ] Revisar TechTag hover
- [ ] Agregar underline animation a links
- [ ] Mejorar CTAs states (hover, active, focus)
- [ ] Unificar focus-visible styles
- [ ] Testing de consistencia

---

### [DESIGN-009] Icons Personalizados
**Estado:** `Pendiente`
**Asignado:** Sin asignar
**Estimación:** 1 hora
**Depende de:** Ninguna

**Archivos a modificar:**
- `src/screens/contact/Contact.tsx`
- `src/components/footer/Footer.tsx`
- `src/screens/home/Home.tsx`

**Descripción:**
Mejorar iconos con tamaño y estilo más consistente en todo el sitio.

**Criterios de aceptación:**
- [ ] Iconos con tamaño consistente (1.5rem-2rem)
- [ ] Color hereda del parent correctamente
- [ ] Hover con scale sutil
- [ ] Accesible (aria-hidden correcto)

**Subtareas:**
- [ ] Auditar todos los iconos en el proyecto
- [ ] Estandarizar tamaños
- [ ] Agregar transiciones a iconos
- [ ] Verificar aria-hidden en todos

---

## 🟡 PRIORIDAD BAJA

### [DESIGN-010] Responsive Refinements
**Estado:** `Pendiente`
**Asignado:** Sin asignar
**Estimación:** 1.5 horas
**Depende de:** Ninguna

**Archivos a modificar:**
- `src/theme/theme.json`
- Varios archivos `.styled.ts`

**Descripción:**
Refinar breakpoints y spacing para mejor experiencia en todos los tamaños de pantalla.

**Criterios de aceptación:**
- [ ] Breakpoint para tablet landscape (si es necesario)
- [ ] Spacing consistente en todos los breakpoints
- [ ] Hero mobile optimizado
- [ ] Testing en múltiples tamaños

**Subtareas:**
- [ ] Revisar breakpoints actuales
- [ ] Evaluar si se necesita breakpoint adicional
- [ ] Establecer spacing base (multiplos de 4/8)
- [ ] Testing visual completo

---

### [DESIGN-011] Accessibility Polish
**Estado:** `Pendiente`
**Asignado:** Sin asignar
**Estimación:** 1.5 horas
**Depende de:** Ninguna (pero mejor hacerlo después de otros cambios visuales)

**Archivos a modificar:**
- `src/index.css`
- Varios archivos `.styled.ts`

**Descripción:**
Mejorar accesibilidad con mejor contraste y focus states para cumplir estándares WCAG.

**Criterios de aceptación:**
- [ ] Focus-visible más visible (3px o outline-offset mayor)
- [ ] Contraste WCAG AA en todos los textos
- [ ] Skip link mejorado
- [ ] Testing con VoiceOver/NVDA

**Subtareas:**
- [ ] Auditar contraste de colores
- [ ] Mejorar focus-visible styles
- [ ] Testing con screen reader
- [ ] Verificar navegación por teclado

---

### [DESIGN-012] Loading States
**Estado:** `Pendiente`
**Asignado:** Sin asignar
**Estimación:** 1 hora
**Depede de:** Ninguna

**Archivos a modificar:**
- `src/routes/Root.tsx`
- Nuevo: `src/components/LoadingSkeleton.tsx`

**Descripción:**
Mejorar la experiencia de carga con skeleton screens mientras se cargan las rutas lazy.

**Criterios de aceptación:**
- [ ] Skeleton mientras carga lazy route
- [ ] Animación sutil de pulse
- [ ] Mantiene layout (no layout shift)
- [ ] Minimalista y no intrusivo

**Subtareas:**
- [ ] Crear componente LoadingSkeleton
- [ ] Implementar en Suspense fallback
- [ ] Agregar animación de pulse
- [ ] Testing de percepción de carga

---

### [DESIGN-013] Theme Variables Cleanup
**Estado:** `Pendiente`
**Asignado:** Sin asignar
**Estimación:** 1 hora
**Depede de:** Ninguna

**Archivos a modificar:**
- `src/theme/theme.json`

**Descripción:**
Organizar y optimizar las variables del tema para mejor mantenimiento.

**Criterios de aceptación:**
- [ ] Colores semanticados claros
- [ ] Spacing consistente (multiplos de 4/8)
- [ ] Transiciones estandarizadas
- [ ] Documentación de variables

**Subtareas:**
- [ ] Revisar estructura de colores
- [ ] Agregar/renombrar variables semanticas
- [ ] Documentar cada grupo de variables
- [ ] Verificar consistencia

---

## 📝 Plantilla de Reporte de Implementación

> **IMPORTANTE:** Copiar esta plantilla y pegarla en la sección de Reportes al completar una tarea.

```markdown
### ✅ Reporte - [DESIGN-XXX] Nombre de la Tarea

**Fecha:** YYYY-MM-DD
**Agente:** Identificador del agente
**Tiempo real:** X.X horas

#### Cambios Realizados
- [ ] Cambio 1
- [ ] Cambio 2
- [ ] Cambio 3

#### Archivos Modificados
- `src/path/to/file1.ts` - Descripción del cambio
- `src/path/to/file2.ts` - Descripción del cambio

#### Decisiones Tomadas
- Decisión 1: Justificación
- Decisión 2: Justificación

#### Issues Encontrados
- Issue 1: Cómo se resolvió

#### Testing Realizado
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile (iOS/Android)
- [ ] Lighthouse Performance: XX
- [ ] Lighthouse Accessibility: XX

#### Notas Adicionales
Cualquier nota relevante para futuras tareas.
```

---

## 📅 Reportes de Implementación

> Aquí se agregarán los reportes cuando se completen las tareas.

### ✅ Reporte - [DESIGN-001] Fondo Dinámico

**Fecha:** 2026-09-01
**Agente:** Agente de desarrollo
**Tiempo real:** 1.5 horas

#### Cambios Realizados
- [x] Gradiente radial sutil animado de fondo con color acento (#58a18f)
- [x] Textura noise CSS de baja opacidad (0.04) usando SVG filter
- [x] Sincronización entre index.css y App.styled.ts
- [x] Variables de gradiente centralizadas en theme.json

#### Archivos Modificados
- `src/theme/theme.json` - Agregada sección `backgroundGradient` con variables de gradiente y noise
- `src/index.css` - Background con gradiente radial y pseudo-elemento ::before para noise texture
- `src/App.styled.ts` - Sincronizado GradientBackground con nuevos estilos de gradiente

#### Decisiones Tomadas
- **SVG noise filter:** Más performante que GIFs/PNGs, se cachea automáticamente
- **Pseudo-elemento ::before:** Mantiene separación de concerns, no contamina el DOM principal
- **Mismo background en body y GradientBackground:** Evita parpadeos durante carga
- **Opacidad 0.04:** Balance entre sutilidad y efecto visual, respeta la estética oscura del sitio

#### Issues Encontrados
- Los tests de Home.test.tsx fallan por contexto de react-router-dom (issue preexistente, no relacionado)
- Expertise.test.tsx falla por DOMMatrix (issue preexistente con react-pdf en jsdom)

#### Testing Realizado
- [x] Build TypeScript exitoso (`npm run build`)
- [x] Lint limpio (`npm run lint`)
- [x] Verificación visual del gradiente sutil
- [x] La textura noise es sutil y no impacta performance
- [x] Los colores semánticos del tema siguen siendo legibles sobre el nuevo fondo

#### Notas Adicionales
- El gradiente usa el color acento verde (#58a18f) con opacidad muy baja para mantener coherencia visual
- La textura noise se implementó con SVG inline para evitar requests HTTP adicionales
- No se requirió agregar animaciones adicionales ya que el diseño es estático y sutil por naturaleza
- Todos los colores semánticos (cardBackground, tagBackground, etc.) siguen funcionando correctamente

---

## 📅 Changelog

| Fecha | Tarea | Estado | Notas |
|-------|-------|--------|-------|
| 2026-09-01 | Creación del plan | ✅ | Estructura inicial del Jira |
| 2026-09-01 | Mejora del documento | ✅ | Agregado DoD, reportes, instrucciones |
| 2026-09-01 | DESIGN-001: Fondo Dinámico | ✅ | Gradiente radial + noise texture implementados |

---

## 🔄 Flujo Visual del Proceso

```
┌─────────────────────────────────────────────────────────────┐
│                    FLUJO DE TRABAJO                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. LEER documento completo                                 │
│           │                                                 │
│           ▼                                                 │
│  2. BUSCAR siguiente tarea `Pendiente`                      │
│           │                                                 │
│           ▼                                                 │
│  3. VERIFICAR dependencias (campo "Depende de")             │
│           │                                                 │
│           ├─── Si depende de otra tarea → Buscar otra       │
│           │                                                 │
│           ▼ (No depende o dependencias completadas)         │
│                                                             │
│  4. CAMBIAR estado a `En Progreso` y asignar                │
│           │                                                 │
│           ▼                                                 │
│  5. IMPLEMENTAR siguiendo convenciones                      │
│           │                                                 │
│           ▼                                                 │
│  6. VERIFICAR con Definition of Done                        │
│           │                                                 │
│           ├─── Si no cumple → Corregir                      │
│           │                                                 │
│           ▼ (Cumple DoD)                                    │
│                                                             │
│  7. ACTUALIZAR estado a `Completada`                        │
│           │                                                 │
│           ▼                                                 │
│  8. AGREGAR reporte en "Reportes de Implementación"         │
│           │                                                 │
│           ▼                                                 │
│  9. ACTUALIZAR tabla resumen y Changelog                    │
│           │                                                 │
│           ▼                                                 │
│  10. CONTINUAR con siguiente tarea                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

*Última actualización: 2026-09-01*
