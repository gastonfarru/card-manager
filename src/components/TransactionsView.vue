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
          background: linear-gradient(135deg, #f0f9ff, #ecfdf5);
          border: 1px solid #93c5fd;
          border-radius: 9999px;
          padding: 8px 20px;
          margin-bottom: 1.5rem;
        "
      >
        <div
          style="
            width: 8px;
            height: 8px;
            background: linear-gradient(135deg, #3b82f6, #10b981);
            border-radius: 50%;
            animation: pulse 2s infinite;
          "
        ></div>
        <span
          style="
            background: linear-gradient(135deg, #1e40af, #047857);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 14px;
            font-weight: 600;
          "
          >Control Financiero</span
        >
      </div>

      <!-- Title & Filters -->
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
            Monitor de
            <span
              style="
                background: linear-gradient(135deg, #3b82f6, #10b981, #f59e0b);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >Transacciones</span
            >
          </h1>
          <p style="font-size: 18px; color: #6b7280; font-weight: 500; max-width: 600px">
            Monitorea todos los gastos empresariales en tiempo real y gestiona la conciliación de
            transacciones.
          </p>
        </div>

        <!-- Filter Button -->
        <button
          @click="showFilters = !showFilters"
          style="
            background: linear-gradient(135deg, #3b82f6, #10b981);
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
          <Filter style="width: 20px; height: 20px" />
          <span style="display: none" class="sm:inline">Filtros</span>
        </button>
      </div>
    </div>

    <!-- Filters Panel -->
    <div
      v-if="showFilters"
      style="
        background: white;
        border-radius: 20px;
        padding: 1.5rem;
        margin-bottom: 2rem;
        border: 1px solid #e5e7eb;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
      "
    >
      <div
        style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          align-items: end;
        "
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
            Estado
          </label>
          <select
            v-model="filters.status"
            style="
              width: 100%;
              padding: 12px;
              border: 2px solid #e5e7eb;
              border-radius: 12px;
              font-size: 14px;
              background: white;
              transition: all 0.2s;
              outline: none;
            "
            onfocus="this.style.borderColor='#3b82f6'"
            onblur="this.style.borderColor='#e5e7eb'"
          >
            <option value="">Todos los estados</option>
            <option value="pending">Pendientes</option>
            <option value="conciliated">Conciliados</option>
          </select>
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
            Usuario
          </label>
          <select
            v-model="filters.user"
            style="
              width: 100%;
              padding: 12px;
              border: 2px solid #e5e7eb;
              border-radius: 12px;
              font-size: 14px;
              background: white;
              transition: all 0.2s;
              outline: none;
            "
            onfocus="this.style.borderColor='#3b82f6'"
            onblur="this.style.borderColor='#e5e7eb'"
          >
            <option value="">Todos los usuarios</option>
            <option v-for="user in uniqueUsers" :key="user" :value="user">{{ user }}</option>
          </select>
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
            Comercio
          </label>
          <input
            v-model="filters.merchant"
            type="text"
            placeholder="Buscar comercio..."
            style="
              width: 100%;
              padding: 12px;
              border: 2px solid #e5e7eb;
              border-radius: 12px;
              font-size: 14px;
              background: white;
              transition: all 0.2s;
              outline: none;
            "
            onfocus="this.style.borderColor='#3b82f6'"
            onblur="this.style.borderColor='#e5e7eb'"
          />
        </div>

        <button
          @click="clearFilters"
          style="
            padding: 12px 20px;
            color: #6b7280;
            background: #f9fafb;
            border: 2px solid #e5e7eb;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            height: fit-content;
          "
          onmouseover="this.style.background='#f3f4f6'; this.style.color='#374151'"
          onmouseout="this.style.background='#f9fafb'; this.style.color='#6b7280'"
        >
          Limpiar
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
      <!-- Total Transactions -->
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
            background: radial-gradient(circle, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
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
                background: linear-gradient(135deg, #dbeafe, #bfdbfe);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #93c5fd;
              "
            >
              <Receipt style="width: 24px; height: 24px; color: #3b82f6" />
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
            {{ filteredTransactions.length }}
          </div>
          <div style="font-size: 14px; color: #6b7280; font-weight: 500">Transacciones</div>
        </div>
      </div>

      <!-- Pending Transactions -->
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
              <Clock style="width: 24px; height: 24px; color: #f59e0b" />
            </div>
            <AlertCircle style="width: 16px; height: 16px; color: #f59e0b" />
          </div>
          <div
            style="
              font-size: 2.5rem;
              font-weight: 900;
              background: linear-gradient(135deg, #d97706, #f59e0b);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin-bottom: 4px;
            "
          >
            {{ pendingCount }}
          </div>
          <div style="font-size: 14px; color: #6b7280; font-weight: 500">Pendientes</div>
        </div>
      </div>

      <!-- Total Amount -->
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
              <DollarSign style="width: 24px; height: 24px; color: #10b981" />
            </div>
            <TrendingUp style="width: 16px; height: 16px; color: #10b981" />
          </div>
          <div
            style="
              font-size: 1.8rem;
              font-weight: 900;
              background: linear-gradient(135deg, #047857, #10b981);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin-bottom: 4px;
            "
          >
            {{ formatCurrency(totalAmount) }}
          </div>
          <div style="font-size: 14px; color: #6b7280; font-weight: 500">Monto total</div>
        </div>
      </div>

      <!-- Average per Transaction -->
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
            {{ formatCurrency(averageAmount) }}
          </div>
          <div style="font-size: 14px; color: #6b7280; font-weight: 500">Por transacción</div>
        </div>
      </div>
    </div>

    <!-- Transactions List -->
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
              background: linear-gradient(135deg, #3b82f6, #10b981);
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            <Receipt style="width: 24px; height: 24px; color: white" />
          </div>
          <div>
            <h2 style="font-size: 20px; font-weight: 700; color: #111827; margin: 0">
              Historial de Transacciones
            </h2>
            <p style="color: #6b7280; font-size: 14px; margin: 0">
              Monitorea y gestiona todos los gastos empresariales
            </p>
          </div>
        </div>
      </div>

      <!-- Transactions List -->
      <div style="padding: 2rem">
        <div
          v-if="filteredTransactions.length === 0"
          style="text-align: center; padding: 4rem 2rem"
        >
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
            <Receipt style="width: 40px; height: 40px; color: #9ca3af" />
          </div>
          <h3 style="font-size: 18px; font-weight: 600; color: #374151; margin-bottom: 0.5rem">
            No hay transacciones
          </h3>
          <p style="color: #6b7280; margin-bottom: 2rem">
            No se encontraron transacciones con los filtros aplicados
          </p>
          <button
            @click="clearFilters"
            style="
              background: linear-gradient(135deg, #3b82f6, #10b981);
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
            Limpiar Filtros
          </button>
        </div>

        <div v-else style="display: flex; flex-direction: column; gap: 1rem">
          <div
            v-for="transaction in filteredTransactions"
            :key="transaction.id"
            style="
              background: linear-gradient(135deg, #ffffff, #fafbfc);
              border-radius: 16px;
              border: 1px solid #f3f4f6;
              padding: 1.5rem;
              transition: all 0.3s;
              position: relative;
              overflow: hidden;
            "
            onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 10px 15px -3px rgb(0 0 0 / 0.1)'; this.style.borderColor='#c7d2fe'"
            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'; this.style.borderColor='#f3f4f6'"
          >
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                gap: 1rem;
              "
            >
              <!-- Transaction Info -->
              <div style="display: flex; align-items: center; gap: 16px; flex: 1">
                <!-- Icon -->
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
                    position: relative;
                  "
                >
                  <CreditCard style="width: 24px; height: 24px; color: #3b82f6" />
                  <!-- Receipt indicator -->
                  <div
                    v-if="transaction.hasReceipt"
                    style="
                      position: absolute;
                      top: -4px;
                      right: -4px;
                      width: 16px;
                      height: 16px;
                      background: #10b981;
                      border-radius: 50%;
                      border: 2px solid white;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    "
                  >
                    <FileText style="width: 8px; height: 8px; color: white" />
                  </div>
                </div>

                <!-- Details -->
                <div style="flex: 1">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      align-items: flex-start;
                      margin-bottom: 8px;
                    "
                  >
                    <div>
                      <h3
                        style="font-size: 16px; font-weight: 700; color: #111827; margin: 0 0 4px 0"
                      >
                        {{ transaction.merchant }}
                      </h3>
                      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px">
                        <span style="font-size: 14px; color: #6b7280; font-weight: 500">
                          {{ transaction.user }}
                        </span>
                        <span style="color: #d1d5db">•</span>
                        <span
                          style="
                            font-family: 'Courier New', monospace;
                            font-size: 14px;
                            color: #6b7280;
                            font-weight: 600;
                          "
                        >
                          {{ transaction.cardNumber }}
                        </span>
                      </div>
                      <div style="font-size: 12px; color: #9ca3af; font-weight: 500">
                        {{ formatDate(transaction.date) }}
                      </div>
                    </div>

                    <!-- Amount -->
                    <div style="text-align: right">
                      <div
                        style="
                          font-size: 20px;
                          font-weight: 900;
                          background: linear-gradient(135deg, #047857, #10b981);
                          background-clip: text;
                          -webkit-background-clip: text;
                          -webkit-text-fill-color: transparent;
                          margin-bottom: 4px;
                        "
                      >
                        {{ formatCurrency(transaction.amount) }}
                      </div>
                    </div>
                  </div>

                  <!-- Status and Actions -->
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      gap: 1rem;
                    "
                  >
                    <div style="display: flex; align-items: center; gap: 12px">
                      <!-- Status Badge -->
                      <span
                        :style="`
                          padding: 6px 12px;
                          border-radius: 12px;
                          font-size: 12px;
                          font-weight: 600;
                          ${getStatusStyle(transaction.status)}
                        `"
                      >
                        {{ getStatusIcon(transaction.status) }}
                        {{ getStatusText(transaction.status) }}
                      </span>

                      <!-- Receipt Badge -->
                      <span
                        v-if="transaction.hasReceipt"
                        style="
                          padding: 4px 8px;
                          background: linear-gradient(135deg, #ecfdf5, #d1fae5);
                          color: #047857;
                          border: 1px solid #6ee7b7;
                          border-radius: 8px;
                          font-size: 11px;
                          font-weight: 600;
                          display: flex;
                          align-items: center;
                          gap: 4px;
                        "
                      >
                        <FileText style="width: 10px; height: 10px" />
                        Recibo
                      </span>
                    </div>

                    <!-- Actions -->
                    <div style="display: flex; gap: 8px">
                      <button
                        v-if="transaction.status === 'pending'"
                        @click="conciliateTransaction(transaction)"
                        style="
                          padding: 8px 16px;
                          background: linear-gradient(135deg, #10b981, #047857);
                          color: white;
                          border: none;
                          border-radius: 8px;
                          font-size: 12px;
                          font-weight: 600;
                          cursor: pointer;
                          transition: all 0.2s;
                          display: flex;
                          align-items: center;
                          gap: 4px;
                        "
                        onmouseover="this.style.transform='translateY(-1px)'"
                        onmouseout="this.style.transform='translateY(0)'"
                      >
                        <CheckCircle style="width: 12px; height: 12px" />
                        Conciliar
                      </button>

                      <button
                        v-if="!transaction.hasReceipt"
                        @click="uploadReceipt(transaction)"
                        style="
                          padding: 8px 16px;
                          background: #f3f4f6;
                          color: #6b7280;
                          border: 1px solid #e5e7eb;
                          border-radius: 8px;
                          font-size: 12px;
                          font-weight: 600;
                          cursor: pointer;
                          transition: all 0.2s;
                          display: flex;
                          align-items: center;
                          gap: 4px;
                        "
                        onmouseover="this.style.background='#e5e7eb'; this.style.color='#374151'"
                        onmouseout="this.style.background='#f3f4f6'; this.style.color='#6b7280'"
                      >
                        <Upload style="width: 12px; height: 12px" />
                        Subir Recibo
                      </button>

                      <button
                        @click="viewDetails(transaction)"
                        style="
                          padding: 8px 12px;
                          background: transparent;
                          color: #6b7280;
                          border: 1px solid #e5e7eb;
                          border-radius: 8px;
                          font-size: 12px;
                          cursor: pointer;
                          transition: all 0.2s;
                        "
                        onmouseover="this.style.background='#f9fafb'; this.style.color='#374151'"
                        onmouseout="this.style.background='transparent'; this.style.color='#6b7280'"
                      >
                        <Eye style="width: 12px; height: 12px" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Transaction Detail Modal -->
    <div
      v-if="selectedTransaction"
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
      @click.self="selectedTransaction = null"
    >
      <div
        style="
          background: white;
          border-radius: 24px;
          max-width: 600px;
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
            background: linear-gradient(135deg, #3b82f6, #10b981);
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
                <Receipt style="width: 24px; height: 24px; color: white" />
              </div>
              <div>
                <h3 style="font-size: 24px; font-weight: 900; color: white; margin: 0">
                  Detalle de Transacción
                </h3>
                <p style="color: rgba(255, 255, 255, 0.8); font-size: 14px; margin: 0">
                  Información completa del gasto
                </p>
              </div>
            </div>

            <button
              @click="selectedTransaction = null"
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
          <div style="display: flex; flex-direction: column; gap: 1.5rem">
            <!-- Transaction Info Grid -->
            <div
              style="
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1.5rem;
                padding: 1.5rem;
                background: linear-gradient(135deg, #f8fafc, #f1f5f9);
                border-radius: 16px;
                border: 1px solid #e2e8f0;
              "
            >
              <div>
                <label
                  style="
                    font-size: 12px;
                    color: #6b7280;
                    font-weight: 600;
                    margin-bottom: 4px;
                    display: block;
                  "
                >
                  Comercio
                </label>
                <div style="font-size: 16px; font-weight: 700; color: #111827">
                  {{ selectedTransaction.merchant }}
                </div>
              </div>

              <div>
                <label
                  style="
                    font-size: 12px;
                    color: #6b7280;
                    font-weight: 600;
                    margin-bottom: 4px;
                    display: block;
                  "
                >
                  Monto
                </label>
                <div
                  style="
                    font-size: 18px;
                    font-weight: 900;
                    background: linear-gradient(135deg, #047857, #10b981);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                  "
                >
                  {{ formatCurrency(selectedTransaction.amount) }}
                </div>
              </div>

              <div>
                <label
                  style="
                    font-size: 12px;
                    color: #6b7280;
                    font-weight: 600;
                    margin-bottom: 4px;
                    display: block;
                  "
                >
                  Usuario
                </label>
                <div style="font-size: 14px; font-weight: 600; color: #374151">
                  {{ selectedTransaction.user }}
                </div>
              </div>

              <div>
                <label
                  style="
                    font-size: 12px;
                    color: #6b7280;
                    font-weight: 600;
                    margin-bottom: 4px;
                    display: block;
                  "
                >
                  Tarjeta
                </label>
                <div
                  style="
                    font-family: 'Courier New', monospace;
                    font-size: 14px;
                    font-weight: 700;
                    color: #374151;
                  "
                >
                  {{ selectedTransaction.cardNumber }}
                </div>
              </div>

              <div>
                <label
                  style="
                    font-size: 12px;
                    color: #6b7280;
                    font-weight: 600;
                    margin-bottom: 4px;
                    display: block;
                  "
                >
                  Fecha
                </label>
                <div style="font-size: 14px; font-weight: 600; color: #374151">
                  {{ formatDate(selectedTransaction.date) }}
                </div>
              </div>

              <div>
                <label
                  style="
                    font-size: 12px;
                    color: #6b7280;
                    font-weight: 600;
                    margin-bottom: 4px;
                    display: block;
                  "
                >
                  Estado
                </label>
                <span
                  :style="`
                    padding: 6px 12px;
                    border-radius: 8px;
                    font-size: 12px;
                    font-weight: 600;
                    ${getStatusStyle(selectedTransaction.status)}
                  `"
                >
                  {{ getStatusIcon(selectedTransaction.status) }}
                  {{ getStatusText(selectedTransaction.status) }}
                </span>
              </div>
            </div>

            <!-- Actions -->
            <div style="display: flex; gap: 12px; padding-top: 8px">
              <button
                v-if="selectedTransaction.status === 'pending'"
                @click="conciliateTransaction(selectedTransaction)"
                style="
                  flex: 1;
                  padding: 16px;
                  background: linear-gradient(135deg, #10b981, #047857);
                  color: white;
                  border: none;
                  border-radius: 16px;
                  font-weight: 700;
                  cursor: pointer;
                  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
                  transition: all 0.3s;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 8px;
                "
                onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 20px 25px -5px rgb(0 0 0 / 0.1)'"
                onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 15px -3px rgb(0 0 0 / 0.1)'"
              >
                <CheckCircle style="width: 20px; height: 20px" />
                Conciliar Transacción
              </button>

              <button
                v-if="!selectedTransaction.hasReceipt"
                @click="uploadReceipt(selectedTransaction)"
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
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 8px;
                "
                onmouseover="this.style.background='#f9fafb'; this.style.borderColor='#d1d5db'"
                onmouseout="this.style.background='white'; this.style.borderColor='#e5e7eb'"
              >
                <Upload style="width: 20px; height: 20px" />
                Subir Recibo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  Receipt,
  Filter,
  Clock,
  DollarSign,
  TrendingUp,
  BarChart3,
  AlertCircle,
  CreditCard,
  FileText,
  CheckCircle,
  Upload,
  Eye,
  X,
} from 'lucide-vue-next'

interface Transaction {
  id: number
  cardNumber: string
  user: string
  amount: number
  merchant: string
  date: string
  status: 'pending' | 'conciliated'
  hasReceipt: boolean
}

// Props
const props = defineProps<{
  transactions: Transaction[]
}>()

// Emits
const emit = defineEmits<{
  conciliateTransaction: [transaction: Transaction]
  uploadReceipt: [transaction: Transaction]
}>()

// State
const showFilters = ref(false)
const selectedTransaction = ref<Transaction | null>(null)

const filters = ref({
  status: '',
  user: '',
  merchant: '',
})

// Computed
const filteredTransactions = computed(() => {
  return props.transactions.filter((transaction) => {
    const matchesStatus = !filters.value.status || transaction.status === filters.value.status
    const matchesUser = !filters.value.user || transaction.user === filters.value.user
    const matchesMerchant =
      !filters.value.merchant ||
      transaction.merchant.toLowerCase().includes(filters.value.merchant.toLowerCase())

    return matchesStatus && matchesUser && matchesMerchant
  })
})

const uniqueUsers = computed(() => {
  return [...new Set(props.transactions.map((t) => t.user))].sort()
})

const pendingCount = computed(() => {
  return filteredTransactions.value.filter((t) => t.status === 'pending').length
})

const totalAmount = computed(() => {
  return filteredTransactions.value.reduce((total, t) => total + t.amount, 0)
})

const averageAmount = computed(() => {
  if (filteredTransactions.value.length === 0) return 0
  return totalAmount.value / filteredTransactions.value.length
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

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const getStatusStyle = (status: string) => {
  const styles: Record<string, string> = {
    pending:
      'background: linear-gradient(135deg, #fefbf3, #fed7aa); color: #c2410c; border: 1px solid #fdba74;',
    conciliated:
      'background: linear-gradient(135deg, #ecfdf5, #d1fae5); color: #047857; border: 1px solid #6ee7b7;',
  }
  return styles[status] || styles['pending']
}

const getStatusIcon = (status: string) => {
  const icons: Record<string, string> = {
    pending: '⏳',
    conciliated: '✅',
  }
  return icons[status] || '⏳'
}

const getStatusText = (status: string) => {
  const texts: Record<string, string> = {
    pending: 'Pendiente',
    conciliated: 'Conciliado',
  }
  return texts[status] || 'Pendiente'
}

const clearFilters = () => {
  filters.value = {
    status: '',
    user: '',
    merchant: '',
  }
}

const conciliateTransaction = (transaction: Transaction) => {
  emit('conciliateTransaction', transaction)
  selectedTransaction.value = null
}

const uploadReceipt = (transaction: Transaction) => {
  emit('uploadReceipt', transaction)
  selectedTransaction.value = null
}

const viewDetails = (transaction: Transaction) => {
  selectedTransaction.value = transaction
}

// Close modal on escape key
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    selectedTransaction.value = null
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<script lang="ts">
export default {
  name: 'TransactionsView',
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

  div[style*='grid-template-columns: repeat(2, 1fr)'] {
    grid-template-columns: 1fr !important;
  }
}

/* Enhanced hover effects */
.transaction-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.transaction-card:hover {
  transform: translateY(-4px) scale(1.01);
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
  background: linear-gradient(135deg, #3b82f6, #10b981);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #2563eb, #047857);
}
</style>
