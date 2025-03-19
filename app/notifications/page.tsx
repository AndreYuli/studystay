"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BellIcon, CheckIcon, MessageSquareIcon, CreditCardIcon, CalendarIcon, XIcon } from "lucide-react"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(mockNotifications)

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      })),
    )
  }

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="container py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Notificaciones</h1>
        <Button variant="outline" onClick={markAllAsRead} disabled={unreadCount === 0}>
          Marcar todas como leídas
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Tus Notificaciones</CardTitle>
              <CardDescription>Mantente al día con tus actividades de alojamiento</CardDescription>
            </div>
            {unreadCount > 0 && <Badge>{unreadCount} sin leer</Badge>}
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">Todas</TabsTrigger>
              <TabsTrigger value="bookings">Reservas</TabsTrigger>
              <TabsTrigger value="payments">Pagos</TabsTrigger>
              <TabsTrigger value="messages">Mensajes</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="pt-4">
              {notifications.length > 0 ? (
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      onMarkAsRead={() => markAsRead(notification.id)}
                      onDelete={() => deleteNotification(notification.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <BellIcon className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                  <h3 className="text-lg font-medium">No hay notificaciones</h3>
                  <p className="text-gray-500">No tienes notificaciones en este momento</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="bookings" className="pt-4">
              {notifications.filter((n) => n.type === "booking").length > 0 ? (
                <div className="space-y-4">
                  {notifications
                    .filter((n) => n.type === "booking")
                    .map((notification) => (
                      <NotificationItem
                        key={notification.id}
                        notification={notification}
                        onMarkAsRead={() => markAsRead(notification.id)}
                        onDelete={() => deleteNotification(notification.id)}
                      />
                    ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <CalendarIcon className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                  <h3 className="text-lg font-medium">No hay notificaciones de reservas</h3>
                  <p className="text-gray-500">No tienes notificaciones de reservas</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="payments" className="pt-4">
              {notifications.filter((n) => n.type === "payment").length > 0 ? (
                <div className="space-y-4">
                  {notifications
                    .filter((n) => n.type === "payment")
                    .map((notification) => (
                      <NotificationItem
                        key={notification.id}
                        notification={notification}
                        onMarkAsRead={() => markAsRead(notification.id)}
                        onDelete={() => deleteNotification(notification.id)}
                      />
                    ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <CreditCardIcon className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                  <h3 className="text-lg font-medium">No hay notificaciones de pagos</h3>
                  <p className="text-gray-500">No tienes notificaciones de pagos</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="messages" className="pt-4">
              {notifications.filter((n) => n.type === "message").length > 0 ? (
                <div className="space-y-4">
                  {notifications
                    .filter((n) => n.type === "message")
                    .map((notification) => (
                      <NotificationItem
                        key={notification.id}
                        notification={notification}
                        onMarkAsRead={() => markAsRead(notification.id)}
                        onDelete={() => deleteNotification(notification.id)}
                      />
                    ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <MessageSquareIcon className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                  <h3 className="text-lg font-medium">No hay notificaciones de mensajes</h3>
                  <p className="text-gray-500">No tienes notificaciones de mensajes</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

interface Notification {
  id: number
  type: "booking" | "payment" | "message" | "system"
  title: string
  message: string
  time: string
  read: boolean
  actionLink?: string
  actionText?: string
}

function NotificationItem({
  notification,
  onMarkAsRead,
  onDelete,
}: {
  notification: Notification
  onMarkAsRead: () => void
  onDelete: () => void
}) {
  const getIcon = () => {
    switch (notification.type) {
      case "booking":
        return <CalendarIcon className="h-5 w-5" />
      case "payment":
        return <CreditCardIcon className="h-5 w-5" />
      case "message":
        return <MessageSquareIcon className="h-5 w-5" />
      case "system":
        return <BellIcon className="h-5 w-5" />
      default:
        return <BellIcon className="h-5 w-5" />
    }
  }

  return (
    <div className={`flex border rounded-lg p-4 ${!notification.read ? "bg-primary/5" : ""}`}>
      <div className={`p-2 rounded-full mr-3 ${!notification.read ? "bg-primary/10" : "bg-gray-100"}`}>{getIcon()}</div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium">{notification.title}</h4>
          <div className="flex items-center space-x-2">
            {!notification.read && (
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={onMarkAsRead} title="Marcar como leída">
                <CheckIcon className="h-4 w-4" />
              </Button>
            )}
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={onDelete} title="Eliminar">
              <XIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p className="text-gray-600 mt-1">{notification.message}</p>
        {notification.actionLink && (
          <Link href={notification.actionLink} className="text-primary text-sm mt-2 inline-block">
            {notification.actionText}
          </Link>
        )}
        <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
      </div>
    </div>
  )
}

// Datos simulados
const mockNotifications: Notification[] = [
  {
    id: 1,
    type: "booking" as "booking",
    title: "Nueva Solicitud de Reserva",
    message: "Tienes una nueva solicitud de reserva para Apartamento Estudio Moderno",
    time: "Hace 10 minutos",
    read: false,
    actionLink: "/dashboard",
    actionText: "Ver Solicitud",
  },
  {
    id: 2,
    type: "payment" as "payment",
    title: "Pago Exitoso",
    message: "Tu pago de $500 por Apartamento Estudio Moderno ha sido procesado",
    time: "Hace 2 horas",
    read: false,
    actionLink: "/payment",
    actionText: "Ver Recibo",
  },
  {
    id: 3,
    type: "message" as "message",
    title: "Nuevo Mensaje",
    message: "Tienes un nuevo mensaje de John Smith sobre tu reserva",
    time: "Hace 1 día",
    read: true,
    actionLink: "/messages",
    actionText: "Ver Mensaje",
  },
  {
    id: 4,
    type: "system" as "system",
    title: "Cuenta Verificada",
    message: "Tu verificación de estudiante ha sido aprobada",
    time: "Hace 2 días",
    read: true,
  },
  {
    id: 5,
    type: "booking",
    title: "Reserva Confirmada",
    message: "Tu reserva para Casa de Estudiantes Compartida ha sido confirmada",
    time: "Hace 3 días",
    read: true,
    actionLink: "/dashboard",
    actionText: "Ver Reserva",
  },
]

