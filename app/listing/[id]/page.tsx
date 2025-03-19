"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  MapPinIcon,
  BedIcon,
  WifiIcon,
  TvIcon,
  HomeIcon,
  ShowerHeadIcon as ShowerIcon,
  UtensilsIcon,
  CalendarIcon,
  StarIcon,
  ChevronLeftIcon,
  HeartIcon,
  ShareIcon,
  MessageSquareIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ImageIcon,
  MapIcon,
  InfoIcon,
  UsersIcon,
  ParkingMeterIcon,
  AirVentIcon,
  WashingMachineIcon,
  BadgeCheckIcon,
  ZapIcon,
} from "lucide-react"

interface ListingPageParams {
  id: string;
}

export default function ListingPage({ params }: { params: ListingPageParams }) {
  const { id } = params
  const listing = mockListings.find((l) => l.id.toString() === id) || mockListings[0]
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [showContactForm, setShowContactForm] = useState(false)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const images = [
    listing.image.replace("200", "400").replace("300", "600") || "/placeholder.svg",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-brand-50/30 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-brand-100 via-accent1-100/30 to-accent2-100/20 -z-10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-brand-200/20 blur-3xl animate-float -z-10"></div>
      <div
        className="absolute top-40 right-10 w-40 h-40 rounded-full bg-accent1-200/20 blur-3xl animate-float-reverse -z-10"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container py-8">
        <Link href="/search" className="flex items-center text-brand-600 mb-4 hover:underline group">
          <ChevronLeftIcon className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          Volver a resultados de búsqueda
        </Link>

        {isLoading ? (
          <ListingPageSkeleton />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center mb-2">
                    <Badge className="bg-accent2-100 text-accent2-700 border-none mr-2">Verificado</Badge>
                    {listing.isNew && <Badge className="bg-accent1-100 text-accent1-700 border-none">Nuevo</Badge>}
                  </div>
                  <h1 className="text-3xl font-bold mb-2 text-gray-800">{listing.title}</h1>
                  <p className="text-gray-500 flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-1 text-brand-500" /> {listing.location}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className={`rounded-full ${isFavorite ? "bg-red-50 text-red-500 border-red-200" : "text-gray-500"}`}
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <HeartIcon className="h-4 w-4" fill={isFavorite ? "currentColor" : "none"} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full text-gray-500">
                    <ShareIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                <Carousel className="w-full">
                  <CarouselContent>
                    {images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-video w-full">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`${listing.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
                            {index + 1} / {images.length}
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>

                <div className="grid grid-cols-5 gap-2 mt-2">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`aspect-video rounded-md overflow-hidden cursor-pointer transition-all ${activeImageIndex === index ? "ring-2 ring-brand-500" : "opacity-70 hover:opacity-100"}`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="mt-2 text-xs">
                      <ImageIcon className="h-3 w-3 mr-1" />
                      Ver todas las fotos
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>Galería de fotos</DialogTitle>
                      <DialogDescription>
                        {listing.title} - {listing.location}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {images.map((image, index) => (
                        <div key={index} className="aspect-video rounded-md overflow-hidden">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="details" className="mt-6">
                <TabsList className="grid w-full grid-cols-3 bg-brand-50">
                  <TabsTrigger
                    value="details"
                    className="data-[state=active]:bg-white data-[state=active]:text-brand-700"
                  >
                    <InfoIcon className="h-4 w-4 mr-2" />
                    Detalles
                  </TabsTrigger>
                  <TabsTrigger
                    value="amenities"
                    className="data-[state=active]:bg-white data-[state=active]:text-brand-700"
                  >
                    <ZapIcon className="h-4 w-4 mr-2" />
                    Comodidades
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className="data-[state=active]:bg-white data-[state=active]:text-brand-700"
                  >
                    <StarIcon className="h-4 w-4 mr-2" />
                    Reseñas
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="p-5 bg-white rounded-b-lg shadow-sm border border-gray-100">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3 text-gray-800 flex items-center">
                        <InfoIcon className="h-5 w-5 mr-2 text-brand-500" />
                        Descripción
                      </h3>
                      <div className="bg-brand-50 p-4 rounded-lg border border-brand-100">
                        <p className="text-gray-600">
                          Este {listing.title.toLowerCase()} es perfecto para estudiantes que buscan alojamiento cómodo
                          cerca de {listing.location}. La propiedad ofrece una ubicación conveniente con fácil acceso al
                          campus y servicios locales.
                        </p>
                        <p className="text-gray-600 mt-2">
                          Disfruta de un espacio moderno y bien equipado, diseñado pensando en las necesidades de los
                          estudiantes. Con excelente iluminación natural y un ambiente tranquilo para estudiar.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3 text-gray-800 flex items-center">
                        <HomeIcon className="h-5 w-5 mr-2 text-brand-500" />
                        Detalles de la Propiedad
                      </h3>
                      <div className="grid grid-cols-2 gap-4 bg-gradient-to-br from-brand-50 to-brand-100/50 p-4 rounded-lg border border-brand-100">
                        <div className="flex items-center">
                          <BedIcon className="h-5 w-5 mr-3 text-brand-600" />
                          <div>
                            <p className="font-medium text-gray-800">
                              {listing.bedrooms} {listing.bedrooms > 1 ? "Habitaciones" : "Habitación"}
                            </p>
                            <p className="text-xs text-gray-500">Espacio para dormir</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <ShowerIcon className="h-5 w-5 mr-3 text-brand-600" />
                          <div>
                            <p className="font-medium text-gray-800">1 Baño</p>
                            <p className="text-xs text-gray-500">Baño completo</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <HomeIcon className="h-5 w-5 mr-3 text-brand-600" />
                          <div>
                            <p className="font-medium text-gray-800">
                              {listing.amenities.includes("furnished") ? "Amueblado" : "Sin amueblar"}
                            </p>
                            <p className="text-xs text-gray-500">Estado del mobiliario</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <UtensilsIcon className="h-5 w-5 mr-3 text-brand-600" />
                          <div>
                            <p className="font-medium text-gray-800">
                              {listing.amenities.includes("kitchen") ? "Cocina Disponible" : "Sin Cocina"}
                            </p>
                            <p className="text-xs text-gray-500">Instalaciones de cocina</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3 text-gray-800 flex items-center">
                        <MapIcon className="h-5 w-5 mr-2 text-brand-500" />
                        Ubicación
                      </h3>
                      <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-200 rounded-lg flex items-center justify-center overflow-hidden shadow-sm relative">
                        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                        <div className="text-center">
                          <MapPinIcon className="h-8 w-8 text-brand-600 mx-auto mb-2" />
                          <p className="text-gray-600">Vista del Mapa</p>
                        </div>
                      </div>
                      <div className="mt-3 bg-brand-50 p-3 rounded-lg border border-brand-100">
                        <h4 className="font-medium text-gray-700 mb-1">Distancias importantes:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li className="flex items-center">
                            <BadgeCheckIcon className="h-3 w-3 mr-2 text-brand-500" />
                            10 minutos caminando del campus principal
                          </li>
                          <li className="flex items-center">
                            <BadgeCheckIcon className="h-3 w-3 mr-2 text-brand-500" />5 minutos a tiendas y restaurantes
                          </li>
                          <li className="flex items-center">
                            <BadgeCheckIcon className="h-3 w-3 mr-2 text-brand-500" />
                            Parada de autobús a 2 minutos
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3 text-gray-800 flex items-center">
                        <UsersIcon className="h-5 w-5 mr-2 text-brand-500" />
                        Reglas de la Casa
                      </h3>
                      <div className="bg-brand-50 p-4 rounded-lg border border-brand-100">
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>No se permiten fiestas o eventos sin autorización previa</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>No fumar dentro de la propiedad</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Mascotas permitidas con depósito adicional</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Respeto a los vecinos y áreas comunes</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="amenities" className="p-5 bg-white rounded-b-lg shadow-sm border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                    <AmenityItem
                      icon={<WifiIcon className="h-5 w-5 text-brand-600" />}
                      title="WiFi"
                      description="Internet de alta velocidad"
                      available={true}
                    />
                    <AmenityItem
                      icon={<HomeIcon className="h-5 w-5 text-brand-600" />}
                      title="Amueblado"
                      description="Incluye cama, escritorio, sillas"
                      available={listing.amenities.includes("furnished")}
                    />
                    <AmenityItem
                      icon={<ShowerIcon className="h-5 w-5 text-brand-600" />}
                      title="Baño Privado"
                      description="Baño exclusivo para el inquilino"
                      available={listing.amenities.includes("private-bathroom")}
                    />
                    <AmenityItem
                      icon={<UtensilsIcon className="h-5 w-5 text-brand-600" />}
                      title="Cocina"
                      description="Acceso a cocina equipada"
                      available={listing.amenities.includes("kitchen")}
                    />
                    <AmenityItem
                      icon={<TvIcon className="h-5 w-5 text-brand-600" />}
                      title="TV"
                      description="Televisión en área común"
                      available={listing.amenities.includes("tv")}
                    />
                    <AmenityItem
                      icon={<WashingMachineIcon className="h-5 w-5 text-brand-600" />}
                      title="Lavandería"
                      description="Instalaciones de lavado"
                      available={listing.amenities.includes("laundry")}
                    />
                    <AmenityItem
                      icon={<AirVentIcon className="h-5 w-5 text-brand-600" />}
                      title="Aire Acondicionado"
                      description="Control de clima"
                      available={listing.amenities.includes("Air Conditioning")}
                    />
                    <AmenityItem
                      icon={<ParkingMeterIcon className="h-5 w-5 text-brand-600" />}
                      title="Estacionamiento"
                      description="Espacio para vehículo"
                      available={listing.amenities.includes("Parking")}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="p-5 bg-white rounded-b-lg shadow-sm border border-gray-100">
                  <div className="space-y-6">
                    <div className="flex items-center mb-4 bg-gradient-to-br from-brand-50 to-brand-100/50 p-4 rounded-lg border border-brand-100">
                      <div className="mr-4">
                        <div className="text-4xl font-bold text-gray-800">4.8</div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <StarIcon key={star} className="h-4 w-4 text-accent2-400 fill-accent2-400" />
                          ))}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">15 reseñas</div>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center">
                          <span className="w-20 text-sm text-gray-600">Limpieza</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-brand-600 rounded-full" style={{ width: "95%" }}></div>
                          </div>
                          <span className="w-8 text-right text-sm text-gray-600">4.9</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-20 text-sm text-gray-600">Ubicación</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-brand-600 rounded-full" style={{ width: "90%" }}></div>
                          </div>
                          <span className="w-8 text-right text-sm text-gray-600">4.8</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-20 text-sm text-gray-600">Valor</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-brand-600 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                          <span className="w-8 text-right text-sm text-gray-600">4.7</span>
                        </div>
                      </div>
                    </div>

                    <ReviewCard
                      name="Alex Johnson"
                      date="hace 2 meses"
                      rating={5}
                      comment="¡Excelente lugar para quedarse! Cerca del campus y muy cómodo. El propietario fue muy atento y respondió rápidamente a todas mis preguntas."
                      avatar="/placeholder.svg?height=50&width=50"
                    />

                    <ReviewCard
                      name="María García"
                      date="hace 3 meses"
                      rating={4}
                      comment="Buen apartamento con buenas comodidades. El propietario fue muy receptivo. La ubicación es perfecta para estudiantes."
                      avatar="/placeholder.svg?height=50&width=50"
                    />

                    <ReviewCard
                      name="David Kim"
                      date="hace 4 meses"
                      rating={5}
                      comment="Ubicación perfecta para estudiantes. Todo está a poca distancia a pie. El WiFi es rápido y el espacio es cómodo para estudiar."
                      avatar="/placeholder.svg?height=50&width=50"
                    />

                    <Button variant="outline" className="w-full border-brand-200 text-brand-700 hover:bg-brand-50">
                      Ver Todas las Reseñas
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border-none shadow-lg sticky top-4 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-accent1-400 to-accent2-400"></div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-gray-800">
                      ${listing.price} <span className="text-sm font-normal text-gray-500">/ mes</span>
                    </div>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} className="h-4 w-4 text-accent2-400 fill-accent2-400" />
                      ))}
                      <span className="ml-1 text-sm text-gray-500">(15 reseñas)</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-medium mb-3 text-gray-800 flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2 text-brand-500" />
                      Disponibilidad
                    </h3>
                    <div className="border border-brand-200 rounded-lg p-3 bg-white">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md"
                        classNames={{
                          day_selected: "bg-brand-600 text-white hover:bg-brand-700",
                          day_today: "bg-brand-100 text-brand-700",
                        }}
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2 flex items-center">
                      <CalendarIcon className="h-3 w-3 mr-1 text-brand-500" />
                      Disponible a partir del 1 de septiembre
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <Button className="w-full gradient-bg hover:opacity-90 shadow-md">Reservar Ahora</Button>
                    <Button
                      variant="outline"
                      className="w-full border-brand-200 text-brand-700 hover:bg-brand-50"
                      onClick={() => setShowContactForm(!showContactForm)}
                    >
                      <MessageSquareIcon className="h-4 w-4 mr-2" />
                      Contactar al Propietario
                    </Button>
                  </div>

                  {showContactForm && (
                    <div className="mb-6 p-4 bg-brand-50 rounded-lg border border-brand-100">
                      <h4 className="font-medium text-gray-800 mb-2">Enviar mensaje</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm text-gray-600 block mb-1">Tu mensaje</label>
                          <textarea
                            className="w-full border border-brand-200 rounded-md p-2 text-sm"
                            rows={3}
                            placeholder="Hola, estoy interesado en esta propiedad..."
                          ></textarea>
                        </div>
                        <Button className="w-full gradient-bg hover:opacity-90">Enviar Mensaje</Button>
                      </div>
                    </div>
                  )}

                  <div className="text-sm text-gray-500 space-y-2">
                    <p className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 mr-2 text-green-500" />
                      No se cobra ningún pago hasta confirmar
                    </p>
                    <p className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 mr-2 text-green-500" />
                      Se requiere verificación estudiantil
                    </p>
                    <p className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 mr-2 text-green-500" />
                      Cancelación gratuita hasta 7 días antes
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-4 border-none shadow-lg overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent1-400 via-accent2-400 to-brand-400"></div>
                <CardContent className="p-6">
                  <h3 className="font-medium mb-4 text-gray-800 flex items-center">
                    <BadgeCheckIcon className="h-4 w-4 mr-2 text-brand-500" />
                    Propietario Verificado
                  </h3>
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-500 to-accent1-400 p-0.5">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <img
                          src="/placeholder.svg?height=60&width=60"
                          alt="Propietario"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-800">Juan Martínez</p>
                      <p className="text-sm text-gray-500">Miembro desde 2021</p>
                      <div className="flex items-center mt-1">
                        <StarIcon className="h-3 w-3 text-accent2-400 fill-accent2-400" />
                        <StarIcon className="h-3 w-3 text-accent2-400 fill-accent2-400" />
                        <StarIcon className="h-3 w-3 text-accent2-400 fill-accent2-400" />
                        <StarIcon className="h-3 w-3 text-accent2-400 fill-accent2-400" />
                        <StarIcon className="h-3 w-3 text-accent2-400 fill-accent2-400" />
                        <span className="ml-1 text-xs text-gray-500">(28 reseñas)</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm space-y-2 bg-brand-50 p-3 rounded-lg border border-brand-100">
                    <p className="flex justify-between">
                      <span className="text-gray-600">Tasa de respuesta:</span>
                      <span className="font-medium text-gray-800">98%</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Tiempo de respuesta:</span>
                      <span className="font-medium text-gray-800">menos de 24 horas</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Idiomas:</span>
                      <span className="font-medium text-gray-800">Español, Inglés</span>
                    </p>
                  </div>
                  <Button variant="outline" className="w-full mt-4 border-brand-200 text-brand-700 hover:bg-brand-50">
                    Ver Perfil Completo
                  </Button>
                </CardContent>
              </Card>

              <Card className="mt-4 border-none shadow-lg overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent2-400 via-brand-400 to-accent1-400"></div>
                <CardContent className="p-6">
                  <h3 className="font-medium mb-3 text-gray-800 flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-2 text-brand-500" />
                    Propiedades Similares
                  </h3>
                  <div className="space-y-3">
                    {mockListings
                      .filter((l) => l.id !== Number.parseInt(id))
                      .slice(0, 2)
                      .map((listing) => (
                        <Link href={`/listing/${listing.id}`} key={listing.id}>
                          <div className="flex items-center p-2 hover:bg-brand-50 rounded-lg transition-colors">
                            <div className="w-16 h-12 rounded-md overflow-hidden flex-shrink-0">
                              <img
                                src={listing.image || "/placeholder.svg"}
                                alt={listing.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="ml-3 flex-1">
                              <h4 className="font-medium text-sm">{listing.title}</h4>
                              <p className="text-xs text-gray-500">${listing.price}/mes</p>
                            </div>
                            <ArrowRightIcon className="h-4 w-4 text-gray-400" />
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function AmenityItem({ icon, title, description, available }: { icon: React.ReactNode; title: string; description: string; available: boolean }) {
  return (
    <div className="flex items-start">
      <div className="mr-3 mt-1">{icon}</div>
      <div>
        <div className="flex items-center">
          <h4 className="font-medium text-gray-800">{title}</h4>
          {available ? (
            <Badge className="ml-2 bg-green-100 text-green-700 border-green-200">Disponible</Badge>
          ) : (
            <Badge variant="outline" className="ml-2 bg-gray-100 text-gray-500 border-gray-200">
              No disponible
            </Badge>
          )}
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}

function ReviewCard({ name, date, rating, comment, avatar }: { name: string; date: string; rating: number; comment: string; avatar: string }) {
  return (
    <div className="border-b border-gray-100 pb-5">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
          <img src={avatar || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="font-medium text-gray-800">{name}</div>
          <div className="text-xs text-gray-500">{date}</div>
        </div>
      </div>
      <div className="flex mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon
            key={star}
            className={`h-4 w-4 ${star <= rating ? "text-accent2-400 fill-accent2-400" : "text-gray-300"}`}
          />
        ))}
      </div>
      <p className="text-gray-600">{comment}</p>
    </div>
  )
}

function ListingPageSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4 mb-2"></div>
        <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2 mb-6"></div>

        <div className="aspect-video bg-gray-200 rounded-xl animate-pulse mb-6"></div>

        <div className="h-10 bg-gray-200 rounded animate-pulse mb-6"></div>

        <div className="space-y-4 mb-6">
          <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3"></div>
          <div className="h-24 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3"></div>
          <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="h-64 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="h-48 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  )
}

// Mock data
const mockListings = [
  {
    id: 1,
    title: "Apartamento Estudio Moderno",
    location: "Cerca de Universidad Central",
    price: 500,
    bedrooms: 1,
    rating: 4.9,
    isNew: true,
    amenities: ["WiFi", "Furnished", "Kitchen", "Air Conditioning", "Study Desk"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Casa Compartida para Estudiantes",
    location: "Distrito Universitario",
    price: 350,
    bedrooms: 1,
    rating: 4.7,
    isNew: false,
    amenities: ["WiFi", "Laundry", "Kitchen", "Garden", "Parking"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Habitación Privada en Apartamento",
    location: "Área del Campus Centro",
    price: 400,
    bedrooms: 1,
    rating: 4.8,
    isNew: false,
    amenities: ["WiFi", "Furnished", "Private Bathroom", "Kitchen Access"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Loft de Lujo para Estudiantes",
    location: "Distrito de las Artes",
    price: 650,
    bedrooms: 1,
    rating: 5.0,
    isNew: true,
    amenities: ["WiFi", "Furnished", "Laundry", "Kitchen", "Gym Access", "Pool"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

