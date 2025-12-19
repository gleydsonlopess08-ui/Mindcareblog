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

// ⚠️ NÃO crie Supabase aqui fora
// ⚠️ Nenhum createClient neste topo

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
