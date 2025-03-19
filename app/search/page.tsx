"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  SearchIcon,
  FilterIcon,
  MapPinIcon,
  BedIcon,
  WifiIcon,
  HomeIcon,
  StarIcon,
  SlidersHorizontalIcon,
  CalendarIcon,
  HeartIcon,
  UtensilsIcon,
  LayoutGridIcon,
  LayoutListIcon,
  ArrowUpDownIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  XIcon,
  ZapIcon,
  BadgeCheckIcon,
} from "lucide-react"

export default function SearchPage() {
  const [priceRange, setPriceRange] = useState([300, 1000])
  const [searchResults, setSearchResults] = useState(mockListings)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [viewMode, setViewMode] = useState("grid")
  const [sortOption, setSortOption] = useState("recommended")
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showFilterBadge, setShowFilterBadge] = useState(false)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter])
      setShowFilterBadge(true)
    }
  }

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter))
    if (activeFilters.length <= 1) {
      setShowFilterBadge(false)
    }
  }

  const clearFilters = () => {
    setActiveFilters([])
    setShowFilterBadge(false)
  }

  const getSortIcon = () => {
    switch (sortOption) {
      case "price-asc":
        return <ArrowUpIcon className="h-4 w-4" />
      case "price-desc":
        return <ArrowDownIcon className="h-4 w-4" />
      default:
        return <ArrowUpDownIcon className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-brand-50/30 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-brand-100 via-accent1-100/30 to-accent2-100/20 -z-10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-brand-200/20 blur-3xl animate-float -z-10"></div>
      <div
        className="absolute top-40 right-10 w-40 h-40 rounded-full bg-accent1-200/20 blur-3xl animate-float-reverse -z-10"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container py-8 relative">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-brand-100 text-brand-600 rounded-full text-sm font-medium mb-4">
            <span className="flex items-center">
              <BadgeCheckIcon className="h-4 w-4 mr-2" />
              Verified Listings Only
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2 gradient-text">Find Your Perfect Student Housing</h1>
          <p className="text-gray-600">Browse verified accommodations near your university</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search by university, city, or neighborhood"
                    className="pl-10 bg-white border-brand-200 focus:border-brand-400 h-12"
                  />
                </div>
                <Button
                  className="md:w-auto bg-white border border-brand-200 text-brand-600 hover:bg-brand-50 h-12 relative"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <FilterIcon className="mr-2 h-4 w-4" />
                  Filters
                  {showFilterBadge && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent2-500 text-white text-xs flex items-center justify-center">
                      {activeFilters.length}
                    </span>
                  )}
                </Button>
                <Button className="md:w-auto gradient-bg h-12 group">
                  <SearchIcon className="mr-2 h-4 w-4 group-hover:animate-bounce-light" />
                  Search
                </Button>
              </div>

              {activeFilters.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeFilters.map((filter, index) => (
                    <Badge key={index} className="bg-brand-100 text-brand-600 border-none hover:bg-brand-200 px-3 py-1">
                      {filter}
                      <XIcon className="h-3 w-3 ml-2 cursor-pointer" onClick={() => removeFilter(filter)} />
                    </Badge>
                  ))}
                  <Button variant="ghost" size="sm" className="text-gray-500 text-xs" onClick={clearFilters}>
                    Clear all
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters */}
          <div className={`lg:col-span-1 ${isFilterOpen ? "block" : "hidden lg:block"}`}>
            <Card className="border-none shadow-lg sticky top-4 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-accent1-400 to-accent2-400"></div>
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Filters</h3>
                  <Button variant="ghost" size="sm" className="text-brand-600">
                    Reset All
                  </Button>
                </div>

                <Tabs defaultValue="all" className="mb-6">
                  <TabsList className="grid w-full grid-cols-3 bg-brand-50">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-white data-[state=active]:text-brand-600"
                    >
                      All
                    </TabsTrigger>
                    <TabsTrigger
                      value="popular"
                      className="data-[state=active]:bg-white data-[state=active]:text-brand-600"
                    >
                      Popular
                    </TabsTrigger>
                    <TabsTrigger
                      value="nearby"
                      className="data-[state=active]:bg-white data-[state=active]:text-brand-600"
                    >
                      Nearby
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3 flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-2 text-brand-500" />
                      Location
                    </h4>
                    <div className="space-y-2">
                      <Input placeholder="Enter location or university" className="border-brand-200" />
                      <div className="flex items-center text-sm text-gray-500">
                        <Checkbox
                          id="nearby"
                          className="mr-2 data-[state=checked]:bg-brand-500 data-[state=checked]:border-brand-500"
                          onCheckedChange={() => addFilter("Near Campus")}
                        />
                        <Label htmlFor="nearby" className="cursor-pointer">
                          Show only nearby locations
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 flex items-center">
                      <SlidersHorizontalIcon className="h-4 w-4 mr-2 text-brand-500" />
                      Price Range
                    </h4>
                    <Slider
                      defaultValue={priceRange}
                      min={100}
                      max={2000}
                      step={50}
                      onValueChange={(value) => {
                        setPriceRange(value)
                        addFilter(`$${value[0]} - $${value[1]}`)
                      }}
                      className="my-6"
                    />
                    <div className="flex justify-between mt-2 text-sm">
                      <div className="px-3 py-1 bg-brand-50 text-brand-600 rounded-full font-medium">
                        ${priceRange[0]}
                      </div>
                      <div className="px-3 py-1 bg-brand-50 text-brand-600 rounded-full font-medium">
                        ${priceRange[1]}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2 text-brand-500" />
                      Move-in Date
                    </h4>
                    <Input type="date" className="border-brand-200" onChange={() => addFilter("Custom Move-in Date")} />
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 flex items-center">
                      <HomeIcon className="h-4 w-4 mr-2 text-brand-500" />
                      Property Type
                    </h4>
                    <div className="space-y-2">
                      <FilterCheckbox id="studio" label="Studio Apartment" onChecked={() => addFilter("Studio")} />
                      <FilterCheckbox
                        id="private-room"
                        label="Private Room"
                        onChecked={() => addFilter("Private Room")}
                      />
                      <FilterCheckbox id="shared-room" label="Shared Room" onChecked={() => addFilter("Shared Room")} />
                      <FilterCheckbox
                        id="entire-house"
                        label="Entire House"
                        onChecked={() => addFilter("Entire House")}
                      />
                      <FilterCheckbox id="apartment" label="Apartment" onChecked={() => addFilter("Apartment")} />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 flex items-center">
                      <ZapIcon className="h-4 w-4 mr-2 text-brand-500" />
                      Amenities
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <FilterCheckbox id="wifi" label="WiFi" onChecked={() => addFilter("WiFi")} />
                      <FilterCheckbox id="furnished" label="Furnished" onChecked={() => addFilter("Furnished")} />
                      <FilterCheckbox
                        id="private-bathroom"
                        label="Private Bathroom"
                        onChecked={() => addFilter("Private Bathroom")}
                      />
                      <FilterCheckbox id="kitchen" label="Kitchen" onChecked={() => addFilter("Kitchen")} />
                      <FilterCheckbox id="laundry" label="Laundry" onChecked={() => addFilter("Laundry")} />
                      <FilterCheckbox id="tv" label="TV" onChecked={() => addFilter("TV")} />
                      <FilterCheckbox id="ac" label="Air Conditioning" onChecked={() => addFilter("AC")} />
                      <FilterCheckbox id="heating" label="Heating" onChecked={() => addFilter("Heating")} />
                    </div>
                  </div>

                  <Button className="w-full gradient-bg hover:opacity-90">
                    <FilterIcon className="h-4 w-4 mr-2" />
                    Apply Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <Card className="border-none shadow-md mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <p className="text-gray-600 font-medium mb-2 sm:mb-0">
                    {isLoading ? (
                      <span className="flex items-center">
                        <span className="h-2 w-24 bg-gray-200 rounded animate-pulse"></span>
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <span className="text-brand-600 font-bold mr-1">{searchResults.length}</span> results found
                      </span>
                    )}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="sort" className="text-sm whitespace-nowrap">
                        Sort by:
                      </Label>
                      <div className="relative">
                        <select
                          id="sort"
                          className="text-sm border rounded-md p-2 pr-8 border-brand-200 focus:border-brand-400 focus:ring-brand-400 appearance-none"
                          value={sortOption}
                          onChange={(e) => setSortOption(e.target.value)}
                        >
                          <option value="recommended">Recommended</option>
                          <option value="price-asc">Price: Low to High</option>
                          <option value="price-desc">Price: High to Low</option>
                          <option value="newest">Newest</option>
                          <option value="rating">Best Rated</option>
                        </select>
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                          {getSortIcon()}
                        </div>
                      </div>
                    </div>
                    <div className="flex border rounded-md overflow-hidden">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`rounded-none ${viewMode === "grid" ? "bg-brand-50 text-brand-600" : "bg-white text-gray-500"}`}
                        onClick={() => setViewMode("grid")}
                      >
                        <LayoutGridIcon className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`rounded-none ${viewMode === "list" ? "bg-brand-50 text-brand-600" : "bg-white text-gray-500"}`}
                        onClick={() => setViewMode("list")}
                      >
                        <LayoutListIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {isLoading ? (
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                {[1, 2, 3, 4].map((item) => (
                  <PropertyCardSkeleton key={item} />
                ))}
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                {searchResults.map((listing) => (
                  <PropertyCard key={listing.id} listing={listing} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {searchResults.map((listing) => (
                  <PropertyListCard key={listing.id} listing={listing} />
                ))}
              </div>
            )}

            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="border-brand-200 text-brand-600 hover:bg-brand-50">
                Load More Results
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterCheckbox({ id, label, onChecked }: { id: string; label: string; onChecked: () => void }) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        className="data-[state=checked]:bg-brand-500 data-[state=checked]:border-brand-500"
        onCheckedChange={(checked) => {
          if (checked && onChecked) onChecked()
        }}
      />
      <Label htmlFor={id} className="text-sm">
        {label}
      </Label>
    </div>
  )
}

function PropertyCard({ listing }: { listing: Listing }) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Card className="overflow-hidden border-none shadow-md card-hover group">
      <div className="aspect-video relative">
        <img
          src={listing.image || "/placeholder.svg"}
          alt={listing.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-brand-600 px-3 py-1 rounded-full text-sm font-semibold">
          ${listing.price}/month
        </div>
        {listing.isNew && (
          <div className="absolute top-3 left-3 bg-accent1-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            NEW
          </div>
        )}
        <button
          className={`absolute bottom-3 right-3 p-2 rounded-full ${isFavorite ? "bg-red-500 text-white" : "bg-white/80 text-gray-600"} hover:scale-110 transition-all duration-300`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <HeartIcon className="h-4 w-4" fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{listing.title}</h3>
          <div className="flex items-center text-sm">
            <StarIcon className="h-4 w-4 text-accent2-500 fill-accent2-500 mr-1" />
            <span>{listing.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 flex items-center text-sm">
          <MapPinIcon className="h-3 w-3 mr-1 text-accent1-500" /> {listing.location}
        </p>
        <div className="flex items-center mt-3 space-x-4 text-sm text-gray-500">
          <span className="flex items-center">
            <BedIcon className="h-3 w-3 mr-1" /> {listing.bedrooms} {listing.bedrooms > 1 ? "beds" : "bed"}
          </span>
          {listing.amenities.includes("wifi") && (
            <span className="flex items-center">
              <WifiIcon className="h-3 w-3 mr-1" /> WiFi
            </span>
          )}
          {listing.amenities.includes("furnished") && (
            <span className="flex items-center">
              <HomeIcon className="h-3 w-3 mr-1" /> Furnished
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {listing.amenities.slice(0, 3).map((amenity: string, index: number) => (
            <Badge key={index} variant="outline" className="bg-brand-50 text-brand-600 border-brand-200 font-normal">
              {amenity}
            </Badge>
          ))}
          {listing.amenities.length > 3 && (
            <Badge variant="outline" className="bg-brand-50 text-brand-600 border-brand-200 font-normal">
              +{listing.amenities.length - 3} more
            </Badge>
          )}
        </div>
        <div className="mt-4 flex justify-between">
          <Link href={`/listing/${listing.id}`}>
            <Button variant="outline" size="sm" className="border-brand-200 text-brand-600 hover:bg-brand-50">
              View Details
            </Button>
          </Link>
          <Button size="sm" className="gradient-bg hover:opacity-90">
            Reserve
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function PropertyListCard({ listing }: { listing: Listing }) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Card className="overflow-hidden border-none shadow-md card-hover">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative">
          <img
            src={listing.image || "/placeholder.svg"}
            alt={listing.title}
            className="w-full h-full object-cover aspect-video md:aspect-auto"
          />
          {listing.isNew && (
            <div className="absolute top-3 left-3 bg-accent1-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              NEW
            </div>
          )}
          <button
            className={`absolute bottom-3 right-3 p-2 rounded-full ${isFavorite ? "bg-red-500 text-white" : "bg-white/80 text-gray-600"} hover:scale-110 transition-all duration-300`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <HeartIcon className="h-4 w-4" fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
        <div className="md:w-2/3 p-5">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg">{listing.title}</h3>
              <p className="text-gray-600 flex items-center text-sm">
                <MapPinIcon className="h-3 w-3 mr-1 text-accent1-500" /> {listing.location}
              </p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-brand-600">
                ${listing.price}
                <span className="text-sm font-normal text-gray-500">/month</span>
              </div>
              <div className="flex items-center text-sm justify-end mt-1">
                <StarIcon className="h-4 w-4 text-accent2-500 fill-accent2-500 mr-1" />
                <span>{listing.rating}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
            <div className="flex items-center text-sm text-gray-600">
              <BedIcon className="h-4 w-4 mr-1 text-brand-500" />
              {listing.bedrooms} {listing.bedrooms > 1 ? "Bedrooms" : "Bedroom"}
            </div>
            {listing.amenities.includes("wifi") && (
              <div className="flex items-center text-sm text-gray-600">
                <WifiIcon className="h-4 w-4 mr-1 text-brand-500" /> WiFi
              </div>
            )}
            {listing.amenities.includes("furnished") && (
              <div className="flex items-center text-sm text-gray-600">
                <HomeIcon className="h-4 w-4 mr-1 text-brand-500" /> Furnished
              </div>
            )}
            {listing.amenities.includes("kitchen") && (
              <div className="flex items-center text-sm text-gray-600">
                <UtensilsIcon className="h-4 w-4 mr-1 text-brand-500" /> Kitchen
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {listing.amenities.slice(0, 5).map((amenity: string, index: number) => (
              <Badge key={index} variant="outline" className="bg-brand-50 text-brand-600 border-brand-200 font-normal">
                {amenity}
              </Badge>
            ))}
            {listing.amenities.length > 5 && (
              <Badge variant="outline" className="bg-brand-50 text-brand-600 border-brand-200 font-normal">
                +{listing.amenities.length - 5} more
              </Badge>
            )}
          </div>

          <div className="mt-4 flex justify-between">
            <Link href={`/listing/${listing.id}`}>
              <Button variant="outline" className="border-brand-200 text-brand-600 hover:bg-brand-50">
                View Details
              </Button>
            </Link>
            <Button className="gradient-bg hover:opacity-90">Reserve Now</Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

function PropertyCardSkeleton() {
  return (
    <Card className="overflow-hidden border-none shadow-md">
      <div className="aspect-video bg-gray-200 animate-pulse"></div>
      <CardContent className="p-5">
        <div className="h-6 bg-gray-200 rounded animate-pulse mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-1/2"></div>
        <div className="flex space-x-2 mb-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
        </div>
        <div className="flex space-x-2 mb-4">
          <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3"></div>
          <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-8 bg-gray-200 rounded animate-pulse w-1/3"></div>
          <div className="h-8 bg-gray-200 rounded animate-pulse w-1/3"></div>
        </div>
      </CardContent>
    </Card>
  )
}

// Mock data with enhanced properties
interface Listing {
  id: number
  title: string
  location: string
  price: number
  bedrooms: number
  rating: number
  isNew: boolean
  amenities: string[]
  image: string
}

const mockListings: Listing[] = [
  {
    id: 1,
    title: "Modern Studio Apartment",
    location: "Near Central University",
    price: 500,
    bedrooms: 1,
    rating: 4.9,
    isNew: true,
    amenities: ["WiFi", "Furnished", "Kitchen", "Air Conditioning", "Study Desk"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Shared Student House",
    location: "University District",
    price: 350,
    bedrooms: 1,
    rating: 4.7,
    isNew: false,
    amenities: ["WiFi", "Laundry", "Kitchen", "Garden", "Parking"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Private Room in Apartment",
    location: "Downtown Campus Area",
    price: 400,
    bedrooms: 1,
    rating: 4.8,
    isNew: false,
    amenities: ["WiFi", "Furnished", "Private Bathroom", "Kitchen Access"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Luxury Student Loft",
    location: "Arts District",
    price: 650,
    bedrooms: 1,
    rating: 5.0,
    isNew: true,
    amenities: ["WiFi", "Furnished", "Laundry", "Kitchen", "Gym Access", "Pool"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

