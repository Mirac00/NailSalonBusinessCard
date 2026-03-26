import { motion } from 'motion/react';
import { Instagram, Facebook, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-600 to-purple-700 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl mb-4">LuxeNails</h3>
            <p className="text-pink-100">
              Profesjonalna stylizacja paznokci w sercu Warszawy
            </p>
          </div>
          <div>
            <h4 className="text-xl mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-pink-100 hover:text-white transition-colors">Usługi</a></li>
              <li><a href="#" className="text-pink-100 hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#" className="text-pink-100 hover:text-white transition-colors">O nas</a></li>
              <li><a href="#" className="text-pink-100 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl mb-4">Social Media</h4>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="border-t border-pink-400/30 pt-8 text-center">
          <p className="text-pink-100 flex items-center justify-center gap-2">
            Stworzone z <Heart className="w-4 h-4 fill-current" /> dla pięknych paznokci © 2026 LuxeNails
          </p>
        </div>
      </div>
    </footer>
  );
}
