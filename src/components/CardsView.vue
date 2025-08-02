<template>
  <div
    style="
      min-height: 100vh;
      background: linear-gradient(135deg, #f9fafb 0%, white 100%);
      padding: 2rem;
    "
  >
    <!-- Header Section -->
    <div style="margin-bottom: 2.5rem">
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
          margin-bottom: 1.5rem;
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
          >Centro de Control de Tarjetas</span
        >
      </div>

      <!-- Title & Action -->
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
        "
      >
        <div>
          <h1
            style="
              font-size: 3rem;
              font-weight: 900;
              color: #111827;
              margin-bottom: 0.5rem;
              line-height: 1.1;
            "
          >
            Gestión de
            <span
              style="
                background: linear-gradient(135deg, #4f46e5, #7c3aed, #ec4899);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >Tarjetas</span
            >
          </h1>
          <p style="font-size: 18px; color: #6b7280; font-weight: 500; max-width: 600px">
            Administra el pool completo de tarjetas corporativas con control granular y visibilidad
            total en tiempo real.
          </p>
        </div>

        <button
          @click="showAddModal = true"
          style="
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            color: white;
            padding: 16px 24px;
            border-radius: 16px;
            font-weight: 700;
            border: none;
            cursor: pointer;
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 16px;
          "
          onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 20px 25px -5px rgb(0 0 0 / 0.1)'"
          onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 15px -3px rgb(0 0 0 / 0.1)'"
        >
          <Plus style="width: 20px; height: 20px" />
          <span style="display: none" class="sm:inline">Nueva Tarjeta</span>
          <span style="display: inline" class="sm:hidden">Nueva</span>
        </button>
      </div>
    </div>

    <!-- Stats Cards -->
    <div
      style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2.5rem;
      "
    >
      <!-- Total Cards -->
      <div
        style="
          background: white;
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid #f3f4f6;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        "
        onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 20px 25px -5px rgb(0 0 0 / 0.1)'"
        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px -1px rgb(0 0 0 / 0.05)'"
      >
        <div
          style="
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(79, 70, 229, 0.03) 1px, transparent 1px);
            background-size: 20px 20px;
          "
        ></div>
        <div style="position: relative">
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 1rem;
            "
          >
            <div
              style="
                width: 48px;
                height: 48px;
                background: linear-gradient(135deg, #f0f9ff, #dbeafe);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #93c5fd;
              "
            >
              <CreditCard style="width: 24px; height: 24px; color: #3b82f6" />
            </div>
            <div
              style="
                font-size: 12px;
                color: #6b7280;
                background: #f3f4f6;
                padding: 4px 8px;
                border-radius: 8px;
                font-weight: 500;
              "
            >
              Total
            </div>
          </div>
          <div
            style="
              font-size: 2.5rem;
              font-weight: 900;
              background: linear-gradient(135deg, #1e40af, #3b82f6);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin-bottom: 4px;
            "
          >
            {{ cards.length }}
          </div>
          <div style="font-size: 14px; color: #6b7280; font-weight: 500">
            Tarjetas en el sistema
          </div>
        </div>
      </div>

      <!-- Assigned Cards -->
      <div
        style="
          background: white;
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid #f3f4f6;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        "
        onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 20px 25px -5px rgb(0 0 0 / 0.1)'"
        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px -1px rgb(0 0 0 / 0.05)'"
      >
        <div
          style="
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(16, 185, 129, 0.03) 1px, transparent 1px);
            background-size: 20px 20px;
          "
        ></div>
        <div style="position: relative">
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 1rem;
            "
          >
            <div
              style="
                width: 48px;
                height: 48px;
                background: linear-gradient(135deg, #ecfdf5, #d1fae5);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #6ee7b7;
              "
            >
              <CheckCircle style="width: 24px; height: 24px; color: #10b981" />
            </div>
            <TrendingUp style="width: 16px; height: 16px; color: #10b981" />
          </div>
          <div
            style="
              font-size: 2.5rem;
              font-weight: 900;
              background: linear-gradient(135deg, #047857, #10b981);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin-bottom: 4px;
            "
          >
            {{ assignedCards }}
          </div>
          <div style="font-size: 14px; color: #6b7280; font-weight: 500">Asignadas activamente</div>
        </div>
      </div>

      <!-- Available Cards -->
      <div
        style="
          background: white;
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid #f3f4f6;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        "
        onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 20px 25px -5px rgb(0 0 0 / 0.1)'"
        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px -1px rgb(0 0 0 / 0.05)'"
      >
        <div
          style="
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(124, 58, 237, 0.03) 1px, transparent 1px);
            background-size: 20px 20px;
          "
        ></div>
        <div style="position: relative">
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 1rem;
            "
          >
            <div
              style="
                width: 48px;
                height: 48px;
                background: linear-gradient(135deg, #faf5ff, #f3e8ff);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #d8b4fe;
              "
            >
              <Clock style="width: 24px; height: 24px; color: #7c3aed" />
            </div>
            <div
              style="
                font-size: 12px;
                color: #7c3aed;
                background: #f3e8ff;
                padding: 4px 8px;
                border-radius: 8px;
                font-weight: 500;
              "
            >
              Listas
            </div>
          </div>
          <div
            style="
              font-size: 2.5rem;
              font-weight: 900;
              background: linear-gradient(135deg, #6d28d9, #7c3aed);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin-bottom: 4px;
            "
          >
            {{ availableCards }}
          </div>
          <div style="font-size: 14px; color: #6b7280; font-weight: 500">
            Disponibles para asignar
          </div>
        </div>
      </div>

      <!-- Total Budget -->
      <div
        style="
          background: white;
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid #f3f4f6;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        "
        onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 20px 25px -5px rgb(0 0 0 / 0.1)'"
        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px -1px rgb(0 0 0 / 0.05)'"
      >
        <div
          style="
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(245, 158, 11, 0.03) 1px, transparent 1px);
            background-size: 20px 20px;
          "
        ></div>
        <div style="position: relative">
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 1rem;
            "
          >
            <div
              style="
                width: 48px;
                height: 48px;
                background: linear-gradient(135deg, #fefbf3, #fed7aa);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #fdba74;
              "
            >
              <DollarSign style="width: 24px; height: 24px; color: #f59e0b" />
            </div>
            <div
              style="
                font-size: 12px;
                color: #f59e0b;
                background: #fefbf3;
                padding: 4px 8px;
                border-radius: 8px;
                font-weight: 500;
              "
            >
              Budget
            </div>
          </div>
          <div
            style="
              font-size: 1.8rem;
              font-weight: 900;
              background: linear-gradient(135deg, #d97706, #f59e0b);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin-bottom: 4px;
            "
          >
            {{ formatCurrency(totalBudget) }}
          </div>
          <div style="font-size: 14px; color: #6b7280; font-weight: 500">
            Presupuesto total asignado
          </div>
        </div>
      </div>
    </div>

    <!-- Cards List -->
    <div
      style="
        background: white;
        border-radius: 24px;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.05);
        border: 1px solid #f3f4f6;
        overflow: hidden;
      "
    >
      <!-- List Header -->
      <div
        style="
          background: linear-gradient(135deg, #f8fafc, #f1f5f9);
          padding: 2rem;
          border-bottom: 1px solid #e5e7eb;
        "
      >
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
            "
          >
            <CreditCard style="width: 24px; height: 24px; color: white" />
          </div>
          <div>
            <h2 style="font-size: 20px; font-weight: 700; color: #111827; margin: 0">
              Pool de Tarjetas Corporativas
            </h2>
            <p style="color: #6b7280; font-size: 14px; margin: 0">
              Gestiona, asigna y controla todas las tarjetas desde aquí
            </p>
          </div>
        </div>
      </div>

      <!-- Cards Grid -->
      <div style="padding: 2rem">
        <div v-if="cards.length === 0" style="text-align: center; padding: 4rem 2rem">
          <div
            style="
              width: 80px;
              height: 80px;
              background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 1.5rem;
            "
          >
            <CreditCard style="width: 40px; height: 40px; color: #9ca3af" />
          </div>
          <h3 style="font-size: 18px; font-weight: 600; color: #374151; margin-bottom: 0.5rem">
            No hay tarjetas registradas
          </h3>
          <p style="color: #6b7280; margin-bottom: 2rem">
            Comienza agregando la primera tarjeta corporativa al sistema
          </p>
          <button
            @click="showAddModal = true"
            style="
              background: linear-gradient(135deg, #4f46e5, #7c3aed);
              color: white;
              padding: 12px 24px;
              border-radius: 12px;
              font-weight: 600;
              border: none;
              cursor: pointer;
              transition: all 0.2s;
            "
            onmouseover="this.style.transform='translateY(-1px)'"
            onmouseout="this.style.transform='translateY(0)'"
          >
            Agregar Primera Tarjeta
          </button>
        </div>

        <div
          v-else
          style="
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 1.5rem;
          "
        >
          <div
            v-for="card in cards"
            :key="card.id"
            style="
              background: linear-gradient(135deg, #ffffff, #fafbfc);
              border-radius: 20px;
              border: 1px solid #f3f4f6;
              padding: 1.5rem;
              transition: all 0.3s;
              position: relative;
              overflow: hidden;
            "
            onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 20px 25px -5px rgb(0 0 0 / 0.1)'; this.style.borderColor='#c7d2fe'"
            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'; this.style.borderColor='#f3f4f6'"
          >
            <!-- Card Header -->
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 1.5rem;
              "
            >
              <div style="display: flex; align-items: center; gap: 12px">
                <!-- Card Icon -->
                <div
                  style="
                    width: 48px;
                    height: 32px;
                    background: linear-gradient(135deg, #4f46e5, #7c3aed);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                    position: relative;
                  "
                >
                  <CreditCard style="width: 20px; height: 20px; color: white" />
                  <div
                    style="
                      position: absolute;
                      top: 2px;
                      right: 2px;
                      width: 4px;
                      height: 4px;
                      background: rgba(255, 255, 255, 0.6);
                      border-radius: 50%;
                    "
                  ></div>
                </div>

                <!-- Card Info -->
                <div>
                  <div
                    style="
                      font-family: 'Courier New', monospace;
                      font-size: 16px;
                      font-weight: 700;
                      color: #111827;
                      letter-spacing: 1px;
                    "
                  >
                    {{ card.number }}
                  </div>
                  <div
                    style="
                      font-size: 12px;
                      color: #6b7280;
                      font-weight: 500;
                      text-transform: uppercase;
                    "
                  >
                    {{ card.type }}
                  </div>
                </div>
              </div>

              <!-- Actions Menu -->
              <div style="position: relative">
                <button
                  @click="toggleMenu(card.id)"
                  style="
                    padding: 8px;
                    color: #9ca3af;
                    background: #f9fafb;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s;
                  "
                  onmouseover="this.style.color='#4f46e5'; this.style.background='#f0f9ff'; this.style.borderColor='#c7d2fe'"
                  onmouseout="this.style.color='#9ca3af'; this.style.background='#f9fafb'; this.style.borderColor='#e5e7eb'"
                >
                  <MoreVertical style="width: 16px; height: 16px" />
                </button>

                <!-- Dropdown Menu -->
                <div
                  v-if="activeMenu === card.id"
                  style="
                    position: absolute;
                    right: 0;
                    top: calc(100% + 8px);
                    width: 200px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
                    border: 1px solid #e5e7eb;
                    z-index: 50;
                    overflow: hidden;
                    animation: fadeInScale 0.2s ease-out;
                  "
                >
                  <div style="padding: 8px">
                    <button
                      v-if="card.status === 'available'"
                      @click="assignCard(card)"
                      style="
                        width: 100%;
                        text-align: left;
                        padding: 12px;
                        font-size: 14px;
                        color: #374151;
                        background: transparent;
                        border: none;
                        border-radius: 8px;
                        cursor: pointer;
                        transition: all 0.2s;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                      "
                      onmouseover="this.style.background='#f0f9ff'; this.style.color='#4f46e5'"
                      onmouseout="this.style.background='transparent'; this.style.color='#374151'"
                    >
                      <UserPlus style="width: 16px; height: 16px" />
                      Asignar tarjeta
                    </button>
                    <button
                      v-if="card.status === 'assigned'"
                      @click="editCard(card)"
                      style="
                        width: 100%;
                        text-align: left;
                        padding: 12px;
                        font-size: 14px;
                        color: #374151;
                        background: transparent;
                        border: none;
                        border-radius: 8px;
                        cursor: pointer;
                        transition: all 0.2s;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                      "
                      onmouseover="this.style.background='#f0f9ff'; this.style.color='#4f46e5'"
                      onmouseout="this.style.background='transparent'; this.style.color='#374151'"
                    >
                      <Edit style="width: 16px; height: 16px" />
                      Editar asignación
                    </button>
                    <button
                      v-if="card.status === 'assigned'"
                      @click="revokeCard(card)"
                      style="
                        width: 100%;
                        text-align: left;
                        padding: 12px;
                        font-size: 14px;
                        color: #dc2626;
                        background: transparent;
                        border: none;
                        border-radius: 8px;
                        cursor: pointer;
                        transition: all 0.2s;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                      "
                      onmouseover="this.style.background='#fef2f2'; this.style.color='#dc2626'"
                      onmouseout="this.style.background='transparent'; this.style.color='#dc2626'"
                    >
                      <UserMinus style="width: 16px; height: 16px" />
                      Revocar tarjeta
                    </button>
                    <div style="height: 1px; background: #f3f4f6; margin: 8px 0"></div>
                    <button
                      @click="removeCard(card)"
                      style="
                        width: 100%;
                        text-align: left;
                        padding: 12px;
                        font-size: 14px;
                        color: #dc2626;
                        background: transparent;
                        border: none;
                        border-radius: 8px;
                        cursor: pointer;
                        transition: all 0.2s;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                      "
                      onmouseover="this.style.background='#fef2f2'"
                      onmouseout="this.style.background='transparent'"
                    >
                      <Trash2 style="width: 16px; height: 16px" />
                      Eliminar tarjeta
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card Status -->
            <div style="margin-bottom: 1.5rem">
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  margin-bottom: 12px;
                "
              >
                <span style="font-size: 14px; font-weight: 500; color: #6b7280">Estado</span>
                <span
                  :style="`
                    padding: 6px 12px;
                    border-radius: 12px;
                    font-size: 12px;
                    font-weight: 600;
                    ${
                      card.status === 'assigned'
                        ? 'background: linear-gradient(135deg, #ecfdf5, #d1fae5); color: #047857; border: 1px solid #6ee7b7;'
                        : 'background: linear-gradient(135deg, #eff6ff, #dbeafe); color: #1d4ed8; border: 1px solid #93c5fd;'
                    }
                  `"
                >
                  {{ card.status === 'assigned' ? '🟢 Asignada' : '🔵 Disponible' }}
                </span>
              </div>

              <!-- Assignment Info -->
              <div
                v-if="card.status === 'assigned'"
                style="
                  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
                  border-radius: 12px;
                  padding: 16px;
                  border: 1px solid #e2e8f0;
                "
              >
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px">
                  <div
                    style="
                      width: 24px;
                      height: 24px;
                      background: linear-gradient(135deg, #4f46e5, #7c3aed);
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    "
                  >
                    <span style="color: white; font-size: 10px; font-weight: 700">{{
                      card.assignedTo?.charAt(0)
                    }}</span>
                  </div>
                  <span style="font-weight: 600; color: #374151">{{ card.assignedTo }}</span>
                </div>

                <div
                  style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                    margin-bottom: 12px;
                  "
                >
                  <div>
                    <div style="font-size: 12px; color: #6b7280; font-weight: 500">Presupuesto</div>
                    <div style="font-size: 14px; font-weight: 700; color: #374151">
                      {{ formatCurrency(card.budget) }}
                    </div>
                  </div>
                  <div>
                    <div style="font-size: 12px; color: #6b7280; font-weight: 500">Gastado</div>
                    <div style="font-size: 14px; font-weight: 700; color: #dc2626">
                      {{ formatCurrency(card.used) }}
                    </div>
                  </div>
                </div>

                <!-- Progress Bar -->
                <div style="margin-top: 12px">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      margin-bottom: 4px;
                    "
                  >
                    <span style="font-size: 12px; color: #6b7280; font-weight: 500"
                      >Uso del presupuesto</span
                    >
                    <span
                      style="font-size: 12px; font-weight: 600"
                      :style="`color: ${(card.used / card.budget) * 100 > 80 ? '#dc2626' : '#10b981'}`"
                    >
                      {{ Math.round((card.used / card.budget) * 100) }}%
                    </span>
                  </div>
                  <div
                    style="
                      width: 100%;
                      height: 6px;
                      background: #e5e7eb;
                      border-radius: 3px;
                      overflow: hidden;
                    "
                  >
                    <div
                      style="height: 100%; border-radius: 3px; transition: all 0.3s ease"
                      :style="`
                        width: ${Math.min((card.used / card.budget) * 100, 100)}%;
                        background: ${
                          (card.used / card.budget) * 100 > 80
                            ? 'linear-gradient(135deg, #dc2626, #ef4444)'
                            : 'linear-gradient(135deg, #4f46e5, #7c3aed)'
                        };
                      `"
                    ></div>
                  </div>
                </div>
              </div>

              <div
                v-else
                style="
                  text-align: center;
                  padding: 20px;
                  background: linear-gradient(135deg, #f0f9ff, #e0e7ff);
                  border-radius: 12px;
                  border: 1px solid #c7d2fe;
                "
              >
                <Clock style="width: 32px; height: 32px; color: #6366f1; margin: 0 auto 8px" />
                <p style="font-size: 14px; color: #4338ca; font-weight: 500; margin: 0">
                  Lista para asignar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Card Modal -->
    <div
      v-if="showAddModal"
      style="
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 50;
        padding: 1rem;
      "
      @click.self="showAddModal = false"
    >
      <div
        style="
          background: white;
          border-radius: 24px;
          max-width: 500px;
          width: 100%;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          transform: scale(1);
          transition: all 0.3s;
        "
        onload="this.style.transform='scale(1)'"
      >
        <!-- Modal Header -->
        <div
          style="
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            padding: 2rem;
            position: relative;
            overflow: hidden;
          "
        >
          <div style="position: absolute; inset: 0; opacity: 0.1">
            <div
              style="
                position: absolute;
                top: -50%;
                right: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle, white 1px, transparent 1px);
                background-size: 20px 20px;
              "
            ></div>
          </div>

          <div
            style="
              position: relative;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div style="display: flex; align-items: center; gap: 12px">
              <div
                style="
                  width: 48px;
                  height: 48px;
                  background: rgba(255, 255, 255, 0.2);
                  border-radius: 16px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  backdrop-filter: blur(8px);
                "
              >
                <Plus style="width: 24px; height: 24px; color: white" />
              </div>
              <div>
                <h3 style="font-size: 24px; font-weight: 900; color: white; margin: 0">
                  Nueva Tarjeta
                </h3>
                <p style="color: rgba(255, 255, 255, 0.8); font-size: 14px; margin: 0">
                  Agregar al pool corporativo
                </p>
              </div>
            </div>

            <button
              @click="showAddModal = false"
              style="
                color: rgba(255, 255, 255, 0.8);
                background: rgba(255, 255, 255, 0.1);
                border: none;
                border-radius: 8px;
                padding: 8px;
                cursor: pointer;
                transition: all 0.2s;
                backdrop-filter: blur(8px);
              "
              onmouseover="this.style.background='rgba(255,255,255,0.2)'; this.style.color='white'"
              onmouseout="this.style.background='rgba(255,255,255,0.1)'; this.style.color='rgba(255,255,255,0.8)'"
            >
              <X style="width: 20px; height: 20px" />
            </button>
          </div>
        </div>

        <!-- Modal Content -->
        <div style="padding: 2rem">
          <form
            @submit.prevent="addCard"
            style="display: flex; flex-direction: column; gap: 1.5rem"
          >
            <div>
              <label
                style="
                  display: block;
                  font-size: 14px;
                  font-weight: 600;
                  color: #374151;
                  margin-bottom: 8px;
                "
              >
                Últimos 4 dígitos de la tarjeta
              </label>
              <div style="position: relative">
                <input
                  v-model="newCard.number"
                  type="text"
                  maxlength="4"
                  pattern="[0-9]{4}"
                  placeholder="1234"
                  style="
                    width: 100%;
                    padding: 16px 16px 16px 48px;
                    border: 2px solid #e5e7eb;
                    border-radius: 16px;
                    font-size: 16px;
                    background: #f9fafb;
                    transition: all 0.2s;
                    outline: none;
                    font-family: 'Courier New', monospace;
                    font-weight: 600;
                    letter-spacing: 2px;
                  "
                  onfocus="this.style.borderColor='#4f46e5'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(79, 70, 229, 0.1)'"
                  onblur="this.style.borderColor='#e5e7eb'; this.style.background='#f9fafb'; this.style.boxShadow='none'"
                  required
                />
                <div
                  style="
                    position: absolute;
                    left: 16px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #6b7280;
                  "
                >
                  <CreditCard style="width: 20px; height: 20px" />
                </div>
              </div>
              <p style="font-size: 12px; color: #6b7280; margin-top: 4px">
                Solo números, exactamente 4 dígitos
              </p>
            </div>

            <div>
              <label
                style="
                  display: block;
                  font-size: 14px;
                  font-weight: 600;
                  color: #374151;
                  margin-bottom: 8px;
                "
              >
                Tipo de tarjeta
              </label>
              <select
                v-model="newCard.type"
                style="
                  width: 100%;
                  padding: 16px;
                  border: 2px solid #e5e7eb;
                  border-radius: 16px;
                  font-size: 16px;
                  background: #f9fafb;
                  transition: all 0.2s;
                  outline: none;
                  cursor: pointer;
                "
                onfocus="this.style.borderColor='#4f46e5'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(79, 70, 229, 0.1)'"
                onblur="this.style.borderColor='#e5e7eb'; this.style.background='#f9fafb'; this.style.boxShadow='none'"
                required
              >
                <option value="">Seleccionar tipo</option>
                <option value="Visa">💳 Visa</option>
                <option value="Mastercard">💳 Mastercard</option>
                <option value="Amex">💎 American Express</option>
              </select>
            </div>

            <!-- Info Box -->
            <div
              style="
                background: linear-gradient(135deg, #dbeafe, #f3e8ff);
                border: 2px solid #c7d2fe;
                border-radius: 16px;
                padding: 20px;
                text-align: center;
              "
            >
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 8px;
                  margin-bottom: 8px;
                "
              >
                <div style="font-size: 20px">ℹ️</div>
                <span
                  style="
                    background: linear-gradient(135deg, #4338ca, #7c2d12);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-size: 14px;
                    font-weight: 700;
                  "
                  >Información</span
                >
              </div>
              <p
                style="
                  color: #4338ca;
                  font-size: 13px;
                  font-weight: 500;
                  margin: 0;
                  line-height: 1.4;
                "
              >
                La nueva tarjeta se agregará al pool como "Disponible" y podrá ser asignada a
                empleados posteriormente
              </p>
            </div>

            <div style="display: flex; gap: 12px; padding-top: 8px">
              <button
                type="button"
                @click="showAddModal = false"
                style="
                  flex: 1;
                  padding: 16px;
                  border: 2px solid #e5e7eb;
                  color: #374151;
                  background: white;
                  border-radius: 16px;
                  font-weight: 600;
                  cursor: pointer;
                  transition: all 0.2s;
                "
                onmouseover="this.style.background='#f9fafb'; this.style.borderColor='#d1d5db'"
                onmouseout="this.style.background='white'; this.style.borderColor='#e5e7eb'"
              >
                Cancelar
              </button>
              <button
                type="submit"
                style="
                  flex: 1;
                  padding: 16px;
                  background: linear-gradient(135deg, #4f46e5, #7c3aed);
                  color: white;
                  border: none;
                  border-radius: 16px;
                  font-weight: 700;
                  cursor: pointer;
                  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
                  transition: all 0.3s;
                "
                onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 20px 25px -5px rgb(0 0 0 / 0.1)'"
                onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 15px -3px rgb(0 0 0 / 0.1)'"
              >
                Agregar Tarjeta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  CreditCard,
  Plus,
  X,
  MoreVertical,
  CheckCircle,
  Clock,
  DollarSign,
  TrendingUp,
  UserPlus,
  UserMinus,
  Edit,
  Trash2,
} from 'lucide-vue-next'

interface Card {
  id: number
  number: string
  type: string
  status: 'available' | 'assigned'
  assignedTo: string | null
  budget: number
  used: number
}

// Props
const props = defineProps<{
  cards: Card[]
}>()

// Emits
const emit = defineEmits<{
  addCard: [card: Omit<Card, 'id'>]
  editCard: [card: Card]
  revokeCard: [cardId: number]
  assignCard: [card: Card]
  removeCard: [cardId: number]
}>()

// State
const showAddModal = ref(false)
const activeMenu = ref<number | null>(null)

const newCard = ref({
  number: '',
  type: '',
})

// Computed
const assignedCards = computed(() => {
  return props.cards.filter((card) => card.status === 'assigned').length
})

const availableCards = computed(() => {
  return props.cards.filter((card) => card.status === 'available').length
})

const totalBudget = computed(() => {
  return props.cards.reduce((total, card) => total + card.budget, 0)
})

// Methods
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

const toggleMenu = (cardId: number) => {
  activeMenu.value = activeMenu.value === cardId ? null : cardId
}

const closeMenu = () => {
  activeMenu.value = null
}

const addCard = () => {
  if (newCard.value.number && newCard.value.type) {
    const cardData = {
      number: `****${newCard.value.number}`,
      type: newCard.value.type,
      status: 'available' as const,
      assignedTo: null,
      budget: 0,
      used: 0,
    }

    emit('addCard', cardData)
    showAddModal.value = false
    newCard.value = { number: '', type: '' }
  }
}

const editCard = (card: Card) => {
  emit('editCard', card)
  closeMenu()
}

const revokeCard = (card: Card) => {
  if (
    confirm(`¿Estás seguro de que quieres revocar la tarjeta ${card.number} de ${card.assignedTo}?`)
  ) {
    emit('revokeCard', card.id)
  }
  closeMenu()
}

const assignCard = (card: Card) => {
  emit('assignCard', card)
  closeMenu()
}

const removeCard = (card: Card) => {
  if (confirm(`¿Estás seguro de que quieres eliminar permanentemente la tarjeta ${card.number}?`)) {
    emit('removeCard', card.id)
  }
  closeMenu()
}

// Click outside to close menu
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.relative') && !target.closest('[style*="position: relative"]')) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<script lang="ts">
export default {
  name: 'CardsView',
}
</script>

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

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.95) translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
  .sm\:inline {
    display: inline !important;
  }

  .sm\:hidden {
    display: none !important;
  }
}

/* Grid responsive adjustments */
@media (max-width: 640px) {
  div[style*='grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))'] {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 1rem !important;
  }

  div[style*='grid-template-columns: repeat(auto-fill, minmax(350px, 1fr))'] {
    grid-template-columns: 1fr !important;
  }
}

/* Enhanced hover effects */
.card-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-hover:hover {
  transform: translateY(-8px) scale(1.02);
}

/* Custom scrollbar for better UX */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #4338ca, #6d28d9);
}
</style>
