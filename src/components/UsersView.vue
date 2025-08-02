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
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 14px;
            font-weight: 600;
          "
          >Gestión de Capital Humano</span
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
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >Usuarios</span
            >
          </h1>
          <p style="font-size: 18px; color: #6b7280; font-weight: 500; max-width: 600px">
            Administra empleados, roles y permisos con control granular sobre las asignaciones de
            tarjetas corporativas.
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
          <UserPlus style="width: 20px; height: 20px" />
          <span style="display: none" class="sm:inline">Nuevo Usuario</span>
          <span style="display: inline" class="sm:hidden">Nuevo</span>
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
      <!-- Total Users -->
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
              <Users style="width: 24px; height: 24px; color: #3b82f6" />
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
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin-bottom: 4px;
            "
          >
            {{ users.length }}
          </div>
          <div style="font-size: 14px; color: #6b7280; font-weight: 500">Empleados registrados</div>
        </div>
      </div>

      <!-- Active Users -->
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
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin-bottom: 4px;
            "
          >
            {{ activeUsers }}
          </div>
          <div style="font-size: 14px; color: #6b7280; font-weight: 500">
            Con tarjetas asignadas
          </div>
        </div>
      </div>

      <!-- Total Spent -->
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
              Gastado
            </div>
          </div>
          <div
            style="
              font-size: 1.8rem;
              font-weight: 900;
              background: linear-gradient(135deg, #d97706, #f59e0b);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin-bottom: 4px;
            "
          >
            {{ formatCurrency(totalSpent) }}
          </div>
          <div style="font-size: 14px; color: #6b7280; font-weight: 500">Gasto total acumulado</div>
        </div>
      </div>

      <!-- Avg per User -->
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
              <BarChart3 style="width: 24px; height: 24px; color: #7c3aed" />
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
              Promedio
            </div>
          </div>
          <div
            style="
              font-size: 1.8rem;
              font-weight: 900;
              background: linear-gradient(135deg, #6d28d9, #7c3aed);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin-bottom: 4px;
            "
          >
            {{ formatCurrency(avgPerUser) }}
          </div>
          <div style="font-size: 14px; color: #6b7280; font-weight: 500">Promedio por usuario</div>
        </div>
      </div>
    </div>

    <!-- Users List -->
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
            <Users style="width: 24px; height: 24px; color: white" />
          </div>
          <div>
            <h2 style="font-size: 20px; font-weight: 700; color: #111827; margin: 0">
              Directorio de Empleados
            </h2>
            <p style="color: #6b7280; font-size: 14px; margin: 0">
              Gestiona perfiles, roles y asignaciones de tarjetas
            </p>
          </div>
        </div>
      </div>

      <!-- Users Grid -->
      <div style="padding: 2rem">
        <div v-if="users.length === 0" style="text-align: center; padding: 4rem 2rem">
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
            <Users style="width: 40px; height: 40px; color: #9ca3af" />
          </div>
          <h3 style="font-size: 18px; font-weight: 600; color: #374151; margin-bottom: 0.5rem">
            No hay usuarios registrados
          </h3>
          <p style="color: #6b7280; margin-bottom: 2rem">
            Comienza agregando el primer empleado al sistema
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
            Agregar Primer Usuario
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
            v-for="user in users"
            :key="user.id"
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
            <!-- User Header -->
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 1.5rem;
              "
            >
              <div style="display: flex; align-items: center; gap: 12px">
                <!-- Avatar -->
                <div
                  style="
                    width: 48px;
                    height: 48px;
                    background: linear-gradient(135deg, #4f46e5, #7c3aed);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                    position: relative;
                  "
                >
                  <span style="color: white; font-size: 18px; font-weight: 700">{{
                    user.name.charAt(0)
                  }}</span>
                  <div
                    style="
                      position: absolute;
                      bottom: -2px;
                      right: -2px;
                      width: 12px;
                      height: 12px;
                      background: #10b981;
                      border-radius: 50%;
                      border: 2px solid white;
                    "
                  ></div>
                </div>

                <!-- User Info -->
                <div>
                  <div style="font-size: 16px; font-weight: 700; color: #111827">
                    {{ user.name }}
                  </div>
                  <div style="font-size: 12px; color: #6b7280; font-weight: 500">
                    {{ user.email }}
                  </div>
                </div>
              </div>

              <!-- Actions Menu -->
              <div style="position: relative">
                <button
                  @click="toggleMenu(user.id)"
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
                  v-if="activeMenu === user.id"
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
                      @click="editUser(user)"
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
                      Editar perfil
                    </button>
                    <button
                      v-if="!user.cardAssigned"
                      @click="assignCard(user)"
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
                      onmouseover="this.style.background='#f0fdf4'; this.style.color='#16a34a'"
                      onmouseout="this.style.background='transparent'; this.style.color='#374151'"
                    >
                      <CreditCard style="width: 16px; height: 16px" />
                      Asignar tarjeta
                    </button>
                    <button
                      v-if="user.cardAssigned"
                      @click="revokeCard(user)"
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
                      <XCircle style="width: 16px; height: 16px" />
                      Revocar tarjeta
                    </button>
                    <div style="height: 1px; background: #f3f4f6; margin: 8px 0"></div>
                    <button
                      @click="removeUser(user)"
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
                      Eliminar usuario
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Role Badge -->
            <div style="margin-bottom: 1.5rem">
              <span
                :style="`
                  padding: 6px 12px;
                  border-radius: 12px;
                  font-size: 12px;
                  font-weight: 600;
                  ${getRoleStyle(user.role)}
                `"
              >
                {{ getRoleIcon(user.role) }} {{ user.role }}
              </span>
            </div>

            <!-- Card Assignment -->
            <div
              style="
                background: linear-gradient(135deg, #f8fafc, #f1f5f9);
                border-radius: 12px;
                padding: 16px;
                border: 1px solid #e2e8f0;
                margin-bottom: 1rem;
              "
            >
              <div
                v-if="user.cardAssigned"
                style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px"
              >
                <div
                  style="
                    width: 32px;
                    height: 20px;
                    background: linear-gradient(135deg, #4f46e5, #7c3aed);
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <CreditCard style="width: 12px; height: 12px; color: white" />
                </div>
                <div>
                  <div style="font-size: 12px; color: #6b7280; font-weight: 500">
                    Tarjeta asignada
                  </div>
                  <div
                    style="
                      font-family: 'Courier New', monospace;
                      font-size: 14px;
                      font-weight: 700;
                      color: #374151;
                    "
                  >
                    {{ user.cardAssigned }}
                  </div>
                </div>
              </div>

              <div
                v-if="user.cardAssigned"
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
                    {{ formatCurrency(user.budget) }}
                  </div>
                </div>
                <div>
                  <div style="font-size: 12px; color: #6b7280; font-weight: 500">Gastado</div>
                  <div style="font-size: 14px; font-weight: 700; color: #dc2626">
                    {{ formatCurrency(user.used) }}
                  </div>
                </div>
              </div>

              <!-- Progress Bar -->
              <!-- Progress Bar -->
              <div v-if="user.cardAssigned && user.budget > 0" style="margin-top: 12px">
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
                    :style="`color: ${(user.used / user.budget) * 100 > 80 ? '#dc2626' : '#10b981'}`"
                  >
                    {{ Math.round((user.used / user.budget) * 100) }}%
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
                      width: ${Math.min((user.used / user.budget) * 100, 100)}%;
                      background: ${
                        (user.used / user.budget) * 100 > 80
                          ? 'linear-gradient(135deg, #dc2626, #ef4444)'
                          : 'linear-gradient(135deg, #4f46e5, #7c3aed)'
                      };
                    `"
                  ></div>
                </div>
              </div>

              <div v-if="!user.cardAssigned" style="text-align: center; padding: 12px">
                <XCircle style="width: 32px; height: 32px; color: #9ca3af; margin: 0 auto 8px" />
                <p style="font-size: 14px; color: #6b7280; font-weight: 500; margin: 0">
                  Sin tarjeta asignada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add User Modal -->
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
                <UserPlus style="width: 24px; height: 24px; color: white" />
              </div>
              <div>
                <h3 style="font-size: 24px; font-weight: 900; color: white; margin: 0">
                  Nuevo Usuario
                </h3>
                <p style="color: rgba(255, 255, 255, 0.8); font-size: 14px; margin: 0">
                  Agregar empleado al sistema
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
            @submit.prevent="addUser"
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
                Nombre completo
              </label>
              <div style="position: relative">
                <input
                  v-model="newUser.name"
                  type="text"
                  placeholder="Juan Pérez"
                  style="
                    width: 100%;
                    padding: 16px 16px 16px 48px;
                    border: 2px solid #e5e7eb;
                    border-radius: 16px;
                    font-size: 16px;
                    background: #f9fafb;
                    transition: all 0.2s;
                    outline: none;
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
                  <User style="width: 20px; height: 20px" />
                </div>
              </div>
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
                Email corporativo
              </label>
              <div style="position: relative">
                <input
                  v-model="newUser.email"
                  type="email"
                  placeholder="juan@empresa.com"
                  style="
                    width: 100%;
                    padding: 16px 16px 16px 48px;
                    border: 2px solid #e5e7eb;
                    border-radius: 16px;
                    font-size: 16px;
                    background: #f9fafb;
                    transition: all 0.2s;
                    outline: none;
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
                  <Mail style="width: 20px; height: 20px" />
                </div>
              </div>
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
                Rol en la empresa
              </label>
              <select
                v-model="newUser.role"
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
                <option value="">Seleccionar rol</option>
                <option value="Empleado">👤 Empleado</option>
                <option value="Manager">👨‍💼 Manager</option>
                <option value="Director">🎯 Director</option>
                <option value="Admin">⚡ Administrador</option>
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
                <div style="font-size: 20px">👥</div>
                <span
                  style="
                    background: linear-gradient(135deg, #4338ca, #7c2d12);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                  "
                  >Nota</span
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
                El usuario se creará sin tarjeta asignada. Podrás asignar una tarjeta posteriormente
                desde el menú de acciones.
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
                Crear Usuario
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
  Users,
  UserPlus,
  X,
  MoreVertical,
  CheckCircle,
  DollarSign,
  TrendingUp,
  BarChart3,
  Edit,
  Trash2,
  CreditCard,
  XCircle,
  User,
  Mail,
} from 'lucide-vue-next'

interface User {
  id: number
  name: string
  email: string
  role: string
  cardAssigned: string | null
  budget: number
  used: number
}

// Props
const props = defineProps<{
  users: User[]
}>()

// Emits
const emit = defineEmits<{
  addUser: [user: Omit<User, 'id'>]
  editUser: [user: User]
  removeUser: [userId: number]
  assignCard: [user: User]
  revokeCard: [user: User]
}>()

// State
const showAddModal = ref(false)
const activeMenu = ref<number | null>(null)

const newUser = ref({
  name: '',
  email: '',
  role: '',
})

// Computed
const activeUsers = computed(() => {
  return props.users.filter((user) => user.cardAssigned !== null).length
})

const totalSpent = computed(() => {
  return props.users.reduce((total, user) => total + user.used, 0)
})

const avgPerUser = computed(() => {
  if (props.users.length === 0) return 0
  return totalSpent.value / props.users.length
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

const getRoleStyle = (role: string) => {
  const styles: Record<string, string> = {
    Empleado:
      'background: linear-gradient(135deg, #dbeafe, #bfdbfe); color: #1e40af; border: 1px solid #93c5fd;',
    Manager:
      'background: linear-gradient(135deg, #ecfdf5, #d1fae5); color: #047857; border: 1px solid #6ee7b7;',
    Director:
      'background: linear-gradient(135deg, #fef3e2, #fed7aa); color: #c2410c; border: 1px solid #fdba74;',
    Admin:
      'background: linear-gradient(135deg, #faf5ff, #f3e8ff); color: #7c2d12; border: 1px solid #d8b4fe;',
  }
  return styles[role] || styles['Empleado']
}

const getRoleIcon = (role: string) => {
  const icons: Record<string, string> = {
    Empleado: '👤',
    Manager: '👨‍💼',
    Director: '🎯',
    Admin: '⚡',
  }
  return icons[role] || '👤'
}

const toggleMenu = (userId: number) => {
  activeMenu.value = activeMenu.value === userId ? null : userId
}

const closeMenu = () => {
  activeMenu.value = null
}

const addUser = () => {
  if (newUser.value.name && newUser.value.email && newUser.value.role) {
    const userData = {
      name: newUser.value.name,
      email: newUser.value.email,
      role: newUser.value.role,
      cardAssigned: null,
      budget: 0,
      used: 0,
    }

    emit('addUser', userData)
    showAddModal.value = false
    newUser.value = { name: '', email: '', role: '' }
  }
}

const editUser = (user: User) => {
  emit('editUser', user)
  closeMenu()
}

const removeUser = (user: User) => {
  if (confirm(`¿Estás seguro de que quieres eliminar al usuario ${user.name}?`)) {
    emit('removeUser', user.id)
  }
  closeMenu()
}

const assignCard = (user: User) => {
  emit('assignCard', user)
  closeMenu()
}

const revokeCard = (user: User) => {
  if (
    confirm(`¿Estás seguro de que quieres revocar la tarjeta ${user.cardAssigned} de ${user.name}?`)
  ) {
    emit('revokeCard', user)
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
.user-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.user-card:hover {
  transform: translateY(-8px) scale(1.02);
}

/* Custom scrollbar */
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

<script lang="ts">
export default {
  name: 'UsersView',
}
</script>
