<template>
  <div>
    <!-- Landing Page -->
    <LandingPage v-if="!isAuthenticated" @show-login="showLogin = true" @direct-login="login" />

    <!-- Login Modal -->
    <div
      v-if="showLogin"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      style="background-color: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px)"
      @click.self="showLogin = false"
    >
      <div
        class="bg-white w-full max-w-md mx-auto transform transition-all duration-300"
        style="
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          padding: 0;
          overflow: hidden;
        "
        :class="showLogin ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
      >
        <!-- Header del Modal -->
        <div
          style="
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            padding: 2rem;
            position: relative;
            overflow: hidden;
          "
        >
          <!-- Background Pattern -->
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
              align-items: flex-start;
            "
          >
            <div>
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px">
                <div
                  style="
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    backdrop-filter: blur(8px);
                  "
                >
                  <CreditCard style="width: 24px; height: 24px; color: white" />
                </div>
                <div>
                  <h2 style="font-size: 24px; font-weight: 900; color: white; margin: 0">
                    Bienvenido
                  </h2>
                  <p style="color: rgba(255, 255, 255, 0.8); font-size: 14px; margin: 0">
                    Demo de CardManager
                  </p>
                </div>
              </div>
            </div>
            <button
              @click="showLogin = false"
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

        <!-- Contenido del Modal -->
        <div style="padding: 2rem">
          <form @submit.prevent="login" style="display: flex; flex-direction: column; gap: 1.5rem">
            <div>
              <label
                style="
                  display: block;
                  font-size: 14px;
                  font-weight: 600;
                  color: #374151;
                  margin-bottom: 8px;
                "
                >Email</label
              >
              <div style="position: relative">
                <input
                  v-model="loginForm.email"
                  type="email"
                  value="info@card.com"
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
                  readonly
                  onfocus="this.style.borderColor='#4f46e5'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(79, 70, 229, 0.1)'"
                  onblur="this.style.borderColor='#e5e7eb'; this.style.background='#f9fafb'; this.style.boxShadow='none'"
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
                  <svg style="width: 20px; height: 20px" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    ></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
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
                >Contraseña</label
              >
              <div style="position: relative">
                <input
                  v-model="loginForm.password"
                  type="password"
                  value="test"
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
                  readonly
                  onfocus="this.style.borderColor='#4f46e5'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(79, 70, 229, 0.1)'"
                  onblur="this.style.borderColor='#e5e7eb'; this.style.background='#f9fafb'; this.style.boxShadow='none'"
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
                  <svg style="width: 20px; height: 20px" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Info de demo mejorada -->
            <div
              style="
                background: linear-gradient(135deg, #dbeafe, #f3e8ff);
                border: 2px solid #c7d2fe;
                border-radius: 16px;
                padding: 20px;
                text-align: center;
                position: relative;
                overflow: hidden;
              "
            >
              <div
                style="
                  position: absolute;
                  inset: 0;
                  background: linear-gradient(
                    45deg,
                    transparent 30%,
                    rgba(255, 255, 255, 0.1) 50%,
                    transparent 70%
                  );
                  animation: shimmer 2s infinite;
                "
              ></div>
              <div style="position: relative">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    margin-bottom: 8px;
                  "
                >
                  <div style="font-size: 24px">🚀</div>
                  <span
                    style="
                      background: linear-gradient(135deg, #4338ca, #7c2d12);
                      background-clip: text;
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;
                      font-size: 16px;
                      font-weight: 700;
                    "
                    >Demo Lista</span
                  >
                </div>
                <p style="color: #4338ca; font-size: 14px; font-weight: 500; margin: 0">
                  Los datos están precargados, solo haz clic en "Ingresar"
                </p>
              </div>
            </div>

            <button
              type="submit"
              style="
                width: 100%;
                background: linear-gradient(135deg, #4f46e5, #7c3aed);
                color: white;
                padding: 16px;
                border-radius: 16px;
                font-weight: 700;
                font-size: 16px;
                border: none;
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
              <span>Ingresar a la Demo</span>
              <ArrowRight style="width: 20px; height: 20px" />
            </button>
          </form>
        </div>

        <!-- Footer del Modal -->
        <div
          style="
            background: #f9fafb;
            padding: 1.5rem;
            border-top: 1px solid #f3f4f6;
            text-align: center;
          "
        >
          <p style="color: #6b7280; font-size: 12px; margin: 0">
            Esta es una demostración con datos de prueba
          </p>
        </div>
      </div>
    </div>

    <!-- Dashboard -->
    <div v-if="isAuthenticated" class="min-h-screen bg-gray-50">
      <!-- Header -->
      <header class="bg-white shadow-sm border-b">
        <div class="flex justify-between items-center px-6 py-4">
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <CreditCard class="w-5 h-5 text-white" />
              </div>
              <span class="text-xl font-bold">CardManager</span>
            </div>
            <span class="text-gray-600 company-name-mobile">{{ mockData.company.name }}</span>
          </div>
          <div class="flex items-center space-x-4 header-right">
            <button class="p-2 text-gray-400 hover:text-gray-600">
              <Bell class="w-5 h-5" />
            </button>
            <button @click="logout" class="p-2 text-gray-400 hover:text-gray-600">
              <LogOut class="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div class="dashboard-layout flex">
        <!-- Sidebar -->
        <aside class="w-64 bg-white shadow-sm min-h-screen sidebar-mobile">
          <nav class="p-4 space-y-2">
            <button
              v-for="item in menuItems"
              :key="item.id"
              @click="currentView = item.id"
              :class="[
                'w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors',
                currentView === item.id
                  ? 'bg-blue-50 text-blue-600 active'
                  : 'text-gray-700 hover:bg-gray-50',
              ]"
            >
              <component :is="item.icon" class="w-5 h-5" />
              <span>{{ item.label }}</span>
            </button>
          </nav>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 p-6">
          <!-- Dashboard View -->
          <div v-if="currentView === 'dashboard'">
            <div class="mb-6">
              <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p class="text-gray-600">Resumen general de tu empresa</p>
            </div>

            <!-- Stats Cards -->
            <div class="grid md:grid-cols-4 gap-6 mb-8">
              <div class="stat-card bg-white rounded-lg shadow-sm p-6">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-600">Presupuesto Total</p>
                    <p class="text-2xl font-bold text-gray-900">
                      {{ formatCurrency(mockData.company.totalBudget) }}
                    </p>
                  </div>
                  <div
                    class="stat-icon dollar w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center"
                  >
                    <DollarSign class="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              <div class="stat-card bg-white rounded-lg shadow-sm p-6">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-600">Gastado</p>
                    <p class="text-2xl font-bold text-green-600">
                      {{ formatCurrency(mockData.company.usedBudget) }}
                    </p>
                  </div>
                  <div
                    class="stat-icon trending w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center"
                  >
                    <TrendingUp class="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>
              <div class="stat-card bg-white rounded-lg shadow-sm p-6">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-600">Tarjetas Activas</p>
                    <p class="text-2xl font-bold text-gray-900">{{ activeCards }}</p>
                  </div>
                  <div
                    class="stat-icon cards w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center"
                  >
                    <CreditCard class="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>
              <div class="stat-card bg-white rounded-lg shadow-sm p-6">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-600">Pendientes</p>
                    <p class="text-2xl font-bold text-orange-600">{{ pendingTransactions }}</p>
                  </div>
                  <div
                    class="stat-icon clock w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center"
                  >
                    <Clock class="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent Transactions -->
            <div class="transaction-card bg-white rounded-lg shadow-sm">
              <div class="transaction-header px-6 py-4 border-b border-gray-200">
                <h2 class="transaction-title text-lg font-semibold text-gray-900">
                  Últimas Transacciones
                </h2>
              </div>
              <div class="p-6">
                <div class="space-y-4">
                  <div
                    v-for="transaction in mockData.transactions.slice(0, 5)"
                    :key="transaction.id"
                    class="transaction-item flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg"
                  >
                    <div class="flex items-center space-x-4">
                      <div
                        class="transaction-icon w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center"
                      >
                        <CreditCard class="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p class="merchant-name font-medium text-gray-900">
                          {{ transaction.merchant }}
                        </p>
                        <p class="transaction-details text-sm text-gray-500">
                          {{ transaction.user }} • {{ transaction.cardNumber }}
                        </p>
                      </div>
                    </div>
                    <div class="text-right">
                      <p class="transaction-amount font-semibold text-gray-900">
                        {{ formatCurrency(transaction.amount) }}
                      </p>
                      <span
                        :class="[
                          'status-badge inline-flex px-2 py-1 text-xs font-medium rounded-full',
                          transaction.status === 'conciliated'
                            ? 'conciliado bg-green-100 text-green-800'
                            : 'pendiente bg-yellow-100 text-yellow-800',
                        ]"
                      >
                        {{ transaction.status === 'conciliated' ? 'Conciliado' : 'Pendiente' }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Cards View -->
          <CardsView
            v-if="currentView === 'cards'"
            :cards="cards"
            @add-card="handleAddCard"
            @edit-card="handleEditCard"
            @revoke-card="handleRevokeCard"
            @assign-card="handleAssignCard"
            @remove-card="handleRemoveCard"
          />

          <!-- Users View -->
          <UsersView
            v-if="currentView === 'users'"
            :users="mockData.users"
            @add-user="handleAddUser"
            @edit-user="handleEditUser"
            @remove-user="handleRemoveUser"
            @assign-card="handleAssignUserCard"
            @revoke-card="handleRevokeUserCard"
          />

          <!-- Transactions View -->
          <TransactionsView
            v-if="currentView === 'transactions'"
            :transactions="mockData.transactions"
            @conciliate-transaction="handleConciliateTransaction"
            @upload-receipt="handleUploadReceipt"
          />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  CreditCard,
  X,
  Bell,
  LogOut,
  DollarSign,
  TrendingUp,
  Clock,
  Users,
  Receipt,
  Gauge,
  ArrowRight,
} from 'lucide-vue-next'

import CardsView from './components/CardsView.vue'
import LandingPage from './components/LandingPage.vue'
import UsersView from './components/UsersView.vue'
import TransactionsView from './components/TransactionsView.vue'

// Types
interface Card {
  id: number
  number: string
  type: string
  status: 'available' | 'assigned'
  assignedTo: string | null
  budget: number
  used: number
}

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

interface User {
  id: number
  name: string
  email: string
  role: string
  cardAssigned: string | null
  budget: number
  used: number
}

// Mock data - cards como array reactivo
const cards = ref<Card[]>([
  {
    id: 1,
    number: '****1234',
    type: 'Visa',
    status: 'assigned',
    assignedTo: 'Juan Pérez',
    budget: 5000,
    used: 2340,
  },
  {
    id: 2,
    number: '****5678',
    type: 'Mastercard',
    status: 'available',
    assignedTo: null,
    budget: 0,
    used: 0,
  },
  {
    id: 3,
    number: '****9012',
    type: 'Visa',
    status: 'assigned',
    assignedTo: 'María García',
    budget: 3000,
    used: 1850,
  },
  {
    id: 4,
    number: '****3456',
    type: 'Amex',
    status: 'assigned',
    assignedTo: 'Carlos López',
    budget: 8000,
    used: 4200,
  },
])

const mockData = {
  company: {
    name: 'BongioCards S.A.',
    totalBudget: 250000,
    usedBudget: 89500,
    availableBudget: 160500,
  },
  cards: cards,
  users: [
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan@techcorp.com',
      role: 'Empleado',
      cardAssigned: '****1234',
      budget: 5000,
      used: 2340,
    },
    {
      id: 2,
      name: 'María García',
      email: 'maria@techcorp.com',
      role: 'Manager',
      cardAssigned: '****9012',
      budget: 3000,
      used: 1850,
    },
    {
      id: 3,
      name: 'Carlos López',
      email: 'carlos@techcorp.com',
      role: 'Director',
      cardAssigned: '****3456',
      budget: 8000,
      used: 4200,
    },
    {
      id: 4,
      name: 'Ana Rodríguez',
      email: 'ana@techcorp.com',
      role: 'Empleado',
      cardAssigned: null,
      budget: 0,
      used: 0,
    },
  ] as User[],
  transactions: [
    {
      id: 1,
      cardNumber: '****1234',
      user: 'Juan Pérez',
      amount: 245.5,
      merchant: 'Amazon Business',
      date: '2025-08-01',
      status: 'pending',
      hasReceipt: false,
    },
    {
      id: 2,
      cardNumber: '****3456',
      user: 'Carlos López',
      amount: 89.0,
      merchant: 'Starbucks',
      date: '2025-08-01',
      status: 'conciliated',
      hasReceipt: true,
    },
    {
      id: 3,
      cardNumber: '****9012',
      user: 'María García',
      amount: 1200.0,
      merchant: 'Microsoft',
      date: '2025-07-31',
      status: 'pending',
      hasReceipt: true,
    },
    {
      id: 4,
      cardNumber: '****1234',
      user: 'Juan Pérez',
      amount: 45.2,
      merchant: 'Uber',
      date: '2025-07-31',
      status: 'conciliated',
      hasReceipt: true,
    },
  ] as Transaction[],
}

// Reactive state
const isAuthenticated = ref(false)
const showLogin = ref(false)
const currentView = ref('dashboard')

const loginForm = ref({
  email: 'info@card.com',
  password: 'test',
})

// Menu items
const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Gauge },
  { id: 'cards', label: 'Tarjetas', icon: CreditCard },
  { id: 'users', label: 'Usuarios', icon: Users },
  { id: 'transactions', label: 'Transacciones', icon: Receipt },
]

// Computed properties
const activeCards = computed(() => {
  return cards.value.filter((card) => card.status === 'assigned').length
})

const pendingTransactions = computed(() => {
  return mockData.transactions.filter((t) => t.status === 'pending').length
})

// Methods
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(amount)
}

const login = () => {
  if (loginForm.value.email && loginForm.value.password) {
    isAuthenticated.value = true
    showLogin.value = false
  }
}

const logout = () => {
  isAuthenticated.value = false
  currentView.value = 'dashboard'
}

// Card management handlers
const handleAddCard = (cardData: Omit<Card, 'id'>) => {
  const newCard: Card = {
    id: Date.now(),
    ...cardData,
  }
  cards.value.push(newCard)
}

const handleEditCard = (card: Card) => {
  console.log('Editando tarjeta:', card)
  // Aquí implementarías la lógica de edición
}

const handleRevokeCard = (cardId: number) => {
  const cardIndex = cards.value.findIndex((card) => card.id === cardId)
  if (cardIndex !== -1) {
    cards.value[cardIndex].status = 'available'
    cards.value[cardIndex].assignedTo = null
    cards.value[cardIndex].budget = 0
    cards.value[cardIndex].used = 0
  }
}

const handleAssignCard = (card: Card) => {
  console.log('Asignando tarjeta:', card)
  // Aquí implementarías la lógica de asignación
}

const handleRemoveCard = (cardId: number) => {
  const cardIndex = cards.value.findIndex((card) => card.id === cardId)
  if (cardIndex !== -1) {
    cards.value.splice(cardIndex, 1)
  }
}

// User management handlers
const handleAddUser = (userData: Omit<User, 'id'>) => {
  const newUser: User = {
    id: Date.now(),
    ...userData,
  }
  mockData.users.push(newUser)
}

const handleEditUser = (user: User) => {
  console.log('Editando usuario:', user)
  // Aquí implementarías la lógica de edición
}

const handleRemoveUser = (userId: number) => {
  const userIndex = mockData.users.findIndex((user) => user.id === userId)
  if (userIndex !== -1) {
    mockData.users.splice(userIndex, 1)
  }
}

const handleAssignUserCard = (user: User) => {
  console.log('Asignando tarjeta a usuario:', user)
  // Aquí implementarías la lógica de asignación de tarjeta
  // Por ejemplo, mostrar un modal para seleccionar tarjeta disponible
}

const handleRevokeUserCard = (user: User) => {
  const userIndex = mockData.users.findIndex((u) => u.id === user.id)
  if (userIndex !== -1) {
    mockData.users[userIndex].cardAssigned = null
    mockData.users[userIndex].budget = 0
    mockData.users[userIndex].used = 0
  }
}

// Transaction management handlers
const handleConciliateTransaction = (transaction: Transaction) => {
  const transactionIndex = mockData.transactions.findIndex((t) => t.id === transaction.id)
  if (transactionIndex !== -1) {
    mockData.transactions[transactionIndex].status = 'conciliated'
  }
}

const handleUploadReceipt = (transaction: Transaction) => {
  const transactionIndex = mockData.transactions.findIndex((t) => t.id === transaction.id)
  if (transactionIndex !== -1) {
    mockData.transactions[transactionIndex].hasReceipt = true
  }
  console.log('Subiendo recibo para:', transaction.merchant)
}
</script>

<script lang="ts">
export default {
  name: 'App',
}
</script>

<style>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>

<style scoped>
/* Responsive styles */
@media (max-width: 768px) {
  .company-name-mobile {
    display: none;
  }

  .sidebar-mobile {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: auto;
    min-height: auto;
    z-index: 40;
  }

  .dashboard-layout {
    flex-direction: column;
  }

  .header-right {
    gap: 0.5rem;
  }
}

/* Hero section gradient */
.hero-section {
  background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
}

/* Active state for sidebar */
.active {
  background-color: #eff6ff;
  color: #2563eb;
}
</style>
