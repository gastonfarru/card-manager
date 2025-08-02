<template>
  <div style="min-height: 100vh; background: white">
    <!-- Header -->
    <header
      style="
        background: white;
        border-bottom: 1px solid #e5e7eb;
        position: sticky;
        top: 0;
        z-index: 50;
      "
    >
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 1rem">
        <div
          style="display: flex; justify-content: space-between; align-items: center; height: 64px"
        >
          <!-- Logo -->
          <div style="display: flex; align-items: center; gap: 12px">
            <div
              style="
                width: 40px;
                height: 40px;
                background: linear-gradient(135deg, #4f46e5, #7c3aed);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
              "
            >
              <CreditCard style="width: 24px; height: 24px; color: white" />
            </div>
            <div>
              <div style="font-size: 20px; font-weight: bold; color: #111827">CardManager</div>
              <div style="font-size: 12px; color: #6b7280">Gestión Corporativa</div>
            </div>
          </div>

          <!-- Navigation -->
          <nav style="display: none" class="md:flex">
            <div style="display: flex; gap: 2rem">
              <a
                href="#"
                style="
                  color: #6b7280;
                  font-weight: 500;
                  text-decoration: none;
                  padding: 8px 16px;
                  border-radius: 8px;
                  transition: all 0.2s;
                "
                onmouseover="this.style.color='#4f46e5'; this.style.background='#f0f9ff'"
                onmouseout="this.style.color='#6b7280'; this.style.background='transparent'"
                >Producto</a
              >
              <a
                href="#"
                style="
                  color: #6b7280;
                  font-weight: 500;
                  text-decoration: none;
                  padding: 8px 16px;
                  border-radius: 8px;
                  transition: all 0.2s;
                "
                onmouseover="this.style.color='#4f46e5'; this.style.background='#f0f9ff'"
                onmouseout="this.style.color='#6b7280'; this.style.background='transparent'"
                >Soluciones</a
              >
              <a
                href="#"
                style="
                  color: #6b7280;
                  font-weight: 500;
                  text-decoration: none;
                  padding: 8px 16px;
                  border-radius: 8px;
                  transition: all 0.2s;
                "
                onmouseover="this.style.color='#4f46e5'; this.style.background='#f0f9ff'"
                onmouseout="this.style.color='#6b7280'; this.style.background='transparent'"
                >Precios</a
              >
            </div>
          </nav>

          <!-- Buttons -->
          <div style="display: flex; align-items: center; gap: 12px">
            <button
              @click="$emit('showLogin')"
              style="
                color: #374151;
                font-weight: 500;
                padding: 10px 16px;
                border-radius: 12px;
                border: 1px solid #d1d5db;
                background: white;
                cursor: pointer;
                transition: all 0.2s;
              "
              onmouseover="this.style.color='#4f46e5'; this.style.borderColor='#4f46e5'; this.style.background='#f0f9ff'"
              onmouseout="this.style.color='#374151'; this.style.borderColor='#d1d5db'; this.style.background='white'"
            >
              Iniciar Sesión
            </button>
            <button
              @click="$emit('directLogin')"
              style="
                background: linear-gradient(135deg, #4f46e5, #7c3aed);
                color: white;
                padding: 12px 24px;
                border-radius: 12px;
                font-weight: 600;
                border: none;
                cursor: pointer;
                box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                transition: all 0.2s;
              "
              onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 10px 15px -3px rgb(0 0 0 / 0.1)'"
              onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px -1px rgb(0 0 0 / 0.1)'"
            >
              Prueba Gratis
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section
      style="
        background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f3e8ff 100%);
        padding: 80px 0;
      "
    >
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 1rem">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center">
          <!-- Left Content -->
          <div style="max-width: 600px">
            <!-- Badge -->
            <div
              style="
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: linear-gradient(135deg, #eff6ff, #f3e8ff);
                border: 1px solid #c7d2fe;
                border-radius: 9999px;
                padding: 8px 20px;
                margin-bottom: 2rem;
              "
            >
              <div
                style="
                  width: 8px;
                  height: 8px;
                  background: linear-gradient(135deg, #4f46e5, #7c3aed);
                  border-radius: 50%;
                  animation: pulse 2s infinite;
                "
              ></div>
              <span
                style="
                  background: linear-gradient(135deg, #4338ca, #7c2d12);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  font-size: 14px;
                  font-weight: 600;
                "
                >Plataforma Integral de Gestión</span
              >
            </div>

            <!-- Main Headline -->
            <h1
              style="
                font-size: 4rem;
                font-weight: 900;
                margin-bottom: 2rem;
                line-height: 1.1;
                color: #111827;
              "
            >
              Controla cada<br />
              <span
                style="
                  background: linear-gradient(135deg, #4f46e5, #7c3aed, #ec4899);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                "
                >peso gastado</span
              ><br />
              en tu empresa
            </h1>

            <!-- Subtitle -->
            <p
              style="
                font-size: 20px;
                color: #6b7280;
                margin-bottom: 2.5rem;
                line-height: 1.6;
                font-weight: 500;
              "
            >
              La plataforma más avanzada para gestionar tarjetas corporativas.
              <span style="color: #4f46e5; font-weight: 600">Visibilidad total</span>,
              <span style="color: #7c3aed; font-weight: 600">control granular</span> y
              <span style="color: #ec4899; font-weight: 600">automatización completa</span>.
            </p>

            <!-- Benefits -->
            <div style="margin-bottom: 2.5rem">
              <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px">
                <div
                  style="
                    width: 24px;
                    height: 24px;
                    background: linear-gradient(135deg, #10b981, #059669);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                  "
                >
                  <Check style="width: 16px; height: 16px; color: white" />
                </div>
                <span style="color: #374151; font-weight: 500; font-size: 16px"
                  >Control en tiempo real de todos los gastos corporativos</span
                >
              </div>
              <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px">
                <div
                  style="
                    width: 24px;
                    height: 24px;
                    background: linear-gradient(135deg, #10b981, #059669);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                  "
                >
                  <Check style="width: 16px; height: 16px; color: white" />
                </div>
                <span style="color: #374151; font-weight: 500; font-size: 16px"
                  >Automatización completa de conciliación y reportes</span
                >
              </div>
              <div style="display: flex; align-items: center; gap: 16px">
                <div
                  style="
                    width: 24px;
                    height: 24px;
                    background: linear-gradient(135deg, #10b981, #059669);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                  "
                >
                  <Check style="width: 16px; height: 16px; color: white" />
                </div>
                <span style="color: #374151; font-weight: 500; font-size: 16px"
                  >Políticas de gasto personalizables por empleado</span
                >
              </div>
            </div>

            <!-- CTA Buttons -->
            <div style="display: flex; gap: 16px; margin-bottom: 3rem">
              <button
                @click="$emit('directLogin')"
                style="
                  background: linear-gradient(135deg, #4f46e5, #7c3aed);
                  color: white;
                  padding: 20px 40px;
                  border-radius: 16px;
                  font-weight: 700;
                  font-size: 18px;
                  border: none;
                  cursor: pointer;
                  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
                  transition: all 0.3s;
                  display: flex;
                  align-items: center;
                  gap: 12px;
                "
                onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 20px 25px -5px rgb(0 0 0 / 0.1)'"
                onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 15px -3px rgb(0 0 0 / 0.1)'"
              >
                Comenzar Prueba Gratuita
                <ArrowRight style="width: 24px; height: 24px" />
              </button>
              <button
                style="
                  border: 2px solid #d1d5db;
                  color: #374151;
                  padding: 20px 40px;
                  border-radius: 16px;
                  font-weight: 700;
                  font-size: 18px;
                  background: white;
                  cursor: pointer;
                  transition: all 0.3s;
                  display: flex;
                  align-items: center;
                  gap: 12px;
                "
                onmouseover="this.style.background='linear-gradient(135deg, #f0f9ff, #faf5ff)'; this.style.borderColor='#4f46e5'; this.style.color='#4f46e5'"
                onmouseout="this.style.background='white'; this.style.borderColor='#d1d5db'; this.style.color='#374151'"
              >
                <Play style="width: 24px; height: 24px" />
                Ver Demo Interactiva
              </button>
            </div>

            <!-- Stats -->
            <div
              style="
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 2rem;
                margin-top: 3rem;
              "
            >
              <div style="text-align: center">
                <div
                  style="
                    font-size: 2rem;
                    font-weight: 900;
                    background: linear-gradient(135deg, #4f46e5, #7c3aed);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 4px;
                  "
                >
                  500+
                </div>
                <div style="font-size: 14px; color: #6b7280; font-weight: 500">Empresas</div>
              </div>
              <div style="text-align: center">
                <div
                  style="
                    font-size: 2rem;
                    font-weight: 900;
                    background: linear-gradient(135deg, #7c3aed, #ec4899);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 4px;
                  "
                >
                  $50M
                </div>
                <div style="font-size: 14px; color: #6b7280; font-weight: 500">Gestionados</div>
              </div>
              <div style="text-align: center">
                <div
                  style="
                    font-size: 2rem;
                    font-weight: 900;
                    background: linear-gradient(135deg, #ec4899, #ef4444);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 4px;
                  "
                >
                  99.9%
                </div>
                <div style="font-size: 14px; color: #6b7280; font-weight: 500">Uptime</div>
              </div>
            </div>
          </div>

          <!-- Right Content - Dashboard Preview -->
          <div style="position: relative">
            <!-- Main Dashboard Card -->
            <div
              style="
                background: white;
                border-radius: 24px;
                box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
                padding: 2rem;
                border: 1px solid #f3f4f6;
                transition: all 0.5s;
              "
              onmouseover="this.style.transform='scale(1.02)'"
              onmouseout="this.style.transform='scale(1)'"
            >
              <!-- Dashboard Header -->
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  margin-bottom: 2rem;
                "
              >
                <div style="display: flex; align-items: center; gap: 16px">
                  <div
                    style="
                      width: 48px;
                      height: 48px;
                      background: linear-gradient(135deg, #4f46e5, #7c3aed);
                      border-radius: 16px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                    "
                  >
                    <BarChart3 style="width: 28px; height: 28px; color: white" />
                  </div>
                  <div>
                    <h3 style="font-size: 20px; font-weight: 700; color: #111827; margin: 0">
                      Dashboard Ejecutivo
                    </h3>
                    <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px">
                      <div
                        style="
                          width: 8px;
                          height: 8px;
                          background: #10b981;
                          border-radius: 50%;
                          animation: pulse 2s infinite;
                        "
                      ></div>
                      <p style="font-size: 14px; color: #6b7280; font-weight: 500; margin: 0">
                        Tiempo real
                      </p>
                    </div>
                  </div>
                </div>
                <div style="text-align: right">
                  <div style="font-size: 12px; color: #6b7280">Última actualización</div>
                  <div style="font-size: 12px; font-weight: 600; color: #374151">Ahora mismo</div>
                </div>
              </div>

              <!-- Stats Grid -->
              <div
                style="
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 24px;
                  margin-bottom: 2rem;
                "
              >
                <div
                  style="
                    background: linear-gradient(135deg, #dbeafe, #bfdbfe);
                    padding: 24px;
                    border-radius: 16px;
                    border: 1px solid #93c5fd;
                    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
                  "
                >
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      margin-bottom: 16px;
                    "
                  >
                    <div
                      style="
                        width: 40px;
                        height: 40px;
                        background: #3b82f6;
                        border-radius: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      "
                    >
                      <CreditCard style="width: 24px; height: 24px; color: white" />
                    </div>
                    <TrendingUp style="width: 20px; height: 20px; color: #10b981" />
                  </div>
                  <div
                    style="font-size: 2rem; font-weight: 900; color: #1e40af; margin-bottom: 4px"
                  >
                    24
                  </div>
                  <div
                    style="font-size: 14px; color: #2563eb; font-weight: 600; margin-bottom: 8px"
                  >
                    Tarjetas Activas
                  </div>
                  <div style="font-size: 12px; color: #059669; font-weight: 500">
                    ↗ +8 este mes
                  </div>
                </div>

                <div
                  style="
                    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
                    padding: 24px;
                    border-radius: 16px;
                    border: 1px solid #6ee7b7;
                    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
                  "
                >
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      margin-bottom: 16px;
                    "
                  >
                    <div
                      style="
                        width: 40px;
                        height: 40px;
                        background: #10b981;
                        border-radius: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      "
                    >
                      <DollarSign style="width: 24px; height: 24px; color: white" />
                    </div>
                    <div
                      style="
                        font-size: 12px;
                        color: #6b7280;
                        background: white;
                        padding: 4px 8px;
                        border-radius: 9999px;
                      "
                    >
                      74%
                    </div>
                  </div>
                  <div
                    style="font-size: 2rem; font-weight: 900; color: #047857; margin-bottom: 4px"
                  >
                    $127K
                  </div>
                  <div
                    style="font-size: 14px; color: #059669; font-weight: 600; margin-bottom: 8px"
                  >
                    Gastado este mes
                  </div>
                  <div style="font-size: 12px; color: #6b7280">de $170K presupuesto</div>
                </div>
              </div>

              <!-- Chart -->
              <div
                style="
                  background: linear-gradient(135deg, #f9fafb, #f3f4f6);
                  border-radius: 16px;
                  padding: 24px;
                  border: 1px solid #e5e7eb;
                  margin-bottom: 24px;
                "
              >
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 24px;
                  "
                >
                  <h4 style="font-weight: 700; color: #111827; margin: 0">Gastos por Categoría</h4>
                  <div style="display: flex; gap: 8px">
                    <div
                      style="width: 12px; height: 12px; background: #4f46e5; border-radius: 50%"
                    ></div>
                    <div
                      style="width: 12px; height: 12px; background: #7c3aed; border-radius: 50%"
                    ></div>
                    <div
                      style="width: 12px; height: 12px; background: #ec4899; border-radius: 50%"
                    ></div>
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: end;
                    justify-content: space-between;
                    height: 96px;
                    gap: 8px;
                  "
                >
                  <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
                    <div
                      style="
                        background: linear-gradient(to top, #4f46e5, #6366f1);
                        width: 32px;
                        height: 80px;
                        border-radius: 4px 4px 0 0;
                        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                      "
                    ></div>
                    <div style="font-size: 12px; color: #6b7280; font-weight: 500">Viajes</div>
                  </div>
                  <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
                    <div
                      style="
                        background: linear-gradient(to top, #7c3aed, #8b5cf6);
                        width: 32px;
                        height: 64px;
                        border-radius: 4px 4px 0 0;
                        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                      "
                    ></div>
                    <div style="font-size: 12px; color: #6b7280; font-weight: 500">Oficina</div>
                  </div>
                  <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
                    <div
                      style="
                        background: linear-gradient(to top, #ec4899, #f472b6);
                        width: 32px;
                        height: 48px;
                        border-radius: 4px 4px 0 0;
                        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                      "
                    ></div>
                    <div style="font-size: 12px; color: #6b7280; font-weight: 500">Software</div>
                  </div>
                  <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
                    <div
                      style="
                        background: linear-gradient(to top, #10b981, #34d399);
                        width: 32px;
                        height: 32px;
                        border-radius: 4px 4px 0 0;
                        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                      "
                    ></div>
                    <div style="font-size: 12px; color: #6b7280; font-weight: 500">Otros</div>
                  </div>
                </div>
              </div>

              <!-- Recent Activity -->
              <div>
                <h4 style="font-weight: 700; color: #111827; margin-bottom: 16px">
                  Transacciones Recientes
                </h4>
                <div style="display: flex; flex-direction: column; gap: 12px">
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      padding: 16px;
                      background: linear-gradient(135deg, #fef3e2, #fed7aa);
                      border-radius: 12px;
                      border: 1px solid #fdba74;
                    "
                  >
                    <div style="display: flex; align-items: center; gap: 16px">
                      <div
                        style="
                          width: 40px;
                          height: 40px;
                          background: linear-gradient(135deg, #f97316, #ea580c);
                          border-radius: 12px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                        "
                      >
                        <ShoppingCart style="width: 20px; height: 20px; color: white" />
                      </div>
                      <div>
                        <div style="font-weight: 700; color: #111827; font-size: 14px">
                          Amazon Business
                        </div>
                        <div style="font-size: 12px; color: #6b7280">Juan Pérez • ****1234</div>
                      </div>
                    </div>
                    <div style="text-align: right">
                      <div style="font-weight: 900; color: #111827">$1,245</div>
                      <div
                        style="
                          font-size: 12px;
                          font-weight: 600;
                          color: #ea580c;
                          background: #fed7aa;
                          padding: 2px 8px;
                          border-radius: 9999px;
                        "
                      >
                        Pendiente
                      </div>
                    </div>
                  </div>

                  <div
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      padding: 16px;
                      background: linear-gradient(135deg, #ecfdf5, #d1fae5);
                      border-radius: 12px;
                      border: 1px solid #a7f3d0;
                    "
                  >
                    <div style="display: flex; align-items: center; gap: 16px">
                      <div
                        style="
                          width: 40px;
                          height: 40px;
                          background: linear-gradient(135deg, #10b981, #059669);
                          border-radius: 12px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                        "
                      >
                        <Coffee style="width: 20px; height: 20px; color: white" />
                      </div>
                      <div>
                        <div style="font-weight: 700; color: #111827; font-size: 14px">
                          Starbucks
                        </div>
                        <div style="font-size: 12px; color: #6b7280">María García • ****9012</div>
                      </div>
                    </div>
                    <div style="text-align: right">
                      <div style="font-weight: 900; color: #111827">$28</div>
                      <div
                        style="
                          font-size: 12px;
                          font-weight: 600;
                          color: #059669;
                          background: #a7f3d0;
                          padding: 2px 8px;
                          border-radius: 9999px;
                        "
                      >
                        Aprobado
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Elements -->
            <div
              style="
                position: absolute;
                top: -24px;
                right: -24px;
                background: white;
                border-radius: 16px;
                box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
                padding: 16px;
                transform: rotate(12deg);
                transition: all 0.3s;
                border: 1px solid #f3f4f6;
              "
              onmouseover="this.style.transform='rotate(6deg)'"
              onmouseout="this.style.transform='rotate(12deg)'"
            >
              <div style="display: flex; align-items: center; gap: 12px">
                <div
                  style="
                    width: 32px;
                    height: 32px;
                    background: linear-gradient(135deg, #10b981, #059669);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <Shield style="width: 20px; height: 20px; color: white" />
                </div>
                <div>
                  <div style="font-size: 14px; font-weight: 700; color: #111827">100% Seguro</div>
                  <div style="font-size: 12px; color: #6b7280">Encriptación bancaria</div>
                </div>
              </div>
            </div>

            <div
              style="
                position: absolute;
                bottom: -24px;
                left: -24px;
                background: white;
                border-radius: 16px;
                box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
                padding: 16px;
                transform: rotate(-6deg);
                transition: all 0.3s;
                border: 1px solid #f3f4f6;
              "
              onmouseover="this.style.transform='rotate(-3deg)'"
              onmouseout="this.style.transform='rotate(-6deg)'"
            >
              <div style="display: flex; align-items: center; gap: 12px">
                <div
                  style="
                    width: 32px;
                    height: 32px;
                    background: linear-gradient(135deg, #4f46e5, #7c3aed);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <Zap style="width: 20px; height: 20px; color: white" />
                </div>
                <div>
                  <div style="font-size: 14px; font-weight: 700; color: #111827">IA Integrada</div>
                  <div style="font-size: 12px; color: #6b7280">Detección automática</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section style="padding: 96px 0; background: linear-gradient(135deg, #f9fafb 0%, white 100%)">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 1rem">
        <!-- Section Header -->
        <div style="text-align: center; margin-bottom: 5rem">
          <div
            style="
              display: inline-flex;
              align-items: center;
              gap: 8px;
              background: linear-gradient(135deg, #eff6ff, #f3e8ff);
              border: 1px solid #c7d2fe;
              border-radius: 9999px;
              padding: 12px 24px;
              margin-bottom: 2rem;
            "
          >
            <Zap style="width: 20px; height: 20px; color: #4f46e5" />
            <span
              style="
                background: linear-gradient(135deg, #4338ca, #7c2d12);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-weight: 700;
              "
              >Características de Clase Mundial</span
            >
          </div>
          <h2
            style="
              font-size: 4rem;
              font-weight: 900;
              color: #111827;
              margin-bottom: 2rem;
              line-height: 1.1;
            "
          >
            Todo lo que necesitas para<br />
            <span
              style="
                background: linear-gradient(135deg, #4f46e5, #7c3aed, #ec4899);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >revolucionar tus finanzas</span
            >
          </h2>
          <p
            style="
              font-size: 20px;
              color: #6b7280;
              max-width: 800px;
              margin: 0 auto;
              line-height: 1.6;
            "
          >
            Desde la emisión de tarjetas hasta análisis predictivos con IA, nuestra plataforma
            transforma completamente cómo las empresas gestionan sus gastos corporativos.
          </p>
        </div>

        <!-- Features Grid -->
        <div
          style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
          "
        >
          <!-- Feature 1 -->
          <div
            style="
              padding: 2rem;
              border-radius: 24px;
              border: 1px solid #f3f4f6;
              transition: all 0.5s;
              cursor: pointer;
            "
            onmouseover="this.style.background='linear-gradient(135deg, #f0f9ff, #dbeafe)'; this.style.borderColor='#93c5fd'; this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 25px -5px rgb(0 0 0 / 0.1)'"
            onmouseout="this.style.background='transparent'; this.style.borderColor='#f3f4f6'; this.style.transform='translateY(0)'; this.style.boxShadow='none'"
          >
            <div
              style="
                width: 64px;
                height: 64px;
                background: linear-gradient(135deg, #3b82f6, #4f46e5);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 24px;
                box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                transition: all 0.3s;
              "
              onmouseover="this.style.transform='scale(1.1)'"
              onmouseout="this.style.transform='scale(1)'"
            >
              <CreditCard style="width: 32px; height: 32px; color: white" />
            </div>
            <h3 style="font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 16px">
              Gestión Inteligente de Tarjetas
            </h3>
            <p style="color: #6b7280; line-height: 1.6; font-size: 18px; margin-bottom: 24px">
              Emisión instantánea, asignación automática y control granular con límites dinámicos
              que se adaptan a las necesidades de cada empleado.
            </p>
            <div style="display: flex; align-items: center; color: #4f46e5; font-weight: 600">
              <span>Explorar funcionalidad</span>
              <ArrowRight
                style="width: 16px; height: 16px; margin-left: 8px; transition: all 0.2s"
              />
            </div>
          </div>

          <!-- Feature 2 -->
          <div
            style="
              padding: 2rem;
              border-radius: 24px;
              border: 1px solid #f3f4f6;
              transition: all 0.5s;
              cursor: pointer;
            "
            onmouseover="this.style.background='linear-gradient(135deg, #f0fdf4, #dcfce7)'; this.style.borderColor='#86efac'; this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 25px -5px rgb(0 0 0 / 0.1)'"
            onmouseout="this.style.background='transparent'; this.style.borderColor='#f3f4f6'; this.style.transform='translateY(0)'; this.style.boxShadow='none'"
          >
            <div
              style="
                width: 64px;
                height: 64px;
                background: linear-gradient(135deg, #10b981, #059669);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 24px;
                box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                transition: all 0.3s;
              "
              onmouseover="this.style.transform='scale(1.1)'"
              onmouseout="this.style.transform='scale(1)'"
            >
              <BarChart3 style="width: 32px; height: 32px; color: white" />
            </div>
            <h3 style="font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 16px">
              Analytics Predictivos
            </h3>
            <p style="color: #6b7280; line-height: 1.6; font-size: 18px; margin-bottom: 24px">
              Dashboards con IA que predicen gastos futuros, detectan anomalías y optimizan
              presupuestos automáticamente.
            </p>
            <div style="display: flex; align-items: center; color: #10b981; font-weight: 600">
              <span>Ver demo en vivo</span>
              <ArrowRight
                style="width: 16px; height: 16px; margin-left: 8px; transition: all 0.2s"
              />
            </div>
          </div>

          <!-- Feature 3 -->
          <div
            style="
              padding: 2rem;
              border-radius: 24px;
              border: 1px solid #f3f4f6;
              transition: all 0.5s;
              cursor: pointer;
            "
            onmouseover="this.style.background='linear-gradient(135deg, #faf5ff, #f3e8ff)'; this.style.borderColor='#d8b4fe'; this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 25px -5px rgb(0 0 0 / 0.1)'"
            onmouseout="this.style.background='transparent'; this.style.borderColor='#f3f4f6'; this.style.transform='translateY(0)'; this.style.boxShadow='none'"
          >
            <div
              style="
                width: 64px;
                height: 64px;
                background: linear-gradient(135deg, #7c3aed, #ec4899);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 24px;
                box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                transition: all 0.3s;
              "
              onmouseover="this.style.transform='scale(1.1)'"
              onmouseout="this.style.transform='scale(1)'"
            >
              <Shield style="width: 32px; height: 32px; color: white" />
            </div>
            <h3 style="font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 16px">
              Seguridad Militar
            </h3>
            <p style="color: #6b7280; line-height: 1.6; font-size: 18px; margin-bottom: 24px">
              Protección de grado militar con biometría, tokenización avanzada y monitoreo de
              fraudes en tiempo real.
            </p>
            <div style="display: flex; align-items: center; color: #7c3aed; font-weight: 600">
              <span>Certificaciones</span>
              <ArrowRight
                style="width: 16px; height: 16px; margin-left: 8px; transition: all 0.2s"
              />
            </div>
          </div>

          <!-- Feature 4 -->
          <div
            style="
              padding: 2rem;
              border-radius: 24px;
              border: 1px solid #f3f4f6;
              transition: all 0.5s;
              cursor: pointer;
            "
            onmouseover="this.style.background='linear-gradient(135deg, #fff7ed, #fed7aa)'; this.style.borderColor='#fdba74'; this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 25px -5px rgb(0 0 0 / 0.1)'"
            onmouseout="this.style.background='transparent'; this.style.borderColor='#f3f4f6'; this.style.transform='translateY(0)'; this.style.boxShadow='none'"
          >
            <div
              style="
                width: 64px;
                height: 64px;
                background: linear-gradient(135deg, #f97316, #ef4444);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 24px;
                box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                transition: all 0.3s;
              "
              onmouseover="this.style.transform='scale(1.1)'"
              onmouseout="this.style.transform='scale(1)'"
            >
              <Zap style="width: 32px; height: 32px; color: white" />
            </div>
            <h3 style="font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 16px">
              Automatización Total
            </h3>
            <p style="color: #6b7280; line-height: 1.6; font-size: 18px; margin-bottom: 24px">
              Conciliación automática con OCR avanzado, categorización inteligente y flujos de
              aprobación sin intervención humana.
            </p>
            <div style="display: flex; align-items: center; color: #f97316; font-weight: 600">
              <span>Casos de uso</span>
              <ArrowRight
                style="width: 16px; height: 16px; margin-left: 8px; transition: all 0.2s"
              />
            </div>
          </div>

          <!-- Feature 5 -->
          <div
            style="
              padding: 2rem;
              border-radius: 24px;
              border: 1px solid #f3f4f6;
              transition: all 0.5s;
              cursor: pointer;
            "
            onmouseover="this.style.background='linear-gradient(135deg, #eff6ff, #dbeafe)'; this.style.borderColor='#93c5fd'; this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 25px -5px rgb(0 0 0 / 0.1)'"
            onmouseout="this.style.background='transparent'; this.style.borderColor='#f3f4f6'; this.style.transform='translateY(0)'; this.style.boxShadow='none'"
          >
            <div
              style="
                width: 64px;
                height: 64px;
                background: linear-gradient(135deg, #4f46e5, #3b82f6);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 24px;
                box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                transition: all 0.3s;
              "
              onmouseover="this.style.transform='scale(1.1)'"
              onmouseout="this.style.transform='scale(1)'"
            >
              <Users style="width: 32px; height: 32px; color: white" />
            </div>
            <h3 style="font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 16px">
              Colaboración Avanzada
            </h3>
            <p style="color: #6b7280; line-height: 1.6; font-size: 18px; margin-bottom: 24px">
              Espacios de trabajo compartidos, aprobaciones en tiempo real y comunicación integrada
              entre equipos.
            </p>
            <div style="display: flex; align-items: center; color: #4f46e5; font-weight: 600">
              <span>Gestión de equipos</span>
              <ArrowRight
                style="width: 16px; height: 16px; margin-left: 8px; transition: all 0.2s"
              />
            </div>
          </div>

          <!-- Feature 6 -->
          <div
            style="
              padding: 2rem;
              border-radius: 24px;
              border: 1px solid #f3f4f6;
              transition: all 0.5s;
              cursor: pointer;
            "
            onmouseover="this.style.background='linear-gradient(135deg, #f0fdfa, #ccfbf1)'; this.style.borderColor='#5eead4'; this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 25px -5px rgb(0 0 0 / 0.1)'"
            onmouseout="this.style.background='transparent'; this.style.borderColor='#f3f4f6'; this.style.transform='translateY(0)'; this.style.boxShadow='none'"
          >
            <div
              style="
                width: 64px;
                height: 64px;
                background: linear-gradient(135deg, #14b8a6, #0891b2);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 24px;
                box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                transition: all 0.3s;
              "
              onmouseover="this.style.transform='scale(1.1)'"
              onmouseout="this.style.transform='scale(1)'"
            >
              <Settings style="width: 32px; height: 32px; color: white" />
            </div>
            <h3 style="font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 16px">
              Integraciones Empresariales
            </h3>
            <p style="color: #6b7280; line-height: 1.6; font-size: 18px; margin-bottom: 24px">
              Conecta perfectamente con SAP, Oracle, QuickBooks y más de 500 sistemas empresariales
              mediante APIs robustas.
            </p>
            <div style="display: flex; align-items: center; color: #14b8a6; font-weight: 600">
              <span>Ver integraciones</span>
              <ArrowRight
                style="width: 16px; height: 16px; margin-left: 8px; transition: all 0.2s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      style="
        padding: 96px 0;
        background: linear-gradient(135deg, #4f46e5, #7c3aed, #ec4899);
        position: relative;
        overflow: hidden;
      "
    >
      <!-- Background Effects -->
      <div style="position: absolute; inset: 0">
        <div
          style="
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              135deg,
              transparent,
              rgba(255, 255, 255, 0.05),
              transparent
            );
          "
        ></div>
        <div
          style="
            position: absolute;
            top: 80px;
            left: 80px;
            width: 288px;
            height: 288px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            filter: blur(48px);
          "
        ></div>
        <div
          style="
            position: absolute;
            bottom: 80px;
            right: 80px;
            width: 384px;
            height: 384px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 50%;
            filter: blur(48px);
          "
        ></div>
      </div>

      <div
        style="
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          text-align: center;
          padding: 0 1rem;
        "
      >
        <div style="margin-bottom: 2rem">
          <div
            style="
              display: inline-flex;
              align-items: center;
              gap: 8px;
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(8px);
              border: 1px solid rgba(255, 255, 255, 0.2);
              border-radius: 9999px;
              padding: 12px 24px;
              margin-bottom: 2rem;
            "
          >
            <Zap style="width: 20px; height: 20px; color: white" />
            <span style="color: white; font-weight: 600">Únete a la Revolución Financiera</span>
          </div>
        </div>

        <h2
          style="
            font-size: 4rem;
            font-weight: 900;
            color: white;
            margin-bottom: 2rem;
            line-height: 1.1;
          "
        >
          ¿Listo para transformar tu<br />
          <span
            style="
              background: linear-gradient(135deg, #fbbf24, #f59e0b);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            "
            >gestión financiera?</span
          >
        </h2>

        <p
          style="
            font-size: 20px;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 3rem;
            line-height: 1.6;
            max-width: 768px;
            margin-left: auto;
            margin-right: auto;
            font-weight: 500;
          "
        >
          Únete a más de 500 empresas que ya revolucionaron sus finanzas corporativas.
          Implementación en 24 horas, soporte 24/7 y ROI garantizado en 30 días.
        </p>

        <div
          style="
            display: flex;
            flex-direction: column;
            gap: 24px;
            justify-content: center;
            margin-bottom: 3rem;
          "
        >
          <button
            @click="$emit('directLogin')"
            style="
              background: white;
              color: #4f46e5;
              padding: 20px 40px;
              border-radius: 16px;
              font-weight: 700;
              font-size: 18px;
              border: none;
              cursor: pointer;
              box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
              transition: all 0.3s;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 12px;
              margin: 0 auto;
            "
            onmouseover="this.style.background='#f9fafb'; this.style.transform='translateY(-4px)'; this.style.boxShadow='0 25px 50px -12px rgb(0 0 0 / 0.25)'"
            onmouseout="this.style.background='white'; this.style.transform='translateY(0)'; this.style.boxShadow='0 20px 25px -5px rgb(0 0 0 / 0.1)'"
          >
            <span>Comenzar Prueba Gratuita</span>
            <ArrowRight style="width: 24px; height: 24px" />
          </button>
          <button
            style="
              border: 2px solid rgba(255, 255, 255, 0.3);
              color: white;
              padding: 20px 40px;
              border-radius: 16px;
              font-weight: 700;
              font-size: 18px;
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(8px);
              cursor: pointer;
              transition: all 0.3s;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 12px;
              margin: 0 auto;
            "
            onmouseover="this.style.background='rgba(255,255,255,0.2)'"
            onmouseout="this.style.background='rgba(255,255,255,0.1)'"
          >
            <Users style="width: 24px; height: 24px" />
            <span>Hablar con Especialista</span>
          </button>
        </div>

        <!-- Benefits -->
        <div
          style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            color: rgba(255, 255, 255, 0.9);
          "
        >
          <div style="display: flex; align-items: center; justify-content: center; gap: 12px">
            <Check style="width: 24px; height: 24px; color: #34d399" />
            <span style="font-weight: 600">Setup gratuito</span>
          </div>
          <div style="display: flex; align-items: center; justify-content: center; gap: 12px">
            <Check style="width: 24px; height: 24px; color: #34d399" />
            <span style="font-weight: 600">Soporte 24/7</span>
          </div>
          <div style="display: flex; align-items: center; justify-content: center; gap: 12px">
            <Check style="width: 24px; height: 24px; color: #34d399" />
            <span style="font-weight: 600">Sin compromiso</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer style="background: #111827; color: white; padding: 80px 0">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 1rem">
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem">
          <!-- Company Info -->
          <div>
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px">
              <div
                style="
                  width: 48px;
                  height: 48px;
                  background: linear-gradient(135deg, #4f46e5, #7c3aed);
                  border-radius: 16px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                "
              >
                <CreditCard style="width: 28px; height: 28px; color: white" />
              </div>
              <div>
                <span style="font-size: 24px; font-weight: 700">CardManager</span>
                <div style="font-size: 14px; color: #9ca3af">Gestión Corporativa</div>
              </div>
            </div>
            <p style="color: #9ca3af; margin-bottom: 24px; max-width: 400px; line-height: 1.6">
              La plataforma más avanzada para gestionar tarjetas corporativas y revolucionar los
              gastos empresariales con inteligencia artificial.
            </p>
            <div style="display: flex; gap: 16px">
              <div
                style="
                  width: 40px;
                  height: 40px;
                  background: #1f2937;
                  border-radius: 12px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                  transition: all 0.3s;
                "
                onmouseover="this.style.background='#374151'; this.style.transform='scale(1.1)'"
                onmouseout="this.style.background='#1f2937'; this.style.transform='scale(1)'"
              >
                <span style="font-size: 14px">𝕏</span>
              </div>
              <div
                style="
                  width: 40px;
                  height: 40px;
                  background: #1f2937;
                  border-radius: 12px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                  transition: all 0.3s;
                "
                onmouseover="this.style.background='#374151'; this.style.transform='scale(1.1)'"
                onmouseout="this.style.background='#1f2937'; this.style.transform='scale(1)'"
              >
                <span style="font-size: 14px">in</span>
              </div>
            </div>
          </div>

          <!-- Links Columns -->
          <div>
            <h4 style="font-weight: 700; margin-bottom: 24px; font-size: 18px">Producto</h4>
            <ul style="list-style: none; padding: 0; margin: 0; color: #9ca3af">
              <li style="margin-bottom: 12px">
                <a
                  href="#"
                  style="color: #9ca3af; text-decoration: none; transition: all 0.2s"
                  onmouseover="this.style.color='white'; this.style.transform='translateX(4px)'"
                  onmouseout="this.style.color='#9ca3af'; this.style.transform='translateX(0)'"
                  >Características</a
                >
              </li>
              <li style="margin-bottom: 12px">
                <a
                  href="#"
                  style="color: #9ca3af; text-decoration: none; transition: all 0.2s"
                  onmouseover="this.style.color='white'; this.style.transform='translateX(4px)'"
                  onmouseout="this.style.color='#9ca3af'; this.style.transform='translateX(0)'"
                  >Integraciones</a
                >
              </li>
              <li style="margin-bottom: 12px">
                <a
                  href="#"
                  style="color: #9ca3af; text-decoration: none; transition: all 0.2s"
                  onmouseover="this.style.color='white'; this.style.transform='translateX(4px)'"
                  onmouseout="this.style.color='#9ca3af'; this.style.transform='translateX(0)'"
                  >API</a
                >
              </li>
              <li style="margin-bottom: 12px">
                <a
                  href="#"
                  style="color: #9ca3af; text-decoration: none; transition: all 0.2s"
                  onmouseover="this.style.color='white'; this.style.transform='translateX(4px)'"
                  onmouseout="this.style.color='#9ca3af'; this.style.transform='translateX(0)'"
                  >Seguridad</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h4 style="font-weight: 700; margin-bottom: 24px; font-size: 18px">Soluciones</h4>
            <ul style="list-style: none; padding: 0; margin: 0; color: #9ca3af">
              <li style="margin-bottom: 12px">
                <a
                  href="#"
                  style="color: #9ca3af; text-decoration: none; transition: all 0.2s"
                  onmouseover="this.style.color='white'; this.style.transform='translateX(4px)'"
                  onmouseout="this.style.color='#9ca3af'; this.style.transform='translateX(0)'"
                  >Startups</a
                >
              </li>
              <li style="margin-bottom: 12px">
                <a
                  href="#"
                  style="color: #9ca3af; text-decoration: none; transition: all 0.2s"
                  onmouseover="this.style.color='white'; this.style.transform='translateX(4px)'"
                  onmouseout="this.style.color='#9ca3af'; this.style.transform='translateX(0)'"
                  >Empresas</a
                >
              </li>
              <li style="margin-bottom: 12px">
                <a
                  href="#"
                  style="color: #9ca3af; text-decoration: none; transition: all 0.2s"
                  onmouseover="this.style.color='white'; this.style.transform='translateX(4px)'"
                  onmouseout="this.style.color='#9ca3af'; this.style.transform='translateX(0)'"
                  >Multinacionales</a
                >
              </li>
              <li style="margin-bottom: 12px">
                <a
                  href="#"
                  style="color: #9ca3af; text-decoration: none; transition: all 0.2s"
                  onmouseover="this.style.color='white'; this.style.transform='translateX(4px)'"
                  onmouseout="this.style.color='#9ca3af'; this.style.transform='translateX(0)'"
                  >Casos de Uso</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h4 style="font-weight: 700; margin-bottom: 24px; font-size: 18px">Empresa</h4>
            <ul style="list-style: none; padding: 0; margin: 0; color: #9ca3af">
              <li style="margin-bottom: 12px">
                <a
                  href="#"
                  style="color: #9ca3af; text-decoration: none; transition: all 0.2s"
                  onmouseover="this.style.color='white'; this.style.transform='translateX(4px)'"
                  onmouseout="this.style.color='#9ca3af'; this.style.transform='translateX(0)'"
                  >Acerca de</a
                >
              </li>
              <li style="margin-bottom: 12px">
                <a
                  href="#"
                  style="color: #9ca3af; text-decoration: none; transition: all 0.2s"
                  onmouseover="this.style.color='white'; this.style.transform='translateX(4px)'"
                  onmouseout="this.style.color='#9ca3af'; this.style.transform='translateX(0)'"
                  >Blog</a
                >
              </li>
              <li style="margin-bottom: 12px">
                <a
                  href="#"
                  style="color: #9ca3af; text-decoration: none; transition: all 0.2s"
                  onmouseover="this.style.color='white'; this.style.transform='translateX(4px)'"
                  onmouseout="this.style.color='#9ca3af'; this.style.transform='translateX(0)'"
                  >Carreras</a
                >
              </li>
              <li style="margin-bottom: 12px">
                <a
                  href="#"
                  style="color: #9ca3af; text-decoration: none; transition: all 0.2s"
                  onmouseover="this.style.color='white'; this.style.transform='translateX(4px)'"
                  onmouseout="this.style.color='#9ca3af'; this.style.transform='translateX(0)'"
                  >Contacto</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div
          style="
            border-top: 1px solid #374151;
            margin-top: 4rem;
            padding-top: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <p style="color: #9ca3af; font-size: 14px; margin: 0">
            © 2025 CardManager. Todos los derechos reservados. Hecho con ❤️ en Argentina.
          </p>
          <div style="display: flex; gap: 2rem">
            <a
              href="#"
              style="color: #9ca3af; text-decoration: none; font-size: 14px; transition: color 0.2s"
              onmouseover="this.style.color='white'"
              onmouseout="this.style.color='#9ca3af'"
              >Términos</a
            >
            <a
              href="#"
              style="color: #9ca3af; text-decoration: none; font-size: 14px; transition: color 0.2s"
              onmouseover="this.style.color='white'"
              onmouseout="this.style.color='#9ca3af'"
              >Cookies</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Media Queries for Mobile */
@media (max-width: 768px) {
  .md\:flex {
    display: none !important;
  }

  /* Make grid single column on mobile */
  div[style*='grid-template-columns: 1fr 1fr'] {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
  }

  div[style*='grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))'] {
    grid-template-columns: 1fr !important;
  }

  div[style*='grid-template-columns: 2fr 1fr 1fr 1fr'] {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
  }

  /* Adjust font sizes for mobile */
  h1[style*='font-size: 4rem'] {
    font-size: 2.5rem !important;
    line-height: 1.2 !important;
  }

  h2[style*='font-size: 4rem'] {
    font-size: 2.5rem !important;
    line-height: 1.2 !important;
  }

  /* Stack buttons vertically on mobile */
  div[style*='display: flex; gap: 16px'] {
    flex-direction: column !important;
  }

  /* Adjust stats grid for mobile */
  div[style*='grid-template-columns: repeat(3, 1fr)'] {
    grid-template-columns: 1fr !important;
    gap: 1rem !important;
  }
}
</style>

<script setup lang="ts">
import {
  CreditCard,
  ArrowRight,
  Play,
  Check,
  BarChart3,
  ShoppingCart,
  Coffee,
  Shield,
  Zap,
  Users,
  Settings,
  TrendingUp,
  DollarSign,
} from 'lucide-vue-next'

// Emits
defineEmits<{
  showLogin: []
  directLogin: []
}>()
</script>

<script lang="ts">
export default {
  name: 'LandingPage',
}
</script>
