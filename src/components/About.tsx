"use client";
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { icon: Award, number: '8+', label: 'Lat doświadczenia' },
  { icon: Users, number: '5000+', label: 'Zadowolonych klientek' },
  { icon: Clock, number: '24/7', label: 'Rezerwacja online' },
  { icon: Heart, number: '100%', label: 'Profesjonalizm' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl mb-6 text-gray-800">O nas</h2>
            <p className="text-lg text-gray-600 mb-6">
              LuxeNails to butikowy salon specjalizujący się w profesjonalnej 
              stylizacji paznokci. Z pasją tworzymy unikalne wzory i dbamy o 
              Twoje paznokcie z najwyższą starannością.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Nasz zespół składa się z wykwalifikowanych stylistek paznokci, 
              które regularnie podnoszą swoje kwalifikacje, śledząc najnowsze 
              trendy w branży beauty.
            </p>
            <p className="text-lg text-gray-600">
              Używamy wyłącznie najwyższej jakości produktów renomowanych marek, 
              zapewniając trwałość i bezpieczeństwo każdego zabiegu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1626383137804-ff908d2753a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yfGVufDF8fHx8MTc3MzU1OTQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Salon Interior"
                className="w-full h-96 object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl -z-10"
              animate={{
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-4xl text-pink-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

