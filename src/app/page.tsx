import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <h1 className="text-xl font-bold text-gray-900">BingeBuy</h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Special Offer!</h2>
          <p className="text-base text-gray-600">Get 10 Premium Sunglasses for just ₹999</p>
        </div>

        <Card className="w-full max-w-sm">
          <CardHeader className="py-3">
            <CardTitle className="text-lg">Premium Sunglasses Bundle</CardTitle>
            <CardDescription className="text-sm">Limited time offer - Get 10 stylish sunglasses!</CardDescription>
          </CardHeader>
          <CardContent className="py-3">
            <div className="aspect-[16/9] relative mb-3">
              <Image
                src="/BONNIE-GD-OPT-website.webp"
                alt="Premium Sunglasses Bundle"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <ul className="grid grid-cols-2 gap-1 text-gray-600 text-sm">
              <li>✓ UV Protection</li>
              <li>✓ Stylish Design</li>
              <li>✓ Durable Frame</li>
              <li>✓ Comfortable Fit</li>
            </ul>
          </CardContent>
          <CardFooter className="py-3 flex flex-row items-center justify-between">
            <div className="text-left">
              <p className="text-xl font-bold text-gray-900">₹999</p>
              <p className="text-xs text-gray-500">for 10 sunglasses</p>
            </div>
            <a 
              href="https://wa.me/+919765421296?text=Hi,%20I'm%20interested%20in%20buying%20the%20sunglasses%20bundle%20for%20₹999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <Button className="flex items-center gap-2" size="sm">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Contact on WhatsApp
              </Button>
            </a>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
