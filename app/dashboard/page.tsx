"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  HomeIcon,
  BellIcon,
  MessageSquareIcon,
  CreditCardIcon,
  UserIcon,
  CalendarIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
} from "lucide-react"

export default function DashboardPage() {
  const [userType, setUserType] = useState("estudiante") // o "propietario"

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Barra lateral */}
        <div className="w-full md:w-64 space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col items-center space-y-3 py-4">
                <div className="h-20 w-20 rounded-full bg-gray-200"></div>
                <div className="text-center">
                  <h3 className="font-medium">John Doe</h3>
                  <p className="text-sm text-gray-500">{userType === "estudiante" ? "Estudiante" : "Propietario"}</p>
                </div>
              </div>

              <div className="space-y-1 mt-4">
                <Button variant="ghost" className="w-full justify-start">
                  <HomeIcon className="mr-2 h-4 w-4" />
                  Panel de Control
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <BellIcon className="mr-2 h-4 w-4" />
                  Notificaciones
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MessageSquareIcon className="mr-2 h-4 w-4" />
                  Mensajes
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <CreditCardIcon className="mr-2 h-4 w-4" />
                  Pagos
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <UserIcon className="mr-2 h-4 w-4" />
                  Perfil
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Enlaces Rápidos</h3>
              <div className="space-y-2">
                <Link href="/search" className="text-primary hover:underline block">
                  Buscar Alojamiento
                </Link>
                {userType === "propietario" && (
                  <Link href="/landlord/add-property" className="text-primary hover:underline block">
                    Agregar Nueva Propiedad
                  </Link>
                )}
                <Link href="/settings" className="text-primary hover:underline block">
                  Configuración de Cuenta
                </Link>
                <Link href="/help" className="text-primary hover:underline block">
                  Ayuda y Soporte
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contenido Principal */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6">Panel de Control</h1>

          {userType === "estudiante" ? <EstudianteDashboard /> : <PropietarioDashboard />}
        </div>
      </div>
    </div>
  )
}

function EstudianteDashboard() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Reservas Actuales</CardTitle>
          <CardDescription>Tus reservas activas y próximas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <ReservationCard
              title="Apartamento Estudio Moderno"
              location="Cerca de la Universidad Central"
              dates="1 Sep 2023 - 30 Jun 2024"
              status="activo"
              image="/placeholder.svg?height=80&width=120"
            />

            <ReservationCard
              title="Habitación Privada en Casa Compartida"
              location="Distrito Universitario"
              dates="15 Jul 2024 - 15 Ago 2024"
              status="próximo"
              image="/placeholder.svg?height=80&width=120"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Historial de Pagos</CardTitle>
          <CardDescription>Pagos recientes de tus alojamientos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <PaymentItem
              description="Renta - Apartamento Estudio Moderno"
              date="1 Ago 2023"
              amount="$500.00"
              status="completado"
            />

            <PaymentItem
              description="Renta - Apartamento Estudio Moderno"
              date="1 Jul 2023"
              amount="$500.00"
              status="completado"
            />

            <PaymentItem
              description="Depósito de Seguridad - Habitación Privada"
              date="15 Jun 2023"
              amount="$350.00"
              status="completado"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Ver Todos los Pagos
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Propiedades Guardadas</CardTitle>
          <CardDescription>Propiedades que has guardado para más tarde</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SavedPropertyCard
              title="Loft Estudiantil de Lujo"
              location="Distrito de las Artes"
              price="$650/mes"
              image="/placeholder.svg?height=100&width=150"
            />

            <SavedPropertyCard
              title="Estudio Acogedor cerca del Campus"
              location="Centro"
              price="$550/mes"
              image="/placeholder.svg?height=100&width=150"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Ver Todas las Propiedades Guardadas
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function PropietarioDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Total de Propiedades</p>
                <h3 className="text-3xl font-bold">4</h3>
              </div>
              <HomeIcon className="h-8 w-8 text-primary opacity-70" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Reservas Activas</p>
                <h3 className="text-3xl font-bold">3</h3>
              </div>
              <CalendarIcon className="h-8 w-8 text-primary opacity-70" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Ingresos Mensuales</p>
                <h3 className="text-3xl font-bold">$1,850</h3>
              </div>
              <CreditCardIcon className="h-8 w-8 text-primary opacity-70" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Listado de Propiedades</CardTitle>
          <CardDescription>Gestiona tus listados de propiedades</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="active">Activas</TabsTrigger>
              <TabsTrigger value="pending">Pendientes</TabsTrigger>
              <TabsTrigger value="inactive">Inactivas</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="pt-4">
              <div className="space-y-4">
                <PropertyListingCard
                  title="Apartamento Estudio Moderno"
                  location="Cerca de la Universidad Central"
                  price="$500/mes"
                  status="activo"
                  occupancy="Ocupado"
                  image="/placeholder.svg?height=80&width=120"
                />

                <PropertyListingCard
                  title="Casa Compartida Estudiantil"
                  location="Distrito Universitario"
                  price="$350/mes"
                  status="activo"
                  occupancy="Ocupado"
                  image="/placeholder.svg?height=80&width=120"
                />

                <PropertyListingCard
                  title="Habitación Privada en Apartamento"
                  location="Área del Campus del Centro"
                  price="$400/mes"
                  status="activo"
                  occupancy="Vacante"
                  image="/placeholder.svg?height=80&width=120"
                />
              </div>
            </TabsContent>
            <TabsContent value="pending" className="pt-4">
              <div className="space-y-4">
                <PropertyListingCard
                  title="Nuevo Apartamento de Lujo"
                  location="Distrito de las Artes"
                  price="$650/mes"
                  status="pendiente"
                  occupancy="Pendiente de Aprobación"
                  image="/placeholder.svg?height=80&width=120"
                />
              </div>
            </TabsContent>
            <TabsContent value="inactive" className="pt-4">
              <p className="text-center py-4 text-gray-500">No hay listados inactivos</p>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Link href="/landlord/add-property">
            <Button>Agregar Nueva Propiedad</Button>
          </Link>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Solicitudes de Reserva</CardTitle>
          <CardDescription>Solicitudes de reserva recientes para tus propiedades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <BookingRequestCard
              estudianteName="Alex Johnson"
              property="Habitación Privada en Apartamento"
              dates="1 Sep 2023 - 31 Dic 2023"
              status="pendiente"
              image="/placeholder.svg?height=60&width=90"
            />

            <BookingRequestCard
              estudianteName="Maria Garcia"
              property="Casa Compartida Estudiantil"
              dates="15 Ago 2023 - 30 Jun 2024"
              status="aprobado"
              image="/placeholder.svg?height=60&width=90"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Ver Todas las Solicitudes de Reserva
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

interface ReservationCardProps {
  title: string;
  location: string;
  dates: string;
  status: "activo" | "próximo";
  image: string;
}

function ReservationCard({ title, location, dates, status, image }: ReservationCardProps) {
  return (
    <div className="flex border rounded-lg overflow-hidden">
      <div className="w-24 h-20 flex-shrink-0">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 p-3">
        <div className="flex justify-between">
          <h4 className="font-medium">{title}</h4>
          <Badge variant={status === "activo" ? "default" : "outline"}>
            {status === "activo" ? "Activo" : "Próximo"}
          </Badge>
        </div>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm flex items-center mt-1">
          <CalendarIcon className="h-3 w-3 mr-1" />
          {dates}
        </p>
      </div>
    </div>
  )
}

interface PaymentItemProps {
  description: string;
  date: string;
  amount: string;
  status: string;
}

function PaymentItem({ description, date, amount, status }: PaymentItemProps) {
  return (
    <div className="flex justify-between items-center p-2 border-b last:border-0">
      <div>
        <p className="font-medium">{description}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <div className="text-right">
        <p className="font-medium">{amount}</p>
        <p className="text-xs flex items-center justify-end">
          <CheckCircleIcon className="h-3 w-3 mr-1 text-green-500" />
          {status}
        </p>
      </div>
    </div>
  )
}

interface SavedPropertyCardProps {
  title: string;
  location: string;
  price: string;
  image: string;
}

function SavedPropertyCard({ title, location, price, image }: SavedPropertyCardProps) {
  return (
    <div className="flex border rounded-lg overflow-hidden">
      <div className="w-20 h-20 flex-shrink-0">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 p-3">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm font-medium">{price}</p>
          <Button variant="ghost" size="sm">
            Ver
          </Button>
        </div>
      </div>
    </div>
  )
}

interface PropertyListingCardProps {
  title: string;
  location: string;
  price: string;
  status: "activo" | "pendiente";
  occupancy: "Ocupado" | "Vacante" | "Pendiente" | "Pendiente de Aprobación";
  image: string;
}

function PropertyListingCard({ title, location, price, status, occupancy, image }: PropertyListingCardProps) {
  return (
    <div className="flex border rounded-lg overflow-hidden">
      <div className="w-24 h-20 flex-shrink-0">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 p-3">
        <div className="flex justify-between">
          <h4 className="font-medium">{title}</h4>
          <Badge variant={status === "activo" ? "default" : "outline"}>
            {status === "activo" ? "Activo" : "Pendiente"}
          </Badge>
        </div>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm font-medium">{price}</p>
          <p className="text-xs flex items-center">
            {occupancy === "Ocupado" ? (
              <>
                <CheckCircleIcon className="h-3 w-3 mr-1 text-green-500" />
                Ocupado
              </>
            ) : occupancy === "Vacante" ? (
              <>
                <XCircleIcon className="h-3 w-3 mr-1 text-red-500" />
                Vacante
              </>
            ) : (
              <>
                <ClockIcon className="h-3 w-3 mr-1 text-yellow-500" />
                Pendiente
              </>
            )}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center p-3 space-y-2">
        <Button variant="outline" size="sm">
          Editar
        </Button>
        <Button variant="ghost" size="sm">
          Ver
        </Button>
      </div>
    </div>
  )
}

interface BookingRequestCardProps {
  estudianteName: string;
  property: string;
  dates: string;
  status: "pendiente" | "aprobado";
  image: string;
}

function BookingRequestCard({ estudianteName, property, dates, status, image }: BookingRequestCardProps) {
  return (
    <div className="flex border rounded-lg overflow-hidden">
      <div className="w-20 h-16 flex-shrink-0">
        <img src={image || "/placeholder.svg"} alt={property} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 p-3">
        <div className="flex justify-between">
          <h4 className="font-medium">{estudianteName}</h4>
          <Badge variant={status === "pendiente" ? "outline" : "default"}>
            {status === "pendiente" ? "Pendiente" : "Aprobado"}
          </Badge>
        </div>
        <p className="text-sm text-gray-500">{property}</p>
        <p className="text-sm flex items-center mt-1">
          <CalendarIcon className="h-3 w-3 mr-1" />
          {dates}
        </p>
      </div>
      {status === "pendiente" && (
        <div className="flex flex-col justify-center p-3 space-y-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-green-50 text-green-600 border-green-200 hover:bg-green-100"
          >
            Aceptar
          </Button>
          <Button variant="outline" size="sm" className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100">
            Rechazar
          </Button>
        </div>
      )}
    </div>
  )
}

