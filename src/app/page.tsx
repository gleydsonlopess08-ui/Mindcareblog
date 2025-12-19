"use client"

import { useState, useEffect } from "react"
import {
  Calendar,
  Users,
  Settings,
  CreditCard,
  LayoutDashboard,
  Plus,
  Search,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Trash2,
  User,
  Phone,
  Mail,
  Clock,
  LogOut,
  Bell,
  UserCircle,
  Brain,
  X,
  FileText,
  TrendingUp,
  StickyNote,
  Edit,
  LineChart,
  ArrowUp,
  Crown,
  Menu
} from "lucide-react"
import { createClient } from "@supabase/supabase-js"

// Tipos de planos
type PlanType = "start" | "pro" | "infinity"

interface Plan {
  id: PlanType
  name: string
  price: number
  features: {
    support: string
    maxClients: number | "unlimited"
    scheduling: boolean
    reminders: boolean
    templates: boolean
    evolution: boolean
  }
}

// Definição dos planos
const plans: Record<PlanType, Plan> = {
  start: {
    id: "start",
    name: "Plano Start",
    price: 47.0,
    features: {
      support: "Horário comercial (10h-18h)",
      maxClients: 15,
      scheduling: true,
      reminders: false,
      templates: false,
      evolution: false
    }
  },
  pro: {
    id: "pro",
    name: "Plano Pro",
    price: 97.0,
    features: {
      support: "Suporte 24 horas",
      maxClients: 65,
      scheduling: true,
      reminders: true,
      templates: true,
      evolution: false
    }
  },
  infinity: {
    id: "infinity",
    name: "Plano Infinity",
    price: 197.0,
    features: {
      support: "Suporte 24h com prioridade",
      maxClients: "unlimited",
      scheduling: true,
      reminders: true,
      templates: true,
      evolution: true
    }
  }
}

// Tipos de dados
interface Client {
  id: string
  name: string
  age: number
  phone: string
  email: string
  emergencyPhone: string
  gender: string
  birthDate: string
  mainProblem: string
  createdAt: string
}

export default function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  return (
    <div>
      Home
    </div>
  )
}
