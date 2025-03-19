"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { FileUpload } from "@/components/file-upload"
import { MapPinIcon, PlusIcon } from "lucide-react"

export default function AddPropertyPage() {
  const [amenities, setAmenities] = useState({
    wifi: false,
    furnished: false,
    privateBathroom: false,
    kitchen: false,
    laundry: false,
    tv: false,
    airConditioning: false,
    heating: false,
    parking: false,
  })

  const handlecomodidadesChange = (comodidades: keyof typeof amenities) => {
    setAmenities((prev) => ({
      ...prev,
      [comodidades]: !prev[comodidades],
    }))
  }

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Agregar Nueva Propiedad</h1>

        <form className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Información Básica</CardTitle>
              <CardDescription>Proporcione los detalles básicos sobre su propiedad</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título de la Propiedad</Label>
                <Input id="title" placeholder="Ejemplo: Apartamento Moderno cerca de la Universidad" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  placeholder="Describe tu propiedad en detalle"
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="property-type">Tipo de Propiedad</Label>
                  <select id="property-type" className="w-full border rounded-md p-2">
                    <option>Apartaestudio</option>
                    <option>Habitación Privada</option>
                    <option>Habitación Compartida</option>
                    <option>Casa</option>
                    <option>Apartamento</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Número de Habitaciones</Label>
                  <Input id="bedrooms" type="number" min="0" defaultValue="1" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bathrooms">Número de Baños</Label>
                  <Input id="bathrooms" type="number" min="0" step="0.5" defaultValue="1" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Alquiler Mensual (COP)</Label>
                  <Input id="price" type="number" min="0" placeholder="Ejemplo: 500000" required />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ubicación</CardTitle>
              <CardDescription>Proporcione los detalles de la ubicación de su propiedad</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Dirección</Label>
                <div className="flex">
                  <Input id="address" placeholder="Ingresa la dirección completa" className="flex-1" required />
                  <Button type="button" variant="outline" className="ml-2">
                    <MapPinIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">Ciudad</Label>
                  <Input id="city" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">Estado/Provincia</Label>
                  <Input id="state" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="zip">Código Postal</Label>
                  <Input id="zip" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="nearby">Universidades/Colegios Cercanos</Label>
                <Input id="nearby" placeholder="Ejemplo: Universidad Central, Colegio Estatal" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Comodidades</CardTitle>
              <CardDescription>Seleccione las comodidades disponibles en su propiedad</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="wifi" checked={amenities.wifi} onCheckedChange={() => handlecomodidadesChange("wifi")} />
                  <Label htmlFor="wifi">WiFi</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="furnished"
                    checked={amenities.furnished}
                    onCheckedChange={() => handlecomodidadesChange("furnished")}
                  />
                  <Label htmlFor="furnished">Amueblada</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="private-bathroom"
                    checked={amenities.privateBathroom}
                    onCheckedChange={() => handlecomodidadesChange("privateBathroom")}
                  />
                  <Label htmlFor="private-bathroom">Baño Privado</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="kitchen"
                    checked={amenities.kitchen}
                    onCheckedChange={() => handlecomodidadesChange("kitchen")}
                  />
                  <Label htmlFor="kitchen">Cocina</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="laundry"
                    checked={amenities.laundry}
                    onCheckedChange={() => handlecomodidadesChange("laundry")}
                  />
                  <Label htmlFor="laundry">Lavadero</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="tv" checked={amenities.tv} onCheckedChange={() => handlecomodidadesChange("tv")} />
                  <Label htmlFor="tv">TV</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="air-conditioning"
                    checked={amenities.airConditioning}
                    onCheckedChange={() => handlecomodidadesChange("airConditioning")}
                  />
                  <Label htmlFor="air-conditioning">Aire Acondicionado</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="heating"
                    checked={amenities.heating}
                    onCheckedChange={() => handlecomodidadesChange("heating")}
                  />
                  <Label htmlFor="heating">Calefacción</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="parking"
                    checked={amenities.parking}
                    onCheckedChange={() => handlecomodidadesChange("parking")}
                  />
                  <Label htmlFor="parking">Parqueadero</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fotos</CardTitle>
              <CardDescription>Sube fotos de tu propiedad (mínimo 3 fotos)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-dashed rounded-md p-4 flex flex-col items-center justify-center">
                  <FileUpload />
                  <p className="text-sm text-gray-500 mt-2">Foto Principal</p>
                </div>

                <div className="border border-dashed rounded-md p-4 flex flex-col items-center justify-center">
                  <FileUpload />
                  <p className="text-sm text-gray-500 mt-2">Foto Adicional</p>
                </div>

                <div className="border border-dashed rounded-md p-4 flex flex-col items-center justify-center">
                  <FileUpload />
                  <p className="text-sm text-gray-500 mt-2">Foto Adicional</p>
                </div>
              </div>

              <Button type="button" variant="outline" className="flex items-center">
                <PlusIcon className="h-4 w-4 mr-2" />
                Agregar Más Fotos
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disponibilidad y Reglas</CardTitle>
              <CardDescription>Establezca fechas de disponibilidad y reglas de la casa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="available-from">Disponible Desde</Label>
                  <Input id="available-from" type="date" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="available-until">Disponible Hasta (opcional)</Label>
                  <Input id="available-until" type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rules">Reglas de la Casa</Label>
                <Textarea
                  id="rules"
                  placeholder="Describe las reglas específicas para tu propiedad"
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline">
              Guardar como Borrador
            </Button>
            <Button type="submit">Publicar Listado</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

