import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adres',
    details: ['ul. Piękna 15', '00-549 Warszawa'],
  },
  {
    icon: Phone,
    title: 'Telefon',
    details: ['+48 123 456 789'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['kontakt@luxenails.pl'],
  },
  {
    icon: Clock,
    title: 'Godziny otwarcia',
    details: ['Pn-Pt: 10:00 - 20:00', 'Sb: 10:00 - 18:00', 'Nd: zamknięte'],
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl mb-4 text-gray-800">Kontakt</h2>
          <p className="text-xl text-gray-600">Skontaktuj się z nami i umów wizytę</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl mb-3 text-gray-800">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">{detail}</p>
                ))}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h3 className="text-3xl mb-8 text-gray-800 text-center">Umów wizytę</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Imię i nazwisko</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Twoje imię i nazwisko"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Telefon</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="+48 123 456 789"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="twoj@email.pl"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Wybierz usługę</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400">
                <option>Manicure klasyczny</option>
                <option>Manicure hybrydowy</option>
                <option>Nail Art</option>
                <option>Przedłużanie paznokci</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Wiadomość</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Dodatkowe informacje..."
              />
            </div>
            <motion.button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Wyślij zapytanie
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
