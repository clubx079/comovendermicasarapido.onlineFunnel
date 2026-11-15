export default {
  slug: 'permuta-de-inmuebles',
  title: 'Permuta de inmuebles: cómo cambiar tu casa por otra',
  h1: 'Permuta de inmuebles: cómo cambiar tu casa por otra en Paraguay',
  description: 'Permuta de inmuebles en Paraguay: qué es permutar una casa, cómo se igualan los valores, qué dice el contrato, quién paga los gastos y qué riesgos revisar.',
  navLabel: 'Permuta de inmuebles',
  blurb: 'Cambiar tu casa por otra, por un departamento o un terreno: cómo se igualan valores, escritura, gastos y riesgos de la permuta.',
  group: 'Posesión y otros casos',
  order: 40,
  keyword: {
    phrase: 'permuta de inmuebles',
    evidence: 'autocomplete gl=py 2026-11-15: "permuta de inmuebles", "permuta de inmuebles dueños directos", "permuta de casas", "permuta de casas entre particulares", "permuta de viviendas entre particulares", "que es permutar una casa", "permuto casa por casa", "permuto casa por departamento", "permuto casa por campo", "cambio casa por terreno", "cambio casa por departamento", "contrato de permuta paraguay"; "permuta de inmuebles paraguay" gives no suggestions, so the country goes after the colon',
  },
  published: '2026-11-16',
  updated: '2026-11-16',
  review: 'pending',
  reviewNote: 'An escribano and an accountant should confirm: Código Civil arts. 799 to 802 (permuta; costs shared in halves unless agreed otherwise; rules of the sale apply), art. 756 (mixed price: permuta if the value in kind equals or exceeds the money, sale otherwise), arts. 700 and 701 (escritura pública; private contract obliges to sign it), arts. 800 and 1779 (eviction), Ley 125/91 art. 64 (certificate of no debt for each property) and Ley 1/92 art. 42 (both spouses). The tax treatment of a permuta (each party taxed as a seller on what it hands over; seller IRP withheld by the escribano under DNIT RG 42/20; IVA where applicable) could NOT be confirmed in a primary source and is stated only in general terms.',
  answer: 'La permuta es el contrato por el que dos personas se transfieren una a la otra la propiedad de sus inmuebles: tu casa por otra casa, por un departamento o por un terreno. En Paraguay la regula el Código Civil y se rige por las mismas reglas que la compraventa, así que se hace por escritura pública y se inscribe en el Registro, con los dos inmuebles en regla. Si los valores no coinciden, la diferencia se paga en dinero. Salvo que acuerden otra cosa, los gastos se pagan por mitades. Cada parte tiene que revisar el inmueble que recibe como lo haría cualquier comprador.',
  summary: [
    'Permutar es cambiar un inmueble por otro, con o sin una diferencia en dinero.',
    'Se rige por las reglas de la compraventa: escritura pública e inscripción en el Registro.',
    'Si la parte en dinero supera el valor del inmueble que se entrega, la ley lo trata como una venta.',
    'Los gastos de la permuta van por mitades, salvo pacto en contrario.',
    'Los dos inmuebles tienen que estar libres de deudas y embargos el día de la firma.',
  ],
  flow: ['Dos valores', 'Diferencia acordada', 'Papeles de ambos', 'Escritura de permuta', 'Entrega cruzada'],
  cta: {
    title: 'Mirá qué hay en la zona a la que querés mudarte',
    text: 'Buscá por ciudad, tipo y en el mapa, y escribile al anunciante para preguntarle si escucha una permuta.',
    button: 'Ver propiedades en Casa-Libre',
    href: 'https://casa-libre.com.py/propiedades',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es permutar una casa?',
      blocks: [
        { t: 'p', html: 'Es cambiarla por otro inmueble en lugar de venderla por dinero. Cada parte es a la vez quien entrega y quien recibe, y los dos títulos cambian de dueño en la misma operación.' },
        {
          t: 'table',
          caption: 'Tres formas de cambiar una casa por otro inmueble',
          head: ['Forma', 'Cómo es', 'Cómo la trata la ley'],
          rows: [
            ['Permuta pura', 'Casa por casa, sin dinero de por medio', 'Permuta'],
            ['Permuta con diferencia', 'Un inmueble más una suma menor en dinero', 'Permuta, si el inmueble vale igual o más que el dinero'],
            ['Venta con inmueble en parte de pago', 'Dinero más un inmueble de menor valor', 'Venta, si el dinero vale más que el inmueble'],
          ],
          note: 'Según los artículos 756 y 799 del Código Civil paraguayo. La diferencia importa para redactar la escritura y para los impuestos.',
        },
        { t: 'p', html: 'Sirve sobre todo a quien quiere mudarse sin pasar por dos operaciones separadas. Si tu caso es vender una y comprar otra a personas distintas, mirá <a href="/necesito-vender-mi-casa-para-comprar-otra/">necesito vender mi casa para comprar otra</a>.' },
      ],
    },
    {
      id: 'paso-a-paso',
      h2: 'Permuta de casas entre particulares: cómo se hace',
      blocks: [
        { t: 'p', html: 'Igual que una compraventa, pero dos veces y al mismo tiempo: cada uno revisa el inmueble del otro, se acuerdan los valores y se firma una sola escritura.' },
        { t: 'steps', items: [
          { title: 'Pónganle valor a cada inmueble', html: 'Por separado y comparando con propiedades parecidas en venta. Si no hay acuerdo, una tasación profesional de los dos ordena la conversación.' },
          { title: 'Acuerden la diferencia', html: 'Cuánto, quién la paga, cuándo y cómo. Por escrito.' },
          { title: 'Revisen los papeles cruzados', html: 'Título, informe de condición de dominio, impuesto inmobiliario al día y, en un departamento, expensas. De los dos inmuebles.' },
          { title: 'Firmen la escritura de permuta', html: 'Ante escribano. Si alguno está casado y el bien es ganancial, firma también su cónyuge.' },
          { title: 'Entrega e inscripción', html: 'Se entregan las llaves de los dos y el escribano inscribe las dos transferencias en el Registro.' },
        ] },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consultá con un abogado o escribano antes de decidir.' },
      ],
    },
    {
      id: 'igualar-valores',
      h2: 'Permuto casa por departamento, terreno o campo: cómo igualar los valores',
      blocks: [
        { t: 'p', html: 'Con una diferencia en dinero, que paga quien recibe el inmueble de más valor. Lo difícil no es la cuenta, sino ponerse de acuerdo en cuánto vale cada uno.' },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: tu casa vale Gs. 600.000.000',
          html: 'Dos ofertas distintas por la misma casa, con valores de ejemplo.',
          rows: [
            ['Oferta A: un departamento más dinero', 'Departamento de Gs. 420.000.000 + Gs. 180.000.000', 'El inmueble vale más que el dinero: es permuta'],
            ['Oferta B: un terreno más dinero', 'Terreno de Gs. 200.000.000 + Gs. 400.000.000', 'El dinero vale más que el inmueble: es venta'],
            ['En los dos casos recibís', '420.000.000 + 180.000.000, o 200.000.000 + 400.000.000', 'Gs. 600.000.000 en total'],
          ],
        },
        { t: 'ul', items: [
          'Compará cada inmueble con avisos de su propia zona y tipo. Un terreno no se valora como una casa.',
          'Desconfiá de los valores inflados "porque total es canje". Si los dos inflan, la diferencia en dinero queda mal calculada y los impuestos también.',
          'Pensá si de verdad querés lo que recibís. Un terreno que no vas a usar es plata inmovilizada: después hay que venderlo.',
        ] },
      ],
    },
    {
      id: 'contrato',
      h2: 'Contrato de permuta en Paraguay: qué tiene que decir',
      blocks: [
        { t: 'p', html: 'Lo mismo que una compraventa, por partida doble. Y tiene que ser una escritura pública: el Código exige esa forma para los contratos que transfieren inmuebles.' },
        { t: 'ul', items: [
          'Datos completos de las partes y de los dos inmuebles: finca o matrícula, cuenta corriente catastral, ubicación y medidas.',
          'El valor que las partes le dan a cada inmueble y la diferencia en dinero, si la hay, con su forma de pago.',
          'Que los dos se entregan libres de deudas, embargos, hipotecas y ocupantes, o qué se acepta en caso contrario.',
          'Fecha de entrega de cada uno. Puede no ser el mismo día: dejalo escrito.',
          'Quién paga los gastos. Si no dicen nada, el Código los reparte por mitades.',
        ] },
        { t: 'p', html: 'Antes de la escritura pueden firmar un contrato privado para dejar asentado el acuerdo. Ese papel no transfiere nada: obliga a las partes a firmar después la escritura pública.' },
      ],
    },
    {
      id: 'gastos-e-impuestos',
      h2: 'Gastos e impuestos de una permuta',
      blocks: [
        { t: 'p', html: 'Los gastos de escritura e inscripción se pagan por mitades, salvo que acuerden otra cosa. Los impuestos son un tema aparte, porque acá los dos transfieren un inmueble.' },
        { t: 'ul', items: [
          '<strong>Honorarios del escribano y gastos de inscripción:</strong> se calculan sobre los inmuebles que se transfieren. Pedí el presupuesto completo antes de firmar.',
          '<strong>Impuesto inmobiliario:</strong> cada inmueble necesita su certificado de no adeudar para que el escribano pueda escriturar.',
          '<strong>Impuestos de quien transfiere:</strong> como cada parte entrega un inmueble, cada una puede tener que tributar por el suyo igual que en una venta. Cómo se calcula en una permuta lo tiene que confirmar un contador o el escribano.',
        ] },
        { t: 'p', html: 'No hay una cifra única para dar: depende de los valores, de si las partes son personas o empresas y de lo que pacten. Lo que sí conviene es que el valor declarado de cada inmueble sea el real.' },
      ],
    },
    {
      id: 'riesgos',
      h2: 'Riesgos de la permuta: deudas, embargos y evicción',
      blocks: [
        { t: 'p', html: 'El riesgo es recibir un inmueble con un problema que no viste. En una permuta sos comprador de lo que recibís, y tenés que revisar como comprador.' },
        { t: 'ul', items: [
          '<strong>Embargos e hipotecas:</strong> figuran en el informe del Registro. Si el otro inmueble tiene uno, se levanta antes de firmar. Cómo se hace, en <a href="/casa-embargada-se-puede-vender/">casa embargada: ¿se puede vender?</a>',
          '<strong>Deudas de impuestos, expensas y servicios:</strong> pedí los comprobantes. Está explicado en <a href="/vender-casa-con-deudas/">¿se puede vender una casa con deuda?</a>',
          '<strong>Ocupantes:</strong> visitá el inmueble y preguntá quién vive ahí y con qué contrato.',
          '<strong>Evicción:</strong> es perder el inmueble porque un tercero prueba que tenía mejor derecho. El Código protege al permutante que la sufre: puede reclamar el valor de lo que perdió, con daños, o dejar sin efecto el contrato.',
        ] },
      ],
    },
    {
      id: 'encontrar',
      h2: 'Cómo encontrar con quién permutar',
      blocks: [
        { t: 'p', html: 'Diciéndolo en tu aviso y preguntándolo en los avisos que te interesan. No hace falta que el otro haya pensado en una permuta: muchos dueños la aceptan si el inmueble que les ofrecen les sirve.' },
        { t: 'ul', items: [
          'En tu aviso: "escucho permuta" o "acepto departamento en parte de pago", y por qué zona o tipo de inmueble.',
          'Publicá igual con precio. La mayoría de los interesados va a querer comprar, y una venta también te resuelve.',
          'En los avisos que te gustan: escribile al anunciante, contale qué tenés y mandá el enlace de tu aviso.',
        ] },
        {
          t: 'casalibre',
          title: 'Publicá tu casa y decí que escuchás permuta',
          html: 'En Casa-Libre publicar es gratis y sin comisión sobre la venta. Los interesados te escriben directo por WhatsApp, y podés buscar propiedades por ciudad, tipo y en el mapa. Está en la web y en apps para iPhone y Android.',
          button: 'Publicar gratis en Casa-Libre',
          href: 'https://casa-libre.com.py/publicar',
        },
        { t: 'p', html: 'Casa-Libre no interviene en el acuerdo ni revisa los papeles: eso lo hacen las partes y el escribano. Para comparar valores, mirá las propiedades en venta en <a href="https://casa-libre.com.py/comprar">Casa-Libre</a>. La guía de <a href="https://casa-libre.com.py/guias/como-vender-mi-casa">Casa-Libre</a> para propietarios sirve también si al final decidís vender.' },
      ],
    },
  ],
  faq: [
    { q: '¿Qué es una permuta de inmuebles?', a: 'Es el contrato por el que dos partes se transfieren una a otra la propiedad de sus inmuebles. Se rige por las reglas de la compraventa y se hace por escritura pública.' },
    { q: '¿Se puede hacer una permuta de casas entre particulares?', a: 'Sí. No hace falta una inmobiliaria: hace falta que los dos estén de acuerdo en los valores y un escribano que haga la escritura y revise los papeles de los dos inmuebles.' },
    { q: 'Permuto casa por departamento: ¿quién paga la diferencia?', a: 'Quien recibe el inmueble de más valor paga la diferencia en dinero al otro. El monto, la fecha y la forma de pago se dejan escritos en la escritura.' },
    { q: '¿Quién paga la escritura en una permuta?', a: 'El Código Civil dice que los gastos de la permuta son a cargo de ambos, por partes iguales, salvo pacto en contrario. Pueden acordar otro reparto y dejarlo escrito.' },
    { q: '¿Puedo cambiar casa por terreno si mi casa tiene deudas?', a: 'Sí, pero las deudas que frenan una escritura, como el impuesto inmobiliario, hay que cancelarlas antes de firmar. Podés usar la diferencia en dinero que recibas, si la hay, para ponerte al día.' },
  ],
  sources: [
    { label: 'Código Civil paraguayo (Ley 1183/85), arts. 799 a 802: de la permuta', detail: 'Definición, gastos por mitades y aplicación de las reglas de la compraventa.' },
    { label: 'Código Civil paraguayo (Ley 1183/85), arts. 700, 701 y 756', detail: 'Escritura pública, contrato privado previo y precio parte en dinero y parte en otro bien.' },
    { label: 'Ley 125/91, régimen tributario: impuesto inmobiliario', detail: 'Certificado de no adeudar impuesto inmobiliario para cada inmueble.' },
    { label: 'Dirección General de los Registros Públicos', detail: 'Informes de dominio e inscripción de las dos transferencias.' },
  ],
  internalSources: [
    { label: 'Código Civil, Libro III, arts. 700, 701, 756, 799-802, 1779', url: 'https://www.bacn.gov.py/leyes-paraguayas/522/', date: '2026-11-15', note: 'Art. 756: permuta if the value in kind is equal or greater, sale otherwise. Art. 801: costs in halves unless agreed. Art. 800 and 1779: eviction of the permutante.' },
    { label: 'Ley 1/92 art. 42', url: 'https://www.bacn.gov.py/leyes-paraguayas/695/ley-n-1-reforma-parcial-del-codigo-civil-br', date: '2026-11-15', note: 'Both spouses for disposal of gananciales.' },
    { label: 'Tax treatment of a permuta', url: 'https://www.dnit.gov.py/web/portal-institucional/w/resolucion-general-n-42-20', date: '2026-11-15', note: 'NOT confirmed for permutas. RG 42/20 covers the escribano withholding IRP on the transfer of real estate; decrees 3107/2019 and 3182/2019 have articles on permuta that were not read. The page gives no rate.' },
    { label: 'Example amounts', url: '', date: '2026-11-15', note: 'Hypothetical.' },
  ],
  closing: {
    title: 'Empezá por mostrar lo que tenés',
    text: 'Publicá tu casa, decí que escuchás permuta y mirá qué te ofrecen. En Casa-Libre es gratis y te escriben por WhatsApp.',
    button: 'Publicar mi casa gratis',
    href: 'https://casa-libre.com.py/publicar',
  },
  related: ['necesito-vender-mi-casa-para-comprar-otra', 'casa-embargada-se-puede-vender', 'vender-casa-con-deudas'],
};
