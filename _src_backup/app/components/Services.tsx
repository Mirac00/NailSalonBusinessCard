import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Heart, Palette, Star } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Manicure klasyczny',
    description: 'Profesjonalna pielęgnacja i stylizacja paznokci',
    price: '80 zł',
    color: 'from-pink-400 to-pink-600',
  },
  {
    icon: Heart,
    title: 'Manicure hybrydowy',
    description: 'Trwały lakier utrzymujący się do 3 tygodni',
    price: '120 zł',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: Palette,
    title: 'Nail Art',
    description: 'Unikalne wzory i zdobienia na paznokciach',
    price: 'od 150 zł',
    color: 'from-rose-400 to-rose-600',
  },
  {
    icon: Star,
    title: 'Przedłużanie paznokci',
    description: 'Żelowe lub akrylowe przedłużanie paznokci',
    price: '180 zł',
    color: 'from-fuchsia-400 to-fuchsia-600',
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl mb-4 text-gray-800">Nasze usługi</h2>
          <p className="text-xl text-gray-600">Odkryj szeroką gamę profesjonalnych zabiegów</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 h-full">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-2xl text-pink-600">{service.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
