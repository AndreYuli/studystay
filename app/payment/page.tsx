"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CreditCardIcon, CheckIcon, ChevronLeftIcon } from "lucide-react"

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simular el procesamiento del pago
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
    }, 2000)
  }

  if (isComplete) {
    return (
      <div className="container max-w-md mx-auto py-12">
        <Card>
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckIcon className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">¡Pago Exitoso!</h2>
            <p className="text-gray-500 mb-6">
              Tu pago se ha procesado correctamente. Se ha enviado una confirmación a tu correo electrónico.
            </p>
            <div className="w-full space-y-2">
              <Link href="/dashboard">
                <Button className="w-full">Ir al Panel de Control</Button>
              </Link>
              <Link href="/search">
                <Button variant="outline" className="w-full">
                  Buscar Más Alojamientos
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container max-w-md mx-auto py-12">
      <Link href="/listing/1" className="flex items-center text-primary mb-4">
        <ChevronLeftIcon className="h-4 w-4 mr-1" />
        Volver al listado
      </Link>

      <Card>
        <CardHeader>
          <CardTitle>Pago</CardTitle>
          <CardDescription>Completa tu reserva realizando un pago</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h3 className="font-medium mb-2">Resumen de la Reserva</h3>
            <div className="bg-muted p-3 rounded-md">
              <div className="flex justify-between mb-1">
                <span>Apartamento Estudio Moderno</span>
              </div>
              <div className="text-sm text-gray-500 mb-3">Cerca de la Universidad Central</div>
              <div className="flex justify-between text-sm mb-1">
                <span>1 Sep 2023 - 31 Dic 2023</span>
                <span>4 meses</span>
              </div>
              <Separator className="my-3" />
              <div className="flex justify-between mb-1">
                <span>Renta Mensual</span>
                <span>$500.00</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Depósito de Seguridad</span>
                <span>$500.00</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Tarifa de Servicio</span>
                <span>$50.00</span>
              </div>
              <Separator className="my-3" />
              <div className="flex justify-between font-medium">
                <span>Total a Pagar Ahora</span>
                <span>$1,050.00</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Método de Pago</h3>
                <RadioGroup
                  defaultValue="credit-card"
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex-1 cursor-pointer">
                      Tarjeta de Crédito
                    </Label>
                    <CreditCardIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                      PayPal
                    </Label>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.5 8.5V7.5C19.5 5.84315 18.1569 4.5 16.5 4.5H5.5C3.84315 4.5 2.5 5.84315 2.5 7.5V16.5C2.5 18.1569 3.84315 19.5 5.5 19.5H16.5C18.1569 19.5 19.5 18.1569 19.5 16.5V15.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </RadioGroup>
              </div>

              {paymentMethod === "credit-card" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-name">Nombre del Titular</Label>
                    <Input id="card-name" placeholder="Nombre en la tarjeta" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="card-number">Número de Tarjeta</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 space-y-2">
                      <Label htmlFor="expiry-month">Mes de Expiración</Label>
                      <Select>
                        <SelectTrigger id="expiry-month">
                          <SelectValue placeholder="MM" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                            <SelectItem key={month} value={month.toString().padStart(2, "0")}>
                              {month.toString().padStart(2, "0")}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="col-span-1 space-y-2">
                      <Label htmlFor="expiry-year">Año de Expiración</Label>
                      <Select>
                        <SelectTrigger id="expiry-year">
                          <SelectValue placeholder="AA" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                            <SelectItem key={year} value={year.toString().slice(-2)}>
                              {year.toString().slice(-2)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="col-span-1 space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" required />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "paypal" && (
                <div className="bg-muted p-4 rounded-md text-center">
                  <p className="mb-2">Serás redirigido a PayPal para completar tu pago.</p>
                  <p className="text-sm text-gray-500">Haz clic en el botón de abajo para continuar.</p>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="billing-address">Dirección de Facturación</Label>
                <Input id="billing-address" placeholder="Ingresa tu dirección de facturación" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">Ciudad</Label>
                  <Input id="city" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="zip">Código Postal</Label>
                  <Input id="zip" required />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button type="submit" className="w-full" disabled={isProcessing}>
                {isProcessing ? (
                  <span className="flex items-center">
                    <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                    Procesando...
                  </span>
                ) : (
                  `Pagar $1,050.00`
                )}
              </Button>
              <p className="text-xs text-center mt-2 text-gray-500">
                Al hacer clic en el botón, aceptas nuestros{" "}
                <Link href="/terms" className="text-primary underline">
                  Términos y Condiciones
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

