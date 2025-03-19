"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUpload } from "@/components/file-upload"
import {
  GraduationCapIcon,
  HomeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserIcon,
  MailIcon,
  LockIcon,
  BuildingIcon,
  PhoneIcon,
  MapPinIcon,
  BadgeCheckIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  BriefcaseIcon,
} from "lucide-react"

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState("student")
  const [formStep, setFormStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const handleNextStep = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setFormStep(formStep + 1)
    }, 1000)
  }

  const handlePrevStep = () => {
    setFormStep(formStep - 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-accent1-50 py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-brand-100 via-accent1-100/30 to-accent2-100/20 -z-10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-brand-200/20 blur-3xl animate-float -z-10"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent1-200/20 blur-3xl animate-float-reverse -z-10"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container flex items-center justify-center">
        <Card className="w-full max-w-md border-none shadow-xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-accent1-400 to-accent2-400"></div>

          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-2">
              {activeTab === "student" ? (
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white shadow-lg">
                  <GraduationCapIcon className="h-8 w-8" />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent1-500 to-accent1-600 flex items-center justify-center text-white shadow-lg">
                  <HomeIcon className="h-8 w-8" />
                </div>
              )}
            </div>
            <CardTitle className="text-2xl text-center">Crear una Cuenta</CardTitle>
            <CardDescription className="text-center">
              Regístrate como estudiante o arrendador para comenzar
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="student" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger
                  value="student"
                  className="data-[state=active]:bg-brand-600 data-[state=active]:text-white"
                >
                  <GraduationCapIcon className="h-4 w-4 mr-2" />
                  Estudiante
                </TabsTrigger>
                <TabsTrigger
                  value="landlord"
                  className="data-[state=active]:bg-accent1-600 data-[state=active]:text-white"
                >
                  <HomeIcon className="h-4 w-4 mr-2" />
                  Arrendador
                </TabsTrigger>
              </TabsList>

              <TabsContent value="student">
                {formStep === 1 && (
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-name" className="flex items-center">
                        <UserIcon className="h-4 w-4 mr-2 text-brand-500" />
                        Nombre Completo
                      </Label>
                      <Input
                        id="student-name"
                        placeholder="Ingresa tu nombre completo"
                        className="border-gray-200 focus:border-brand-500 focus:ring-brand-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="student-email" className="flex items-center">
                        <MailIcon className="h-4 w-4 mr-2 text-brand-500" />
                        Correo Electrónico
                      </Label>
                      <Input
                        id="student-email"
                        type="email"
                        placeholder="Ingresa tu correo electrónico"
                        className="border-gray-200 focus:border-brand-500 focus:ring-brand-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="student-password" className="flex items-center">
                        <LockIcon className="h-4 w-4 mr-2 text-brand-500" />
                        Contraseña
                      </Label>
                      <Input
                        id="student-password"
                        type="password"
                        placeholder="Crea una contraseña"
                        className="border-gray-200 focus:border-brand-500 focus:ring-brand-500"
                        required
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="button"
                        className="w-full gradient-bg hover:opacity-90 shadow-md"
                        onClick={handleNextStep}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="flex items-center">
                            <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                            Procesando...
                          </span>
                        ) : (
                          <>
                            Continuar
                            <ArrowRightIcon className="h-4 w-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <ShieldCheckIcon className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Verificación segura de identidad</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <BadgeCheckIcon className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Acceso a alojamientos verificados</span>
                      </div>
                    </div>
                  </form>
                )}

                {formStep === 2 && (
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-university" className="flex items-center">
                        <BuildingIcon className="h-4 w-4 mr-2 text-brand-500" />
                        Universidad
                      </Label>
                      <Input
                        id="student-university"
                        placeholder="Ingresa tu universidad"
                        className="border-gray-200 focus:border-brand-500 focus:ring-brand-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="student-major" className="flex items-center">
                        <BookOpenIcon className="h-4 w-4 mr-2 text-brand-500" />
                        Carrera
                      </Label>
                      <Input
                        id="student-major"
                        placeholder="Ingresa tu carrera"
                        className="border-gray-200 focus:border-brand-500 focus:ring-brand-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center">
                        <BadgeCheckIcon className="h-4 w-4 mr-2 text-brand-500" />
                        Verificación Estudiantil
                      </Label>
                      <p className="text-sm text-gray-500 mb-2">Por favor sube tu certificado o carnet de estudiante</p>
                      <div className="border border-dashed border-gray-300 rounded-lg p-4 bg-brand-50/50">
                        <FileUpload />
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 border-brand-200 text-brand-600"
                        onClick={handlePrevStep}
                      >
                        Atrás
                      </Button>
                      <Button type="submit" className="flex-1 gradient-bg hover:opacity-90 shadow-md">
                        Registrarse
                        <ArrowRightIcon className="h-4 w-4 ml-2" />
                      </Button>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <CheckCircleIcon className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Reservas seguras y garantizadas</span>
                      </div>
                    </div>
                  </form>
                )}
              </TabsContent>

              <TabsContent value="landlord">
                {formStep === 1 && (
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="landlord-name" className="flex items-center">
                        <UserIcon className="h-4 w-4 mr-2 text-accent1-500" />
                        Nombre Completo
                      </Label>
                      <Input
                        id="landlord-name"
                        placeholder="Ingresa tu nombre completo"
                        className="border-gray-200 focus:border-accent1-500 focus:ring-accent1-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="landlord-email" className="flex items-center">
                        <MailIcon className="h-4 w-4 mr-2 text-accent1-500" />
                        Correo Electrónico
                      </Label>
                      <Input
                        id="landlord-email"
                        type="email"
                        placeholder="Ingresa tu correo electrónico"
                        className="border-gray-200 focus:border-accent1-500 focus:ring-accent1-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="landlord-password" className="flex items-center">
                        <LockIcon className="h-4 w-4 mr-2 text-accent1-500" />
                        Contraseña
                      </Label>
                      <Input
                        id="landlord-password"
                        type="password"
                        placeholder="Crea una contraseña"
                        className="border-gray-200 focus:border-accent1-500 focus:ring-accent1-500"
                        required
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="button"
                        className="w-full gradient-bg-2 hover:opacity-90 shadow-md"
                        onClick={handleNextStep}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="flex items-center">
                            <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                            Procesando...
                          </span>
                        ) : (
                          <>
                            Continuar
                            <ArrowRightIcon className="h-4 w-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <ShieldCheckIcon className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Verificación segura de identidad</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <BadgeCheckIcon className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Acceso a inquilinos verificados</span>
                      </div>
                    </div>
                  </form>
                )}

                {formStep === 2 && (
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="landlord-phone" className="flex items-center">
                        <PhoneIcon className="h-4 w-4 mr-2 text-accent1-500" />
                        Número de Teléfono
                      </Label>
                      <Input
                        id="landlord-phone"
                        placeholder="Ingresa tu número de teléfono"
                        className="border-gray-200 focus:border-accent1-500 focus:ring-accent1-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="landlord-address" className="flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-2 text-accent1-500" />
                        Dirección
                      </Label>
                      <Input
                        id="landlord-address"
                        placeholder="Ingresa tu dirección"
                        className="border-gray-200 focus:border-accent1-500 focus:ring-accent1-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="landlord-company" className="flex items-center">
                        <BriefcaseIcon className="h-4 w-4 mr-2 text-accent1-500" />
                        Empresa (Opcional)
                      </Label>
                      <Input
                        id="landlord-company"
                        placeholder="Nombre de tu empresa (si aplica)"
                        className="border-gray-200 focus:border-accent1-500 focus:ring-accent1-500"
                      />
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 border-accent1-200 text-accent1-600"
                        onClick={handlePrevStep}
                      >
                        Atrás
                      </Button>
                      <Button type="submit" className="flex-1 gradient-bg-2 hover:opacity-90 shadow-md">
                        Registrarse
                        <ArrowRightIcon className="h-4 w-4 ml-2" />
                      </Button>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <CheckCircleIcon className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Publicación gratuita de propiedades</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <CheckCircleIcon className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Gestión sencilla de propiedades</span>
                      </div>
                    </div>
                  </form>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>

          <CardFooter className="flex flex-col space-y-2 border-t pt-6">
            <div className="text-sm text-center">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="text-brand-600 hover:underline font-medium">
                Iniciar sesión
              </Link>
            </div>
            <p className="text-xs text-center text-gray-500">
              Al registrarte, aceptas nuestros{" "}
              <Link href="/terms" className="text-brand-600 hover:underline">
                Términos y Condiciones
              </Link>{" "}
              y{" "}
              <Link href="/privacy" className="text-brand-600 hover:underline">
                Política de Privacidad
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

