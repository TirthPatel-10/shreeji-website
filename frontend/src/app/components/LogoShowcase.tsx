import { Logo, LogoIcon } from './Logo';
import { Card } from './ui/card';

export function LogoShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SHREEJI ART Logo System</h1>
          <p className="text-lg text-gray-600">Premium Signage Company Brand Identity</p>
        </div>

        {/* Primary Logo */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Primary Logo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Light Background */}
            <Card className="p-8">
              <div className="bg-white p-8 rounded-lg border-2 border-gray-200 flex items-center justify-center min-h-[200px]">
                <Logo variant="default" showText={true} size="lg" />
              </div>
              <p className="text-center mt-4 text-sm text-gray-600">Light Background</p>
            </Card>

            {/* Dark Background */}
            <Card className="p-8">
              <div className="bg-gray-900 p-8 rounded-lg flex items-center justify-center min-h-[200px]">
                <Logo variant="light" showText={true} size="lg" />
              </div>
              <p className="text-center mt-4 text-sm text-gray-600">Dark Background</p>
            </Card>

            {/* Gradient Background */}
            <Card className="p-8">
              <div className="bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] p-8 rounded-lg flex items-center justify-center min-h-[200px]">
                <Logo variant="light" showText={true} size="lg" />
              </div>
              <p className="text-center mt-4 text-sm text-gray-600">Brand Gradient</p>
            </Card>
          </div>
        </div>

        {/* Icon Only */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Icon Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="bg-white p-8 rounded-lg border-2 border-gray-200 flex items-center justify-center min-h-[200px]">
                <LogoIcon size={120} variant="default" />
              </div>
              <p className="text-center mt-4 text-sm text-gray-600">Icon - Default</p>
            </Card>

            <Card className="p-8">
              <div className="bg-gray-900 p-8 rounded-lg flex items-center justify-center min-h-[200px]">
                <LogoIcon size={120} variant="light" />
              </div>
              <p className="text-center mt-4 text-sm text-gray-600">Icon - Light</p>
            </Card>

            <Card className="p-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg flex items-center justify-center min-h-[200px]">
                <LogoIcon size={120} variant="dark" />
              </div>
              <p className="text-center mt-4 text-sm text-gray-600">Icon - Dark Variant</p>
            </Card>
          </div>
        </div>

        {/* Size Variations */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Size Variations</h2>
          <Card className="p-12">
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-around gap-8">
                <div className="text-center">
                  <Logo variant="default" showText={true} size="sm" />
                  <p className="mt-4 text-sm text-gray-600">Small</p>
                </div>
                <div className="text-center">
                  <Logo variant="default" showText={true} size="md" />
                  <p className="mt-4 text-sm text-gray-600">Medium</p>
                </div>
                <div className="text-center">
                  <Logo variant="default" showText={true} size="lg" />
                  <p className="mt-4 text-sm text-gray-600">Large</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Usage Guidelines */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Logo Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-3">Design Elements</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>SA Monogram:</strong> Geometric letters representing SHREEJI ART</li>
                <li>• <strong>Hexagonal Frame:</strong> Industrial precision and structural integrity</li>
                <li>• <strong>Gradient Colors:</strong> Modern cyan-to-blue premium palette</li>
                <li>• <strong>Accent Dots:</strong> Creative detail and visual balance</li>
                <li>• <strong>Metallic Shine:</strong> Subtle overlay for premium feel</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-3">Brand Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-[#06b6d4]"></div>
                  <div>
                    <p className="font-semibold text-sm">Cyan</p>
                    <p className="text-xs text-gray-600">#06b6d4</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-[#3b82f6]"></div>
                  <div>
                    <p className="font-semibold text-sm">Blue</p>
                    <p className="text-xs text-gray-600">#3b82f6</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-[#8b5cf6]"></div>
                  <div>
                    <p className="font-semibold text-sm">Purple</p>
                    <p className="text-xs text-gray-600">#8b5cf6</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Application Examples */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Application Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Card */}
            <Card className="p-0 overflow-hidden">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
                <div className="flex items-start justify-between mb-8">
                  <LogoIcon size={48} variant="light" />
                  <div className="text-right">
                    <p className="font-bold">SHREEJI ART</p>
                    <p className="text-xs text-gray-400 tracking-widest">PREMIUM SIGNAGE</p>
                  </div>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-sm">Rajesh Kumar</p>
                  <p className="text-xs text-gray-400">Creative Director</p>
                  <p className="text-xs text-gray-500 mt-2">+91 98765 43210</p>
                  <p className="text-xs text-gray-500">info@shreejiart.com</p>
                </div>
              </div>
              <p className="p-4 text-center text-sm text-gray-600 bg-gray-50">Business Card Mock</p>
            </Card>

            {/* Social Media Profile */}
            <Card className="p-0 overflow-hidden">
              <div className="bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] p-8 flex items-center justify-center aspect-square">
                <div className="text-center text-white">
                  <LogoIcon size={80} variant="light" />
                  <p className="mt-4 font-bold text-xl">SHREEJI ART</p>
                  <p className="text-sm opacity-90">Premium Signage Solutions</p>
                </div>
              </div>
              <p className="p-4 text-center text-sm text-gray-600 bg-gray-50">Social Media Profile</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
