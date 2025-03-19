"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
          <CardDescription>Accede a tu cuenta de alojamiento estudiantil</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="student">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="student">Estudiante</TabsTrigger>
              <TabsTrigger value="landlord">Propietario</TabsTrigger>
            </TabsList>
            <TabsContent value="student">
              <form className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="student-email">Correo Electrónico</Label>
                  <Input id="student-email" type="email" placeholder="Ingresa tu correo electrónico" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-password">Contraseña</Label>
                  <Input id="student-password" type="password" placeholder="Ingresa tu contraseña" required />
                  <div className="text-right">
                    <Link href="/forgot-password" className="text-sm text-primary underline">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Iniciar Sesión como Estudiante
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="landlord">
              <form className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="landlord-email">Correo Electrónico</Label>
                  <Input id="landlord-email" type="email" placeholder="Ingresa tu correo electrónico" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="landlord-password">Contraseña</Label>
                  <Input id="landlord-password" type="password" placeholder="Ingresa tu contraseña" required />
                  <div className="text-right">
                    <Link href="/forgot-password" className="text-sm text-primary underline">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Iniciar Sesión como Propietario
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center">
            ¿No tienes una cuenta?{" "}
            <Link href="/register" className="text-primary underline">
              Regístrate
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

