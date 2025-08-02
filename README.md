# CardManager 💳

Una aplicación moderna de gestión de tarjetas corporativas construida con Vue 3, TypeScript y Tailwind CSS. Permite a las empresas administrar de manera eficiente sus tarjetas corporativas, empleados y transacciones con una interfaz elegante y funcional.

![CardManager Dashboard](https://via.placeholder.com/800x400/4f46e5/ffffff?text=CardManager+Dashboard)

## ✨ Características

### 🏢 Gestión Empresarial
- **Dashboard Ejecutivo**: Vista panorámica con métricas clave en tiempo real
- **Control Total**: Administra presupuestos, gastos y límites corporativos
- **Reportes Visuales**: Estadísticas detalladas con gráficos interactivos

### 💳 Administración de Tarjetas
- **Pool Corporativo**: Gestión centralizada de todas las tarjetas de la empresa
- **Estados Dinámicos**: Tarjetas disponibles, asignadas y con seguimiento en tiempo real
- **Asignación Inteligente**: Sistema de asignación y revocación de tarjetas
- **Múltiples Proveedores**: Soporte para Visa, Mastercard y American Express

### 👥 Gestión de Usuarios
- **Directorio de Empleados**: Administración completa de perfiles de usuario
- **Roles y Permisos**: Sistema de roles (Empleado, Manager, Director, Admin)
- **Asignación de Tarjetas**: Vinculación directa entre usuarios y tarjetas
- **Control de Presupuestos**: Límites personalizados por empleado

### 📊 Monitor de Transacciones
- **Seguimiento en Tiempo Real**: Monitoreo de todas las transacciones corporativas
- **Sistema de Conciliación**: Proceso de aprobación y validación de gastos
- **Gestión de Recibos**: Upload y tracking de comprobantes
- **Filtros Avanzados**: Búsqueda por estado, usuario, comercio y fechas

## 🚀 Demo en Vivo

La aplicación incluye una demo completa con datos de prueba para explorar todas las funcionalidades:

**Credenciales de Demo:**
- **Email**: `info@card.com`
- **Contraseña**: `test`

## 🛠️ Tecnologías

- **Frontend**: Vue 3 + Composition API
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + CSS Modules
- **Iconos**: Lucide Vue Next
- **Build**: Vite
- **Linting**: ESLint + Prettier

## 📦 Instalación

### Prerrequisitos
- Node.js 16.0+ 
- npm 7+ o yarn 1.22+

### Configuración Local

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/card-manager.git
cd card-manager

# Instalar dependencias
npm install
# o
yarn install

# Iniciar servidor de desarrollo
npm run dev
# o 
yarn dev

# Abrir en el navegador
# http://localhost:5173
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con hot-reload

# Producción
npm run build        # Build optimizado para producción
npm run preview      # Preview del build de producción

# Calidad de Código
npm run lint         # Linting con ESLint
npm run lint:fix     # Auto-fix de problemas de linting
npm run format       # Formateo con Prettier

# Testing
npm run test         # Ejecutar tests unitarios
npm run test:e2e     # Tests end-to-end (si están configurados)
```

## 📁 Estructura del Proyecto

```
card-manager/
├── public/                 # Archivos públicos estáticos
├── src/
│   ├── components/         # Componentes Vue reutilizables
│   │   ├── CardsView.vue      # Gestión de tarjetas
│   │   ├── UsersView.vue      # Gestión de usuarios  
│   │   ├── TransactionsView.vue # Monitor de transacciones
│   │   └── LandingPage.vue    # Página de bienvenida
│   ├── types/             # Definiciones de TypeScript
│   ├── utils/             # Utilidades y helpers
│   ├── assets/            # Assets estáticos (imágenes, estilos)
│   ├── App.vue            # Componente raíz
│   └── main.ts            # Punto de entrada de la aplicación
├── index.html             # Template HTML principal
├── package.json           # Dependencias y scripts
├── tailwind.config.js     # Configuración de Tailwind
├── tsconfig.json          # Configuración de TypeScript
└── vite.config.ts         # Configuración de Vite
```

## 🎨 Componentes Principales

### App.vue
Componente principal que maneja:
- Sistema de autenticación demo
- Navegación entre vistas
- Estado global de la aplicación
- Layout responsive

### CardsView.vue
Gestión completa de tarjetas corporativas:
- Pool de tarjetas con estados visuales
- Modales para agregar nuevas tarjetas
- Sistema de asignación/revocación
- Estadísticas en tiempo real

### UsersView.vue
Administración de empleados:
- Directorio con avatars y roles
- Sistema de permisos por rol
- Asignación de tarjetas a usuarios
- Métricas de gastos por empleado

### TransactionsView.vue
Monitor de transacciones corporativas:
- Lista detallada de transacciones
- Filtros dinámicos y búsqueda
- Sistema de conciliación
- Upload de recibos

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# API Configuration (para integración futura)
VITE_API_BASE_URL=https://api.cardmanager.com
VITE_API_KEY=tu_api_key_aqui

# App Configuration
VITE_APP_NAME=CardManager
VITE_APP_VERSION=1.0.0
```

### Personalización de Tailwind

Modifica `tailwind.config.js` para personalizar el diseño:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#4f46e5',
          900: '#312e81',
        }
      }
    }
  }
}
```

## 📱 Responsive Design

La aplicación está optimizada para todas las pantallas:

- **Desktop**: Layout completo con sidebar
- **Tablet**: Grid adaptativo y navegación optimizada  
- **Mobile**: Diseño vertical con navegación inferior

## 🔒 Características de Seguridad

- **Validación de Formularios**: Validación client-side con TypeScript
- **Manejo de Estados**: Control granular de permisos por componente
- **Datos Mock**: Sistema de datos de prueba para desarrollo seguro

## 🚀 Roadmap

### Próximas Características
- [ ] Integración con APIs reales de bancos
- [ ] Sistema de notificaciones push
- [ ] Reportes exportables (PDF/Excel)
- [ ] Dashboard de analytics avanzado
- [ ] Modo oscuro
- [ ] Aplicación móvil (React Native)

### Integraciones Planeadas
- [ ] Plaid API para conectividad bancaria
- [ ] Slack/Teams para notificaciones
- [ ] Zapier para automatizaciones
- [ ] Webhooks para integraciones custom

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Para contribuir:

1. **Fork** el proyecto
2. **Crea** una rama feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add: amazing feature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Guías de Contribución

- Usar **Conventional Commits** para mensajes de commit
- Seguir las **convenciones de TypeScript** establecidas
- Agregar **tests** para nueva funcionalidad
- Actualizar **documentación** cuando sea necesario

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙋‍♂️ Soporte

Si tienes preguntas o necesitas ayuda:

- 📧 **Email**: [soporte@cardmanager.com](mailto:soporte@cardmanager.com)
- 💬 **Discord**: [Únete a nuestra comunidad](https://discord.gg/cardmanager)
- 🐛 **Issues**: [GitHub Issues](https://github.com/tu-usuario/card-manager/issues)
- 📚 **Documentación**: [Wiki del proyecto](https://github.com/tu-usuario/card-manager/wiki)

## 🎉 Agradecimientos

Desarrollado con ❤️ para modernizar la gestión de gastos corporativos.

**Tecnologías que hacen esto posible:**
- [Vue.js](https://vuejs.org/) - Framework progresivo
- [TypeScript](https://www.typescriptlang.org/) - JavaScript con tipos
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS utility-first
- [Lucide](https://lucide.dev/) - Iconos hermosos y consistentes
- [Vite](https://vitejs.dev/) - Build tool ultra-rápido

---

**⭐ Si este proyecto te ayuda, considera darle una estrella en GitHub!**
