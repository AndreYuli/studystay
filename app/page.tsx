import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  SearchIcon,
  HomeIcon,
  UserIcon,
  StarIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  MapPinIcon,
  BuildingIcon,
  GraduationCapIcon,
  CheckCircleIcon,
  HeartIcon,
  BellIcon,
  MessageSquareIcon,
  CalendarIcon,
  LockIcon,
  SmileIcon,
  ThumbsUpIcon,
  BadgeCheckIcon,
} from "lucide-react"
import { JSX } from "react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/90 via-brand-700/80 to-brand-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center mix-blend-overlay opacity-20 z-0"></div>

        {/* Animated shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent1-400/30 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent2-400/20 rounded-full blur-3xl animate-float-reverse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-72 h-72 bg-accent3-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">
                <span className="flex items-center">
                  <BadgeCheckIcon className="h-4 w-4 mr-2 text-accent2-300" />
                  Más de 10 000 estudiantes de todo el mundo confían en nosotros
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Encuentra tu alojamiento{" "}
                <span className="text-accent2-300 relative">
                  Student Housing
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10C50.5 4 99 2.5 147.5 2.5C196 2.5 244.5 4 293 10"
                      stroke="#FF8700"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="mx-auto max-w-[800px] text-white/80 md:text-xl lg:text-2xl">
              Alojamiento verificado para estudiantes. Seguro, cómodo y económico.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/search">
                <Button size="lg" className="bg-white text-brand-600 hover:bg-white/90 text-lg px-8 btn-3d-primary">
                  <SearchIcon className="mr-2 h-5 w-5 icon-bounce" />
                  Empezar a buscar
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  <UserIcon className="mr-2 h-5 w-5 icon-bounce" />
                  Regístrese ahora
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-3 mt-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-accent1-400 flex items-center justify-center text-white text-xs">
                  JD
                </div>
                <div className="w-8 h-8 rounded-full bg-accent2-400 flex items-center justify-center text-white text-xs">
                  MG
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-400 flex items-center justify-center text-white text-xs">
                  AK
                </div>
              </div>
              <p className="text-white/90 text-sm">
                <span className="font-semibold">1,200+ estudiantes</span> encontré vivienda este mes
              </p>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50"></div>
        <div className="blob w-96 h-96 bg-brand-100 top-10 -left-48"></div>
        <div className="blob w-96 h-96 bg-accent1-100 bottom-10 -right-48" style={{ animationDelay: "2s" }}></div>

        <div className="container px-4 md:px-6 relative">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-brand-100 text-brand-600 rounded-full text-sm font-medium mb-4">
            Por qué elegirnos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl gradient-text">
            La forma más inteligente de encontrar alojamiento para estudiantes
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hacemos que encontrar alojamiento para estudiantes sea sencillo, seguro y sin estrés.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<SearchIcon className="h-8 w-8" />}
              title="Búsqueda Inteligente"
              description="Encuentra alojamientos por ubicación, precio, fechas y comodidades con nuestras herramientas avanzadas de búsqueda."
              color="brand"
            />
            <FeatureCard
              icon={<ShieldCheckIcon className="h-8 w-8" />}
              title="Listados Verificados"
              description="Todos los alojamientos están verificados para garantizar calidad y seguridad, asegurando una gran experiencia."
              color="accent1"
            />
            <FeatureCard
              icon={<GraduationCapIcon className="h-8 w-8" />}
              title="Verificación de Estudiantes"
              description="Nuestra plataforma segura incluye verificación de estudiantes para crear una comunidad confiable."
              color="accent2"
            />
            <FeatureCard
              icon={<MapPinIcon className="h-8 w-8" />}
              title="Ubicaciones Estratégicas"
              description="Encuentra alojamiento cerca de tu universidad o colegio con acceso conveniente al campus."
              color="accent3"
            />
            <FeatureCard
              icon={<CreditCardIcon className="h-8 w-8" />}
              title="Pagos Seguros"
              description="Nuestro sistema de pagos integrado asegura que tus transacciones sean seguras y protegidas."
              color="accent2"
            />
            <FeatureCard
              icon={<BuildingIcon className="h-8 w-8" />}
              title="Opciones Diversas"
              description="Elige entre una amplia gama de tipos de alojamiento para adaptarse a tus preferencias y presupuesto."
              color="brand"
            />
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block animated-border">
              <div className="animated-border-content p-1">
                <div className="bg-brand-50 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-brand-100 text-brand-600">
                      <ThumbsUpIcon className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold">Garantía de satisfacción del 100</h3>
                      <p className="text-gray-600">
                        Si no estás satisfecho con tu vivienda, te ayudamos a encontrar una nueva.
                      </p>
                    </div>
                  </div>
                  <Link href="/about">
                    <Button className="bg-brand-600 hover:bg-brand-700">Más información</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-brand-50 to-brand-100 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg mix-blend-overlay"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-accent1-100 text-accent1-600 rounded-full text-sm font-medium mb-4">
            Proceso sencillo
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl gradient-text-3">
            Cómo funciona
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Encontrar tu alojamiento estudiantil perfecto está a solo unos pasos
            </p>
          </div>
<div className="grid gap-8 md:grid-cols-3 relative">
  {/* Línea de conexión */}
  <div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-1 bg-gradient-to-r from-brand-300 via-accent1-300 to-accent2-300 z-0"></div>

  <StepCard
    number="01"
    title="Crea una Cuenta"
    description="Regístrate y verifica tu estado de estudiante con tus credenciales universitarias."
    icon={<UserIcon className="h-6 w-6" />}
    color="brand"
  />
  <StepCard
    number="02"
    title="Busca Propiedades"
    description="Explora listados verificados y filtra según tus preferencias y requisitos."
    icon={<SearchIcon className="h-6 w-6" />}
    color="accent1"
  />
  <StepCard
    number="03"
    title="Reserva y Múdate"
    description="Reserva tu alojamiento elegido, realiza un pago seguro y múdate."
    icon={<HomeIcon className="h-6 w-6" />}
    color="accent2"
  />
</div>

          <div className="mt-16 flex justify-center">
            <div className="glass-card p-6 md:p-8 max-w-3xl rounded-2xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 rounded-full bg-accent2-100 text-accent2-600">
                  <LockIcon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Plataforma segura y confiable</h3>
                  <p className="text-gray-600">
                  Nuestra plataforma utiliza medidas de seguridad avanzadas para proteger tus datos y transacciones. Todos los propietarios están verificados y ofrecemos soporte 24/7 para garantizar una experiencia fluida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-50"></div>
        <div className="blob w-96 h-96 bg-accent3-100 top-20 -right-48"></div>
        <div className="blob w-96 h-96 bg-accent2-100 bottom-20 -left-48" style={{ animationDelay: "3s" }}></div>

        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <div className="inline-block px-3 py-1 bg-accent2-100 text-accent2-600 rounded-full text-sm font-medium mb-4">
              Propiedades destacadas
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl gradient-text-2">
                Descubra alojamientos increíbles
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                Explora las opciones de alojamiento para estudiantes mejor valoradas cerca de tu universidad
              </p>
            </div>
            <Link href="/search" className="mt-4 md:mt-0">
              <Button variant="outline" className="border-brand-400 text-brand-600 hover:bg-brand-50 group">
              Ver todos los listados
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeaturedListing
              title="Apartamento Estudio Moderno"
              location="Cerca de la Universidad Central"
              price="$500"
              rating={4.9}
              reviews={28}
              image="/placeholder.svg?height=300&width=400"
              tags={["WiFi", "Amueblado", "Cocina"]}
              color="brand"
            />
            <FeaturedListing
              title="alojamiento Compartida para Estudiantes"
              location="Distrito Universitario"
              price="$350"
              rating={4.7}
              reviews={42}
              image="/placeholder.svg?height=300&width=400"
              tags={["WiFi", "Lavadero", "Jardín"]}
              color="accent1"
            />
            <FeaturedListing
              title="Habitación Privada en Apartamento"
              location="Área del Campus Centro"
              price="$400"
              rating={4.8}
              reviews={35}
              image="/placeholder.svg?height=300&width=400"
              tags={["WiFi", "Baño Privado", "Escritorio de Estudio"]}
              color="accent2"
            />
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <StatCard
              icon={<BuildingIcon className="h-6 w-6" />}
              value="1,200+"
              label="Propiedades Disponibles"
              color="brand"
            />
            <StatCard icon={<UserIcon className="h-6 w-6" />} value="10,000+" label="Happy Students" color="accent1" />
            <StatCard icon={<MapPinIcon className="h-6 w-6" />} value="50+" label="University Areas" color="accent2" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 noise-bg mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto rotate-180">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">
            Experiencias estudiantiles
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-white">
            Lo que dicen los estudiantes
            </h2>
                        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Escucha a los estudiantes que encontraron su alojamiento perfecto a través de nuestra plataforma.
            </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                quote="Encontrar alojamiento solía ser muy estresante, pero esta plataforma lo hizo increíblemente fácil. ¡Encontré un gran apartamento cerca de mi universidad en pocos días!"
                name="Alex Johnson"
                role="Estudiante de Ciencias de la Computación"
                image="/placeholder.svg?height=100&width=100"
                rating={5}
              />
              <TestimonialCard
                quote="El proceso de verificación me dio tranquilidad. Sabía que estaba alquilando a propietarios legítimos y viviendo con otros estudiantes."
                name="Maria Garcia"
                role="Estudiante de Administración de Empresas"
                image="/placeholder.svg?height=100&width=100"
                rating={5}
              />
              <TestimonialCard
                quote="Como estudiante internacional, encontrar alojamiento era mi mayor preocupación. Esta plataforma me conectó con el lugar perfecto antes de llegar al país."
                name="David Kim"
                role="Estudiante de Ingeniería"
                image="/placeholder.svg?height=100&width=100"
                rating={4}
              />
            </div>
          <div className="mt-16 flex justify-center">
            <div className="glass-card p-6 md:p-8 max-w-3xl rounded-2xl bg-white/5">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 rounded-full bg-white/10 text-white">
                  <SmileIcon className="h-8 w-8" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2 text-white">Únete a nuestra comunidad</h3>
                  <p className="text-white/80 mb-4">Sea parte de nuestra creciente comunidad de estudiantes y propietarios..</p>
                  <Link href="/register">
                    <Button className="bg-white text-brand-600 hover:bg-white/90 btn-3d-primary">
                    Comience hoy
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* App Features Section */}
      <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-accent3-100 text-accent3-600 rounded-full text-sm font-medium mb-4">
            Características de la plataforma
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl gradient-text">
            Todo lo que necesita en un solo lugar
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestra plataforma le ofrece todas las herramientas que necesita para disfrutar de una experiencia de alojamiento perfecta
            </p>
          </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AppFeatureCard
              icon={<SearchIcon className="h-6 w-6" />}
              title="Búsqueda Inteligente"
              description="Encuentra el lugar perfecto con nuestros filtros avanzados"
              color="brand"
            />
            <AppFeatureCard
              icon={<MessageSquareIcon className="h-6 w-6" />}
              title="Mensajería Instantánea"
              description="Chatea directamente con propietarios y compañeros de cuarto"
              color="accent1"
            />
            <AppFeatureCard
              icon={<CalendarIcon className="h-6 w-6" />}
              title="Sistema de Reservas"
              description="Reserva tu alojamiento con solo unos clics"
              color="accent2"
            />
            <AppFeatureCard
              icon={<BellIcon className="h-6 w-6" />}
              title="Notificaciones"
              description="Mantente actualizado con alertas y recordatorios"
              color="accent3"
            />
            <AppFeatureCard
              icon={<CreditCardIcon className="h-6 w-6" />}
              title="Pagos Seguros"
              description="Paga alquileres y depósitos de forma segura en línea"
              color="accent3"
            />
            <AppFeatureCard
              icon={<StarIcon className="h-6 w-6" />}
              title="Reseñas y Calificaciones"
              description="Lee y escribe reseñas auténticas"
              color="accent2"
            />
            <AppFeatureCard
              icon={<ShieldCheckIcon className="h-6 w-6" />}
              title="Sistema de Verificación"
              description="Solo estudiantes y propietarios verificados"
              color="accent1"
            />
            <AppFeatureCard
              icon={<HeartIcon className="h-6 w-6" />}
              title="Favoritos"
              description="Guarda y compara tus propiedades favoritas"
              color="brand"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 p-8 md:p-12">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-accent1-400/30 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-accent2-400/20 blur-3xl"></div>
            <div className="absolute inset-0 noise-bg mix-blend-overlay"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">
                ¿Preparado para encontrar su alojamiento perfecto para estudiantes?
                </h2>
                <p className="mt-4 text-lg text-white/80 max-w-lg">
                Únete a los miles de estudiantes que han encontrado su alojamiento ideal a través de nuestra plataforma.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/search">
                  <Button size="lg" className="bg-white text-brand-600 hover:bg-white/90 text-lg px-8 btn-3d-primary">
                    <SearchIcon className="mr-2 h-5 w-5 icon-bounce" />
                    Empezar a buscar
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 text-lg px-8"
                  >
                    <UserIcon className="mr-2 h-5 w-5 icon-bounce" />
                    Regístrese ahora
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const colorClasses = {
  brand: "from-brand-100 to-brand-200 text-brand-600 group-hover:shadow-neon",
  accent1: "from-accent1-100 to-accent1-200 text-accent1-600 group-hover:shadow-neon-accent",
  accent2: "from-accent2-100 to-accent2-200 text-accent2-600 group-hover:shadow-neon-accent2",
  accent3: "from-accent3-100 to-accent3-200 text-accent3-600 group-hover:shadow-neon-accent3",
};

function FeatureCard({ icon, title, description, color }: { icon: JSX.Element; title: string; description: string; color: keyof typeof colorClasses }) {

  return (
    <Card className="border-none shadow-sm card-hover group">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        <div className={`relative p-3 rounded-xl bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]}`}>
          {icon}
          <div className="absolute inset-0 rounded-xl bg-white/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function StepCard({ number, title, description, icon, color }: { number: string; title: string; description: string; icon: JSX.Element; color: "brand" | "accent1" | "accent2" }) {
  const colorClasses = {
    brand: "bg-brand-600",
    accent1: "bg-accent1-600",
    accent2: "bg-accent2-600",
  }

  return (
    <div className="relative">
      <div className="absolute -left-4 -top-4 text-7xl font-bold text-brand-100 select-none">{number}</div>
      <Card className="border-none shadow-md card-hover h-full bg-white relative z-10">
        <CardContent className="p-6 flex flex-col space-y-4">
          <div className={`p-3 rounded-full ${colorClasses[color]} text-white w-fit`}>{icon}</div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-500">{description}</p>
          </div>
          <div className="mt-auto pt-4">
            <div className="flex items-center text-sm text-gray-500">
              <CheckCircleIcon className="h-4 w-4 mr-2 text-green-500" />
              Proceso fácil y rápido
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function FeaturedListing({ title, location, price, rating, reviews, image, tags, color }: { title: string; location: string; price: string; rating: number; reviews: number; image: string; tags: string[]; color: "brand" | "accent1" | "accent2" }) {
  const colorClasses = {
    brand: "from-brand-600 to-brand-700 card-hover",
    accent1: "from-accent1-600 to-accent1-700 card-hover-accent",
    accent2: "from-accent2-600 to-accent2-700 card-hover-accent2",
  }

  return (
    <Card className="overflow-hidden border-none shadow-md card-hover group">
      <div className="aspect-video relative">
        <img src={image || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-brand-600 px-3 py-1 rounded-full text-sm font-semibold">
          {price}/mes
        </div>
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-brand-600 px-3 py-1 rounded-full text-sm font-semibold">
          <StarIcon className="h-4 w-4 text-accent2-500 fill-accent2-500" />
          <span>{rating}</span>
          <span className="text-gray-500">({reviews})</span>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-gray-500 flex items-center text-sm mt-1">
          <MapPinIcon className="h-4 w-4 mr-1 text-accent1-500" /> {location}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-brand-50 text-brand-600 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/listing/1">
            <Button className={`w-full bg-gradient-to-r ${colorClasses[color]} text-white group-hover:translate-y-0`}>
              Ver más Detalles
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image: string;
  rating: number;
}

function TestimonialCard({ quote, name, role, image, rating }: TestimonialCardProps) {
  return (
    <Card className="border-none shadow-md card-hover bg-white/10 backdrop-blur-sm">
      <CardContent className="p-6 flex flex-col space-y-4">
        <div className="flex mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              className={`h-5 w-5 ${i < rating ? "text-accent2-400 fill-accent2-400" : "text-white/20"}`}
            />
          ))}
        </div>
        <div className="text-white/90">
          <svg className="h-8 w-8 text-white/40 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-lg">{quote}</p>
        </div>
        <div className="flex items-center mt-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-white/70 text-sm">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function StatCard({ icon, value, label, color }: { icon: JSX.Element; value: string; label: string; color: "brand" | "accent1" | "accent2" }) {
  const colorClasses = {
    brand: "bg-brand-50 text-brand-600 border-brand-100",
    accent1: "bg-accent1-50 text-accent1-600 border-accent1-100",
    accent2: "bg-accent2-50 text-accent2-600 border-accent2-100",
  }

  return (
    <Card className={`border ${colorClasses[color]} shadow-sm card-hover`}>
      <CardContent className="p-6 flex items-center gap-4">
        <div className={`p-3 rounded-full ${colorClasses[color]}`}>{icon}</div>
        <div>
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className="text-gray-500">{label}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function AppFeatureCard({ icon, title, description, color }: { icon: JSX.Element; title: string; description: string; color: "brand" | "accent1" | "accent2" | "accent3" }) {
  const colorClasses = {
    brand: "bg-brand-50 text-brand-600 border-brand-100",
    accent1: "bg-accent1-50 text-accent1-600 border-accent1-100",
    accent2: "bg-accent2-50 text-accent2-600 border-accent2-100",
    accent3: "bg-accent3-50 text-accent3-600 border-accent3-100",
  }

  return (
    <Card className={`border ${colorClasses[color]} shadow-sm card-hover`}>
      <CardContent className="p-5 flex flex-col items-center text-center">
        <div className={`p-3 rounded-full ${colorClasses[color]} mb-3`}>{icon}</div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}

