import { Button } from "@/components/ui/button";

const Index = () => {
  const scrollToAgenda = () => {
    const element = document.getElementById('agenda');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const agendaData = {
    miercoles: [
      {
        title: "🕒 9:20 – 10:20 | URANO",
        content: "HEMOPATÓGENOS: ¿Crees que una PCR confirma el diagnóstico?",
        link: "https://forms.gle/19cFm7BGmE4Ghcaq5"
      },
      {
        title: "🕒 10:40 – 11:40 | PHARVET",
        content: "Abordaje clínico de la Urolitiasis y la gastritis",
        link: "https://forms.gle/GXAmMfQMDU9zFZ7x7"
      },
      {
        title: "🕒 12:00 – 13:00 | PROCONVET",
        content: "¡No es alergia, es la tiroides! Descubre al verdadero culpable",
        link: "https://forms.gle/1q2aFkwp6fg7Gif98"
      },
      {
        title: "🕒 13:20 – 14:20 | ZOETIS",
        content: "Eligiendo la terapia proactiva adecuada para enfermedades dermatológicas",
        link: "https://forms.gle/JFQxDky1EV4AL9kQA"
      },
      {
        title: "🕒 14:40 – 15:40 | CEVA / CAT IN COLOMBIA",
        content: "Crisis Intersticial felina: Un reto etológico y clínico",
        link: "https://forms.gle/auRxiBD55FkTUr1D7"
      }
    ],
    jueves: [
      {
        title: "🕒 08:00 – 09:00 | BONNAT",
        content: "Proteínas hidrolizadas: clave nutricional para pacientes sensibles",
        link: "https://forms.gle/nPBJxbEpjbaP3RMb7"
      },
      {
        title: "🕒 9:20 – 10:20 | TM MÉDICAS",
        content: "Cápsula endoscópica: nueva era del diagnóstico mínimamente invasivo",
        link: "https://forms.gle/N6LDr6SUkDrgEjDe8"
      },
      {
        title: "🕒 10:40 – 11:40 | NOVALFARM",
        content: "Fisiología de la producción de lágrimas: Síndrome del ojo seco",
        link: "https://forms.gle/CBDDkrCVBnU41nFx9"
      },
      {
        title: "🕒 12:00 – 13:00 | PROCONVET",
        content: "Dermatología zoonótica: Cuando la piel cuenta la historia",
        link: "https://forms.gle/JshRAWrn8HZJqqL98"
      },
      {
        title: "🕒 13:20 – 14:20 | ZOETIS",
        content: "Osteoartritis: cómo actuar ante su progresión y dolor",
        link: "https://forms.gle/uEU41RpWEAQETb7K7"
      },
      {
        title: "🕒 14:40 – 15:40 | ORMENDES",
        content: "Cómo combatir la xenosialización con ¡Probióticos!",
        link: "https://forms.gle/U8LFcnH8GLtdH2847"
      },
      {
        title: "🕒 16:00 – 17:00 | SANFER",
        content: "Todo sobre Mycoplasma haemofelis",
        link: "https://forms.gle/GUByLcvoGzf4sQ1LA"
      },
      {
        title: "🕒 17:20 – 18:20 | GRUPO BIOS",
        content: "Obesidad en caninos y dislipidemia",
        link: "https://forms.gle/NTBfFxrFHPjVSMJg9"
      }
    ],
    viernes: [
      {
        title: "🕒 08:00 – 09:00 | PIXIE",
        content: "Ciencia y alimentación natural: Innovación en el plato",
        link: "https://forms.gle/X8G1gfmJFKgZVcvC8"
      },
      {
        title: "🕒 09:20 – 10:20 | TM MÉDICAS",
        content: "Del concepto a la práctica: Superalimentos",
        link: "https://forms.gle/MScsw5iBEGyZwPfJ6"
      },
      {
        title: "🕒 10:40 – 11:40 | HOLLIDAY",
        content: "Mis gatos no se soportan: ¿Qué puede haber pasado?",
        link: "https://forms.gle/9H5EHzLaeFRb2exUA"
      },
      {
        title: "🕒 12:00 – 13:00 | HOLLIDAY",
        content: "Endectoparasitismo en caninos: impacto dermatológico y control eficaz",
        link: "https://forms.gle/jrc4ANwxTG2AFZz58"
      },
      {
        title: "🕒 13:20 – 14:20 | LABYES",
        content: "Uso de prebióticos, posbióticos y glicosaminoglicanos en salud digestiva y articular",
        link: "https://forms.gle/h6wVuVkPKuTRWEy88"
      },
      {
        title: "🕒 14:40 – 15:40 | ALIVET",
        content: "Trucha horneada: Innovación local y natural en nutrición veterinaria",
        link: "https://forms.gle/W5ZEDnzqU7zqDUoq5"
      }
    ]
  };

  const TalkCard = ({ talk }: { talk: any }) => (
    <div className="cvdc-card mb-6">
      <h3 className="text-lg font-semibold text-foreground mb-2">{talk.title}</h3>
      <p className="text-foreground mb-4 leading-relaxed">{talk.content}</p>
      <Button 
        className="cvdc-hero-btn w-full md:w-auto"
        onClick={() => window.open(talk.link, '_blank')}
      >
        📝 Inscribirme
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            🎓 La Industria Veterinaria te Invita a Aprender, Conectar y Disfrutar
          </h1>
          <div className="text-lg md:text-xl text-foreground mb-12 space-y-3 max-w-3xl mx-auto">
            <p>Durante tres días, las marcas líderes del sector compartirán lo último en salud animal, nutrición, innovación clínica y casos reales.</p>
            <div className="mt-6 space-y-2">
              <p>🎁 Suvenires exclusivos para los asistentes</p>
              <p>🥤 Refrigerios incluidos</p>
              <p>📚 Charlas técnicas de alto nivel</p>
            </div>
            <p className="font-semibold mt-6">🛑 ¡Cupos limitados! Regístrate y asegura tu lugar.</p>
          </div>
          <Button 
            className="cvdc-hero-btn text-xl px-12 py-6"
            onClick={scrollToAgenda}
          >
            📅 Ver Agenda e Inscribirme
          </Button>
        </div>
      </section>

      {/* AGENDA SECTION */}
      <section id="agenda" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* MIÉRCOLES */}
          <div className="mb-16">
            <h2 className="cvdc-section-title text-center">🗓️ Miércoles 6 de agosto</h2>
            <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
              {agendaData.miercoles.map((talk, index) => (
                <TalkCard key={index} talk={talk} />
              ))}
            </div>
          </div>

          {/* JUEVES */}
          <div className="mb-16">
            <h2 className="cvdc-section-title text-center">🗓️ Jueves 7 de agosto</h2>
            <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
              {agendaData.jueves.map((talk, index) => (
                <TalkCard key={index} talk={talk} />
              ))}
            </div>
          </div>

          {/* VIERNES */}
          <div className="mb-16">
            <h2 className="cvdc-section-title text-center">🗓️ Viernes 8 de agosto</h2>
            <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
              {agendaData.viernes.map((talk, index) => (
                <TalkCard key={index} talk={talk} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA SECTION */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="cvdc-section-title text-center">✅ ¿Cómo funciona?</h2>
          <div className="cvdc-card max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-6">Paso a paso</h3>
            <div className="space-y-4 text-lg">
              <p>1️⃣ Haz clic en la charla que te interesa</p>
              <p>2️⃣ Llena el formulario de inscripción</p>
              <p>3️⃣ Puedes inscribirte a varias</p>
              <p>4️⃣ Llega 10 minutos antes</p>
              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <p className="font-semibold">🎥 Las sesiones serán grabadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4" style={{ backgroundColor: 'hsl(var(--footer-dark))' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-lg md:text-xl">
            📍 Nos vemos en la Sala de la Industria — CVDC 2025
          </p>
          <p className="mt-4 text-base">
            🌐 www.cvdc.com.co · @avdecolombia
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;